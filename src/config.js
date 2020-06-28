// This will increase API usage (up to 50k)
export const apiInfo = {
    url: process.env.REACT_APP_WORLD_URL,
    option: {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": process.env.REACT_APP_WORLD_HOST,
            "x-rapidapi-key": process.env.REACT_APP_WORLD_KEY
        }
    }
};