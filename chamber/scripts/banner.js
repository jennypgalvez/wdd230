document.addEventListener("DOMContentLoaded", function () {
  const currentDay = new Date().getDay();

  if (currentDay >= 1 && currentDay <= 3) {
    const banner = document.getElementById("chamberBanner");
    const closeBtn = document.getElementById("closeBanner");

    banner.style.display = "block";

    closeBtn.addEventListener("click", function () {
      banner.style.display = "none";
    });
  }
});
