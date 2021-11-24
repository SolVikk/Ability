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

wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true        // default
    }
)
wow.init();


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
// Smooth scroll and page up

$(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top-100});
        return false;
    });
   jQuery(function($) {
            $(window).scroll(function(){
                if($(this).scrollTop()>200){
                    $('#navigation').addClass('fixed');
                }
                else if ($(this).scrollTop()<200){
                    $('#navigation').removeClass('fixed');
                }
            });
        });
$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "action_page.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
/*        $('#consultation, #order').fadeOut();*/
        $('#thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__list'),
    menuItem = document.querySelectorAll('.nav__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger--active');
        menu.classList.toggle('nav__list--active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger--active');
            menu.classList.toggle('nav__list--active');
        })
    })
})


/*
$('.hamburger').click(function() {
      $(.nav__list).slideUp(2000);
   });
*/

/*
$(document).ready(function(){
    $(".hamburger").click(function(){
    $(".nav__list").slideToggle("slow",function()
    );
  });});
*/


/*
$(document).ready(function(){

    $('.hamburger').click(function(){
        element = $('.nav-list');
        display = element.css('display');
        if(display == 'none')
            $('.nav-list').slideDown(400);
        if(display == 'block')
            $('.nav-list').slideUp(400);
    });

});
*/