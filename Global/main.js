let title = document.getElementById("header");

var about = document.querySelector("#about");
var pricing = document.querySelector("#pricing");
var contact = document.querySelector("#contact");

var mobileNavButton = document.getElementById("mobileNavButton");
var mobileNavButtonIcon = document.querySelector("#mobileNavButtonIcon");
var mobileNavMenuText = document.querySelector("#mobileNavMenuText");

var mobileNavigator = true;

var i = 0;

mobileNavButton.style.backgroundColor = "#e5001b";

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

if (window.matchMedia("(min-width:64rem)").matches) {
  isDesktop = true;
  moveNavElements();
} else {
  isDesktop = false;
  mobileMenu();
}

addEventListener("scroll", (e) => {
  if (window.matchMedia("(min-width:64rem)").matches) {
    if (window.matchMedia("(min-width: 64rem)").matches) {
      moveNavElements();
    }
  }

if(!isDesktop && window.scrollY<500){
mobileNavButton.style.backgroundColor= "#e5001b";
}
else{
mobileNavButton.style.backgroundColor = "orange";

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
  mobileNavMenuText.classList.remove("mobileNavMenuTextShow");

  mobileNavButton.classList.add("mobileNavButtonHide");
  mobileNavButtonIcon.classList.add("mobileNavButtonIconHide");
  mobileNavMenuText.classList.add("mobileNavMenuTextHide");

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
  mobileNavMenuText.classList.remove("mobileNavMenuTextHide");

  mobileNavButton.classList.add("mobileNavButtonShow");
  mobileNavButtonIcon.classList.add("mobileNavButtonIconShow");
  mobileNavMenuText.classList.add("mobileNavMenuTextShow");

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

function whyUsTextAppear() {
  setTimeout(() => {
    whyUsText.classList.remove("whyUsTextStart");

    whyUsText.classList.add("whyUsTextTransition");
  }, 300);
}

function whyUsLeft() {
  setTimeout(() => {
    whyUsHeader.classList.remove("whyUsCenter");
    whyUsText.classList.remove("whyUsCenter");

    whyUsHeader.classList.add("whyUsLeft");
    whyUsText.classList.add("whyUsLeft");
  }, 550);
}

function whyUsImgAppear() {
  setTimeout(() => {
    whyUsImg.classList.remove("whyUsImgHidden");

    whyUsImg.classList.add("whyUsImgShown");
    isWhyUsDone = false;
  }, 700);
}
