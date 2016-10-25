$('.slide').slick({
  autoplay: true,
  autoplaySPeed: 5000,
  dots: true,
  pauseOnDotsHover: true,
  speed: 1000,
  cssEase: 'ease'
});

//Mygtukas pradzia

var i = 0;
var value = document.getElementById("value");
value.innerHTML= i;

function decrease() {
  i = i - 1;
  value.innerHTML= i;
};

function increase() {
  i = i + 1;
  value.innerHTML= i;
};

//Mygtukas pabaiga
