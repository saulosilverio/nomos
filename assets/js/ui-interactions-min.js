const menuBtn=document.getElementById("menuMobile"),mainMenu=document.getElementById("mainMenu"),closeMenu=document.getElementById("closeMenu");function dropDown(e){document.getElementById(e).classList.toggle("opn-ddw")}menuBtn.addEventListener("click",(()=>{mainMenu.classList.add("opn-menu")})),closeMenu.addEventListener("click",(()=>{mainMenu.classList.remove("opn-menu")}));