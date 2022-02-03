const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=5c5f7b8ccc863b4e1098dcdb192b23b7&units=metric";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "The weather is " +
          body.weather[0].description +
          ". It is currently " +
          body.main.temp +
          " degress out. But it feels more like "+ body.main.feels_like +". There is a " +
          body.main.humidity +
          "% of humidity. "
      );
    }
  });
};

module.exports = forecast;
