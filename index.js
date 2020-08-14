// ----------- NAVBAR LABEL ANIMATIONS -----------------

// Variables for Navbar Label Animations
var home = document.querySelector("#home");
var homeIcon = document.querySelector(".fa-home");

var about = document.querySelector("#about");
var aboutIcon = document.querySelector(".fa-user");

var skills = document.querySelector("#skills");
var skillsIcon = document.querySelector(".fa-cog");

var experience = document.querySelector("#experience");
var experienceIcon = document.querySelector(".fa-book");

var contact = document.querySelector("#contact");
var contactIcon = document.querySelector(".fa-envelope");

// Event Listeners for Navbar Label Animations
homeIcon.addEventListener("mouseover", function () {
  home.style.animation = "roll-in .5s ease-in-out forwards";
});
homeIcon.addEventListener("mouseout", function () {
  home.style.animation = "roll-out .5s ease-in-out";
});

aboutIcon.addEventListener("mouseover", function () {
  about.style.animation = "roll-in .5s ease-in-out forwards";
});
aboutIcon.addEventListener("mouseout", function () {
  about.style.animation = "roll-out .5s ease-in-out";
});

skillsIcon.addEventListener("mouseover", function () {
  skills.style.animation = "roll-in .5s ease-in-out forwards";
});
skillsIcon.addEventListener("mouseout", function () {
  skills.style.animation = "roll-out .5s ease-in-out";
});

experienceIcon.addEventListener("mouseover", function () {
  experience.style.animation = "roll-in .5s ease-in-out forwards";
});
experienceIcon.addEventListener("mouseout", function () {
  experience.style.animation = "roll-out .5s ease-in-out";
});

contactIcon.addEventListener("mouseover", function () {
  contact.style.animation = "roll-in .5s ease-in-out forwards";
});
contactIcon.addEventListener("mouseout", function () {
  contact.style.animation = "roll-out .5s ease-in-out";
});

// --------------- Project Information Modal ------------------------

// Variables for Info Modal
var modal = document.querySelector(".projectInfo");
var closeBtn = document.querySelector("#closeBtn");
var netflixProject = document.querySelector("#netflixProject");
var yelpProject = document.querySelector("#yelpProject");
var recipeProject = document.querySelector("#recipeProject");
var colorGameProject = document.querySelector("#colorProject");
var patatapProject = document.querySelector("#patatapProject");
var projectTitle = document.querySelector("#projectTitle");
var projectType = document.querySelector("#projectType");
var projectImage = document.querySelector("#projectImage");
var projectTags = document.querySelector("#tags");
var projectDescription = document.querySelector("#projectDescription");
var visitBtn = document.querySelector(".contact-button");

// Open and Close Modal
netflixProject.addEventListener("click", openModal);
yelpProject.addEventListener("click", openModal);
recipeProject.addEventListener("click", openModal);
colorGameProject.addEventListener("click", openModal);
patatapProject.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

function openModal() {
  modal.style.display = "block";
  projectTitle.innerHTML = this.querySelector(".title").innerHTML;
  projectType.innerHTML = this.querySelector(".type").innerHTML;
  projectTags.innerHTML = this.querySelector(".tags").innerHTML;
  projectImage.src = this.querySelector(".image").src;
  projectDescription.innerHTML = this.querySelector("#description").innerHTML;
  visitBtn.href = this.querySelector(".link").href;
}

function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
