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
