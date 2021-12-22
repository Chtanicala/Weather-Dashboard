// Search Elements
let searchEl = document.getElementById("city")
let searchEl = document.getElementById("state")
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

// API
let apiLinkFormat = "api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&units=imperial&appid=7aa6a99f3c6b2918ed1aa6023a5c4fdd"


let searchResult = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchEl.value},US&units=imperial&cnt=7&appid=7aa6a99f3c6b2918ed1aa6023a5c4fdd`)
    .then(response => response.json())

    .then(function (data) {
        console.log(data);
        displayWeather(data);
    })
    .catch((error) => {
        console.log("FETCH ERROR", error)
    })
}

let displayWeather = (data) => {
    data.list
}

searchBtn.addEventListener("click", searchResult)



// fetch(apiLink)
//     .then(response => response.json())
//     .then(data => console.log(data));
    // .then(weather => showWeather(weather.results));

// showWeather() = weather => {
//     const currentDayDiv = document.querySelector("#current-day");

//     const cityElement = document.createElement('h2');
//     cityElement.innerText = 
// }

