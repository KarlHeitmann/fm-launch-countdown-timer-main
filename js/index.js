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
const DUE_DATE_STRING = '2021-06-29 00:00:00';

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
  console.log("seconds: ", delta % 60)
  console.log("minutes: ", (delta / 60) % 60)
  console.log("hours: ",   (delta / 3600) % 60)
  const year = today.getFullYear()
}, 1000)
