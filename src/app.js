function searchCity(event) {
    event.preventDefault();
}

let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", searchCity);



function displayTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureValue = document.querySelector("#temperature-value");
    temperatureValue.innerHTML = temperature;
}

const apiKey = "7654bb3646824703bcfdf4ced8409f03";
let city = "Chania";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
