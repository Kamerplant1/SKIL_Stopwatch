const StartButton = document.getElementById("js--start");
const stopButton = document.getElementById("js--stop");
const resetButton = document.getElementById("js--reset");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let running = false;

const msTimer = document.getElementById("js--msTimer");
const secondsTimer = document.getElementById("js--secondsTimer");
const minutesTimer = document.getElementById("js--minutesTimer");

let timer;

StartButton.onclick = function () {
    if (running) return;
    running = true;

    timer = setInterval(function () {
        milliseconds += 10;

        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds += 1;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes += 1;
        }

        msTimer.innerText = milliseconds.toString().padStart(2, "0");
        secondsTimer.innerText = seconds.toString().padStart(2, "0");
        minutesTimer.innerText = minutes.toString().padStart(2, "0");
    }, 10);
};

stopButton.onclick = function () {
    clearInterval(timer);
    running = false;
};

resetButton.onclick = function () {
    clearInterval(timer);
    running = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    msTimer.innerText = "00";
    secondsTimer.innerText = "00";
    minutesTimer.innerText = "00";
};

//slider begin
const rangeValue = document.getElementById("js--rangeValue");
const slider = document.getElementById("js--slider");
const body = document.getElementById("js--body");
slider.value = "2";
rangeValue.innerText = slider.value + "x";

slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
}

const paragraph = document.getElementById("js--text");
const img = document.getElementById("js--image");

let data = fetch("./data.json").then(
    function(binnenGekomenData){
        return binnenGekomenData.json();
    }).then(
        function(echteData){
            paragraph.innerHTML = echteData.text;
            img.src = echteData.img;
        }
);
