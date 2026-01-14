function openPopup(section) {
  document.getElementById("popup").style.display = "flex";

  let content = "";

  if (section === "about") {
    content = `<h2>About Me</h2>
               <ul>
                 <li>I enjoy Plants (Green Team)</li>
                 <li>Community Service: Riley's Way, Food Pantry, Soup Kitchen</li>
                 <li>My goal is to get into a good college and have a bright future</li>
                 <li>Sports: Tennis, Walking, Running, Biking</li>
               </ul>`;
  }

  if (section === "education") {
    content = `<h2>Education & Achievements</h2>
               <ul>
                 <li>The Browning School (Current)</li>
                 <li>Simon Baruch MS 104</li>
                 <li>PS340 Elementary School</li>
                 <li>10th Grade</li>
                 <li>Bahamas Work Project (Biology)</li>
                 <li>High Honor Roll (9th Grade), Honor Roll x3 (Middle School)</li>
                 <li>Principal Award (Middle School)</li>
                 <li>Extracurriculars: Riley's Way, Green Team, Track & Field, Tennis</li>
               </ul>`;
  }

  if (section === "skills") {
    content = `<h2>Skills</h2>
               <ul>
                 <li>Python, Basic HTML/CSS</li>
                 <li>Learning Mandarin & Spanish</li>
                 <li>Fast Typing</li>
                 <li>Teamwork & Communication</li>
                 <li>Adaptability & Problem-Solving</li>
                 <li>Biodiversity project experience in Bahamas</li>
               </ul>`;
  }

  document.getElementById("popup-text").innerHTML = content;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
