const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherError = document.querySelector(".weather-error");
export const city = document.querySelector(".city");
city.value = "Minsk";

export function setLocalStorage1() {
  localStorage.setItem("city", city.value);
}

export function getLocalStorage1() {
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
}

function UrlExists(url) {
  var http = new XMLHttpRequest();
  http.open("HEAD", url, false);
  http.send();
  if (http.status != 404) return true;
  else return false;
}

export async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=94968b1feb2812bd93c6552f3d42748a&units=metric`;

  if (!UrlExists(url) || city.value == "") {
    weatherIcon.style.display = "none";
    weatherError.textContent = `Error! City not found for '${city.value}'!`;
    temperature.textContent = "";
    weatherDescription.textContent = "";
    wind.textContent = "";
    humidity.textContent = "";
  } else {
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.style.display = "block";
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    weatherError.textContent = "";

    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
  }
}
