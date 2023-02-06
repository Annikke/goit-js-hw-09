import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timer = document.querySelector('.timer');
const timePicker = document.getElementById('datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const timerDays = document.querySelector('span[data-days]');
const timerHours = document.querySelector('span[data-hours]');
const timerMinutes = document.querySelector('span[data-minutes]');
const timerSeconds = document.querySelector('span[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= Date.now()) {
      Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};
const calendar = flatpickr(timePicker, options);
let deff;

startBtn.addEventListener('click', () => {
  const timerId = setInterval(() => {
    deff = calendar.selectedDates[0] - Date.now();
    if (deff >= 0) {
      const { days, hours, minutes, seconds } = convertMs(deff);
      timerDays.textContent = days;
      timerHours.textContent = addLeadingZero(hours);
      timerMinutes.textContent = addLeadingZero(minutes);
      timerSeconds.textContent = addLeadingZero(seconds);
      startBtn.disabled = true;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
});

function convertMs(ms) {
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

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
