const search = document.querySelector('.search__block');
const searchBtn = document.querySelector('.search__open');
searchBtn.addEventListener('click', function (e) {
  e.preventDefault()
  e.stopPropagation();
  search.classList.add('search--active')
})

document.querySelector('.search__block').addEventListener('click', event => {
  event._isClickWithInModal = true;
  console.log(event._isClickWithInModal)
})
window.addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  search.classList.remove('search--active')
})
