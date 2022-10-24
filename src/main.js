import './styles/style.scss';

// Header buttons
const buttonOpts = document.querySelector('.button__preview');
const headerOptions = document.querySelector('.options');

const buttonTools = document.querySelector('.button__tools');
const tools = document.querySelector('.tools');

buttonOpts.addEventListener('click', () => {
  headerOptions.classList.toggle('active');
  buttonOpts.classList.toggle('rotate');
})
buttonTools.addEventListener('click', () => {
  buttonTools.classList.toggle('rotate');
  tools.classList.toggle('active');
});


// Code editors buttons
// console.log(screen.width); => just with the width < 768px
const codeHeader = document.querySelector('.code__header');
const buttonsCode = document.querySelectorAll('.code__header .code__title');
const spaces = document.querySelectorAll('.code__tech');

const buttonsSpaces = Array.from(buttonsCode).map((btn, index) => {
  return {
    button: btn,
    space: spaces[index]
  };
});

buttonsCode.forEach((btn, index) => {
  btn.addEventListener('click', () => toggleCodeSpace(index, buttonsSpaces.length));
});

function toggleCodeSpace(index, options) {
  for (let i = 0; i < options; i += 1) {
    const { button, space } = buttonsSpaces[i]
    if (i !== index) {
      button.classList.remove('active');
      space.classList.remove('active');
      continue;
    }
    button.classList.toggle('active');
    space.classList.toggle('active');
  }

  if (buttonsSpaces[index].space.classList.contains('active')) {
    codeHeader.classList.add('active');
    return;
  }
  codeHeader.classList.remove('active');

}
