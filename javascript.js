/**
 * Created by Gintarė on 2017-07-28.
 */
var day = new Date("Dec 25, 2017").getTime();
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = day - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("christmas").innerHTML = days + " days left until Christmas.";
}, 1000);
// Set day
// Update the count down every 1 second (setInterval - 1000)
// Get todays date and time
// Find the distance between now an the count down date
// Time calculations for days