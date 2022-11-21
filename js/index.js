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

//8. Create a skills array
const skills = ["HTML", "CSS", "Javascript", "GitHub"]
const skillsIcons = ["fa-brands fa-html5", "fa-brands fa-css3", "fa-brands fa-js", "fa-brands fa-github"]
//9. Select skills section by id
const skillsSection = document.querySelector("section#skills");
console.log(skillsSection);
//10. Query the ul element within the skills section
const skillsList = skillsSection.querySelector(".horizontal-list");
console.log(skillsList);
//11. Create a for loop to iterate through my skills:
for (let i=0; i < skills.length; i++){
    //12. Create a skill element
    const skill = document.createElement("li");
    //13. Create a <a> element
    const anchorTag = document.createElement("a");
    //13. Set the anchor element inner text to <i> fontawesome tag plus the current skills[i] element
    anchorTag.innerHTML = `<i class="${skillsIcons[i]}"></i> ${skills[i]}`;
    //14. Append the anchor tag to the skill <li> element
    skill.appendChild(anchorTag);
    //14. Append the skill element to the skill list
    skillsList.appendChild(skill);
}
