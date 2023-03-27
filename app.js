const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

const deadlineYear = new Date().getFullYear();

let futureDate = new Date(deadlineYear, 11, 31, 11, 59, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  const today = new Date().getTime()
  const t = futureDate - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  const day = Math.floor(t / oneDay);
  const hour = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMin);
  const seconds = Math.floor((t % oneMin) / oneSec)

  const values = [day, hour, minutes, seconds];

  const format = item => {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach((item,index) => {
    item.innerHTML = format(values[index])
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway is expired</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 10)

getRemainingTime()