let title = document.getElementById("header");
let servicesHeader = document.querySelector("#servicesHeader");
let servicesText = document.querySelector("#servicesText");

var about = document.querySelector("#about");
var pricing = document.querySelector("#pricing");
var contact = document.querySelector("#contact");

var mobileNavButton = document.querySelector("#mobileNavButton");
var mobileNavButtonIcon = document.querySelector("#mobileNavButtonIcon");

var mobileNavigator = true;

if (window.matchMedia("(min-width: 64rem)").matches) {
  moveNavElements();
} else {
  mobileMenu();
}

addEventListener("scroll", (e) => {
  if (window.matchMedia("(min-width: 64rem)").matches) {
    moveNavElements();
  }
  console.log(window.scrollY);
  title.style.marginTop = window.scrollY * 1.2 + "px";
  if (window.scrollY < 515) {
    servicesHeader.style.marginTop = window.scrollY * 1.2 + "px";
    if (window.scrollY > 380) {
      if (window.matchMedia("(min-width: 64rem)").matches) {
        servicesText.style.marginTop = (window.scrollY - 380) * -3 + "px";
      } else {
        servicesText.style.marginTop = (window.scrollY - 380) * -3 + 90 + "px";
      }
    }
  } else {
    servicesHeader.style.marginTop = 515 * 1.2 + "px";
    
    
      if (window.matchMedia("(min-width: 64rem)").matches) {
        servicesText.style.marginTop = (515 - 380) * -3 + "px";
      } else {
        servicesText.style.marginTop = (515 - 380) * -3 + 90 + "px";
      }
  }
});

//Desktop
function moveNavElements() {
  if (window.scrollY > 20) {
    about.classList.remove("aboutStart");
    pricing.classList.remove("pricingStart");
    contact.classList.remove("contactStart");
    about.classList.add("aboutEnd");
    pricing.classList.add("pricingEnd");
    contact.classList.add("contactEnd");
  } else {
    about.classList.remove("aboutEnd");
    pricing.classList.remove("pricingEnd");
    contact.classList.remove("contactEnd");
    about.classList.add("aboutStart");
    pricing.classList.add("pricingStart");
    contact.classList.add("contactStart");
  }
}

//Mobile
function showMenu() {
  mobileNavButton.classList.remove("mobileNavButtonShow");
  mobileNavButtonIcon.classList.remove("mobileNavButtonIconShow");

  mobileNavButton.classList.add("mobileNavButtonHide");
  mobileNavButtonIcon.classList.add("mobileNavButtonIconHide");

  about.classList.remove("aboutHidden");
  pricing.classList.remove("pricingHidden");
  contact.classList.remove("contactHidden");
  about.classList.add("aboutShown");
  pricing.classList.add("pricingShown");
  contact.classList.add("contactShown");
}

function hideMenu() {
  mobileNavButton.classList.remove("mobileNavButtonHide");
  mobileNavButtonIcon.classList.remove("mobileNavButtonIconHide");

  mobileNavButton.classList.add("mobileNavButtonShow");
  mobileNavButtonIcon.classList.add("mobileNavButtonIconShow");

  about.classList.remove("aboutShown");
  pricing.classList.remove("pricingShown");
  contact.classList.remove("contactShown");
  about.classList.add("aboutHidden");
  pricing.classList.add("pricingHidden");
  contact.classList.add("contactHidden");
}

function mobileMenu() {
  if (mobileNavigator == true) {
    mobileNavigator = false;
    hideMenu();
  } else if (mobileNavigator == false) {
    mobileNavigator = true;
    showMenu();
  }
}
