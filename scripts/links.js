const baseURL = "https://jennypgalvez.github.io/wdd230/";
const linksURL = "https://jennypgalvez.github.io/wdd230/data/links.json";

async function getLinksData() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

getLinksData();

function displayLinks(weeks) {
  const cardContainers = document.querySelectorAll(".card");

  weeks.forEach((week, index) => {
    if (index < cardContainers.length) {
      const linksContainer = document.createElement("div");
      linksContainer.className = "week";

      const weekTitle = document.createElement("h2");
      weekTitle.textContent = `Week ${week.week}`;

      const linksList = document.createElement("ul");

      week.links.forEach((link) => {
        const linkItem = document.createElement("li");
        const linkAnchor = document.createElement("a");
        linkAnchor.href = link.url;
        linkAnchor.textContent = link.title;

        linkItem.appendChild(linkAnchor);
        linksList.appendChild(linkItem);
      });

      linksContainer.appendChild(weekTitle);
      linksContainer.appendChild(linksList);
      cardContainers[index].appendChild(linksContainer);
    }
  });
}
