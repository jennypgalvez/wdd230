const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  if (input.value != "") {
    const li = document.createElement("li");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";

    li.textContent = input.value;

    li.append(deleteButton);

    list.appendChild(li);

    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
      input.focus();
    });

    input.value = "";
  }
});
