
let swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesToScroll: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});


let userIcon = document.querySelector("#app-menu .icons ul li .user")
let loginRegister = document.querySelector("#app-menu .login-register")

userIcon.addEventListener("click",function(e){
  e.preventDefault()
      loginRegister.classList.toggle("d-none")
})
