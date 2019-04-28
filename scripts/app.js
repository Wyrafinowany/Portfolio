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
});
//Active/disable hamburger menu
$('.navicon').on('click', function (e) {
  e.preventDefault();

  $(this).toggleClass('navicon-active');
  $('.toggle').toggleClass('toggle-active');
});