function toggleMenu() {
    const navlinks = document.querySelector(".nav-links");
    navlinks.classList.toggle("active");
}
let answers = document.querySelectorAll(".accordion");
answers.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        if (accordion.classList.contains("active")) {
            accordion.classList.remove("active");
        } else {
            accordion.classList.add("active");
        }
    });
});