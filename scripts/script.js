document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = new Date(
  document.lastModified
);

/*hamburguer menu*/
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
});

/*Dark Mode*/
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🕶️")) {
    main.style.background = "#000";
    main.style.color = "#fff";
    modeButton.textContent = "🔆";
  } else {
    main.style.background = "#eee";
    main.style.color = "#000";
    modeButton.textContent = "🕶️";
  }
});

/*Number of Visits*/
const visitsDisplay = document.querySelector(".visits");

let numberVisits = Number(window.localStorage.getItem("visitsList")) || 0;

if (numberVisits !== 0) {
  visitsDisplay.textContent = numberVisits;
} else {
  visitsDisplay.textContent = "This is your first time!!! Welcome. 🥳";
}

numberVisits++;

localStorage.setItem("visitsList", numberVisits);

/*Weather card*/
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDes = document.querySelector("figcaption");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=14.633694353733842&lon=-90.50595003628975&appid=3991be30656b8ec91d855637dfe97da3&units=imperial";
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDes.textContent = `${desc}`;
}

apiFetch();
