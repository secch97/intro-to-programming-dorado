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

function removeMessage(e){
    //Find the button's parent element using DOM:
    const entry = e.target.parentElement;
    //Remove the entry element from the DOM:
    entry.remove();
    //Set the messages section visibility:
    setMessagesVisibility();
}

function handleMessageForm(e){
  //Prevent default
  e.preventDefault();
  //Retrieve form's controls values
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;
  //Log the form's controls values
  console.log(`Name: ${name} | Email: ${email} | message: ${message}`);
  //Selecting messages section
  const messageSection = document.querySelector("#messages");
  //Selecting the message list inside the message section
  const messageList = messageSection.querySelector("ul");
  //Create a new list item
  const newMessage = document.createElement("li"); 
  //Set the innerHTML of the newMessage element
  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>
  <span>${message}</span>`;
  //Create a new button "Remove"
  const removeButton = document.createElement("button");
  //Set attributes to the button
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  //Append the removeButton to the newMessage element
  newMessage.appendChild(removeButton);
  //Add an event listener to the button
  removeButton.addEventListener("click", removeMessage);
  //Append the newMessage to the messageList
  messageList.appendChild(newMessage);
  //Reset the form after submit
  e.target.reset();
  //Set visibility of messages section
  setMessagesVisibility();
}

function checkNumberOfMessages(){
  //Selecting the messages section
  const messageSection = document.querySelector("#messages");
  //Selecting the message list inside the message section
  const messageList = messageSection.querySelector("ul");
  //Check number of messages available:
  const messageCount = messageList.childElementCount;
  //Return number of messages
  return messageCount;
}

function setMessagesVisibility(){
  //Selecting the messages section
  const messageSection = document.querySelector("#messages");
  //Getting the number of messages available
  const messageCount = checkNumberOfMessages();  
  //Setting the visibility of the message section depending of the number of messages:
  if (messageCount === 0){
    messageSection.classList.add("hidden");
  }
  else{
    messageSection.classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {
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

  //4. Handle message form
  const messageForm = document.querySelector("#messageForm");
  messageForm.addEventListener("submit", handleMessageForm);

  //5. Hide the "Messages Form" when the list of messages is empty.
  //5.1 Set messages list visibility depending of number of messages:
  setMessagesVisibility();
})

