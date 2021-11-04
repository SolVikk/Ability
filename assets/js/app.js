$(document).ready(function(){
  $('.clients__slick-wrapper').slick(
        {
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
            autoplay: true,
          autoplaySpeed: 8000,
            prevArrow: '<button type="button" class="slick-prev"><img src="../../assets/img/prevarrow.jpg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="../../assets/img/nextarrow.jpg"></button>',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        }
          );
});

var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


var input = document.getElementById("click");


var accept = document.getElementById("yes");


var noaccept = document.getElementById("no");

btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

accept.onclick = function() {
    input.setAttribute('checked', true),
    modal.style.display = "none";
}

noaccept.onclick = function() {
    input.removeAttribute('checked'),
    modal.style.display = "none";
}