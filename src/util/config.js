const host = "covid-19-data.p.rapidapi.com";
const key = process.env.REACT_APP_KEY;

const urlWorld = `https://${host}/totals?format=json`;
const urlList = `https://${host}/help/countries?format=json`;
const urlCountry = `https://${host}/country?format=json&name=`;

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