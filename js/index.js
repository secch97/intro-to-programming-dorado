function showCopyright() {
  //1. Create a date object
  let today = new Date();
  //2. Retrieve the current year:
  let thisYear = today.getFullYear();
  //3. Selecting footerNav from my DOM:
  const footerNav = document.querySelector("footer #footerNav");
  //4. Create a new paragraph element:
  const copyright = document.createElement("p");
  //5. Add a class to the new paragraph element
  copyright.classList.add("footer-element");
  //6. Write my name and current year to the copyright paragraph element:
  copyright.innerHTML = `© Saul Castillo | ${thisYear}`;
  //7. Append the copyright paragraph into the footerNav element.
  footerNav.appendChild(copyright);
}

function showSkills() {
  //1. Create a skills array
  const skills = ["HTML", "CSS", "Javascript", "GitHub"];
  const skillsIcons = [
    "fa-brands fa-html5",
    "fa-brands fa-css3",
    "fa-brands fa-js",
    "fa-brands fa-github",
  ];
  //2. Select skills section by id
  const skillsSection = document.querySelector("section#skills");
  //3. Query the ul element within the skills section
  const skillsList = skillsSection.querySelector(".horizontal-list");
  //4. Create a for loop to iterate through my skills:
  for (let i = 0; i < skills.length; i++) {
    //5. Create a skill element
    const skill = document.createElement("li");
    //6. Create a <a> element
    const anchorTag = document.createElement("a");
    //7. Set the anchor element inner text to <i> fontawesome tag plus the current skills[i] element
    anchorTag.innerHTML = `<i class="${skillsIcons[i]}"></i> ${skills[i]}`;
    //8. Append the anchor tag to the skill <li> element
    skill.appendChild(anchorTag);
    //9. Append the skill element to the skill list
    skillsList.appendChild(skill);
  }
}

function setActive(e) {
  //Create an array of siblings
  let siblings = [];
  //Get first child of parent node
  let sibling = this.parentElement.firstElementChild;
  //Iterate through siblings to remove active class
  do {
    sibling.classList.remove("active");
  } while ((sibling = sibling.nextElementSibling));
  //Add active class to current link:
  this.classList.add("active");
}
//1. Showing skills section
showSkills();

//2. Showing copyright footer
showCopyright();

//3. Getting navigation link elements
//3.1 Querying every navigation link:
const navigationLinks = document.querySelectorAll("header nav div.center a");
//3.2 Setting up a click event listener for every navigation link:
navigationLinks.forEach((link) => {
  link.addEventListener("click", setActive);
});
