function openPopup(section) {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");
  const popupImage = document.getElementById("popup-image");

  let content = "";
  let imageHTML = "";

  if (section === "about") {
    content = `
      <h2>About Me</h2>
      <ul>
        <li>I am passionate about working with plants as an active member of my school’s Green Team.</li>
        <li>I also contribute to my community through Riley’s Way, assisting at food pantries, soup kitchens, dog shelters, and community drives.</li>
        <li>My long-term goal is to attend a reputable college and build a meaningful future that benefits my community.</li>
        <li>I maintain an active lifestyle through sports and outdoor activities, including tennis, walking, running, and biking.</li>
      </ul>
    `;
    imageHTML = `<img src="rllygoodtennisphotoofmine.jpg" alt="Maddox Prata">`;
  }

  if (section === "education") {
    content = `
      <h2>Education & Achievements</h2>
      <ul>
        <li>The Browning School — 10th Grade, expected to graduate 2028</li>
        <li>Simon Baruch MS 104 — Graduated 2024</li>
        <li>Relevant Coursework: Algebra 2, Modern World History, Chemistry, Computer Science, English, Mandarin</li>
        <li>Work Experience: Upcoming Summer Position in restaurant (dishwashing, water service)</li>
        <li>Honors: High Honor Roll (9th Grade), 3× Honor Roll (Middle School)</li>
        <li>Extracurriculars: Riley’s Way, Green Team, Tennis, Track & Field, Piano & Clarinet</li>
      </ul>
    `;
    imageHTML = `<p>Image placeholder</p>`;
  }

  if (section === "skills") {
    content = `
      <h2>Skills</h2>
      <ul>
        <li>Python, Basic HTML & CSS</li>
        <li>Currently learning Mandarin; some Spanish experience</li>
        <li>Fast and accurate typing</li>
        <li>Strong teamwork and communication skills</li>
        <li>Adaptable problem-solver</li>
        <li>Experience working in groups during a biodiversity project in the Bahamas</li>
      </ul>
    `;
    imageHTML = `<p>Image placeholder</p>`;
  }

  // Inject content and image
  popupText.innerHTML = content;
  popupImage.innerHTML = imageHTML;

  // Show popup
  popup.style.display = "flex";
  popup.classList.remove("fade-out");
  popup.classList.add("fade-in");
}

function closePopup() {
  const popup = document.getElementById("popup");

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
    snow.style.fontSize = Math.random() * 12 + 8 + "px";
    snow.style.animationDuration = Math.random() * 5 + 5 + "s";
    snow.style.opacity = Math.random() * 0.5 + 0.5;
    snow.innerHTML = "❄";
    tree.appendChild(snow);
  }
}

window.addEventListener("load", () => createSnowfall(50));
