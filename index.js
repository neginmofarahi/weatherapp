function inputCity(event) {
  event.preventDefault();
  let changeCity = document.querySelector("#city-weather");
  let inputNewCity = document.querySelector("#input-city");
  changeCity.innerHTML = `${inputNewCity.value} weather`;
}
function changeCantigrad(event) {
  event.preventDefault();
  let cantigrad = document.querySelector("#current-cantigrad");
  cantigrad.innerHTML = `56°F`;
}
let now = new Date();
let time = document.querySelector("#current-time");
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let day = days[now.getDay()];
let hour = now.getHours();
let min = now.getMinutes();
time.innerHTML = `${day}, ${hour}:${min}`;

let newCity = document.querySelector("#search-city");
newCity.addEventListener("submit", inputCity);

let changeTempr = document.querySelector("#change-temp");
console.log(changeTempr);
changeTempr.addEventListener("click", changeCantigrad);
