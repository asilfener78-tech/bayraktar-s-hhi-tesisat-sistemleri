let headerMenuIcon = document.querySelector(".header-menu-icon");
let headerMenuList = document.querySelector(".header-menu-list");
let headerMenuXButton = document.getElementById("fa-xmark");

headerMenuIcon.addEventListener("click", function () {
  headerMenuList.classList.add("left");
});

headerMenuXButton.addEventListener("click", function () {
  headerMenuList.classList.remove("left");
});

let navLinks = document.querySelectorAll(".header-menu-list li");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    headerMenuList.classList.remove("left");
  });
});

// HERO-SLİDE BACKGROUND AUTO

let allImages = document.querySelectorAll(".hero-slide");

let heroIndex = 0;

setInterval(function () {
  allImages[heroIndex].classList.remove("active");

  heroIndex++;
  if (heroIndex === allImages.length) {
    heroIndex = 0;
  }

  allImages[heroIndex].classList.add("active");
}, 4000);

// HEROTEXT TİTLE AUTO

let reads = [
  "SU KAÇAR, BAYRAKTAR SIHHİ TESİSATLAR YAKALAR.",
  "SU TESİSATINDA KALİTELİ İŞÇİLİK,KALICI ÇÖZÜMLER",
  "PROFESYONEL SIHHİ TESİSAT ÇÖZÜMLERİNDE GÜVENİLİR ADRES.",
];

let index = 0;

function showReads() {
  let heroText = document.getElementById("heroText");
  let render = reads[index];

  heroText.textContent = render;

  index++;
  if (index === reads.length) {
    index = 0;
  }
}

showReads();
setInterval(showReads, 4000);

// HERO BUTTON SCROLL BEHAVİOR

let workButton = document.querySelector(".hero-cta-btn-one");
let contactButton = document.querySelector(".hero-cta-btn-two");

let sectionWork = document.querySelector(".our-work");
let sectionContact = document.querySelector(".contact");

workButton.addEventListener("click", function () {
  sectionWork.scrollIntoView({
    behavior: "smooth",
  });
});

contactButton.addEventListener("click", function () {
  sectionContact.scrollIntoView({
    behavior: "smooth",
  });
});

// OURWORK SLİDER

let ourWorkContainer = document.querySelector(".ourwork-slider-container");
let ourWorkAllImages = document.querySelectorAll(".ourwork-slide");
let ourWorkIndex = 0;

let ourWorkPrev = document.querySelector(".our-work-prev");
let ourWorkNext = document.querySelector(".our-work-next");

function ourWorkShowSlider(ourWorkIndex) {
  let ourWorkSlider = document.getElementById("ourwork-slider");
  let ourWorkImagesWidth = ourWorkAllImages[0].clientWidth;
  ourWorkSlider.style.transform = `translateX(-${ourWorkIndex * ourWorkImagesWidth}px)`;
}

ourWorkPrev.addEventListener("click", function () {
  ourWorkIndex--;
  if (ourWorkIndex < 0) {
    ourWorkIndex = ourWorkAllImages.length - 1;
  }
  ourWorkShowSlider(ourWorkIndex);
});

ourWorkNext.addEventListener("click", function () {
  ourWorkIndex++;
  if (ourWorkIndex >= ourWorkAllImages.length) {
    ourWorkIndex = 0;
  }
  ourWorkShowSlider(ourWorkIndex);
});

let overlayButtons = document.querySelectorAll(".overlay-button");
let ourWorkXButton = document.getElementById("our-work-xmark");

overlayButtons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    ourWorkContainer.classList.add("containerShow");
    ourWorkIndex = index;
    ourWorkShowSlider(ourWorkIndex);
  });
});

ourWorkXButton.addEventListener("click", function () {
  ourWorkContainer.classList.remove("containerShow");
});

ourWorkShowSlider(ourWorkIndex);

// ABOUT SLİDER

let aboutSliderContainer = document.querySelector(".about-container-slider");
let aboutImagesAll = document.querySelectorAll(".about-slide");
let aboutIndex = 0;

function aboutSliderShow(aboutIndex) {
  let aboutSlider = document.getElementById("about-slider");
  let aboutImagesWidth = aboutImagesAll[0].clientWidth;
  aboutSlider.style.transform = `translateX(-${aboutIndex * aboutImagesWidth}px)`;
}

let aboutPrev = document.querySelector(".about-prev");
let aboutNext = document.querySelector(".about-next");

aboutPrev.addEventListener("click", function () {
  aboutIndex--;
  if (aboutIndex < 0) {
    aboutIndex = aboutImagesAll.length - 1;
  }
  aboutSliderShow(aboutIndex);
});

aboutNext.addEventListener("click", function () {
  aboutIndex++;
  if (aboutIndex >= aboutImagesAll.length) {
    aboutIndex = 0;
  }
  aboutSliderShow(aboutIndex);
});

function aboutAutoSlider() {
  aboutIndex++;
  if (aboutIndex >= aboutImagesAll.length) {
    aboutIndex = 0;
  }
  aboutSliderShow(aboutIndex);
}

let aboutSliderTimer = setInterval(function () {
  aboutAutoSlider();
}, 4000);

aboutSliderContainer.addEventListener("mouseenter", function () {
  clearInterval(aboutSliderTimer);
});

aboutSliderContainer.addEventListener("mouseleave", function () {
  aboutSliderTimer = setInterval(function () {
    aboutAutoSlider();
  }, 4000);
});
aboutSliderShow(aboutIndex);

// REFERENCES AUTO SLİDER

let referencesContainerSlider = document.querySelector(
  ".references-container-slider",
);
let referencesAllDiv = document.querySelectorAll(".references-slide");

let referencesPrev = document.querySelector(".references-prev");
let referencesNext = document.querySelector(".references-next");

let referencesIndex = 0;

function referencesSliderShow(referencesIndex) {
  let referencesSlider = document.querySelector(".references-slider");
  let referencesDivWidth = referencesAllDiv[0].clientWidth;
  referencesSlider.style.transform = `translateX(-${referencesIndex * referencesDivWidth}px)`;
}

referencesPrev.addEventListener("click", function () {
  referencesIndex--;
  if (referencesIndex < 0) {
    referencesIndex = referencesAllDiv.length - 1;
  }
  referencesSliderShow(referencesIndex);
});

referencesNext.addEventListener("click", function () {
  referencesIndex++;
  if (referencesIndex >= referencesAllDiv.length) {
    referencesIndex = 0;
  }
  referencesSliderShow(referencesIndex);
});

let referencesAutoTimer = setInterval(function () {
  referencesIndex++;
  if (referencesIndex >= referencesAllDiv.length) {
    referencesIndex = 0;
  }
  referencesSliderShow(referencesIndex);
}, 3500);

referencesContainerSlider.addEventListener("mouseenter", function () {
  clearInterval(referencesAutoTimer);
});

referencesContainerSlider.addEventListener("mouseleave", function () {
  referencesAutoTimer = setInterval(function () {
    referencesIndex++;
    if (referencesIndex >= referencesAllDiv.length) {
      referencesIndex = 0;
    }
    referencesSliderShow(referencesIndex);
  }, 3500);
});

referencesSliderShow(referencesIndex);

let counters = document.querySelectorAll(".counter");
let counterIndex = 0;

counters.forEach(function (counter) {
  let target = parseInt(counter.getAttribute("data-target"));

  let interVal = setInterval(function () {
    counterIndex++;
    counter.textContent = "+" + counterIndex;
    if (counterIndex >= target) {
      clearInterval(interVal);
    }
  }, 50);
});

// FORM EMAİL GÖNDERME

let form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let fullNames = document.getElementById("fullNames"); 
  let phone = document.getElementById("phone"); 
  let email = document.getElementById("email"); 
  let message = document.getElementById("fullNames"); 

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let messageError = document.getElementById("messageError");

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";

  if (!fullNames.value.trim().split(" ")){
    fullNames.textContent = "Lütfen Adınızı ve Soyadınızı girin";
    return isValid;
  }


  emailjs.init({
    publicKey: "2QdVZXj9UMxPGZeYN",
  });

  emailjs
    .sendForm("service_krrjnrs", "template_7d9zge7", form)

    .then(function () {
      alert("Mesaj gönderildi.");

      form.reset();
    })

    .catch(function (error) {
      alert("Mesaj gönderilmedi");

      console.log(error);
    });
});


// FORM VALİDATİON

