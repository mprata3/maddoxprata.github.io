function openPopup(section) {
  document.getElementById("popup").style.display = "block";

  let content = "";

  if (section === "about") {
    content = "<h2>About Me</h2><p>I am Maddox Prata, a high school student interested in academics, community service, and personal growth.</p>";
  }
  if (section === "welcome") {
    content = "<h2>Welcome</h2><p>This website highlights my interests, goals, and experiences in a creative and professional format.</p>";
  }
  if (section === "education") {
    content = "<h2>Education</h2><p>The Browning School (Current), Simon Baruch MS 104, PS 340.</p>";
  }
  if (section === "skills") {
    content = "<h2>Skills</h2><ul><li>Python</li><li>Basic HTML/CSS</li><li>Mandarin (learning)</li><li>Teamwork</li></ul>";
  }
  if (section === "contact") {
    content = "<h2>Contact</h2><p>Email and GitHub links are available at the bottom of the page.</p>";
  }

  document.getElementById("popup-text").innerHTML = content;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}