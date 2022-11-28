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

let formSubmitHandler = function (event) {
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

    weatherCoordsApi = weatherCoordsApi +
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

        let weatherForecastApi = 'https://api.openweathermap.org/data/2.5/forecast';

        weatherForecastApi = weatherForecastApi +
        '?lat=' +
        latitude +
        '&lon=' +
        longitude +
        '&appid=' +
        key;

        const todayDate = dayjs().format('MM/DD/YYYY');

        currentCityEl.textContent = cityName + ' ' + todayDate;

        fetch(weatherForecastApi)
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
            let todayWeather = response.list[0];
            let temp = todayWeather.main.temp;
            let humidity = todayWeather.main.humidity;
            let wind = todayWeather.wind.speed;
            let iconUrl =
              'http://openweathermap.org/img/wn/' +
              todayWeather.weather[0].icon +
              '@2x.png';

            let iconElm = document.createElement('img');

            iconElm.setAttribute('src', iconUrl);
            currentCityEl.append(iconElm);
            currentTempEl.textContent = 'Temp: ' + temp;
            currentWindEl.textContent = 'Wind: ' + wind;
            currentHumidityEl.textContent = 'Humidity: ' + humidity;

            document.querySelector('.forecast-info-cards').innerHTML = '';

            for (let i = 5; i < response.list.length; i += 7) {
                const forecastDates = new Date(response.list[i].dt * 1000);

                const forecastDay = forecastDates.getDate();
                const forecastMonth = forecastDates.getMonth();
                const forecastYear = forecastDates.getFullYear();

                let divCard = document.createElement('div');
                divCard.setAttribute('class', `cards`);

                let forecastDateElm = document.createElement('h3');
                forecastDateElm.setAttribute ('class', `day`);
            }

            
        });

    });
};

