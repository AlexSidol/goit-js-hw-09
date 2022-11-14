import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputRef = document.querySelector('#datetime-picker');
const StartBtnRef = document.querySelector('button[data-start]');
const timerBlockRef = document.querySelector('.timer');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');
const digitalRefs = document.querySelectorAll('.field');


inputRef.style.fontSize = "18px";
StartBtnRef.style.fontSize = "18px";
StartBtnRef.style.paddingLeft = "9px";
StartBtnRef.style.paddingRight = "9px";
inputRef.style.backgroundColor = 'PeachPuff';
timerBlockRef.style.display = 'flex';


digitalRefs.forEach(digitalRef => {
    digitalRef.style.display = 'flex';
    digitalRef.style.textAlign = "center";
    digitalRef.style.fontSize = "16px";
    digitalRef.style.fontWeight  = "bold";
    digitalRef.style.flexDirection = 'column';
    digitalRef.style.backgroundColor = "LightPink";
    digitalRef.style.padding = "11px";
    
})


StartBtnRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
        return Notiflix.Notify.failure('Please choose a date in the future');
            StartBtnRef.disabled = true;
            // console.log(selectedDates[0]);
        }
    StartBtnRef.disabled = false;
    
  },
};

flatpickr(inputRef, options);



StartBtnRef.addEventListener('click', startTimer);

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }


function startTimer() {
    setInterval(() => {
        let reverse = new Date(inputRef.value) - new Date();
        
        if (reverse > 0) {
            StartBtnRef.disabled = true;
            let objectTime = convertMs(reverse);
            daysRef.textContent = addLeadingZero(objectTime.days);
            hoursRef.textContent = addLeadingZero(objectTime.hours);
            minutesRef.textContent = addLeadingZero(objectTime.minutes);
            secondsRef.textContent = addLeadingZero(objectTime.seconds);
        }
    }, 1000
    )
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

