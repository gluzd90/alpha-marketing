import Choices from 'choices.js';


const element = document.getElementById('choice1');
console.log(element)
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ""
});

const el = document.getElementById('choice2');
console.log(el)
const choice = new Choices(el, {
  searchEnabled: false,
  itemSelectText: ""

});

const choi = document.querySelector('.pagecrm-form__label-select .choices');
choi.classList.add('choice2')

const choices1 = document.querySelector('.pagecrm-form__label .choices');
 choices1.classList.add('choice1')


