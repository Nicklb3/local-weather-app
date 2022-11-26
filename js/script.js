// 
const cityInputEl = document.querySelector('.city-input');
const searchBtnEl = document.querySelector('.seacrh-btn');
const searchHistoryCon = document.querySelector('.search-history');
// const currentCityInfoEl = document.querySelector('#current-info');
const currentCityEl = document.querySelector('#current-city');
const currentDayEl = document.querySelector('#current-day');
const currentTempEl = document.querySelector('#current-temp');
const currentWindEl = document.querySelector('#current-wind');
const currentHumidityEl = document.querySelector('#current-himidity');

let formSubmitHander = function (event) {
    event.preventDefault();

    let cityInput = cityInputEl.value.trim();

    if (cityInput) {
        cityResults(cityInput);

        currentCityEl.value = '';
    } else {
        currentCityEl.textContent = '';
        alert ('Please enter a City');
    }
};

let cityResults = function (searchTerm) {
    let userSearch = searchTerm || cityInputEl.value;

    let weatherCoordsApi = 'https://api.openweathermap.org/geo/1.0/direct';
  weatherCoordsApi =
    weatherCoordsApi +
    '?q=' +
    userSearch +
    '&limit=&appid=f3dd875ac81e50aaada068245357b0ee';

    fetch(weatherCoordsApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
        let city = response[0];
        let cityName = city.name;
        let latitude = city.lat;
        let longitude = city.lon;

        const key = 'f3dd875ac81e50aaada068245357b0ee&units=imperial';

        let weatherForecastApi =
        'https://api.openweathermap.org/data/2.5/forecast';
      weatherForecastApi =
        weatherForecastApi +
        '?lat=' +
        latitude +
        '&lon=' +
        longitude +
        '&appid=' +
        key;

    });
};

