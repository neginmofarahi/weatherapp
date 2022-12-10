function showTime(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let min = now.getMinutes();
  return `${day}, ${hour}:${min}`;
}

function changeCity(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city").value;
  searchCity(city);
  document.querySelector("#city-weather").innerHTML = `${city} weather`;
}

function showWeather(response) {
  let temp = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let wind = Math.round(response.data.wind.speed);
  let currentTemp = document.querySelector("#current-temp");
  let currentHumidity = document.querySelector("#current-humidity");
  let currentWind = document.querySelector("#current-wind");
  currentTemp.innerHTML = `${temp}°C`;
  currentHumidity.innerHTML = `${humidity}%`;
  currentWind.innerHTML = `${wind}`;
}

function searchLoc(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function showPosition(position) {
  let apiKey = "7d5433d322af5ac78f642274f8113911";
  let apiCity = document.querySelector("#input-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function getCurrentLoc(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLoc);
}

let now = new Date();
let time = document.querySelector("#current-time");
time.innerHTML = showTime(now);

//to change city
let form = document.querySelector("#search-city");
form.addEventListener("submit", changeCity);

let button = document.querySelector("#current-loc-button");
button.addEventListener("click", getCurrentLoc);
