import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

const btnEl = document.querySelector('[data-start]');
const dayEl = document.querySelector('[data-days]');
const hourEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secEl = document.querySelector('[data-seconds]');
const datePicker = document.querySelector('#datetime-picker')

btnEl.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
        btnEl.disabled = true;
        window.alert("Please choose a date in the future!");
        } else
        btnEl.disabled = false;
      console.log(selectedDates[0]);
    },
  };

flatpickr("input#datetime-picker", options);

let timerId = null;

btnEl.addEventListener('click', onClick)

function onClick() {
    btnEl.disabled = true;
    timerId = setInterval(counter, 1000);
}

function counter () {
    const startTime = new Date();
    const endTime = new Date(datePicker.value);
    const countdown = endTime - startTime;
    const conversion = convertMs(countdown);

    if (countdown >= 0) {
        dayEl.textContent = addLeadingZero(conversion.days);
        hourEl.textContent = addLeadingZero(conversion.hours);
        minEl.textContent = addLeadingZero(conversion.minutes);
        secEl.textContent = addLeadingZero(conversion.seconds);
    } else {
        window.alert("It's time!!!");
        clearInterval(timerId);
    }
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


 