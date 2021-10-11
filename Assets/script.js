apiLinkFormat = "api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&units=imperial&appid=7aa6a99f3c6b2918ed1aa6023a5c4fdd"

apiLink = "https://api.openweathermap.org/data/2.5/forecast?q=Toledo&units=imperial&cnt=7&appid=7aa6a99f3c6b2918ed1aa6023a5c4fdd"

fetch(apiLink)
    .then(response => response.json())
    .then(data => console.log(data));