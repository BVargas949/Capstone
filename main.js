// slideshow
var slideNum = 0;
show();

function show() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideNum++;
    if (slideNum > slides.length) {
        slideNum = 1
    }
    slides[slideNum - 1].style.display = "block";
    setTimeout(show, 4000);
}