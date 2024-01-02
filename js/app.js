window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 10) {
        document.querySelector(".header").classList.add("headerShadow");
    } else {
        document.querySelector(".header").classList.remove("headerShadow");
    }
});
