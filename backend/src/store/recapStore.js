let latestRecap = null;

export const setLatestRecap = (recap) => {
    latestRecap = recap;
};

export const getLatestRecap = () => {
    return latestRecap;
}