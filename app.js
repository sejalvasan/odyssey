
//theme
const themeToggle = document.querySelector(".checkbox");
const body=document.querySelector("body");
themeToggle.addEventListener("change",function(){
   body.classList.toggle("dark");
})