let services = document.querySelector("#services");
let servicesHeader = document.querySelector("#servicesHeader");
let servicesTexts = document.querySelectorAll(".services");
let servicesTextOne = document.getElementById("servicesTextOne");
let servicesTextTwo = document.getElementById("servicesTextTwo");
let servicesTextThree = document.getElementById("servicesTextThree");

let whyUsHeader = document.querySelector("#whyUsHeader");
let whyUsText = document.querySelector("#whyUsText");
let whyUsImg = document.querySelector("#whyUsImg");

let waitHeader = document.querySelector("#waitHeader");
let waitTextContainer = document.querySelector("#waitTextContainer");

var about = document.querySelector("#about");
var pricing = document.querySelector("#pricing");
var contact = document.querySelector("#contact");

var mobileNavButton = document.querySelector("#mobileNavButton");
var mobileNavButtonIcon = document.querySelector("#mobileNavButtonIcon");
var mobileNavMenuText = document.querySelector("#mobileNavMenuText");

var mobileNavigator = true;

var isSectionOneDone = false;
var isSectionTwoDone = false;
var isSectionThreeDone = false;

var i = 0;

var isDesktop = true;
console.log(servicesTexts)
if (window.matchMedia("(min-width:64rem)").matches) {
  isDesktop = true;
} else {
  isDesktop = false;
}

addEventListener("scroll", (e) => {
  if (isDesktop) {
    title.style.marginTop = window.scrollY * 1.2 + "px";
    //Section 1--------------
    if (window.scrollY < 515 && isSectionOneDone == false) {
      // <515
      servicesHeader.style.marginTop = window.scrollY * 1.2 + "px";
      if (window.scrollY > 380) {
        //
        servicesTextOne.style.marginTop = (window.scrollY - 380) * -3 + "px";
        servicesTextOne.style.left = 565 - window.scrollY + "%";

        servicesTextTwo.style.marginTop = (window.scrollY - 380) * -3 + "px";
        servicesTextTwo.style.left = -465 + window.scrollY + "%";

        servicesTextThree.style.marginTop = (window.scrollY - 380) * -3 + "px";
        servicesTextThree.style.left = 565 - window.scrollY + "%";
        //
      } else if (window.scrollY > 380) {
        // ==========================
        // >380 Mobile
        servicesTextOne.style.marginTop =
          (window.scrollY - 380) * -3 + 90 + "px";
        servicesTextTwo.style.marginTop =
          (window.scrollY - 380) * -3 + 90 + "px";
        servicesTextThree.style.marginTop =
          (window.scrollY - 380) * -3 + 90 + "px";
      }
      //
      //
      //
      //
    } // >515
    else {
      ServicesFinalDesktop();
    }

    if (window.scrollY < 50) {
      ServicesStartDesktop();
    }

    //Section 2---------------------
    if (window.scrollY > 950) {
      if (isSectionTwoDone == false) {
        whyUsHeader.classList.remove("whyUsHeaderStart");

        whyUsHeader.classList.add("whyUsHeaderTransition");

        whyUsTextAppear();
        whyUsLeft();
        whyUsImgAppear();
        isSectionTwoDone = true;
      } else {
      }
    } else {
      whyUsHeader.style.marginTop = (950 - window.scrollY) * 1 + "px";
      whyUsText.style.marginTop = (950 - window.scrollY) * 1 + "px";
      whyUsImg.style.marginTop = (950 - window.scrollY) * 1 + "px";
      console.log("doing");
    }

    //
    console.log(window.scrollY);

    //Section 3---------------------

    console.log("hiii");
    if (isSectionThreeDone == false && window.scrollY > 1600) {
      isSectionThreeDone = true;
      waitTextContainer.classList.remove("waitTextContainerStart");
      waitTextContainer.classList.add("waitTextContainerTransition");

      setTimeout(() => {
        waitHeader.classList.remove("waitHeaderStart");
        waitHeader.classList.add("waitHeaderTransition");
      }, 250);
    }

    //
    //
  }

  if (!isDesktop) {
    title.style.marginTop = window.scrollY * 1.2 + "px";
    if(window.scrollY>100){
    services.style.marginTop = window.scrollY * -0.75 + 100 + "px";

    servicesTexts[0].style.marginTop = window.scrollY * -0.2 + 100 + "px";
    servicesTexts[1].style.marginTop = window.scrollY * -0.275 + 100 + "px";
    servicesTexts[2].style.marginTop = window.scrollY * -0.35 + 100 + "px";

    

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

function ServicesFinalDesktop() {
  isSectionOneDone = true;
  servicesHeader.style.marginTop =
    515 * 1.2 + (515 - window.scrollY) * 0.75 + "px";

  servicesTextOne.style.left = 565 - 515 + "%";
  servicesTextTwo.style.left = 565 - 515 + "%";
  servicesTextThree.style.left = 565 - 515 + "%";

  if (isDesktop) {
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

function ServicesStartDesktop() {
  if (isDesktop) {
    servicesTextOne.style.marginTop = (50 - 380) * -3 + "px";
    servicesTextTwo.style.marginTop = (50 - 380) * -3 + "px";
    servicesTextThree.style.marginTop = (50 - 380) * -3 + "px";
    //
  } else {
    // <50 Mobile
    servicesTextOne.style.marginTop = (50 - 380) * -3 + 90 + "px";
    servicesTextTwo.style.marginTop = (50 - 380) * -3 + 90 + "px";
    servicesTextThree.style.marginTop = (50 - 380) * -3 + 90 + "px";
  }
}
