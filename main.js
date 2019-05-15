// slideshow

// The variable slideNum has an initial value of 0
var slideNum = 0;

// the function show is being declared.
show();
//the variable i is being declared. Then, the variable slides is geting a class name slides. A for loop os created that states the displayed style to none. SlideNum is increasing by increments of 1. The if statement means if slideNum is greater than the length of slides, then slideNum equals 1. The timer is set to switch every 4 seconds but must be formatted in milliseconds.
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