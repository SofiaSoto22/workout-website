var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testimonialSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("Locations",7,400);
numCounter("Workouts",22,200);
numCounter("Clients",150,50);
numCounter("Trainers",12,250);