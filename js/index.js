function onLinkClick(e) {
  const link = $(this);
  e.preventDefault();
  const location = link.attr('href');
  const target = $(location);
  let top = target?.position()?.top || 0;
  if (!location.startsWith('#')) {
    window.location.href = location;
    return
  }

  window.scroll({
    top: top ? top - 130 : 0,
    left: 0,
    behavior: "smooth",
  });
}

function updateNav(y) {
  const services = $('#services');
  const nav = $('.nav a.current');
  const scrollNav = $('.scroll-nav a.current');
  nav.removeClass('current');
  scrollNav.removeClass('current');
  if (services.position()?.top - 200 > y) {
    //HOME
    const nav = $('a[href = "#home"]');
    nav.addClass('current');
    return;
  }
  const donate = $('#donate');
  if (donate.position()?.top - 200 > y) {
    //SERVICES
    const nav = $('a[href = "#services"]');
    nav.addClass('current');
    return;
  }
  const schedule = $('#schedule');
  if (schedule.position()?.top - 200 > y) {
    //DONATE
    const nav = $('a[href = "#donate"]');
    nav.addClass('current');
    return;
  }
  const events = $('#events');
  if (events.position()?.top - 200 > y) {
    //SCHEDULE
    const nav = $('a[href = "#schedule"]');
    nav.addClass('current');
    return;
  }
  const about = $('#about');
  if (about.position()?.top - 200 > y) {
    //EVENTS
    const nav = $('a[href = "#events"]');
    nav.addClass('current');
  } else {
    //ABOUT
    const nav = $('a[href = "#about"]');
    nav.addClass('current');
  }
}

function onLoad() {
  const body = $(window);
  const nav = $('.scroll-nav');
  const mainNav = $('.navbar');
  const verseZero = $('.verseZero');
  const verseOne = $('.verseOne');

  body.scroll((val) => {
    const scrollVal = $(this).scrollTop();
    const up = $('.scroll-up');
    // console.log(scrollVal); // VIEW SCROLL VALUE
    updateNav(scrollVal);
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
      if (!nav.hasClass('transition')) {
        nav.addClass('transition');
      }
      if (mainNav.hasClass('invisible')) {
        mainNav.removeClass('invisible');
      }
    }

    if (scrollVal > 1250) {
      if (!verseZero.hasClass('verseOne')) {
        verseZero.addClass('verseOne');
      }
    } else if (scrollVal <= 1250) {
      if (verseZero.hasClass('verseOne')) {
        verseZero.removeClass('verseOne');
      }
    }

    if (scrollVal > 2013) {
      if (!verseOne.hasClass('verseOne')) {
        verseOne.addClass('verseOne');
      }
    }
    else if (scrollVal <= 2013) {
      if (verseOne.hasClass('verseOne')) {
        verseOne.removeClass('verseOne');
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