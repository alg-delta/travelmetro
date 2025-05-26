//модальне викно-старт
let openModal = document.querySelectorAll(".banner-btn-explore");
let closeModal = document.querySelector(".close-modal");
let Modalbtn = document.querySelector(".modal-btn");
let modalWrapper = document.querySelector(".modal-wrapper");
//console.log(openModal);
// console.log(closeModal);
// console.log(Modalbtn);
// console.log(modalWrapper);

for (let open of openModal) {
  open.addEventListener("click", function () {
    modalWrapper.style.display = "flex";
  });
}

closeModal.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});

Modalbtn.addEventListener("click", function () {
  modalWrapper.style.display = "none";
});

modalWrapper.addEventListener("click", function (event) {
  if (event.target === modalWrapper) {
    modalWrapper.style.display = "none";
  }
});

let tabs = document.querySelectorAll(".tab");
let cards = document.querySelectorAll(".card");

for (let tab of tabs) {
  tab.addEventListener("click", onClickTab);
}

function onClickTab(event) {
  let activeTab = event.target;
  for (let tab of tabs) {
    tab.classList.remove("tabs-active");
  }
  activeTab.classList.add("tabs-active");

  let filter = activeTab.getAttribute("data-target");
  console.log(filter);

  for (let card of cards) {
    let cardID = card.getAttribute("data-id");
    if (filter === cardID) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  }
}
for (let card of cards) {
  let cardID = card.getAttribute("data-id");
  if ("centre" === cardID) {
    card.style.display = "flex";
  } else {
    card.style.display = "none";
  }
}

//slider
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let sliderNext = document.querySelector(".nextBtn");
let sliderBack = document.querySelector(".backBtn");
console.log(slides);
console.log(dots);
console.log(sliderNext);
console.log(sliderBack);

let activeSlide = 0;
showSlide(activeSlide);
function showSlide(n) {
  if (n > slides.length - 1) {
    activeSlide = 0;
  }

  if (n < 0) {
    activeSlide = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i = i + 1) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slides[activeSlide].style.display = "flex";
  dots[activeSlide].classList.add("active");
}

sliderNext.addEventListener("click", function () {
  activeSlide = activeSlide + 1;
  showSlide(activeSlide);
});
sliderBack.addEventListener("click", function () {
  activeSlide = activeSlide - 1;
  showSlide(activeSlide);
});

for (let i = 0; i < dots.length; i = i + 1) {
  dots[i].addEventListener("click", function () {
    activeSlide = i;
    showSlide(activeSlide);
  });
}
$(document).ready(function () {
  $(window).on("scroll", function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() >= 200) {
      $(".upButton").fadeIn(500);
    } else {
      $(".upButton").fadeOut(500);
    }
  });

  $(".upButton").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });
  $(".list1").on("click", function () {
    $("html, body").animate({ scrollTop: 762 }, 500);
  });
  $(".list2").on("click", function () {
    $("html, body").animate({ scrollTop: 1080 }, 500);
  });
  $(".list3").on("click", function () {
    $("html, body").animate({ scrollTop: 1612 }, 1000);
  });
  $(".list4").on("click", function () {
    $("html, body").animate({ scrollTop: 1910 }, 1500);
  });
});
