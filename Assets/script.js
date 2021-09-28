apiLink = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,hourly,alerts&units=imperial&appid=7aa6a99f3c6b2918ed1aa6023a5c4fdd"

currentAPI = "api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}"

fetch(apiLink)
    .then(response => response.json())
    .then(data => console.log(data));