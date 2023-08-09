let title = document.getElementById("header");
let servicesHeader = document.querySelector("#servicesHeader");
let servicesTextOne = document.getElementById("servicesTextOne");
let servicesTextTwo = document.getElementById("servicesTextTwo");
let servicesTextThree = document.getElementById("servicesTextThree");

let whyUsHeader = document.querySelector("#whyUsHeader");
let whyUsText = document.querySelector("#whyUsText");
let whyUsImg = document.querySelector("#whyUsImg");

var about = document.querySelector("#about");
var pricing = document.querySelector("#pricing");
var contact = document.querySelector("#contact");

var mobileNavButton = document.querySelector("#mobileNavButton");
var mobileNavButtonIcon = document.querySelector("#mobileNavButtonIcon");

var mobileNavigator = true;

var isSectionOneDone = false;
var isSectionTwoDone = false;

console.log(servicesTextOne.innerHTML);
console.log(servicesTextOne.style.left);
if (window.matchMedia("(min-width: 64rem)").matches) {
  moveNavElements();
} else {
  mobileMenu();
}

addEventListener("scroll", (e) => {
  if (window.scrollY > 1000 && isSectionTwoDone == false) {
    whyUsHeader.classList.remove("whyUsHeaderStart");

    whyUsHeader.classList.add("whyUsHeaderTransition");

    whyUsTextAppear();
    whyUsLeft();
    whyUsImgAppear();
    isSectionTwoDone = true;
  } else {
    whyUsHeader.style.marginTop = (1000 - window.scrollY) * 0.25 + "px";
    whyUsText.style.marginTop = (1000 - window.scrollY) * 0.25 + "px";
    whyUsImg.style.marginTop = (1000 - window.scrollY) * 0.25 + "px";
  }

  if (window.matchMedia("(min-width: 64rem)").matches) {
    moveNavElements();
  }

  //
  console.log(window.scrollY);
  title.style.marginTop = window.scrollY * 1.2 + "px";
  //
  //
  if (window.scrollY < 515 && isSectionOneDone == false) {
    // <515
    servicesHeader.style.marginTop = window.scrollY * 1.2 + "px";
    //
    if (
      window.scrollY > 380 && // >380 Desktop
      window.matchMedia("(min-width: 64rem)").matches
    ) {
      //
      servicesTextOne.style.marginTop = (window.scrollY - 380) * -3 + "px";
      servicesTextOne.style.left = 565 - window.scrollY + "%";

      servicesTextTwo.style.marginTop = (window.scrollY - 380) * -3 + "px";
      servicesTextTwo.style.left = -465 + window.scrollY + "%";

      servicesTextThree.style.marginTop = (window.scrollY - 380) * -3 + "px";
      servicesTextThree.style.left = 565 - window.scrollY + "%";
      //
    } else if (window.scrollY > 380) {
      // >380 Mobile
      servicesTextOne.style.marginTop = (window.scrollY - 380) * -3 + 90 + "px";
      servicesTextTwo.style.marginTop = (window.scrollY - 380) * -3 + 90 + "px";
      servicesTextThree.style.marginTop =
        (window.scrollY - 380) * -3 + 90 + "px";
    }
    //
    //
    //
    if (
      window.scrollY < 50 && // <50 Desktop
      window.matchMedia("(min-width: 64rem)").matches
    ) {
      servicesTextOne.style.marginTop = (50 - 380) * -3 + "px";
      servicesTextTwo.style.marginTop = (50 - 380) * -3 + "px";
      servicesTextThree.style.marginTop = (50 - 380) * -3 + "px";
      //
    } else if (window.scrollY < 50) {
      // >50 Mobile
      servicesTextOne.style.marginTop = (50 - 380) * -3 + 90 + "px";
      servicesTextTwo.style.marginTop = (50 - 380) * -3 + 90 + "px";
      servicesTextThree.style.marginTop = (50 - 380) * -3 + 90 + "px";
    }
    //
    //
    //
  } // >515
  else {
    isSectionOneDone = true;
    servicesHeader.style.marginTop =
      515 * 1.2 + (515 - window.scrollY) * 0.75 + "px";
    servicesTextOne.style.left = 565 - 515 + "%";
    servicesTextTwo.style.left = 565 - 515 + "%";
    servicesTextThree.style.left = 565 - 515 + "%";

    if (window.matchMedia("(min-width: 64rem)").matches) {
      servicesTextOne.style.marginTop =
        (515 - 380 - (515 - window.scrollY) * 0.25) * -3 + "px";
      servicesTextTwo.style.marginTop =
        (515 - 380 - (515 - window.scrollY) * 0.25) * -3 + "px";
      servicesTextThree.style.marginTop =
        (515 - 380 - (515 - window.scrollY) * 0.25) * -3 + "px";
    } else {
      servicesTextOne.style.marginTop =
        (515 - 380 - (515 - window.scrollY) * 0.25) * -3 + 90 + "px";
      servicesTextTwo.style.marginTop =
        (515 - 380 - (515 - window.scrollY) * 0.25) * -3 + 90 + "px";
      servicesTextThree.style.marginTop =
        (515 - 380 - (515 - window.scrollY) * 0.25) * -3 + 90 + "px";
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

function whyUsTextAppear() {
  setTimeout(() => {
    whyUsText.classList.remove("whyUsTextStart");

    whyUsText.classList.add("whyUsTextTransition");
  }, 500);
}

function whyUsLeft() {
  setTimeout(() => {
    whyUsHeader.classList.remove("whyUsCenter");
    whyUsText.classList.remove("whyUsCenter");

    whyUsHeader.classList.add("whyUsLeft");
    whyUsText.classList.add("whyUsLeft");
  }, 1500);
}

function whyUsImgAppear() {
  setTimeout(() => {
    whyUsImg.classList.remove("whyUsImgHidden");

    whyUsImg.classList.add("whyUsImgShown");
    isWhyUsDone = false;
  }, 2000);
}
