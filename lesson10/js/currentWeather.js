const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=9e918bd1e21cabf7a4c4b3edec366c4f"
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-sky').textContent = jsObject.weather[0].main;
    document.getElementById('current-high').textContent = jsObject.main.temp_max;
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    document.getElementById('current-low').textContent = jsObject.main.temp_min;
    document.getElementById('current-humidity').textContent = jsObject.main.humidity;
    document.getElementById('current-windSpeed').textContent = jsObject.wind.speed;
})