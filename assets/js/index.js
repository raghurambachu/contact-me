const touchBtn = document.querySelector(".btn-touch");
const  contactWrapper = document.querySelector(".contact-container");
touchBtn.addEventListener("click",function(event){
    
    contactWrapper.classList.toggle("show-contact-container")
})