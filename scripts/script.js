// -----------------------------------------------------
// Carousel
// -----------------------------------------------------

var $carousel = document.getElementById("carousel");
var $slide = $carousel.children;

var $suivant = document.getElementById("suivant");
var $precedent = document.getElementById('precedent');


function carouselSlide(){
  for (var i = 0; i < $slide.length; i++) {
  if ($slide[i].classList.contains('active')) {
    $slide[i].classList.remove('active');
  }
  else {
    $slide[i].classList.add('active');
  }
  }
}
$suivant.onclick = carouselSlide;
$precedent.onclick = carouselSlide;

var interval = setInterval(carouselSlide, 5000);


// -----------------------------------------------------
// Modal video
// -----------------------------------------------------

$modal = document.getElementById("modal");
$btnVideo = document.getElementById('btn-video');
$btnClose = document.getElementById("btnClose");

// ouverture modal
$btnVideo.onclick = function () {
    $modal.classList.remove("closed");
    $modal.classList.add("opened");
    clearInterval(interval); //stoppe la lecture du carousel
}

// fermeture modal
$btnClose.onclick = function () {
    $modal.classList.remove("opened");
    $modal.classList.add("closed");
    interval = setInterval(carouselSlide, 5000); // relance la lecture du carousel
}
