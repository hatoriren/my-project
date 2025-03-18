function showCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let input = document.querySelector("#floatingInput");
  h1.innerHTML = input.value;
  let key = "";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${key}&units=metric`;
  axios.get(url).then(apiResponse);
}
function apiResponse(response) {
  let temperature = document.querySelector("#temperature");
  let tempe = Math.round(response.data.main.temp);
  temperature.innerHTML = `${tempe}`;
}

function apiResponseButton(response) {
  let temperature = document.querySelector("#temperature");
  let tempe = Math.round(response.data.main.temp);
  temperature.innerHTML = `${tempe}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;
}

function showPosition(position) {
  let apiKey = "51084c86d376918893b78ccf658f0bb2";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(apiResponseButton);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

let form = document.querySelector(".form-floating");
form.addEventListener("submit", showCity);
let now = new Date();

let h3 = document.querySelector("h3");

let date = now.getDate();

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
let days = ["Sun", "Mon", "Thue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
h3.innerHTML = `${date} ${month}, ${day}`;
