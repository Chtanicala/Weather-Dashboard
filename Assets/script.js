// Search Elements
let searchEl = document.getElementById("searchInput")
let searchBtn = document.getElementById("searchBtn")
// Current Day Elements
let currentCityEl = document.getElementById("city-current")
let currentTempEl = document.getElementById("temp-current")
let currentWindEl = document.getElementById("wind-current")
let currentHumidityEl = document.getElementById("humidity-current")
let currentUvEl = document.getElementById("uv-current")
//Day + 1 Elements 
//Day + 2 Elements 
//Day + 3 Elements 
//Day + 4 Elements 
//Day + 5 Elements 

let searchResult = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchEl.value},US&units=imperial&cnt=7&appid=7aa6a99f3c6b2918ed1aa6023a5c4fdd`)
    .then(response => response.json())
    .then(data => console.log(data));
}

searchBtn.addEventListener("click", searchResult)

let apiLinkFormat = "api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&units=imperial&appid=7aa6a99f3c6b2918ed1aa6023a5c4fdd"

// fetch(apiLink)
//     .then(response => response.json())
//     .then(data => console.log(data));
    // .then(weather => showWeather(weather.results));

// showWeather() = weather => {
//     const currentDayDiv = document.querySelector("#current-day");

//     const cityElement = document.createElement('h2');
//     cityElement.innerText = 
// }

