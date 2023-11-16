const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

/*button.addEventListener("click", () => {
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
});*/

var chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value !== "") {
    displayList(input.value);

    chaptersArray.push(input.value);

    setChapterList();

    input.value = "";

    input.focus();
  }
});

function displayList(item) {
  const li = document.createElement("li");

  const deleteButton = document.createElement("button");
  li.textContent = item;
  deleteButton.textContent = "❌";

  deleteButton.classList.add("delete");

  li.append(deleteButton);

  list.appendChild(li);

  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteContent(li.textContent);
    input.focus();
  });

  input.value = "";
}

function setChapterList() {
  localStorage.setItem("bomList", JSON.stringify(chaptersArray));
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("bomList"));
}

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}
