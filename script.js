function openPopup(section) {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");

  let content = "";

  if (section === "about") {
    content = `
      <div class="slide">
        <div class="slide-text">
          <h2>About Me</h2>
          <ul>
            <li>I am passionate about working with plants as an active member of my school’s Green Team.</li>
            <li>I also contribute to my community through Riley’s Way, assisting at food pantries, soup kitchens, dog shelters, and community drives.</li>
            <li>My long-term goal is to attend a reputable college and build a meaningful future that benefits my community.</li>
            <li>I maintain an active lifestyle through sports and outdoor activities, including tennis, walking, running, and biking.</li>
          </ul>
        </div>
        <div class="slide-image">
          Image Placeholder
        </div>
      </div>
    `;
  }

  if (section === "education") {
    content = `
      <div class="slide">
        <div class="slide-text">
          <h2>Education & Achievements</h2>
          <ul>
            <li>The Browning School — Current High School (10th Grade)</li>
            <li>Simon Baruch MS 104</li>
            <li>PS 340 Elementary School</li>
            <li>Bahamas Biology Work Project</li>
            <li>High Honor Roll (9th Grade)</li>
            <li>Honor Roll ×3 (Middle School)</li>
            <li>Principal Award (Middle School)</li>
            <li>Extracurriculars: Riley’s Way, Green Team, Track & Field, Tennis</li>
          </ul>
        </div>
        <div class="slide-image">
          Image Placeholder
        </div>
      </div>
    `;
  }

  if (section === "skills") {
    content = `
      <div class="slide">
        <div class="slide-text">
          <h2>Skills</h2>
          <ul>
            <li>Python, Basic HTML & CSS</li>
            <li>Currently learning Mandarin; some Spanish experience</li>
            <li>Fast and accurate typing</li>
            <li>Strong teamwork and communication skills</li>
            <li>Adaptable problem-solver</li>
            <li>Experience working in groups during a biodiversity project in the Bahamas</li>
          </ul>
        </div>
        <div class="slide-image">
          Image Placeholder
        </div>
      </div>
    `;
  }

  popupText.innerHTML = content;

  // SHOW popup with animation
  popup.style.display = "flex";
  popup.classList.remove("fade-out");
  popup.classList.add("fade-in");
}

function closePopup() {
  const popup = document.getElementById("popup");

  // Smooth exit animation
  popup.classList.remove("fade-in");
  popup.classList.add("fade-out");

  setTimeout(() => {
    popup.style.display = "none";
  }, 250);
}

// Snowfall for Christmas Tree
function createSnowfall(num) {
  const tree = document.getElementById("tree");

  for (let i = 0; i < num; i++) {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.style.left = Math.random() * tree.offsetWidth + "px";
    snow.style.fontSize = Math.random() * 12 + 8 + "px"; // 8px to 20px
    snow.style.animationDuration = Math.random() * 5 + 5 + "s"; // 5s to 10s
    snow.style.opacity = Math.random() * 0.3 + 0.8; // slightly more visible snow
    snow.innerHTML = "❄"; // Snowflake emoji
    tree.appendChild(snow);
  }
}

// Trigger snowfall on page load
window.addEventListener("load", () => createSnowfall(40));
