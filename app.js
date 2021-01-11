 
window.addEventListener("scroll",function(){
    var myNav = document.querySelector("nav");
    myNav.classList.toggle("sticky",  window.scrollY>80);
    // 

    
  });

  

window.addEventListener("scroll",function(){
if(window.scrollY>80){
  document.querySelector("#img-logo").src="bootstrap-img/my-logo-3.png"
}else{
  document.querySelector("#img-logo").src="bootstrap-img/my-logo-2.png"
}

});


 
//  below the line code of responsive small dive for navbar menu;


var menu = document.querySelector(".menu-slide");
var menuopenBtn = document.querySelector(".menu-btn-icon");
var menucloseBtn = document.querySelector(".menu-censelbtn-icon");
 var bodyTag = document.querySelector(".myBody")

menuopenBtn.addEventListener("click", function(){
  menu.classList.add("active");
  menuopenBtn.classList.add("hide");
  bodyTag.classList.add("scroll-hide");
});

menucloseBtn.addEventListener("click", function(){
  menu.classList.remove("active");
  menuopenBtn.classList.remove("hide");
  bodyTag.classList.remove("scroll-hide");
});
 