
$(function () {

  $(".logo, .menu__link, .header__link").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  var mixer = mixitup('.portfolio__content');
  
    
});

$(function () {
  const menu = document.querySelector(".menu")

  window.addEventListener("scroll", function () {
    const scrollPos = window.scrollY

    if (scrollPos > 90) {
      menu.classList.add('fixed')
    } else {
      menu.classList.remove('fixed')
    }
  });
});


$('.menu__btn, .menu__link').on('click', function () {
  $('.menu__btn').toggleClass('btn-cross');
  $('.menu__list').toggleClass('menu-open');
  $('.body').toggleClass('lock')
});

$('.menu__link').on('click', function () {
  $('.menu__btn').removeClass('btn-cross');
  $('.menu__list').removeClass('menu-open');
  $('.body').removeClass('lock')
});