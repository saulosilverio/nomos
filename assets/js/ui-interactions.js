const menuBtn = document.getElementById("menuMobile")
const mainMenu = document.getElementById("mainMenu")
const closeMenu = document.getElementById("closeMenu")

menuBtn.addEventListener("click", () => {
    mainMenu.classList.add("opn-menu");
});
closeMenu.addEventListener("click", () => {
    mainMenu.classList.remove("opn-menu");
});

// Dropdown
function dropDown(divID) {
    document.getElementById(divID).classList.toggle("opn-ddw");
}