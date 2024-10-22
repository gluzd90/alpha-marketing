import TransferElements from 'transfer-elements';
 let search = document.querySelector('.search')
new TransferElements(
  {
    sourceElement: search,
    breakpoints: {

      768: {
        targetElement: document.querySelector('.header__bottom'),
        targetPosition: 1
      },

      1600: {
        targetElement: document.querySelector('.header__nav'),
        targetPosition: 1
      }
    }


  }
);
