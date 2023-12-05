const url = "https://jennypgalvez.github.io/wdd230/chamber/data/members.json";
const membersDirectory = document.getElementById("membersDirectory");

async function getMembersData() {
  const response = await fetch(url);
  const data = await response.json();
  displayMembers(data.companies);
}

function displayMembers(members) {
  members.forEach((member) => {
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    let name = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");

    image.src = member.image;
    image.alt = `Logo of ${member.name}`;
    name.textContent = `${member.name}`;
    address.textContent = `${member.address}`;
    phone.textContent = ` ${member.phone}`;
    website.textContent = ` ${member.website}`;
    website.href = member.website;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    membersDirectory.appendChild(card);
  });
}

getMembersData();
