const startEl = document.querySelector('[data-start]');
const stopEl = document.querySelector('[data-stop]');

startEl.addEventListener('click', onStartClick);
stopEl.addEventListener('click', onStopClick);

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

function onStartClick () {
   timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    startEl.disabled = true;
    stopEl.disabled = false;
}
 function onStopClick () {
clearInterval(timerId);
startEl.disabled = false;
stopEl.disabled = true;
 }
