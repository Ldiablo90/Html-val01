// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("slider-item");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1}
//   x[slideIndex-1].style.display = "block";
//   setTimeout(carousel, 5000); // Change image every 2 seconds
// }

/*===================================================================================*/
var radiobtn = "slide01-radio-",
    index = 1;

setInterval(() => {
    autoMove()
}, 8000);
function autoMove() {
    if (index >= 5) { index = 1; document.querySelector("#" + radiobtn + index).checked = true; }
    else { document.querySelector("#" + radiobtn + index).checked = true; index += 1; }
}
document.querySelector("#"+radiobtn+1).addEventListener('click',()=>{index = 1});
document.querySelector("#"+radiobtn+2).addEventListener('click',()=>{index = 2});
document.querySelector("#"+radiobtn+3).addEventListener('click',()=>{index = 3});
document.querySelector("#"+radiobtn+4).addEventListener('click',()=>{index = 4});
/*===================================================================================*/





/*===================================================================================*/

/*
var slides = document.querySelector('.slider02-ul'),




    slide = document.querySelectorAll('.slider02-ul li'),
    currentIdx = 4,
    slideCount = slide.length,
    slideWidth = 100,
    prevBtn = document.querySelector('.btn-prev'),
    nextBtn = document.querySelector('.btn-next');
makeclone();
function makeclone() {
    for (var i = 0; i < slideCount; i++) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for (var i = slideCount - 1; i >= 0; i--) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    setIntialPos()
    setTimeout(() => {
        slides.classList.add('animated');
    }, 100);
}
function setIntialPos() {
    var initialTranslateValue = -(slideCount * slideWidth);
    slides.style.transform = 'translateX(' + initialTranslateValue + '%)';

}

prevBtn.addEventListener('click', function () {
    moveSlide(currentIdx - 1);
});

nextBtn.addEventListener('click', function () {
    moveSlide(currentIdx + 1);
});

function moveSlide(num) {

    if (currentIdx == 3 || currentIdx == 8) {
        setTimeout(() => {
            slides.classList.remove('animated');
            slides.style.transform = 'translateX(-400%)';
            currentIdx = 4;
        }, 500);
        setTimeout(() => {
            slides.classList.add('animated');
        }, 600);
    }
    slides.style.transform = 'translateX(' + (-(num * slideWidth)) + '%)';
    currentIdx = num
    console.log(currentIdx, slideCount);
}
*/