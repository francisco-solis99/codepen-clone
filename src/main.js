import './styles/style.scss';

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
