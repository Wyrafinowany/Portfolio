// Pre-loader
const preloader = document.getElementById('loading-page');
const activePage = document.querySelector('.disable');

window.addEventListener('load', function () {
  $(document).ready(function () {

    let counter = 0;
    let number = 0;

    const index = setInterval(() => {
      $('.loading-page .counter h1').html(number + "%");
      $('.loading-page .counter hr').css('width', `${number}%`);
      counter++;
      number++;

      if (counter === 1) {
        clearInterval(index);

        setTimeout(function () {

          preloader.style.display = 'none';
          activePage.classList.remove('disable');
        }, 500)
      }
    }, 50);
  });
});

//Navigation 
let previousScrollTop;
const navigation = document.querySelector('nav');

window.addEventListener('scroll', (e) => {
  const scrollTop = window.scrollY;

  if (scrollTop > previousScrollTop) {
    navigation.style.top = '-5rem';
  } else {
    navigation.style.top = '0';
  }

  previousScrollTop = scrollTop;
});

//      Hamburger menu
//Disable menu after click on <a>
$('.toggle-menu a').on('click', function (e) {
  $('.toggle').toggleClass('toggle-active');
  $('.navicon').toggleClass('navicon-active');

});
//Active/disable hamburger menu
$('.navicon').on('click', function (e) {
  e.preventDefault();

  $(this).toggleClass('navicon-active');
  $('.toggle').toggleClass('toggle-active');
});
// ScrollReveal().destroy();
(function scrollReveal() {

  window.sr = ScrollReveal();
  // sr.reveal('.about-row .image-box', {
  //     // reset: true,
  //     delay: 300,
  //     distance: '10rem'
  // });
  // ScrollReveal().reveal('.about-row .text-box', {
  //     // reset: true,
  //     delay: 450
  // });
  // sr.destroy();

  sr.reveal('.project-box', {
    duration: 600,
    distance: '20px',
    easing: 'ease-out',
    origin: 'bottom',
    scale: 1,
    viewFactor: 0,
    // viewOffset: {
    // top: 800,
    // right: 0,
    // bottom: 0,
    // left: 0,
    // },

    afterReveal: revealChildren,
  }, 150);
  var revealChildren = sr.reveal('.title, p, .buttons', {
    duration: 500,
    scale: 1,
    distance: '20px',
    origin: 'top',
    easing: 'ease-out',
    viewFactor: 1,
  }, 75);
})();