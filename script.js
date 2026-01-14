// Switch from Welcome page to Tree page
function showTree() {
  document.getElementById("welcome-page").style.display = "none";
  document.getElementById("tree-page").style.display = "block";
}

// Open popups for each ornament
function openPopup(section) {
  document.getElementById("popup").style.display = "block";

  let content = "";

  if (section === "about") {
    content = `
      <h2>About Me</h2>
      <ul>
        <li>I enjoy Plants (Green Team)</li>
        <li>Community Service: Riley’s Way, local churches, food pantry, soup kitchen</li>
        <li>My goal: get into a good college and have a bright future</li>
        <li>Hobbies: Tennis, walking, running, biking</li>
        <li>Other: personal growth, academics, and leadership</li>
      </ul>
    `;
  }

  if (section === "education") {
    content = `
      <h2>Education & Experience</h2>
      <ul>
        <li>The Browning School (Current)</li>
        <li>Simon Baruch MS 104</li>
        <li>PS 340 (Elementary)</li>
        <li>Relevant Coursework & Academic Achievements:</li>
        <ul>
          <li>Bahamas Biology Project</li>
          <li>High Honor Roll (9th Grade)</li>
          <li>Honor Roll x3 (Middle School)</li>
          <li>Principal Award (Leadership, Middle School)</li>
        </ul>
        <li>Extracurricular Activities: Riley’s Way, Green Team, Track and Field, Tennis</li>
        <li>Work Experience: Summer work projects (e.g., pouring water)</li>
      </ul>
    `;
  }

  if (section === "skills") {
    content = `
      <h2>Skills</h2>
      <ul>
        <li>Programming: Python, Basic HTML/CSS</li>
        <li>Languages: Mandarin (learning), some Spanish</li>
        <li>Personal: Fast typer, works well alone and in a team</li>
        <li>Soft Skills: Communication, adaptability, hard work ethic</li>
        <li>Other: Bahamas Biodiversity Project experience</li>
      </ul>
    `;
  }

  document.getElementById("popup-text").innerHTML = content;
}

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
