const hamburger = document.querySelector (".hamburger");
const menulist = document.querySelector (".menulist");

hamburger .addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menulist.classList.toggle("active");
})

document.querySelectorAll(".menu ul li").forEach(n => n.addEventListener ("click", () => {
    hamburger.classList.remove("active")
    menulist.classList.remove("active")
} ))