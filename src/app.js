function refreshWeather(cityName) {
  let apiKey = "7654bb3646824703bcfdf4ced8409f03";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature).catch(displayError);
}

function displayError(error) {
  console.log(error);
  let errorMessage = document.querySelector("#city");
  let countryElement = document.querySelector("#country");
  let temperatureElement = document.querySelector("#temperature");
  let dateTimeElement = document.querySelector("#date-time");
  let iconElement = document.querySelector("#icon");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  countryElement.innerHTML = "";
  errorMessage.innerHTML = error.response.data.message;
  descriptionElement.innerHTML = "";
  humidityElement.innerHTML = "-";
  windElement.innerHTML = "-";
  temperatureElement.innerHTML = "";
  dateTimeElement.innerHTML = "";
  iconElement.innerHTML = "";
}

function displayForecast() {
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = `<div class="row">`;
  let days = ["Thu", "Fri", "Sat", "Sun", "Mon"];

  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `<div class="col-2">
              <div class="forecast-days">
                <h5 id="forecast-day-1">${day}</h5>
              </div>
              <div class="forecast-icon">
                <img src="Images/sunny.png" alt="" width="40">
              </div>
              <div class="forecast-temp">
                <span class="forecast-temperature-min">14°</span><span class="forecast-temperature-max"> 19°</span>
              </div>
              </div>`;
  });

  forecastHTML = forecastHTML + `</div>`;

  forecastElement.innerHTML = forecastHTML;
}

function displayTemperature(response) {
  console.log(response.data);

  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let countryElement = document.querySelector("#country");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  countryElement.innerHTML = response.data.sys.country;

  let iconElement = document.querySelector("#icon");

  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  function celsiusToFahr(event) {
    event.preventDefault();
    celsiusLink.classList.remove("active");
    fahrLink.classList.add("active");
    temperatureElement.innerHTML = Math.round((celsiusTemp * 9) / 5 + 32);
  }

  function fahrToCelsius(event) {
    event.preventDefault();
    fahrLink.classList.remove("active");
    celsiusLink.classList.add("active");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
  }

  let celsiusTemp = parseInt(response.data.main.temp);
  let fahrLink = document.querySelector("#fahr");
  fahrLink.addEventListener("click", celsiusToFahr);
  let celsiusLink = document.querySelector("#celsius");
  celsiusLink.addEventListener("click", fahrToCelsius);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  if (searchInput.value === "") {
    return alert("Please type a city to see the weather information 🌡️");
  }
  refreshWeather(searchInput.value);
}

refreshWeather("Heraklion");
displayForecast();

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let now = new Date();
let year = now.getFullYear();
let day = weekdays[now.getDay()];
let date = now.getDate();
let month = now.getMonth();
let hour = now.getHours();
let minutes = now.getMinutes().toString().padStart(2, "0");

let currentDateTime = document.querySelector("#date-time");
currentDateTime.innerHTML = `${day} ${hour}:${minutes}`;
//${date}/${month}/${year}`;
