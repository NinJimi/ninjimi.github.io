const today = new Date();
const dayNumber = today.getDay();
if (dayNumber == 5) {
    document.getElementById("fri_message").classList.add("showme");
} else {
    document.getElementById("fri_message").classList.add("hideme");
}