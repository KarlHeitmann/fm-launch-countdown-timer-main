console.log("Ready");

// const DUE_DATE = {
//   year: 2030,
//   month: 7,
//   day: 15,
//   hour: 17,
//   minute: 31,
//   second: 21,
// }

// const DUE_DATE_STRING = '2026-01-31 17:30:17';
const DUE_DATE_STRING = '2021-06-30 00:00:00';

const DUE_DATE = Date.parse(DUE_DATE_STRING);

console.log(DUE_DATE);
// Date.parse()

// const Date.

setInterval(() => {
  const today = new Date()
  console.log("new Date(): ", new Date());
  console.log("DUE_DATE: ", DUE_DATE);
  console.log("Date.now(): ", Date.now());
  const delta = (DUE_DATE - Date.now()) / 1000;
  console.log("DUE_DATE - Date.now(): ", delta);

  const seconds_left = Math.round(delta % 60);
  const minutes_left = Math.round((delta / 60) % 60);
  const hours_left   = Math.round(((delta / 3600) % 24));
  const days_left    = Math.round((delta / 86400));

  document.querySelector('#days').innerText = days_left;
  document.querySelector('#hours').innerText = hours_left;
  document.querySelector('#minutes').innerText = minutes_left;
  document.querySelector('#seconds').innerText = seconds_left;

  console.log("seconds: ", seconds_left)
  console.log("minutes: ", minutes_left)
  console.log("hours: ",   hours_left)
  console.log("days: ",    days_left)

  const year = today.getFullYear()
}, 1000)
