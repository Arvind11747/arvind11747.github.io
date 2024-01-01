window.onscroll = function () { stickUp()};

    var header = document.getElementById("header");
    var sticky = header.offsetTop;

function stickUp() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}