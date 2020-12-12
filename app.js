 
window.addEventListener("scroll",function(){
    var myNav = document.querySelector("nav");
    myNav.classList.toggle("sticky", window.scrollY>80);
  });

//  below the line code of responsive small dive for navbar menu;


var menu = document.querySelector(".menu-slide");
var menuopenBtn = document.querySelector(".menu-btn-icon");
var menucloseBtn = document.querySelector(".menu-censelbtn-icon");

menuopenBtn.addEventListener("click", function(){
  menu.classList.add("active");
  menuopenBtn.classList.add("hide");
});

menucloseBtn.addEventListener("click", function(){
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
});
 