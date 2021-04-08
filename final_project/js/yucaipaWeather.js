const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5411046&units=imperial&appid=9e918bd1e21cabf7a4c4b3edec366c4f"
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

const fiveDay = "https://api.openweathermap.org/data/2.5/forecast?id=5411046&units=imperial&appid=9e918bd1e21cabf7a4c4b3edec366c4f"
fetch(fiveDay)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    let forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    console.log(forecast);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    for (let day = 0; day < forecast.length; day++){
        const d = new Date(forecast[day].dt_txt);
        const imagesrc = 'https://openweathermap.org/img/w/' + forecast[day].weather[0].icon + '.png';
        const desc = forecast[day].weather[0].description;
        document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`temp${day+1}`).textContent = forecast[day].main.temp;
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
    }
})