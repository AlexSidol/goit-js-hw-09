import throttle from 'lodash.throttle';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const bodyRef = document.querySelector('body');
console.log(bodyRef);

// bodyRef.style.display = flex;
// startBtn.style.

stopBtn.disabled = true;

bodyRef.style.backgroundColor = getRandomHexColor();

let timerId = null;


startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
    timerId = setInterval(() => {
    bodyRef.style.backgroundColor=getRandomHexColor();
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  startBtn.disabled = false;
    stopBtn.disabled = true;
});

