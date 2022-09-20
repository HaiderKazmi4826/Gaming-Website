// Navbar Toggle
const headerNavbar = document.getElementById("header__navbar"),
      headerNavbarToggler = document.getElementById("header__navbar__toggler"),
      navLinks = document.querySelectorAll(".nav__link");
headerNavbarToggler.addEventListener("click",()=>{
    headerNavbar.classList.toggle("active");
    headerNavbarToggler.classList.toggle("active");
});
navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        headerNavbar.classList.remove("active");
        headerNavbarToggler.classList.remove("active");
    })
});

// Search Box Toggle
const searchBox = document.getElementById("search__box"),
      searchBoxToggleBtns = document.querySelectorAll(".search__box__toggle__btn");
searchBoxToggleBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        searchBox.classList.toggle("active");
    })
});

// Brands Swiper JS
const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });

// Latest Game Swiper
const latestGameSwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  // loop: true,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
}); 
// ReleasedGame Swiper
const ReleasedGameSwiper = new Swiper(".releasedGames__swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
}); 

