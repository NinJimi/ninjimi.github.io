const today = new Date();
const dayNumber = today.getDay();
if (dayNumber == 4) {
    document.getElementById("thurs_message").classList.add("showme");
} else {
    document.getElementById("thurs_message").classList.add("hideme");
}

const events = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(events)
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);
    const towns = jsObject['towns']
    if (document.URL.includes('preston.html')){
        document.getElementById(`events${+1}`).textContent = towns[6].events[0];
        document.getElementById(`events${+2}`).textContent = towns[6].events[1];
        document.getElementById(`events${+3}`).textContent = towns[6].events[2];
    } if (document.URL.includes('fishhaven.html')) {
        document.getElementById(`events${+1}`).textContent = towns[2].events[0];
        document.getElementById(`events${+2}`).textContent = towns[2].events[1];
        document.getElementById(`events${+3}`).textContent = towns[2].events[2];
        document.getElementById(`events${+4}`).textContent = towns[2].events[3];
    } if (document.URL.includes('sodasprings.html')) {
        document.getElementById(`events${+1}`).textContent = towns[0].events[0];
        document.getElementById(`events${+2}`).textContent = towns[0].events[1];
        document.getElementById(`events${+3}`).textContent = towns[0].events[2];
    }
});