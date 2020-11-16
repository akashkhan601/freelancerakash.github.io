
window.addEventListener("scroll",function(){
    var myNav = document.querySelector("nav");
    myNav.classList.toggle("sticky", window.scrollY>80);
  })

//  below this form validation

var name = document.querySelector("#form1").val;
