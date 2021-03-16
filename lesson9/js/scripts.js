/* Toggle Menu Script */
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
const today = new Date();
const dayNumber = today.getDay();
if (dayNumber == 5) {
    document.getElementById("fri_message").classList.add("showme");
} else {
    document.getElementById("fri_message").classList.add("hideme");
}
/* Current Date Script*/
var now = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"]
var output = weekday[now.getDay()] + ", " + now.getDate() + " " + monthName[now.getMonth()] + " " + now.getFullYear() + "."
document.getElementById("fullDate").innerHTML = output;
