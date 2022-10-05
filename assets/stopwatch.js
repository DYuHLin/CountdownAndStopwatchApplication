const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let secondss = 0;
let intervals = null;

//event listeners

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

//function update
function timer() {
    secondss ++;

    //format
    let hrs = Math.floor(secondss / 3600);
    let mins = Math.floor((secondss - (hrs * 3600)) / 60);
    let secs = secondss % 60;

    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = '0' + mins;
    if(hrs < 10) hrs = '0' + hrs;

    time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start() {
    if(intervals) {
        return
    }

    intervals = setInterval(timer, 1000);
}

function stop(){
    clearInterval(intervals);
    intervals = null;
} 

function reset () {
    stop();
    secondss = 0;
    time_el.innerText = "00:00:00";
}