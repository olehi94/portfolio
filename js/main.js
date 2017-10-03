//event on window scroll
window.onscroll = function () {
    scrollFunctionHeader();
    scrollFunctionGoTop();
    scrollDependingNavBorder();
}
//header fixed menu
function scrollFunctionHeader() {
    var header = document.getElementById("header");
    var headerImg = document.images[0];

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.backgroundColor = "#14171c";
        headerImg.style.width = "38px";
        headerImg.style.height = "38px";
    }
    else {
        header.style.position = "absolute";
        header.style.top = "20px";
        header.style.backgroundColor = "transparent";
        headerImg.style.width = "42px";
        headerImg.style.height = "42px";
    }
}
//footer go-top
function scrollFunctionGoTop() {
    var goTop = document.getElementById("go-top");
    if (window.pageYOffset > 400) {
        //document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
        goTop.style.visibility = "visible";
        goTop.style.opacity = "1";
    }
    else {
        goTop.style.visibility = "hidden";
        goTop.style.opacity = "0";
    }
}
//header boreder

//opacity nav scroll
function opacityNavScroll(elem) {
    //inner html equal to every id section
    var a = document.getElementById(elem.innerHTML);
    
    a.style.opacity = "0"; // when clicked, set opacity 0

    tmpFuncOpacity = function () { // after .7s 
        a.style.opacity = "1";
        a.style.transition = "opacity .7s ease-in-out";
    }
    setTimeout(tmpFuncOpacity,10); //timer
    
    a.style.transitionDuration = "0s"; //reset
}

//opacity "process" when clicked "learn more"
function opacityProcessScroll(elem) {
    var a = document.getElementById("process");

    a.style.opacity = "0"; // when clicked, set opacity 0

    tmpFuncOpacity = function () { // after .7s 
        a.style.opacity = "1";
        a.style.transition = "opacity .7s ease-in-out";
    }
    setTimeout(tmpFuncOpacity,10); //timer

    a.style.transitionDuration = "0s"; //reset
}

//opacity begining of page
function opacityGoTopScroll(elem) {
    var a = document.getElementById("home");

    a.style.opacity = "0"; // when clicked, set opacity 0

    tmpFuncOpacity = function () { // after .7s 
        a.style.opacity = "1";
        a.style.transition = "opacity .7s ease-in-out";
    }
    setTimeout(tmpFuncOpacity,10); //timer

    a.style.transitionDuration = "0s"; //reset
}

//slider
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("testimonials-sliders");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 5000);
}
//slider FINISH


function scrollDependingNavBorder() {
    //homeHeight
    var home = document.getElementById("home");
    var homeHeight = home.offsetHeight;
    //processHeight
    var process = document.getElementById("process");
    var processHeight = process.offsetHeight + homeHeight;
    //featuresHeight
    var features = document.getElementById("features");
    var featuresHeight = features.offsetHeight + processHeight;
    //pricingHeight
    var pricing = document.getElementById("pricing");
    var pricingHeight = pricing.offsetHeight + featuresHeight;
    //testimonials
    var testimonials = document.getElementById("testimonials");
    var testimonialsHeight = testimonials.offsetHeight + pricingHeight;
    //faqHeight
    var faq = document.getElementById("faq");
    var faqHeight = faq.offsetHeight + testimonialsHeight;
    //children elements of mainNav
    var childElem = document.getElementsByClassName("main-nav")[0].children;
    
        //  ..< homeSection
    if (window.pageYOffset < homeHeight) {

        for (var i = 0; i < childElem.length - 1; i++)
            childElem[i].classList.remove("active");
        childElem[0].classList.add("active");
    }
        //  ..< processSection
    else if (window.pageYOffset >= homeHeight
          && window.pageYOffset < processHeight) {

        for (var i = 0; i < childElem.length - 1; i++)
            childElem[i].classList.remove("active");
        childElem[1].classList.add("active");
    }
        //  ..< featuresSection
    else if (window.pageYOffset >= processHeight
          && window.pageYOffset < featuresHeight) {

        for (var i = 0; i < childElem.length - 1; i++)
            childElem[i].classList.remove("active");
        childElem[2].classList.add("active");
    }
        //  ..< homeSection
    else if (window.pageYOffset >= featuresHeight
          && window.pageYOffset < pricingHeight) {

        for (var i = 0; i < childElem.length - 1; i++)
            childElem[i].classList.remove("active");
        childElem[3].classList.add("active");
    }
        //  ..< homeSection
    else if (window.pageYOffset >= pricingHeight
          && window.pageYOffset < testimonialsHeight) {

        for (var i = 0; i < childElem.length - 1; i++)
            childElem[i].classList.remove("active");
    }
        //  ..< homeSection
    else if (window.pageYOffset >= testimonialsHeight
         && window.pageYOffset < faqHeight-220) {

        for (var i = 0; i < childElem.length - 1; i++)
            childElem[i].classList.remove("active");
        childElem[4].classList.add("active");
    }
        //  ..< homeSection
    else if (window.pageYOffset >= faqHeight - 220) {
        for (var i = 0; i < childElem.length - 1; i++)
            childElem[i].classList.remove("active");
    }
    
}

