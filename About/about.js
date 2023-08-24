let services = document.querySelector("#services");
let servicesHeader = document.querySelector("#servicesHeader");
let servicesTexts = document.querySelectorAll(".services");
let servicesTextOne = document.getElementById("servicesTextOne");
let servicesTextTwo = document.getElementById("servicesTextTwo");
let servicesTextThree = document.getElementById("servicesTextThree");

let whyUsHeader = document.querySelector("#whyUsHeader");
let whyUsText = document.querySelector("#whyUsText");
let whyUsImg = document.querySelector("#whyUsImg");
let whyUsTexts = document.querySelectorAll(".whyUsTexts");

let waitHeader = document.querySelector("#waitHeader");
let wait = document.querySelector("#wait");

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
if (window.matchMedia("(min-width:64rem)").matches) {
  isDesktop = true;
} else {
  isDesktop = false;
}

addEventListener("scroll", (e) => {
  if (isDesktop) {
          console.log("change");

    if(window.scrollY<800){
    title.style.marginTop = window.scrollY * 1.2 + "px";

    }
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
    if (window.scrollY > 1000) {
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
      whyUsHeader.style.marginTop = (1000 - window.scrollY) * 1 + "px";
      whyUsText.style.marginTop = (1000 - window.scrollY) * 1 + "px";
      whyUsImg.style.marginTop = (1000 - window.scrollY) * 1 + "px";
    }

    //
    console.log(window.scrollY);

    //Section 3---------------------

    if (isSectionThreeDone == false && window.scrollY > 1600) {
      isSectionThreeDone = true;
      wait.classList.remove("waitStart");
      wait.classList.add("waitTransition");

      setTimeout(() => {
        waitHeader.classList.remove("waitHeaderStart");
        waitHeader.classList.add("waitHeaderTransition");
      }, 250);
    }

    //
    //
  }

  if (!isDesktop) {
        if (window.scrollY < 800) {
          title.style.marginTop = window.scrollY * 1.2 + "px";
        }
    if (window.scrollY > 100) {
      services.style.marginTop = window.scrollY * -0.75 + 100 + "px";

      servicesTexts[0].style.marginTop = window.scrollY * -0.2 + 100 + "px";
      servicesTexts[1].style.marginTop = window.scrollY * -0.275 + 100 + "px";
      servicesTexts[2].style.marginTop = window.scrollY * -0.35 + 100 + "px";
    }
    switch (true) {
      case window.scrollY > 1850:
        whyUsTexts[3].classList.remove("hide");
        whyUsTexts[3].classList.add("show");
        break;
      case window.scrollY > 1600:
        whyUsTexts[2].classList.remove("hide");
        whyUsTexts[2].classList.add("show");
        break;

      case window.scrollY > 1350:
        whyUsTexts[1].classList.remove("hide");
        whyUsTexts[1].classList.add("show");
        break;

      case window.scrollY > 1050:
        whyUsTexts[0].classList.remove("hide");
        whyUsTexts[0].classList.add("show");

        break;
    }

    if (window.scrollY > 2500) {
      isSectionThreeDone = true;
      wait.classList.remove("waitStart");
      wait.classList.add("waitTransition");
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
