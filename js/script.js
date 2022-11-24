// 
const cityInputEl = document.querySelector('.city-input');
const searchBtnEl = document.querySelector('.seacrh-btn');
const searchHistoryCon = document.querySelector('.search-history');
// const currentCityInfoEl = document.querySelector('.current-weather-info');
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

