const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector(`body`);
let intervalId;

stopBtn.disabled = true;

startBtn.addEventListener(`click`, startChangeColor);
stopBtn.addEventListener(`click`, stopChangeColor);

function changeColor() {
    const randomHexColor = getRandomHexColor();
    body.style.backgroundColor = randomHexColor;
};

function startChangeColor() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(changeColor, 1000);
};

function stopChangeColor() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(intervalId);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

