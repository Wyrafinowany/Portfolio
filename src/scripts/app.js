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
    navigation.style.top = '-3rem';
  } else {
    navigation.style.top = '0';
  }

  previousScrollTop = scrollTop;
});