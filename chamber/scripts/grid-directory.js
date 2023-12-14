const gridButton = document.getElementById("grid");
const listButton = document.getElementById("list");
const directoryGrid = document.getElementById("directoryGrid");

gridButton.addEventListener("click", setGridView);
listButton.addEventListener("click", setListView);

function setGridView() {
  directoryGrid.classList.add("directoryGrid");
  directoryGrid.classList.remove("list");
}

function setListView() {
  directoryGrid.classList.add("list");
  directoryGrid.classList.remove("directoryGrid");
}
