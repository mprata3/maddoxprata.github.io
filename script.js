function openPopup(section) {
  document.getElementById("popup").style.display = "block";

  let content = "";

  if (section === "about") {
    content = `
      <h2>About Me</h2>
      <ul>
        <li>I am Maddox Prata, I'm a high school student with a strong interest in academics and personal growth.</li>
        <li>I enjoy challenging myself through coursework, extracurricular activities, and independent learning.</li>
        <li>I take parts in clubs such as: Green Team, Riley's Way, Track and Field, and Tennis.</li>
      </ul>
    `;
  }

  if (section === "welcome") {
    content = `
      <h2>Welcome</h2>
      <ul>
        <li>This website presents my interests, goals, and experiences in a creative and professional format.</li>
        <li>Each section highlights a different aspect of my academic and personal development.</li>
        <li>The design reflects both structure and creativity.</li>
      </ul>
    `;
  }

  if (section === "education") {
    content = `
      <h2>Education</h2>
      <ul>
        <li>The Browning School — Current student</li>
        <li>Simon Baruch Middle School 104</li>
        <li>PS 340</li>
      </ul>
    `;
  }

  if (section === "skills") {
    content = `
      <h2>Skills</h2>
      <ul>
        <li>Python programming (foundational experience)</li>
        <li>HTML & CSS for basic web design</li>
        <li>Mandarin Chinese (currently learning)</li>
        <li>Teamwork and collaboration</li>
        <li>Time management and organization</li>
      </ul>
    `;
  }

  if (section === "contact") {
    content = `
      <h2>Contact</h2>
      <ul>
        <li>Email contact information is available at the bottom of the page.</li>
        <li>GitHub profile is linked for academic and coding projects.</li>
      </ul>
    `;
  }

  document.getElementById("popup-text").innerHTML = content;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
