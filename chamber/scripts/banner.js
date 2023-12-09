document.addEventListener("DOMContentLoaded", function () {
  // Get the current day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
  const currentDay = new Date().getDay();

  // Check if the current day is Monday, Tuesday, or Wednesday
  if (currentDay >= 1 && currentDay <= 3) {
    const banner = document.getElementById("chamberBanner");
    const closeBtn = document.getElementById("closeBanner");

    // Show the banner
    banner.style.display = "block";

    // Add event listener to close the banner
    closeBtn.addEventListener("click", function () {
      banner.style.display = "none";
    });
  }
});
