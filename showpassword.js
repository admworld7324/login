const passwordFirld=document.getElementById("password")
const togglePassword=document.querySelector(".password-toggle-icon i")

togglePassword.addEventListener("click", function(){
    if (passwordFirld.type==="password"){
        passwordFirld.type="text";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    } else{
        passwordFirld.type="password";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
});
const passwordFirld1=document.getElementById("password1")
const togglePassword1=document.querySelector(".password-toggle-icon1 i")

togglePassword1.addEventListener("click", function(){
    if (passwordFirld1.type==="password"){
        passwordFirld1.type="text";
        togglePassword1.classList.remove("fa-eye-slash");
        togglePassword1.classList.add("fa-eye");
    } else{
        passwordFirld1.type="password";
        togglePassword1.classList.remove("fa-eye");
        togglePassword1.classList.add("fa-eye-slash");
    }
});