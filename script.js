// SHOW TREE PAGE
function showTree() {
  document.getElementById("welcome-page").style.display = "none";
  document.getElementById("tree-page").style.display = "block";
}

// OPEN POPUP
function openPopup(section) {
  document.getElementById("popup").style.display = "block";

  let content = "";

  if (section === "about") {
    content = `
      <h2>About Me</h2>
      <ul>
        <li>I enjoy plants and am part of the Green Team</li>
        <li>Community Service: Riley’s Way, local churches, food pantry, soup kitchen</li>
        <li>My goal is to get into a good college and have a bright future</li>
        <li>Tennis, walking, running, biking</li>
        <li>Always looking for new ways to grow and learn</li>
      </ul>
    `;
  }
  if (section === "education") {
    content = `
      <h2>Education</h2>
      <ul>
        <li>The Browning School (Current)</li>
        <li>Simon Baruch MS 104</li>
        <li>PS 340 (Elementary School)</li>
        <li>10th Grade</li>
        <li>Bahamas Work Project (Biology)</li>
        <li>High Honor Roll (9th Grade)</li>
        <li>Honor Roll x3 (Middle School)</li>
        <li>Leadership Award (Principal Award, Middle School)</li>
      </ul>
      <h3>Extracurriculars</h3>
      <ul>
        <li>Riley’s Way</li>
        <li>Green Team</li>
        <li>Track and Field</li>
        <li>Tennis</li>
      </ul>
    `;
  }
  if (section === "skills") {
    content = `
      <h2>Skills</h2>
      <ul>
        <li>Python, HTML/CSS (learning)</li>
        <li>Mandarin and some Spanish experience</li>
        <li>Fast typer</li>
        <li>Works well alone and in a team</li>
        <li>Good communication and adaptability skills</li>
        <li>Hard work ethic</li>
        <li>Worked in the Bahamas for a biodiversity project</li>
      </ul>
    `;
  }

  document.getElementById("popup-text").innerHTML = content;
}

// CLOSE POPUP
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
