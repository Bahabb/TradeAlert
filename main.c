#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <curl/curl.h>

static void cleanup_all(CURL *handle, struct curl_slist *headers);
static struct tm* get_current_time(void);
static char* create_json_payload(const char* message);

int main(void) {
    int exit = 0;
    while (!exit) { 
        CURL* curl;
        CURLcode result;

        const char *url = "http://localhost:5000/api/bot/alert"; // URL to send the POST request to
        char *json_data = create_json_payload("This timestamp was automatically grabbed. This is an alert from CBOT"); // create JSON payload
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

        curl_easy_setopt(curl, CURLOPT_URL, url); // we set the URL option
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

static char* create_json_payload(const char* message) {
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