console.log("Ready");

const DUE_DATE_STRING = '2021-06-30 00:00:00';

const DUE_DATE = Date.parse(DUE_DATE_STRING);

setInterval(() => {
  const today = new Date()
  const delta = (DUE_DATE - Date.now()) / 1000;

  const seconds_left = Math.round(delta % 60);
  const minutes_left = Math.round((delta / 60) % 60);
  const hours_left   = Math.round(((delta / 3600) % 24));
  const days_left    = Math.round((delta / 86400));

  document.querySelector('#days').innerText = days_left;
  document.querySelector('#hours').innerText = hours_left;
  document.querySelector('#minutes').innerText = minutes_left;
  document.querySelector('#seconds').innerText = seconds_left;

  const year = today.getFullYear()
}, 1000)
