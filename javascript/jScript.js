var date = document.lastModified
document.getElementById('modified').innerHTML = "Last updated: " + date;

var today = new Date();
var year = today.getFullYear();
document.getElementById('year').innerHTML = year;

WebFont.load({
    google: {
        families: [
            'Oswald'
        ]
    }
});
