document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = new Date(
  document.lastModified
);

/*Number of Visits*/

function getDaysDifference(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffDays = Math.round(Math.abs((date1 - date2) / oneDay));
  return diffDays;
}

function displayWelcomeMessage() {
  const welcomeMessageElement = document.getElementById("welcomeMessage");
  const lastVisit = localStorage.getItem("lastVisit");

  if (!lastVisit) {
    welcomeMessageElement.textContent =
      "Welcome! Let us know if you have any questions.";
  } else {
    const currentDate = new Date();
    const lastVisitDate = new Date(lastVisit);

    const daysDifference = getDaysDifference(currentDate, lastVisitDate);

    if (daysDifference < 1) {
      welcomeMessageElement.textContent = "Back so soon! Awesome!";
    } else {
      const pluralize = daysDifference === 1 ? "" : "s";
      welcomeMessageElement.textContent = `You last visited ${daysDifference} day${pluralize} ago.`;
    }
  }
  localStorage.setItem("lastVisit", new Date().toISOString());
}

displayWelcomeMessage();
