let pricingHeader = document.querySelector("#pricingHeader");
let pricingTextOne = document.getElementById("pricingText");

var i = 0;

var isSectionOneDone = false;

addEventListener("scroll", (e) => {
  if (window.matchMedia("(min-width:64rem)").matches) {
    title.style.marginTop = window.scrollY * 1.2 + "px";
    //
    //
    if (window.scrollY < 515 && isSectionOneDone == false) {
      // <515
      pricingHeader.style.marginTop = window.scrollY * 1.2 + "px";

      if (
        window.scrollY > 380 && // >380 Desktop
        window.matchMedia("(min-width: 64rem)").matches
      ) {
        //
        pricingTextOne.style.marginTop = (window.scrollY - 380) * -3 + "px";
        //
      } else if (window.scrollY > 380) {
        // >380 Mobile
        pricingTextOne.style.marginTop =
          (window.scrollY - 380) * -3 + 90 + "px";
      }
      //
      //
      //
      if (
        window.scrollY < 50 && // <50 Desktop
        window.matchMedia("(min-width: 64rem)").matches
      ) {
        pricingTextOne.style.marginTop = (50 - 380) * -3 + "px";
        //
      } else if (window.scrollY < 50) {
        // >50 Mobile
        pricingTextOne.style.marginTop = (50 - 380) * -3 + 90 + "px";
      }
      //
      //
      //
    } // >515
    else {
           isSectionOneDone = true;
      pricingHeader.style.marginTop =
        515 * 1.2 + (515 - window.scrollY) * 0.75 + "px";

      pricingTextOne.style.left = 565 - 515 + "%";
    
      if (window.matchMedia("(min-width: 64rem)").matches) {
        pricingTextOne.style.marginTop =
          (515 - 380 - (515 - window.scrollY) * 0.25) * -3 + "px";
      } else {
        pricingTextOne.style.marginTop =
          (515 - 380 - (515 - window.scrollY) * 0.25) * -3 + 90 + "px";
      }
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
