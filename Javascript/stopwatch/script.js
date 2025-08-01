// initial timer values
let timer;
let [hours, min, sec, millisec] = [0, 0, 0, 0];
console.log(hours);
let isRunning = false;

// get all the elements to add functionalities
let display = document.querySelector(".display");
let startBtn = document.querySelector(".start-btn");
let stopBtn = document.querySelector(".stop-btn");
let ResetBtn = document.querySelector(".reset-btn");

// adding events to each elements
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
ResetBtn.addEventListener("click", resetTimer);

// function for Starting the time
function startTimer() {
    if(!isRunning){//temporily making is running true to start the timer
        isRunning=true
       timer=setInterval(updateTimer,10)
    }
}
// function for Stoping the time
function stopTimer() {
    if(isRunning){
        isRunning=false
        clearInterval(timer)
    }
}
// function for reset the time
function resetTimer() {
    clearInterval(timer);
    [hours, min, sec, millisec] = [0, 0, 0, 0];
}
// function to update the Timer value(calculate time)
function updateTimer() {
  millisec = millisec + 10;
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
  updateDisplay()
}
//function to update the Display 0-9 ===> 01 02 -09
function updateDisplay() {
    display.textContent=`${hours}:${min}:${sec}:${millisec}`
}
