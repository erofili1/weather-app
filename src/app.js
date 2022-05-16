

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
    windElement.innerHTML = (Math.round(response.data.wind.speed));
    countryElement.innerHTML = response.data.sys.country;

}


function search(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#text-search-input");
    let cityName = document.querySelector("#city");
    cityName.innerHTML = searchInput.value;

    
    
}


let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let city = "Chania";
let apiKey = "7654bb3646824703bcfdf4ced8409f03";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);