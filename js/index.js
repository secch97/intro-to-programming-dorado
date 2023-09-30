//GLOBAL VARIABLES
let messageId = 1;
let activeLinkCounter = 0;
//Fetch Request Class
class ApiRequest {
  //Private fields
  #request = "";
  #method = "";
  #url = "";
  #mode = "";

  //Constructor
  constructor(method, url, mode) {
    this.#method = method;
    this.#url = url;
    this.#mode = mode;
  }

  //Methods
  setRequest() {
    //1. Creating a new request object.
    this.#request = new Request(this.#url, {
      method: this.#method,
      mode: this.#mode,
    });
  }

  get #getRequest() {
    return this.#request;
  }

  get getFetchPromise() {
    return fetch(this.#getRequest);
  }
}

function turnNavBarResponsive(e) {
  //1. Getting the nav bar:
  const navBar = document.querySelector(".top-navigation-bar");
  if (navBar.className === "top-navigation-bar") {
    navBar.classList.add("responsive-nav");
  } else {
    navBar.classList.remove("responsive-nav");
  }
}

function showFooter() {
  //1. Create a date object
  let today = new Date();
  //2. Retrieve the current year:
  let thisYear = today.getFullYear();
  //3. Selecting footerNav from my DOM:
  const footerNav = document.querySelector(".footer-navigation-bar");
  //4. Create a new paragraph element:
  const copyright = document.createElement("span");
  //5. Add a class to the new paragraph element
  copyright.classList.add("footer-element");
  //6. Write my name and current year to the copyright paragraph element:
  copyright.innerText = `© Saul Castillo | ${thisYear}`;
  //7. Append the copyright paragraph into the footerNav element.
  footerNav.appendChild(copyright);
  //8. Appending social media links

  //8.2 Setting up social media data

  //8.2.1 Variable set up:
  const socialMediaData = [
    {
      icon: "fa-google",
      name: "E-mail",
      link: "mailto:secch97@gmail.com"
    },

    {
      icon: "fa-github",
      name: "GitHub",
      link: "https://github.com/secch97"
    },

    {
      icon: "fa-twitter",
      name: "Twitter",
      link: "https://twitter.com/MrRobot_97"
    },
  ];

  //8.3 Rendering HTML with socialMediaData:

  //8.3.1 Retrieving social media container:
  const socialMediaListContainer = renderSocialMedia(socialMediaData);
  //8.3.2 Appending <address> element to navigation footer
  footerNav.appendChild(socialMediaListContainer);
}

function renderSocialMedia(socialMediaData) {
  /*
    <address>
      <ul class="horizontal-list">
              <li class="connect-item">
                  <a href="mailto:secch97@gmail.com" target="_blank">
                      <i class="fa-solid fa-envelope"></i>
                      Mail
                  </a>
              </li>
              <li class="connect-item">
                  <a href="https://github.com/secch97" target="_blank">
                      <i class="fa-brands fa-github"></i>
                      GitHub
                  </a>
              </li>
              <li class="connect-item">
                  <a href="https://twitter.com/MrRobot_97" target="_blank">
                      <i class="fa-brands fa-twitter"></i>
                      Twitter
                  </a>
              </li>
      </ul>
    </address>
  */
  //1 Iterate over my social media data:

  //1.1 HTML elements creation:

  //1.1.1 Address element:
  const socialMediaListContainer = document.createElement("address");
  //1.1.2 Unordered List element:
  const socialMediaList = document.createElement("ul");

  //1.2 HTML elements set up:

  //1.2.1 Address element:
  socialMediaListContainer.classList.add("footer-element");
  //1.2.2 Unordered list element:
  socialMediaList.classList.add("horizontal-list");

  //1.3 Social media data appendage:

  for (socialMedia of socialMediaData) {
    //1.3.1 HTML elements creation:

    //1.3.1.1 List item element:
    const socialMediaListItem = document.createElement("li");
    //1.3.1.2 Anchor tag element:
    const socialMediaLink = document.createElement("a");
    //1.3.1.3 <i> element:
    const socialMediaIcon = document.createElement("i");

    //1.3.2 HTML elements set up:
    //1.3.2.1 List item element:
    socialMediaListItem.classList.add("connect-item");

    //1.3.3 Social media data appendage:
    //1.3.3.1 Anchor element:
    socialMediaLink.setAttribute("href", `${socialMedia.link}`);
    socialMediaLink.setAttribute("target", "_blank");
    socialMediaLink.innerText=socialMedia.name;
    //1.3.3.2 <i> element:
    socialMediaIcon.classList.add(`fa-brands`, `${socialMedia.icon}`);

    //1.3.4 HTML elements appendage
    //1.3.4.1 Appending <li> to list:
    socialMediaList.appendChild(socialMediaListItem);
    //1.3.4.2 Appending <a> element to list item:
    socialMediaListItem.appendChild(socialMediaLink);
    //1.3.4.3 Appending <i> element to anchor tag:
    socialMediaLink.prepend(socialMediaIcon);
  }

  //1.4 Remaining HTML elements appendage:
  //1.4.1 Appending <ul> element to address:
  socialMediaListContainer.appendChild(socialMediaList);

  //1.5 Return HTML element containing social media:
  return socialMediaListContainer;
}

function showSkills() {
  //1. Create a skills array
  const skills = ["HTML", "CSS", "Tailwind", "Javascript","Typescript", "React.js", "MUI", "GitHub"];
  const skillsIcons = [
    "fa-brands fa-html5",
    "fa-brands fa-css3",
    "./images/tailwind-icon.png",
    "fa-brands fa-js",
    "./images/ts-icon.png",
    "fa-brands fa-react",
    "./images/mui-icon.png",
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
    skill.classList.add("skill-item");
    //6. Create a <a> element
    const anchorTag = document.createElement("a");
    //7. Set the anchor element inner text to <i> fontawesome tag plus the current skills[i] element
    anchorTag.innerHTML = skillsIcons[i].slice(0,2) === "fa" ? `<i class="${skillsIcons[i]}"></i> ${skills[i]}` : `<img src=${skillsIcons[i]} style='width:16px;height:17px;margin-right:1px'></img> ${skills[i]}`;
    //8. Append the anchor tag to the skill <li> element
    skill.appendChild(anchorTag);
    //9. Append the skill element to the skill list
    skillsList.appendChild(skill);
  }
}

function showProjects() {
  //1. Showing projects
  //1.1 Setting up parameters
  let method = "GET";
  let url =
    "https://api.github.com/users/secch97/repos?sort=created&direction=asc";
  let mode = "cors";
  //1.2 Creating the request object:
  let projectsRequest = new ApiRequest(method, url, mode);
  //1.3 Setting the request object:
  projectsRequest.setRequest();
  //1.4 Getting the request object:
  let projectsPromise = projectsRequest.getFetchPromise;
  //1.5 Executing the promise:
  projectsPromise
    .then((response) => {
      //Handling error
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      //Returning response as JSON DATA
      return response.json();
    })
    .then((data) => {
      //2. Rendering JSON Data
      renderProjectsData(data);
    })
    .catch((error) => {
      console.error("There was a problem fetching the projects: " + error);
    });
}

function renderProjectsData(data) {
  //VARIABLES
  //Promise variable
  const projectsData = data;

  //Project's data map
  const projectDataMap = new Map([
    [
      "Burger-City-Restaurant",
      {
        image: "burger-city-restaurant.png",
        dates: "July 2020 - December 2020",
        tools: ["HTML5", "CSS3", "JS", "Bootstrap", "ASP.NET"],
        alt: "Burger City Restaurant webpage screenshot"
      },
    ],
    [
      "Dental-Clinic-Helper",
      {
        image: "dental-clinic.png",
        dates: "January 2021 - June 2021",
        tools: ["HTML5", "CSS3", "JS", "Bootstrap", "Laravel"],
        alt: "Dental Clinic Helper webpage screenshot"
      },
    ],
    [
      "js-animation",
      {
        image: "js-animation.png",
        dates: "August 2022",
        tools: ["HTML5", "CSS3", "JS"],
        alt: "Javascript animation project simulating Plants vs Zombies game screenshot"
      },
    ],
    [
      "intro-to-programming-dorado",
      {
        image: "personal-portfolio.png",
        dates: "September 2022 - Present",
        tools: ["HTML5", "CSS3", "JS"],
        alt: "Code the Dream's Intro to Programming project screenshot"
      },
    ],
  ]);

  //1. Selecting the projects section by ID:
  const projectSection = document.getElementById("projects");
  //2. Query the projectSection (instead of the entire document) to find the <ul> element:
  const projectList = projectSection.querySelector("ul");
  //3 Iterate over my repositories array
  for (repository of projectsData) {
    //4. Create a new list item (li) element with the following structure
    /*
      <li class="project-card">
        <div class="project-title-container">
          <a class="project-title-link"> 
            <span></span>
          </a>
        </div>
        <div class="project-dates-container">
          <em class="emphasis-fact"></em>
        </div>
        <div class="project-image-container">
          <img></img>
        </div>
        <div class="project-description-container">
          <span class="emphasis-fact"></span>
        </div>
        <div class="project-tools-container">
          <ul class="horizontal-list">
            <li class="tool-item">
              <span>
                <i></i>
              </span>
            </li>
          </ul>
        </div>
      </li>
    */
    //List Item
    if (
      repository.name === "Burger-City-Restaurant" ||
      repository.name === "Dental-Clinic-Helper" ||
      repository.name === "js-animation" ||
      repository.name === "intro-to-programming-dorado"
    ) {
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
      projectTitle.innerText = repository.name.replace(/-/g, " ").toUpperCase();

      //Setting up project's date
      projectDateContainer.classList.add("project-dates-container");
      projectDate.classList.add("emphasis-fact");
      projectDate.innerText = projectDataMap.get(repository.name).dates;

      //Setting up project's image
      projectImageContainer.classList.add("project-image-container");
      projectImage.classList.add("project-image");
      projectImage.setAttribute(
        "src",
        `./images/projects/${projectDataMap.get(repository.name).image}`
      );
      projectImage.setAttribute("alt", `${projectDataMap.get(repository.name).alt}`);

      //Setting up project's description
      projectDescriptionContainer.classList.add(
        "project-description-container"
      );
      projectDescription.classList.add("emphasis-fact");
      projectDescription.innerText = repository.description;

      //Setting up project's tools
      projectToolsContainer.classList.add("project-tools-container");
      projectToolsList.classList.add("horizontal-list");
      let projectToolTitle = document.createElement("span");
      projectToolTitle.innerText = "Tools used:";
      for (
        let i = 0;
        i < projectDataMap.get(repository.name).tools.length;
        i++
      ) {
        //Creating a list item for each tool
        let projectToolListItem = document.createElement("li");
        projectToolListItem.classList.add("tool-item");
        //Creating a span element
        let projectTool = document.createElement("span");
        //Creating a i element for the tool's icon
        let projectToolIcon = document.createElement("i");

        //Setting up list item elements
        projectTool.innerText =
          " " + projectDataMap.get(repository.name).tools[i];
        projectToolIcon.classList.add(
          `fa-brands`,
          `fa-${projectDataMap.get(repository.name).tools[i].toLowerCase()}`
        );

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
    }
  }
}

function showEducation() {
  //1. Setting up education data:
  //1.1 Variables:
  const educationData = [
    {
      institution: "Universidad Don Bosco",
      title: "Computer Science Engineer",
      date: "January 2016 - May 2021",
      image: "./images/education/College-Degree.png",
      link: "./assets/documents/education/College-Degree.pdf",
      description:
        "The Computer Science Engineer from Universidad Don Bosco is an ethical, critical and purposeful professional, with leadership who manages IT projects, creates innovative software and manages IT networks, applying international technical standards.",
      alt: "Universidad Don Bosco college degree in Computer Engineering"
    },
    {
      institution: "Code The Dream",
      title: "Intro to Web Development Certificate",
      date: "August 2022 - January 2023",
      image: "./images/education/Code-the-Dream--Intro-to-Programming.png",
      link: "./assets/documents/education/Code-the-Dream--Intro-to-Programming.pdf",
      description: "The Intro to Web Development class builds a strong foundation for applicants wishing to become software developers. The curriculum topics covered are: JavaScript, HTML, CSS, GIT, Debugging, AJAX & API Fetch.",
      alt: "Code The Dream Intro to Web Development certificate"
    }
  ];

  //2. Rendering HTML with education data:
  renderEducationData(educationData);
}

function renderEducationData(data) {
  //1. Variables set up
  const educationData = data;

  //2. HTML elements selection:
  //2.1 Selecting the projects section by ID:
  const educationSection = document.getElementById("education");
  //2.2 Query the educationSection (instead of the entire document) to find the <ul> element:
  const educationList = educationSection.querySelector("ul");

  //3 Education data iteration:
  for (education of educationData) {
    /*
      The following HTML structure will be followed to render the education data:
        <li class="education-card">
          <div class="education-title-container">
            <span></span>
          </div>
          <div class="education-dates-container">
            <em class="emphasis-fact"></em>
          </div>
          <div class="education-image-container">
            <a>
              <img class="education-image"></img>
            </a>
          </div>
          <div class="education-description-container">
            <span class="emphasis-fact"></span>
          </div>
        </li>
    */

    //3.1 HTML Elements creation:

    //3.1.1 List item:
    let educationListItem = document.createElement("li");

    //3.1.2 Institution container div:
    let educationInstitutionContainer = document.createElement("div");
    //3.1.2.1 Institution span:
    let educationInstitution = document.createElement("span");

    //3.1.3 Title container div:
    let educationTitleContainer = document.createElement("div");
    //3.1.3.1 Title span:
    let educationTitle = document.createElement("span");

    //3.1.4 Dates container div:
    let educationDatesContainer = document.createElement("div");
    //3.1.4.1 Dates em:
    let educationDates = document.createElement("em");

    //3.1.5 Image container div:
    let educationImageContainer = document.createElement("div");
    //3.1.5.1 Image link <a>:
    let educationImageLink = document.createElement("a");
    //3.1.5.2 Image:
    let educationImage = document.createElement("img");

    //3.1.6 Description container div:
    let educationDescriptionContainer = document.createElement("div");
    //3.1.6.1 Description span:
    let educationDescription = document.createElement("span");

    //3.2 HTML Elements set up:

    //3.2.1 List item:
    educationListItem.classList.add("education-card");

    //3.2.2 Institution container div:
    educationInstitutionContainer.classList.add("education-institution-container");

    //3.2.3 Title container div:
    educationTitleContainer.classList.add("education-title-container");

    //3.2.4 Dates container div:
    educationDatesContainer.classList.add("education-dates-container");
    //3.2.4.1 Dates em:
    educationDates.classList.add("emphasis-fact");

    //3.2.5 Image container div:
    educationImageContainer.classList.add("education-image-container");
    //3.2.5.1 Image:
    educationImage.classList.add("education-image");

    //3.2.6 Description container div:
    educationDescriptionContainer.classList.add(
      "education-description-container"
    );
    //3.2.6.1 Description span:
    educationDescription.classList.add("emphasis-fact");

    //3.3 JSON appendage:
    //3.3.1 Education institution:
    educationInstitution.innerText = education.institution;
    //3.3.2 Education title:
    educationTitle.innerText = education.title;
    //3.3.3 Education dates:
    educationDates.innerText = education.date;
    //3.3.4 Education image:
    educationImageLink.setAttribute("href", `${education.link}`);
    educationImageLink.setAttribute("target", "_blank");
    educationImage.setAttribute("src", `${education.image}`);
    educationImage.setAttribute("alt", `${education.alt}`);
    //3.3.5 Education description:
    educationDescription.innerText = education.description;

    //3.4 HTML Elements appendage:

    //3.4.1 List item to <ul>:
    educationList.appendChild(educationListItem);
    //3.4.2 Education institution container to <li>:
    educationListItem.appendChild(educationInstitutionContainer);
    educationInstitutionContainer.appendChild(educationInstitution);
    //3.4.3 Education title container to <li>:
    educationListItem.appendChild(educationTitleContainer);
    educationTitleContainer.appendChild(educationTitle);
    //3.4.4 Education dates container to <li>:
    educationListItem.appendChild(educationDatesContainer);
    educationDatesContainer.appendChild(educationDates);
    //3.4.5 Education image container to <li>:
    educationListItem.appendChild(educationImageContainer);
    educationImageContainer.appendChild(educationImageLink);
    educationImageLink.appendChild(educationImage);
    //3.4.6 Education description container to <li>:
    educationListItem.appendChild(educationDescriptionContainer);
    educationDescriptionContainer.appendChild(educationDescription);
  }

  //4 HTML Elements appendage:

  //4.1 Unordered list to section
  educationSection.appendChild(educationList);
}

function setActive(e) {
  //Get first child of parent node
  let sibling = this.parentElement.firstElementChild;
  //Iterate through siblings to remove active class
  do {
    //Responsive menu code
    //If a link in the responsive menu is clicked, then close the responsive menu.
    if (
      this.className === "nav-item" &&
      this.parentElement.parentElement.className ===
        "top-navigation-bar responsive-nav"
    ) {
      //Get the responsive nav bar.
      const responsiveNavBar = this.parentElement.parentElement;
      //Hide menu opened by responsive nav bar
      responsiveNavBar.classList.remove("responsive-nav");
      //Remove active class from hamburguer menu
      const hamburguerMenu = document.querySelector(".nav-item.hamburguer");
      sibling.classList.remove("active");
      hamburguerMenu.classList.remove("active");
    } else {
      sibling.classList.remove("active");
    }
  } while ((sibling = sibling.nextElementSibling));
  if (this.className === "nav-item hamburguer") {
    activeLinkCounter++;
    if (activeLinkCounter < 2) {
      this.classList.add("active");
    } else {
      this.classList.remove("active");
      activeLinkCounter = 0;
    }
  } else {
    activeLinkCounter = 0;
    this.classList.add("active");
  }
}

function removeMessage(e) {
  //Find the button's parent element using DOM:
  const entry = e.target.parentElement.parentElement.parentElement;
  //Remove the entry element from the DOM:
  entry.remove();
  //Set the messages section visibility:
  setMessagesVisibility();
}

function showModal(e) {
  //Get the modal container
  const modalContainer = document.querySelector(".modal-container");
  //Close the modal container
  modalContainer.classList.add("show");
}

function closeModal(e) {
  //Get the modal container
  const modalContainer = document.querySelector(".modal-container");
  //Close the modal container
  modalContainer.classList.remove("show");
}

function editMessage(e) {
  //Getting the message elements:
  const messageId = e.target.getAttribute("data-message-id");
  const name = e.target.getAttribute("data-name");
  const email = e.target.getAttribute("data-email");
  const message = e.target.getAttribute("data-message").trim();
  //Getting the modal elements
  const modalContainer = document.querySelector(".modal-container");
  const editMessageForm = modalContainer.querySelector("#edit-message-form");
  const closeButton = modalContainer.querySelector("#close-button");
  //Show the edit modal
  showModal();
  //Reset the edit modal form elements
  editMessageForm.reset();
  //Get the edit form modal HTML elements
  const editName = editMessageForm.querySelector("#edit-name");
  const editEmail = editMessageForm.querySelector("#edit-email");
  const editMessage = editMessageForm.querySelector("#edit-message");
  //Set the values of the edit form modal to the to-edit message values
  editName.value = name;
  editEmail.value = email;
  editMessage.value = message;
  //Add event listener to close button
  closeButton.addEventListener("click", closeModal);
  //Assign message id to editSubmit button
  const editSubmitButton = editMessageForm.querySelector("#edit-submit");
  editSubmitButton.setAttribute("data-message-id", messageId);
}

function getMessageDate() {
  //Get message date:
  const messageDate = new Date();
  const messageDateYear = messageDate.getFullYear();
  const messageDateMonth = messageDate.getMonth() + 1;
  const messageDateDay = messageDate.getDate();
  const messageDateHour = messageDate.getHours();
  const messageDateMinute = messageDate.getMinutes();
  const messageDateSecond = messageDate.getSeconds();
  const messageDateString = `${messageDateYear}/${messageDateMonth}/${messageDateDay} - ${messageDateHour}:${messageDateMinute}:${messageDateSecond}`;
  return messageDateString;
}

function handleMessageForm(e) {
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
  editButton.setAttribute("data-message-id", messageId);
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

function handleEditMessageForm(e) {
  //Prevent default
  e.preventDefault();
  //Retrieve edit form's control values
  const messageId = e.target["edit-submit"].getAttribute("data-message-id");
  const editName = e.target["edit-name"].value;
  const editEmail = e.target["edit-email"].value;
  const editMessage = e.target["edit-message"].value.trim();
  //Get the List Item element with messageId equals to edit form messageId
  const messageSection = document.querySelector("#messages");
  const messageList = messageSection.querySelector("ul");
  const messages = messageList.children;
  for (let listItem of messages) {
    if (listItem.firstElementChild.children[0].value === messageId) {
      listItem.firstElementChild.children[1].children[0].setAttribute(
        "href",
        `mailto:${editEmail}`
      );
      listItem.firstElementChild.children[1].children[0].innerText = editName;
      listItem.firstElementChild.children[1].children[1].innerText =
        getMessageDate();
      listItem.firstElementChild.children[2].innerText = editMessage;
      listItem.firstElementChild.children[3].children[0].setAttribute(
        "data-name",
        editName
      );
      listItem.firstElementChild.children[3].children[0].setAttribute(
        "data-email",
        editEmail
      );
      listItem.firstElementChild.children[3].children[0].setAttribute(
        "data-message",
        editMessage
      );
      e.target.reset();
      closeModal();
      break;
    }
  }
}

function checkNumberOfMessages() {
  //Selecting the messages section
  const messageSection = document.querySelector("#messages");
  //Selecting the message list inside the message section
  const messageList = messageSection.querySelector("ul");
  //Check number of messages available:
  const messageCount = messageList.childElementCount;
  //Return number of messages
  return messageCount;
}

function setMessagesVisibility() {
  //Selecting the messages section
  const messageSection = document.querySelector("#messages");
  //Getting the number of messages available
  const messageCount = checkNumberOfMessages();
  //Setting the visibility of the message section depending of the number of messages:
  if (messageCount === 0) {
    messageSection.classList.add("hidden");
  } else {
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
  showProjects();

  //4. Showing education section
  showEducation();

  //5. Showing footer
  showFooter();

  //6. Getting navigation link elements
  //6.1 Querying every navigation link:
  const navigationLinks = document.querySelectorAll(
    ".top-navigation-bar-container .top-navigation-bar a.nav-item"
  );
  //6.2 Setting up a click event listener for every navigation link:
  navigationLinks.forEach((link) => {
    link.addEventListener("click", setActive);
  });

  //7. Handle message form
  const messageForm = document.querySelector("#message-form ");
  messageForm.addEventListener("submit", handleMessageForm);

  //8. Hide the "Messages Form" when the list of messages is empty.
  //8.1 Set messages list visibility depending of number of messages:
  setMessagesVisibility();

  //9. Handle edit message form
  const editMessageForm = document.querySelector("#edit-message-form");
  editMessageForm.addEventListener("submit", handleEditMessageForm);
});
