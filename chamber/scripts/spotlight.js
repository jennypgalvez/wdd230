const url = "https://jennypgalvez.github.io/wdd230/chamber/data/members.json";
const spotlightContainer = document.getElementById("spotlightContainer");

async function getMembersData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch members data");
    }

    const data = await response.json();
    displaySpotlightAds(data.companies);
  } catch (error) {
    console.error("Error fetching members data:", error);
  }
}

function displaySpotlightAds(members) {
  // Function to filter members based on membership level
  function filterMembersByLevel(level) {
    return members.filter((member) => member.membership === level);
  }

  // Filter silver and gold members
  var silverMembers = filterMembersByLevel("Silver Membership");
  var goldMembers = filterMembersByLevel("Gold Membership");

  // Combine silver and gold members
  var qualifiedMembers = silverMembers.concat(goldMembers);

  // Shuffle the array for randomness
  qualifiedMembers.sort(() => Math.random() - 0.5);

  // Display spotlight advertisements
  for (var i = 0; i < 3 && i < qualifiedMembers.length; i++) {
    var member = qualifiedMembers[i];

    // Create an advertisement element
    var adElement = document.createElement("div");
    adElement.className = "company";

    // Set member details
    adElement.innerHTML = `
      <h2>${member.name}</h2>
      <ul>
        <li>${member.email}</li>
        <li>${member.phone}</li>
        <li>${member.website}</li>
      </ul>
    `;

    // Append the advertisement to the container
    spotlightContainer.appendChild(adElement);
  }
}

// Call the function to get and display members data
getMembersData();
