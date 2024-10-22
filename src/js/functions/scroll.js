const header = document.querySelector('.header');

if (window.matchMedia('(min-width: 640px)').matches) {
  window.onscroll = function () {

    if (window.scrollY > 100) {
      header.classList.add('scroll--active');

    } else {
      header.classList.remove('scroll--active');

    }
  }
}

