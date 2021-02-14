
//recieve data from user
const tempF = parseFloat(document.getElementById('tempF').textContent);
const speed = parseFloat(document.getElementById('windSpeed').textContent);
//calculate wind chill
let chill = 35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) + (0.4274 * tempF * (speed ** 0.16));
chill = Math.round(chill);
//if temp too high or speed to low, display NA
if (tempF <= 50 && speed > 3) {
    document.getElementById("windChill").textContent = chill;
} else {
    document.getElementById("windChill").textContent = "NA"
}