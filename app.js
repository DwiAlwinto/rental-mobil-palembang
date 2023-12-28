var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  lazy: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ? header
let header = document.querySelector('header');
window.addEventListener("scroll", () => {
  header.classList.toggle("change-header", window.scrollY > 0 )
})

// open menu
let menu = document.querySelector("#menu-icon")
let navLinks = document.querySelector('.nav-links')
let nav = document.querySelector(".nav")
menu.onclick = () => {
  navLinks.classList.toggle("open-menu")
}
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navLinks.contains(e.target)) { 
    navLinks.classList.remove("open-menu");
  }
})


// ! video
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll(".video-gallery video");

  function playVideo(index) {
    videos.forEach((video, i) => {
      if (i === index) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  // Pause autoplay on page load
  videos.forEach((video) => {
    video.autoplay = false;
});
playVideo(currentVideoIndex);

});
