// Search Elements
let cityEl = document.getElementById("city").value
let stateEl = document.getElementById("state").value
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

// Function to search for a city and state based on user input
let searchResult = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityEl},${stateEl}US&units=imperial&cnt=7&appid=7aa6a99f3c6b2918ed1aa6023a5c4fdd`)
    .then(response => response.json())

    .then(function getData(data) {
        console.log(data);

        displayWeather(data)
        
        let historyBtnEl = `
        <div>
            <button type="button" id="historyBtn" class="button">${cityEl},${stateEl}</button>
        </div>
        `

        $(historyBtnEl).appendTo("#history")

        localStorage.setItem("searched" + localStorage.length, [cityEl, stateEl])
        
    })

    .catch((error) => {
        console.log("FETCH ERROR", error)
    })
}

let displayWeather = (data) => {

    let currentDay = `
        <div class="container col-3" id="current-day">
            
            <h2 id="city-current">${data.city.name} (${data.list[0].dt_txt})</h2>
            <ol>
            <li id="temp-current">Tempature: ${data.list[0].main.temp} °F</li>
            
            <li id="wind-current">Wind Speed: ${data.list[0].wind.speed} mph</li>
            
            <li id="humidity-current">Humidity Level: ${data.list[0].main.humidity}%</li>
            </ol>
        </div>
    `

    let futureDayOne = `
            <div class="container row col-12" id="forecast">
                <div class="col-2 card forecast-day">
                <h4 id="date-1">${data.list[1].dt_txt}</h4>
                <ol>
                    <li id="temp-1">Tempature: ${data.list[1].main.temp} F</li>
                    
                    <li id="wind-1">Wind Speed: ${data.list[1].wind.speed} mph </li>
                    
                    <li id="humidity-1">Humidity Level: ${data.list[1].main.humidity}%</li>
                </ol>
            </div>
            `


    $("#contentRemoval").empty()
    $(currentDay).appendTo("#contentRemoval")
    $(futureDayOne).insertAfter("#current-day")
}

let displaySearchHistory = () => {
    for (let i = 0; i < localStorage.length; i++) {
        let historyBtnEl = `
        <div>
            <button type="button" id="historyBtn" class="button">${cityEl},${stateEl}</button>
        </div>
        `

        $(historyBtnEl).appendTo("#history")
    }
}


// When the search button is clicke it submits the data to the search function to search for city/state
searchBtn.addEventListener("click", searchResult)
document.addEventListener("DOMContentLoaded", displaySearchHistory)