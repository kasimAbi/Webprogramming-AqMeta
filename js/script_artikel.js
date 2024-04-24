/* Bilder index */
var slideIndex = 1;
showSlides(slideIndex);

// nächstes Bild anzeigen
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// davor das Bild anzeigen
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// eigentliche slide methode
function showSlides(n) {
  var i;

  // elemente laden nach klassennamen
  var slides = document.getElementsByClassName("mySlides");

  // wenn die max. anzahl bilder überschritten wurden dann bild 1 anzeigen
  if (n > slides.length) {
    slideIndex = 1
  }

  // wenn die min. anzahl bilder unterschritten worden dann letztes bild anzeigen
  if (n < 1) {
    slideIndex = slides.length
  }

  // alle bilder verstecken
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // aktuelle bild anzeigen lassen
  slides[slideIndex - 1].style.display = "block";
}
