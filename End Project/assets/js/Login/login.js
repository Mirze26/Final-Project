let userIcon = document.querySelector(".menu-area #app-menu .icons ul li .user")
let loginRegister = document.querySelector(".menu-area #app-menu .login-register")

userIcon.addEventListener("click",function(e){
  e.preventDefault()
      loginRegister.classList.toggle("d-none")
})