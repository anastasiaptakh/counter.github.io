const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');

const tripTurkey = '7 Oct 2020, 06:00';

function countdown() {
    const tripDate = new Date(tripTurkey);
    const currentDate = new Date();
    

    const totalSeconds = (tripDate - currentDate)/1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600 % 24);
    const mins = Math.floor(totalSeconds/ 60 % 60);
    const seconds = Math.floor(totalSeconds) % 60;


    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minsElement.innerHTML = formatTime(mins);
    secondsElement.innerHTML = formatTime(seconds);
    
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);