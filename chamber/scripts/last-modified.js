document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = new Date(
  document.lastModified
);
document.getElementById("timestamp").value = new Date();
