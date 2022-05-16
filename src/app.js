

function displayTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureValue = document.querySelector("#temperature-value");
    temperatureValue.innerHTML = temperature;
}


function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#text-search-input");
    let cityName = document.querySelector("#display-city-name");
    cityName.innerHTML = searchInput.value;

    let apiKey = "7654bb3646824703bcfdf4ced8409f03";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}




let form = document.querySelector("#search-form");
form.addEventListener("submit", search);