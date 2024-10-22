const btn = document.querySelectorAll('.pagecrm-price__btn');
const modal = document.querySelector('.modal');
const modalBtn = modal.querySelector('.modal__btn');
const modalOk = document.querySelector('.modal-ok')
console.log(modalBtn)
console.log(modal)
btn.forEach(btn => {
  btn.onclick = () => {
      modal.classList.add('modal--open');

  }
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.querySelector('.modal').classList.remove('modal--open');
  }
})

document.querySelector('.modal__content').addEventListener('click', event => {
  event._isClickWithInModal = true;
  console.log(event._isClickWithInModal)
})
document.getElementById('modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('modal--open')
})

modalBtn.addEventListener('click', function(e) {
  e.preventDefault()
  modal.classList.remove('modal--open');
  modalOk.classList.add('modal-ok--open');

})

document.querySelector('.modal-ok__btn').addEventListener('click', function()  {
  modalOk.classList.remove('modal-ok--open');

})

document.querySelector('.modal-ok__block').addEventListener('click', event => {
  event._isClickWithInModal = true;
  console.log(event._isClickWithInModal)
})
document.getElementById('modal-ok').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('moda-ok--open')
})
