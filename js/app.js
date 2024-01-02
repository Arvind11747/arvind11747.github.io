window.onscroll = function () { stickUp()};

    var sticky = document.getElementsByName('header')[0].offsetTop;

function stickUp() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}