let nanoSec = 0;
let secCount = 0;
let minCount = 0;
let hourCount = 0;
let display = 0;
function timeCount() {
    nanoSec++;
    display = `${hourCount}h  :${minCount}m  :${secCount}s  :${nanoSec}s`
    document.querySelector('h1').innerHTML = display;
    if (nanoSec % 100 == 0) {
        nanoSec = 0;
        secCount++;
        display = `${hourCount}h  :${minCount}m  :${secCount}s  :${nanoSec}s`

        document.querySelector('h1').innerHTML = display;

        if (nanoSec % 100 == 0 && secCount % 60 == 0) {
            secCount = 0;
            minCount++ 
            display = `${hourCount}h  :${minCount}m  :${secCount}s  :${nanoSec}s`

            document.querySelector('h1').innerHTML = display;

        }
    }
}
function start() {
    pause = setInterval(timeCount, 10);
}
function stop() {
    clearInterval(pause)
}
function reset() {
    clearInterval(pause)
    nanoSec = 0;
    secCount = 0;
    minCount = 0;
    hourCount = 0;
    display = 0;
    display = `${hourCount} ${minCount} ${secCount} ${nanoSec}`
    document.querySelector('h1').innerHTML = display;
}