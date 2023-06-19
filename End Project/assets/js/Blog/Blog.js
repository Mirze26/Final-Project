

let userIcon = document.querySelector("#app-menu .icons ul li .user")
let loginRegister = document.querySelector("#app-menu .login-register")

userIcon.addEventListener("click",function(e){
  e.preventDefault()
      loginRegister.classList.toggle("d-none")
})