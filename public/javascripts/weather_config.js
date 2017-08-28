var config = {
    // forecast.io
    forecast: {
        key: "09910701af780026b2739b09b474e0ad", // Your forecast.io api key
        units: "auto", // See forecast.io documentation if you are getting the wrong units
        refreshInterval: 2, // Number of minutes the information is refreshed. Forecast.io limits requests to 1000/day: a 2min interval = 720 calls/day
    }
};