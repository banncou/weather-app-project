function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  let monthIndex = date.getMonth();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[monthIndex];

  let number = date.getDate();

  return `${day}, ${month} ${number}, ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  return days[day];
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      let forecastDayDesc = forecastDay.weather[0].description;
      let icon = "";
      if (forecastDayDesc === "clear sky") {
        icon = `<span class="wi wi-day-sunny"></span>`;
      } else if (forecastDayDesc === "broken clouds") {
        icon = `<span class="wi wi-cloudy"></span>`;
      } else if (forecastDayDesc === "broken clouds: 51-84%") {
        icon = `<span class="wi wi-cloudy"></span>`;
      } else if (forecastDayDesc === "overcast clouds") {
        icon = `<span class="wi wi-cloudy"></span>`;
      } else if (forecastDayDesc === "overcast clouds: 85-100%") {
        icon = `<span class="wi wi-cloudy"></span>`;
      } else if (forecastDayDesc === "few clouds") {
        icon = `<span class="wi wi-day-cloudy"></span>`;
      } else if (forecastDayDesc === "few clouds: 11-25%") {
        icon = `<span class="wi wi-day-cloudy"></span>`;
      } else if (forecastDayDesc === "scattered clouds") {
        icon = `<span class="wi wi-cloud"></span>`;
      } else if (forecastDayDesc === "scattered clouds: 25-50%") {
        icon = `<span class="wi wi-cloud"></span>`;
      } else if (forecastDayDesc === "shower rain") {
        icon = `<span class="wi wi-showers"></span>`;
      } else if (forecastDayDesc === "rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "light rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "moderate rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "heavy intensity rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "very heavy rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "extreme rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "freezing rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "light intensity shower rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "shower rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "heavy intensity shower rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "ragged shower rain") {
        icon = `<span class="wi wi-day-rain"></span>`;
      } else if (forecastDayDesc === "thunderstorm") {
        icon = `<span class="wi wi-thunderstorm"></span>`;
      } else if (forecastDayDesc === "snow") {
        icon = `<span class="wi wi-snow"></span>`;
      } else if (forecastDayDesc === "rain and snow") {
        icon = `<span class="wi wi-snow"></span>`;
      } else if (forecastDayDesc === "mist") {
        icon = `<span class="wi wi-dust"></span>`;
      } else if (forecastDayDesc === "smoke") {
        icon = `<span class="wi wi-dust"></span>`;
      } else if (forecastDayDesc === "haze") {
        icon = `<span class="wi wi-dust"></span>`;
      } else if (forecastDayDesc === "sand/dust whirls") {
        icon = `<span class="wi wi-dust"></span>`;
      } else if (forecastDayDesc === "fog") {
        icon = `<span class="wi wi-dust"></span>`;
      } else if (forecastDayDesc === "sand") {
        icon = `<span class="wi wi-dust"></span>`;
      } else if (forecastDayDesc === "dust") {
        icon = `<span class="wi wi-dust"></span>`;
      } else if (forecastDayDesc === "volcanic ash") {
        icon = `<span class="wi wi-dust"></span>`;
      } else if (forecastDayDesc === "squalls") {
        icon = `<span class="wi wi-dust"></span>`;
      } else if (forecastDayDesc === "tornado") {
        icon = `<span class="wi wi-dust"></span>`;
      }

      forecastHTML =
        forecastHTML +
        `

    <div class="col-2">
      <div class="weather-forecast-date">${formatDay(forecastDay.dt)}</div>
      ${icon}
      
      <br />
      <div class="weather-forecast-temperatures">
        <span class="full-forecast-temperature-max">${Math.round(
          forecastDay.temp.max
        )}°</span>
        <span class="full-forecast-temperature-min">${Math.round(
          forecastDay.temp.min
        )}°</span>
      </div>
    </div>
  `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  celsiusTemperature = response.data.main.temp;

  document.querySelector("#temperature").innerHTML =
    Math.round(celsiusTemperature);

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

  document.querySelector("#maxTemperature").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector("#minTemperature").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#feelsLike").innerHTML = Math.round(
    response.data.main.feels_like
  );

  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  let displayWeatherCondition = response.data.weather[0].description;
  if (displayWeatherCondition === "clear sky") {
    document.querySelector("#icon").setAttribute("src", "img/sun-icon.png");
    document.querySelector("#container").classList.add("background-image-sun");
    document
      .querySelector("#container")
      .classList.remove("background-image-clouds", "background-image-rain");
  } else if (
    displayWeatherCondition === "few clouds" ||
    displayWeatherCondition === "few clouds: 11-25%"
  ) {
    document
      .querySelector("#icon")
      .setAttribute("src", "img/sun-clouds-icon.png");
    document.querySelector("#container").classList.add("background-image-sun");
    document
      .querySelector("#container")
      .classList.remove("background-image-clouds", "background-image-rain");
  } else if (
    displayWeatherCondition === "broken clouds" ||
    displayWeatherCondition === "scattered clouds" ||
    displayWeatherCondition === "scattered clouds: 25-50%" ||
    displayWeatherCondition === "broken clouds: 51-84%" ||
    displayWeatherCondition === "overcast clouds: 85-100%" ||
    displayWeatherCondition === "overcast clouds"
  ) {
    document.querySelector("#icon").setAttribute("src", "img/clouds-icon.png");
    document
      .querySelector("#container")
      .classList.add("background-image-clouds");
    document
      .querySelector("#container")
      .classList.remove("background-image-sun", "background-image-rain");
  } else if (
    displayWeatherCondition === "rain" ||
    displayWeatherCondition === "shower rain" ||
    displayWeatherCondition === "light rain" ||
    displayWeatherCondition === "moderate rain" ||
    displayWeatherCondition === "heavy intensity rain" ||
    displayWeatherCondition === "very heavy rain" ||
    displayWeatherCondition === "extreme rain" ||
    displayWeatherCondition === "freezing rain" ||
    displayWeatherCondition === "light intensity shower rain" ||
    displayWeatherCondition === "heavy intensity shower rain" ||
    displayWeatherCondition === "ragged shower rain"
  ) {
    document.querySelector("#icon").setAttribute("src", "img/rain-icon.png");
    document.querySelector("#container").classList.add("background-image-rain");
    document
      .querySelector("#container")
      .classList.remove("background-image-sun", "background-image-clouds");
  } else if (
    displayWeatherCondition === "thunderstorm" ||
    displayWeatherCondition === "thunderstorm with light rain" ||
    displayWeatherCondition === "thunderstorm with rain" ||
    displayWeatherCondition === "thunderstorm wiht heavy rain" ||
    displayWeatherCondition === "light thunderstorm" ||
    displayWeatherCondition === "heavy thunderstorm" ||
    displayWeatherCondition === "ragged thunderstorm" ||
    displayWeatherCondition === "thunderstorm with light drizzle" ||
    displayWeatherCondition === "thunderstorm wiht drizzle" ||
    displayWeatherCondition === "thunderstorm wiht heavy drizzle"
  ) {
    document
      .querySelector("#icon")
      .setAttribute("src", "img/thunder-storm-icon.png");
    document.querySelector("#container").classList.add("background-image-rain");
    document
      .querySelector("#container")
      .classList.remove("background-image-clouds", "background-image-sun");
  } else if (
    displayWeatherCondition === "light intensity drizzle" ||
    displayWeatherCondition === "drizzle" ||
    displayWeatherCondition === "heavy intensity drizzle" ||
    displayWeatherCondition === "light intensity drizzle rain" ||
    displayWeatherCondition === "drizzle rain" ||
    displayWeatherCondition === "heavy intensity drizzle rain" ||
    displayWeatherCondition === "shower rain and drizzle" ||
    displayWeatherCondition === "heavy shower rain and drizzle" ||
    displayWeatherCondition === "shower drizzle"
  ) {
    document.querySelector("#icon").setAttribute("src", "img/rain-icon.png");
    document.querySelector("#container").classList.add("background-image-rain");
    document
      .querySelector("#container")
      .classList.remove("background-image-sun", "background-image-clouds");
  } else if (
    displayWeatherCondition === "mist" ||
    displayWeatherCondition === "smoke" ||
    displayWeatherCondition === "haze" ||
    displayWeatherCondition === "sand/dust whirls" ||
    displayWeatherCondition === "fog" ||
    displayWeatherCondition === "sand" ||
    displayWeatherCondition === "dust" ||
    displayWeatherCondition === "volcanic ash" ||
    displayWeatherCondition === "squalls"
  ) {
    document.querySelector("#icon").setAttribute("src", "img/mist-icon.png");
    document.querySelector("#container").classList.add("background-image-rain");
    document
      .querySelector("#container")
      .classList.remove("background-image-sun", "background-image-clouds");
  }
  getForecast(response.data.coord);
}

function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function convertToCelsius(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

let celsiusTemperature = null;

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Toronto");
