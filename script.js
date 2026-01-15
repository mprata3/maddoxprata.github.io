// ===== POPUP HANDLING =====
function openPopup(section) {
  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popup-text");
  const slideImage = document.querySelector(".slide-image");

  let content = "";
  let imageHtml = "<p>Image goes here</p>"; // default placeholder

  // ABOUT ME
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
    // Only About Me has your actual photo
    imageHtml = `<img src="rllygoodtennisphotoofmine.jpg" alt="Maddox Prata">`;
  }

  // EDUCATION & ACHIEVEMENTS
  if (section === "education") {
    content = `
      <div class="resume">
        <h2>Resume</h2>
        <h3>Education</h3>
        <p>The Browning School | New York, NY</p>
        <p>Sophomore (10th Grade) expected to graduate in 2028</p>
        <p>Relevant Coursework: Algebra 2, Modern World History, Chemistry, Computer Science, English, Mandarin</p>

        <p>Simon Baruch (M.S. 104) | Graduated: 2024</p>

        <h3>Work Experience</h3>
        <p>Upcoming Summer Position in a restaurant</p>
        <p>Will help clean dishes, and pour water</p>

        <h3>Honors & Awards</h3>
        <ul>
          <li>High Honor Roll 9th Grade</li>
          <li>3x Honor Roll (Middle School)</li>
        </ul>

        <h3>Extracurricular Activities</h3>
        <ul>
          <li>Community Service at Church (soup kitchens, dog shelters)</li>
          <li>Athletics: Varsity Tennis, Varsity Indoor Track & Field</li>
          <li>Clubs: Green Team, Riley's Way</li>
          <li>Arts: Piano & Clarinet</li>
        </ul>
      </div>
    `;
    // Use default placeholder image for now
    imageHtml = `<p>Image goes here</p>`;
  }

  // SKILLS
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
    // Use default placeholder image for now
    imageHtml = `<p>Image goes here</p>`;
  }

  // Inject content and image into popup
  popupText.innerHTML = content;
  slideImage.innerHTML = imageHtml;

  // Show popup
  popup.style.display = "flex";
  popup.classList.remove("fade-out");
  popup.classList.add("fade-in");

  // Hide navbar while popup is open
  document.querySelector("nav").classList.add("hidden");
}

function closePopup() {
  const popup = document.getElementById("popup");

  // Smooth exit animation
  popup.classList.remove("fade-in");
  popup.classList.add("fade-out");

  // Restore navbar after popup closes
  document.querySelector("nav").classList.remove("hidden");

  setTimeout(() => {
    popup.style.display = "none";
  }, 250);
}

// ===== SNOWFALL FOR CHRISTMAS TREE =====
function createSnowfall(num) {
  const tree = document.getElementById("tree");

  for (let i = 0; i < num; i++) {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.style.left = Math.random() * tree.offsetWidth + "px";
    snow.style.fontSize = Math.random() * 12 + 8 + "px"; // 8px to 20px
    snow.style.animationDuration = Math.random() * 5 + 5 + "s"; // 5s to 10s
    snow.style.opacity = Math.random() * 0.5 + 0.5; // 0.5 to 1
    snow.innerHTML = "❄"; // Snowflake emoji
    tree.appendChild(snow);
  }
}

// Trigger snowfall on page load
window.addEventListener("load", () => createSnowfall(50));
