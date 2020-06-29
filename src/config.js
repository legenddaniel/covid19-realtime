// Remove it from .gitignore before final push

const urlWorld = process.env.REACT_APP_WORLD_URL;
const urlList = process.env.REACT_APP_LIST_URL;
const urlCountry = process.env.REACT_APP_COUNTRY_URL;
const host = process.env.REACT_APP_HOST;
const key = process.env.REACT_APP_KEY;

export const fetchWorld = {
    url: urlWorld,
    option: {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": host,
            "x-rapidapi-key": key
        }
    }
};

export const fetchCountryList = {
    url: urlList,
    option: {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": host,
            "x-rapidapi-key": key
        }
    }
};

export const fetchCountry = {
    url: urlCountry,
    option: {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": host,
            "x-rapidapi-key": key
        }
    }
};