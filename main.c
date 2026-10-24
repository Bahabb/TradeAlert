#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <curl/curl.h>

static void cleanup_all(CURL *handle, struct curl_slist *headers);
static struct tm* get_current_time(void);
static char* create_json_alert(const char* message);
static char* create_json_recap(void);

int main(void) {
    int exit = 0;

    const char *url_alert = "http://localhost:5000/api/bot/alert";
    const char* url_recap = "http://localhost:5000/api/bot/recap"; // URL to send the POST request to

    while (!exit) { 
        CURL* curl;
        CURLcode result;

        // char *json_data = create_json_alert("This timestamp was automatically grabbed. This is an alert from CBOT"); // ALERT_ITEM
        char *json_data = create_json_recap();

        if (!json_data) {
            fprintf(stderr, "Failed to create JSON recap payload\n");
            return -1;
        }

        struct curl_slist *headers = NULL; // list to hold custom headers

        curl_global_init(CURL_GLOBAL_DEFAULT); // global initialization of curl

        curl = curl_easy_init(); // handle initialization to manage the request
        if (!curl) {
            fprintf(stderr, "Failed to initialize curl\n");
            curl_global_cleanup(); 
            return -1;
        }

        headers = curl_slist_append(headers, "Content-Type: application/json"); // add custom header for JSON content
        headers = curl_slist_append(headers, "Accept: application/json"); // add custom header for accepting JSON response

        curl_easy_setopt(curl, CURLOPT_URL, url_recap); // we set the URL option
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, json_data); // we set the POST data
        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers); // we set the custom headers
        
        result = curl_easy_perform(curl); // perform the request
        free(json_data); // free the allocated JSON payload memory
        
        if (result != CURLE_OK) {
            fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(result));
            cleanup_all(curl, headers); 
            return -1;
        }


        cleanup_all(curl, headers); // cleanup resources

        printf("\nType '1' to exit, '0' to continue: \n"); 
        scanf("%d", &exit);
    }
    return 0;
}

void cleanup_all(CURL* handle, struct curl_slist* headers) {
    curl_slist_free_all(headers); // free the custom headers list
    curl_easy_cleanup(handle); // cleanup the handle
    curl_global_cleanup(); 
}

static struct tm* get_current_time(void)
{
    time_t now = time(NULL);
    struct tm *current_time;
    if (now == (time_t)-1) {        fprintf(stderr, "Could not get current time\n");        return NULL;    }
    current_time = localtime(&now);
    if (current_time == NULL) {        fprintf(stderr, "Could not convert current time\n");        return NULL;    }
    return current_time;
}

static char* create_json_alert(const char* message) {
    char* json_payload = NULL;
    json_payload = malloc(256); 
    if (!json_payload) {
        fprintf(stderr, "Failed to allocate memory for JSON payload\n");
        return NULL;
    }

    struct tm* current_time = get_current_time();
    if (!current_time) {
        fprintf(stderr, "Failed to get current time for JSON payload\n");
        return NULL;
    }

    // Populate the JSON payload
    snprintf(json_payload, 256, "{\"timestamp\": \"%04d-%02d-%02dT%02d:%02d:%02dZ\", \"message\": \"%s\"}", 
             current_time->tm_year + 1900, current_time->tm_mon + 1, current_time->tm_mday,
             current_time->tm_hour, current_time->tm_min, current_time->tm_sec, message);

    return json_payload;
}


static char* create_json_recap(void) {
    size_t buffer_size = 2048;
    char* json_payload = malloc(buffer_size);
    if (!json_payload) {
        fprintf(stderr, "Failed to allocate memory for MarketRecap JSON payload\n");
        return NULL;
    }

    // Constructing the JSON string adhering strictly to MarketRecapSchema field names and types
    snprintf(json_payload, buffer_size,
        "{"
          "\"dailyBias\": {"
            "\"direction\": \"bullish\","
            "\"strength\": \"strong\""
          "},"
          "\"activeSession\": \"London\","
          "\"nextKillZone\": \"New York\","
          "\"marketSequence\": ["
            "{"
              "\"price\": 1.0850,"
              "\"type\": \"HH\","
              "\"isSwept\": false"
            "}"
          "],"
          "\"dealingRange\": {"
            "\"premium\": 1.0900,"
            "\"equilibrium\": 1.0800,"
            "\"discount\": 1.0700,"
            "\"currentPositionPercentage\": 65.5,"
            "\"summary\": \"Price is currently in the premium zone\""
          "},"
          "\"keyLevels\": {"
            "\"priorWeekHigh\": 1.0950,"
            "\"priorDayHigh\": 1.0880,"
            "\"equilibrium\": 1.0800,"
            "\"priorDayLow\": 1.0720,"
            "\"priorWeekLow\": 1.0650"
          "},"
          "\"drawOnLiquidity\": {"
            "\"targetName\": \"Buy Side Liquidity\","
            "\"price\": 1.0920,"
            "\"status\": \"ABOVE\""
          "},"
          "\"previousCandle\": {"
            "\"direction\": \"BULL\","
            "\"open\": 1.0780,"
            "\"high\": 1.0840,"
            "\"low\": 1.0770,"
            "\"close\": 1.0830"
          "},"
          "\"fairValueGaps\": ["
            "{"
              "\"type\": \"BULL\","
              "\"low\": 1.0800,"
              "\"high\": 1.0820,"
              "\"status\": \"OPEN\""
            "}"
          "],"
          "\"orderBlocks\": ["
            "{"
              "\"type\": \"BULL\","
              "\"low\": 1.0750,"
              "\"high\": 1.0770,"
              "\"status\": \"active\""
            "}"
          "],"
          "\"liquidityPools\": ["
            "{"
              "\"name\": \"Asian High\","
              "\"price\": 1.0860,"
              "\"status\": \"TARGET\""
            "}"
          "],"
          "\"confluenceMatrix\": {"
            "\"score\": 4,"
            "\"maxScore\": 5,"
            "\"rating\": \"HIGH\""
          "}"
        "}"
    );

    return json_payload;
}