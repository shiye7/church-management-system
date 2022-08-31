function onLinkClick(e) {
    const link = $(this);
    e.preventDefault();
    const location = link.attr('href');
    const target = $(location);
    let top = target?.position()?.top || 0;
    if (!location.startsWith('#')) {
        window.location.href = location;
        return;
    }

    window.scroll({
        top: top ? top - 130 : 0,
        left: 0,
        behavior: "smooth",
    });


    

}
function onLoad() {
    const body = $(window);
    const nav = $('.scroll-nav');
    const mainNav = $('.navbar');
    body.scroll((val) => {
        const scrollVal = $(this).scrollTop();
        const up = $('.scroll-up');
        console.log(scrollVal);
        if (scrollVal > 69) {
            if (up.hasClass('hide')) {
                up.removeClass('hide');
            }
            if (nav.hasClass('hide')) {
                nav.removeClass('hide');
            }
            if (!mainNav.hasClass('invisible')) {
                mainNav.addClass('invisible');
            }

        } else if (scrollVal <= 69) {
            if (!up.hasClass('hide')) {
                up.addClass('hide');
            }
            if (!nav.hasClass('hide')) {
                nav.addClass('hide');
            }
            if (mainNav.hasClass('invisible')) {
                mainNav.removeClass('invisible');
            }
        }
    });
    $('a').click(onLinkClick);
    
    $('.card-list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
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
      });
}
$(document).ready(onLoad);