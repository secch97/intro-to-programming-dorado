//GLOBAL VARIABLES
let messageId = 1;
let activeLinkCounter = 0;
//Fetch Request Class
class apiRequest {
  //Private fields
  #request = "";
  #method = "";
  #url = "";
  #mode = "";

  //Constructor
  constructor(method, url, mode){
    this.#method = method;
    this.#url = url;
    this.#mode = mode;
  }

  //Methods
  setRequest(){
    //1. Creating a new request object.
    this.#request = new Request(this.#url, {
      method: this.#method,
      mode: this.#mode
    });
  }

  get #getRequest(){
    return this.#request;
  }

  get getFetchPromise(){
    return fetch(this.#getRequest);
  }

}


function turnNavBarResponsive(e){
  //1. Getting the nav bar:
  const navBar = document.querySelector(".nav");
  if(navBar.className === "nav"){
    navBar.classList.add("responsive-nav");
  }
  else{
    navBar.classList.remove("responsive-nav");
  }
}


function showCopyright() {
  //1. Create a date object
  let today = new Date();
  //2. Retrieve the current year:
  let thisYear = today.getFullYear();
  //3. Selecting footerNav from my DOM:
  const footerNav = document.querySelector(".footerNav");
  //4. Create a new paragraph element:
  const copyright = document.createElement("p");
  //5. Add a class to the new paragraph element
  copyright.classList.add("footer-element");
  //6. Write my name and current year to the copyright paragraph element:
  copyright.innerText = `© Saul Castillo | ${thisYear}`;
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
    "fa-brands fa-github"
  ];
  //2. Select skills section by id
  const skillsSection = document.querySelector("section#skills");
  //3. Query the ul element within the skills section
  const skillsList = skillsSection.querySelector(".horizontal-list");
  //4. Create a for loop to iterate through my skills:
  for (let i = 0; i < skills.length; i++) {
    //5. Create a skill element
    const skill = document.createElement("li");
    skill.classList.add("skill-item");
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

function renderProjectsData(data){
  //VARIABLES
  //Request variable
  let projectsData = data;
  //Project's aux variables
  let projectImages=["burger-city-restaurant.png", "dental-clinic.png", "js-animation.png", "personal-portfolio.png"];
  let projectDates=["July 2020 - December 2020", "January 2021 - June 2021", "August 2022", "September 2022 - Present"];
  let projectTools=[["HTML5", "CSS3", "JS", "Bootstrap", "ASP.NET"],["HTML5", "CSS3", "JS", "Bootstrap", "Laravel"], ["HTML5", "CSS3", "JS"], ["HTML5", "CSS3", "JS"]];

  let arrayCounter = 0;
  //1. Selecting the projects section by ID:
  const projectSection = document.getElementById("projects");
  //2. Query the projectSection (instead of the entire document) to find the <ul> element:
  const projectList = projectSection.querySelector("ul");
  //3 Iterate over my repositories array
  for (repository of projectsData){
    //4. Create a new list item (li) element with the following structure
    /*
      <li class="project-card">
        <div class="project-image-container">
          <img></img>
        </div>
        <div class="project-title-container">
          <span> </span>
        </div>
      </li>
    */
    //List Item
    if(repository.name==="Burger-City-Restaurant" || repository.name==="Dental-Clinic-Helper" || repository.name==="js-animation" || repository.name==="intro-to-programming-dorado"){
      //Setting up variables
      //List item variables
      let projectListItem = document.createElement("li");
      //Project title variables
      let projectTitleContainer = document.createElement("div");
      let projectTitleLink = document.createElement("a");
      let projectTitle = document.createElement("span");
      //Project date variables
      let projectDateContainer = document.createElement("div");
      let projectDate = document.createElement("em");     
      //Project image variables
      let projectImageContainer = document.createElement("div");
      let projectImage = document.createElement("img");
      //Project description variables
      let projectDescriptionContainer = document.createElement("div");
      let projectDescription = document.createElement("span");
      //Project tools variables
      let projectToolsContainer = document.createElement("div");
      let projectToolsList = document.createElement("ul");
      
      //Setting up project's list item
      projectListItem.classList.add("project-card");


      //Setting up project's title
      projectTitleContainer.classList.add("project-title-container");
      projectTitleLink.classList.add("project-title-link");
      projectTitleLink.setAttribute("href", `${repository.html_url}`);
      projectTitleLink.setAttribute("target", "_blank");
      projectTitle.innerText = (repository.name.replace(/-/g, " ")).toUpperCase();

      //Setting up project's date
      projectDateContainer.classList.add("project-dates-container");
      projectDate.classList.add("emphasis-fact");
      projectDate.innerText = projectDates[arrayCounter];

      //Setting up project's image
      projectImageContainer.classList.add("project-image-container");
      projectImage.classList.add("project-image")
      projectImage.setAttribute("src", `./images/${projectImages[arrayCounter]}`);

      //Setting up project's description
      projectDescriptionContainer.classList.add("project-description-container");
      projectDescription.classList.add("emphasis-fact");
      projectDescription.innerText = repository.description;

      //Setting up project's tools
      projectToolsContainer.classList.add("project-tools-container");
      projectToolsList.classList.add("horizontal-list");
      let projectToolTitle = document.createElement("span");
      projectToolTitle.innerText="Tools used:";
      for (let i=0; i<projectTools[arrayCounter].length; i++){
          //Creating a list item for each tool
          let projectToolListItem = document.createElement("li");
          projectToolListItem.classList.add("tool-item");
          //Creating a span element
          let projectTool = document.createElement("span");
          //Creating a i element for the tool's icon
          let projectToolIcon = document.createElement("i");

          //Setting up list item elements
          projectTool.innerText=" "+projectTools[arrayCounter][i];
          projectToolIcon.classList.add(`fa-brands`, `fa-${projectTools[arrayCounter][i].toLowerCase()}`);

          //Appending items
          projectToolsList.appendChild(projectToolListItem);
          projectToolListItem.appendChild(projectTool);
          projectTool.prepend(projectToolIcon);
        }
      


      //Appending elements to build the previously described structure:
      //Appending list item to list
      projectList.appendChild(projectListItem);
      //Appending project title to list item
      projectListItem.appendChild(projectTitleContainer);
      projectTitleContainer.appendChild(projectTitleLink);
      projectTitleLink.appendChild(projectTitle);
      //Appending project date to list item
      projectListItem.appendChild(projectDateContainer);
      projectDateContainer.appendChild(projectDate);
      //Appending project image to list item
      projectListItem.appendChild(projectImageContainer);
      projectImageContainer.appendChild(projectImage);
      //Appending project description to list item
      projectListItem.appendChild(projectDescriptionContainer);
      projectDescriptionContainer.appendChild(projectDescription);
      //Appending project tools to list item
      projectListItem.appendChild(projectToolsContainer);
      projectToolsContainer.appendChild(projectToolTitle);
      projectToolsContainer.appendChild(projectToolsList);

      //Increment the arrays' indexes.
      arrayCounter++;
    }
  }
}

function setActive(e) {
  //Get first child of parent node
  let sibling = this.parentElement.firstElementChild;
  //Iterate through siblings to remove active class
  do {
    //Responsive menu code
    //If a link in the responsive menu is clicked, then close the responsive menu.
    if(this.className==="nav-item" && this.parentElement.parentElement.className==="nav responsive-nav"){
      //Get the responsive nav bar.
      const responsiveNavBar = this.parentElement.parentElement;
      //Hide menu opened by responsive nav bar
      responsiveNavBar.classList.remove("responsive-nav");
      //Remove active class from hamburguer menu
      const hamburguerMenu = document.querySelector(".nav-item.hamburguer");
      sibling.classList.remove("active");
      hamburguerMenu.classList.remove("active");
    }
    else{
      sibling.classList.remove("active");
    }
  } while ((sibling = sibling.nextElementSibling));
  if(this.className==="nav-item hamburguer"){
    activeLinkCounter++;
    if(activeLinkCounter<2){
      this.classList.add("active");
    }
    else{
      this.classList.remove("active");
      activeLinkCounter=0;
    }
  }
  else{
    activeLinkCounter=0;
    this.classList.add("active");
  }
}

function removeMessage(e){
    //Find the button's parent element using DOM:
    const entry = (e.target.parentElement).parentElement.parentElement;
    //Remove the entry element from the DOM:
    entry.remove();
    //Set the messages section visibility:
    setMessagesVisibility();
}

function showModal(e){
   //Get the modal container
   const modalContainer = document.querySelector(".modal-container");
   //Close the modal container
   modalContainer.classList.add("show"); 
}

function closeModal(e){
  //Get the modal container
  const modalContainer = document.querySelector(".modal-container");
  //Close the modal container
  modalContainer.classList.remove("show");
}

function editMessage(e){
  //Getting the message elements:
  const messageId = e.target.getAttribute("data-messageId");
  const name = e.target.getAttribute("data-name");
  const email = e.target.getAttribute("data-email");
  const message = e.target.getAttribute("data-message").trim();
  console.log(`${messageId} + ${name} + ${email} + ${message} `);
  //Getting the modal elements
  const modalContainer = document.querySelector(".modal-container");
  const editMessageForm = modalContainer.querySelector("#editMessageForm");
  const closeButton = modalContainer.querySelector("#closeButton");
  //Show the edit modal
  showModal();
  //Reset the edit modal form elements
  editMessageForm.reset();
  //Get the edit form modal HTML elements
  const editName = editMessageForm.querySelector("#editName");
  const editEmail = editMessageForm.querySelector("#editEmail");
  const editMessage = editMessageForm.querySelector("#editMessage");
  //Set the values of the edit form modal to the to-edit message values
  editName.value = name;
  editEmail.value = email;
  editMessage.value = message;
  //Add event listener to close button
  closeButton.addEventListener("click", closeModal);
  //Assign message id to editSubmit button
  const editSubmitButton = editMessageForm.querySelector("#editSubmit");
  editSubmitButton.setAttribute("data-messageId", messageId);
}

function getMessageDate(){
  //Get message date:
  const messageDate = new Date();
  console.log(messageDate);
  const messageDateYear = messageDate.getFullYear();
  const messageDateMonth = messageDate.getMonth() + 1;
  const messageDateDay = messageDate.getDate();
  const messageDateHour = messageDate.getHours();
  const messageDateMinute = messageDate.getMinutes();
  const messageDateSecond = messageDate.getSeconds();
  const messageDateString = `${messageDateYear}/${messageDateMonth}/${messageDateDay} - ${messageDateHour}:${messageDateMinute}:${messageDateSecond}`
  return messageDateString;
}

function handleMessageForm(e){
  //Prevent default
  e.preventDefault();
  //Retrieve form's controls values
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value.trim();
  //Get message date
  const messageDateString = getMessageDate();
  //Selecting messages section
  const messageSection = document.querySelector("#messages");
  //Selecting the message list inside the message section
  const messageList = messageSection.querySelector("ul");
  //Create a new list item
  const newMessage = document.createElement("li"); 
  //Create a message div
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("comment");
  //Set the innerHTML of the newMessage element
  messageDiv.innerHTML = `<input type="hidden" value="${messageId}"><div class="flex-header"><a href="mailto:${email}" class="comment-anchor">${name}</a><span class="comment-span date"> ${messageDateString}</span></div><span class="line-white-space comment-span">${message}</span>`;
  //Create a message button div
  const messageButtonDiv = document.createElement("div");
  messageButtonDiv.classList.add("comment-button-container");
  //Create a new button "Remove"
  const removeButton = document.createElement("button");
  //Create a new button "Edit"
  const editButton = document.createElement("button");
  //Add class to the buttons
  removeButton.classList.add("comment-button");
  editButton.classList.add("comment-button");
  //Set attributes to the "remove" button
  removeButton.innerText = "Remove";
  removeButton.setAttribute("type", "button");
  //Set attributes to the "edit" button
  editButton.innerText = "Edit";
  editButton.setAttribute("type", "button");
  editButton.setAttribute("id", "editButton");
  editButton.setAttribute("data-messageId", messageId);
  editButton.setAttribute("data-name", name);
  editButton.setAttribute("data-email", email);
  editButton.setAttribute("data-message", message.trim());
  //Append the buttons to the messageButtonDiv
  messageButtonDiv.append(editButton, removeButton);
  //Append the messageButtonDiv to the newMessage element
  messageDiv.appendChild(messageButtonDiv);
  //Add an event listener to the buttons
  removeButton.addEventListener("click", removeMessage);
  editButton.addEventListener("click", editMessage);
  //Append the messageDiv to newMessage list item
  newMessage.appendChild(messageDiv);
  //Append the newMessage to the messageList
  messageList.appendChild(newMessage);
  //Reset the form after submit
  e.target.reset();
  //Increase the message counter by one
  messageId++;
  //Set visibility of messages section
  setMessagesVisibility();
}

function handleEditMessageForm(e){
  //Prevent default
  e.preventDefault();
  //Retrieve edit form's control values
  const messageId = e.target.editSubmit.getAttribute("data-messageId");
  const editName = e.target.editName.value;
  const editEmail = e.target.editEmail.value;
  const editMessage = e.target.editMessage.value.trim();  
  console.log(`New message: ${messageId} + ${editName} + ${editEmail} + ${editMessage}`);
  //Get the List Item element with messageId equals to edit form messageId
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const messages = (messageList.children);
  for(let listItem of messages){
    console.log(listItem);
    if(listItem.firstElementChild.children[0].value === messageId){
      listItem.firstElementChild.children[1].children[0].setAttribute("href", `mailto:${editEmail}`);
      listItem.firstElementChild.children[1].children[0].innerText=editName;
      listItem.firstElementChild.children[1].children[1].innerText=getMessageDate();
      listItem.firstElementChild.children[2].innerText=editMessage;
      listItem.firstElementChild.children[3].children[0].setAttribute("data-name", editName);
      listItem.firstElementChild.children[3].children[0].setAttribute("data-email", editEmail);
      listItem.firstElementChild.children[3].children[0].setAttribute("data-message", editMessage);
      e.target.reset();
      closeModal();
      break;
    }
  }

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

  //1. Responsive Nav Bar:
  //1.1 Adding click event on hamburguer icon (responsive menu)
  const responsiveMenu = document.querySelector(".nav-item.hamburguer");
  responsiveMenu.addEventListener("click", turnNavBarResponsive);

  //2. Showing skills section
  showSkills();

  //3. Showing projects section
  //3.1Setting up parameters
  let method = "GET";
  let url = "https://api.github.com/users/secch97/repos?sort=created&direction=asc";
  let mode = "cors"
  //3.2 Creating the request object:
  let apiRequestObject = new apiRequest(method, url, mode);
  //3.3 Setting the request object:
  apiRequestObject.setRequest();
  //3.4 Getting the request object:
  let projectsPromise = apiRequestObject.getFetchPromise;
  //3.5 Executing the promise:
  projectsPromise
  .then((response) => {
    //Hnadling error
    if (!response.ok){
      throw new Error("Network response was not OK");
    }
    //Returning response as JSON DATA
    return response.json();
  })
  .then((data) => {
    //Rendering JSON Data
    renderProjectsData(data);
  })
  .catch((error) => {
    console.error("There was a problem fetching the projects: " +error);
  });
 


  //4. Showing copyright footer
  showCopyright();

  //5. Getting navigation link elements
  //5.1 Querying every navigation link:
  const navigationLinks = document.querySelectorAll("header .nav-container .nav a.nav-item");
  //5.2 Setting up a click event listener for every navigation link:
  navigationLinks.forEach((link) => {
    link.addEventListener("click", setActive);
  });

  //6. Handle message form
  const messageForm = document.querySelector("#messageForm");
  messageForm.addEventListener("submit", handleMessageForm);

  //7. Hide the "Messages Form" when the list of messages is empty.
  //7.1 Set messages list visibility depending of number of messages:
  setMessagesVisibility();

  //8. Handle edit message form
  const editMessageForm = document.querySelector("#editMessageForm");
  editMessageForm.addEventListener("submit", handleEditMessageForm);
})

