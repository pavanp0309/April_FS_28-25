// initial timer values
let timer;
let [hours, min, sec, millisec] = [0, 0, 0, 0];
let isRunning = false;

// get all the elements to add functionalities
let display = document.querySelector(".display");
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let resetBtn = document.querySelector(".reset-btn");

// adding events to each button
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// function to start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 10); // update every 10ms
    }
}

// function to stop the timer
function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

// function to reset the timer
function resetTimer() {
    clearInterval(timer);
    [hours, min, sec, millisec] = [0, 0, 0, 0];
    isRunning = false;
    updateDisplay(); 
}

// function to update the time values
function updateTimer() {
    millisec += 10;
    if (millisec >= 1000) {
        millisec = 0;
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
            if (min >= 60) {
                min = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

// function to update the display with zero-padded values
function updateDisplay() {
    display.textContent =
        `${pad(hours)}:${pad(min)}:${pad(sec)}.${padMilli(millisec)}`;
}

// helper function to pad numbers < 10 with leading 0
function pad(unit) {
    return unit < 10 ? "0" + unit : unit;
}

// helper to pad milliseconds to 3 digits
function padMilli(ms) {
    if (ms < 10) return "00" + ms;
    if (ms < 100) return "0" + ms;
    return ms;
}
