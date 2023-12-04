document.addEventListener("DOMContentLoaded", function () {
  fetch("data/members.json")
    .then((response) => response.json())
    .then((data) => displayMembers(data.members));

  // Function to display members in the specified view (grid or list)
  function displayMembers(members) {
    const memberDirectory = document.getElementById("memberDirectory");

    // Toggle between grid and list view
    const viewToggle = document.createElement("input");
    viewToggle.type = "checkbox";
    viewToggle.id = "viewToggle";
    viewToggle.addEventListener("change", function () {
      memberDirectory.classList.toggle("gridView", viewToggle.checked);
      memberDirectory.classList.toggle("listView", !viewToggle.checked);
    });

    // Label for the toggle
    const toggleLabel = document.createElement("label");
    toggleLabel.htmlFor = "viewToggle";
    toggleLabel.textContent = "Grid View";

    // Insert toggle elements before the member directory
    document.body.insertBefore(toggleLabel, memberDirectory);
    document.body.insertBefore(viewToggle, memberDirectory);

    // Display members based on the initial view
    memberDirectory.innerHTML = members
      .map((member) => {
        return `<div class="memberCard">
                        <img src="images/${member.image}" alt="${member.name}">
                        <h3>${member.name}</h3>
                        <p>${member.address}</p>
                        <p>${member.phone}</p>
                        <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                    </div>`;
      })
      .join("");
  }
});
