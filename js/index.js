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