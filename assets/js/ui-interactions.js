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

// Donut Chart
const courseProgress = document.getElementById("courseProgress")
const donutPercentage = courseProgress.getAttribute("data-course-progress")
const donutSegment = document.getElementById("donutSegment")

function donutChart() {
    donutSegment.setAttribute("stroke-dasharray", `${donutPercentage} ${100 - donutPercentage}`)
    courseProgress.innerText = `${donutPercentage}%`
}

document.addEventListener("DOMContentLoaded", function(e) {
    donutChart();
})
