function openPopup(section) {
  document.getElementById("popup").style.display = "flex";

  let content = "";

  if (section === "about") {
    content = `<h2>About Me</h2>
               <ul>
                 <li>I am passionate about working with plants as an active member of my school’s Green Team.</li>
                 <li>I also contribute to my community through Riley’s Way, assisting at food pantries, soup kitchens, dog shelters, and many drives that help the community./li>
                 <li>My long-term goal is to attend a reputable college and build a meaningful future that helps benefit the community I live in.</li>
                 <li>Additionally, I maintain an active lifestyle through sports and outdoor activities, including tennis, walking, running, and biking.</li>
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
