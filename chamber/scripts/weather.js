/*Weather card*/
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDes = document.querySelector("figcaption");
const forecastList = document.querySelector("#forecast-list");

const apiKey = "3991be30656b8ec91d855637dfe97da3";
const latitude = 14.47838930230912;
const longitude = -90.51137756069473;

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayCurrentWeather(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDes.textContent = `${desc}`;
}

function displayForecast(data) {
  const forecastData = data.list.slice(0, 8);
  forecastList.innerHTML = "";

  forecastData.forEach((item) => {
    const dateTime = new Date(item.dt * 1000);
    const hour = dateTime.getHours();
    const temperature = item.main.temp;
    const icon = item.weather[0].icon;

    const forecastItem = document.createElement("li");
    forecastItem.innerHTML = `
      <strong>${hour}:00</strong> - ${temperature}&deg;F
      <img src="https://openweathermap.org/img/w/${icon}.png" alt="${item.weather[0].description}">
    `;

    forecastList.appendChild(forecastItem);
  });
}

async function fetchData() {
  const currentWeatherData = await apiFetch(currentWeatherUrl);
  const forecastData = await apiFetch(forecastUrl);

  displayCurrentWeather(currentWeatherData);
  displayForecast(forecastData);
}

fetchData();
