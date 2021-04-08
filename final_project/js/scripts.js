/* Toggle Menu Script */
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
/* Current Date Script*/
var now = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"]
var output = weekday[now.getDay()] + ", " + now.getDate() + " " + monthName[now.getMonth()] + " " + now.getFullYear() + "."
document.getElementById("fullDate").innerHTML = output;

/* Toggle Directory View */
function togglegridView(){
    document.getElementById("card_info").classList.replace("list", "grid");
}
function togglelistView(){
    document.getElementById("card_info").classList.replace("grid", "list");
}
