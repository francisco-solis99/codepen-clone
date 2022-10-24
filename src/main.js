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


// =========================================== Code Editor ========================================
const langs = ['html', 'css', 'js'];
const editors = document.querySelectorAll('.editor__area');
const gutters = document.querySelectorAll('.editor__gutter');

const editorsGutterPerLang = Array.from(editors).map((editor, index) => [[langs[index]], [editor, gutters[index]]]);
const structureLangs = Object.fromEntries(editorsGutterPerLang);


editors.forEach((editor) => editor.addEventListener('keyup', (e) => manageGutter(e)));

let counterLines = 1;

function manageGutter(e) {
  const { key, target } = e;
  if (!['Enter', 'Backspace'].includes(key)) return;

  const editorName = target.dataset.lang;
  const editorToManage = structureLangs[editorName];
  const [, gutter] = editorToManage;


  if (key === 'Enter') {
    addLineFromGutter(gutter)
    return;
  }

  if (key === 'Backspace') {
    const editorCurrentLines = target.value.split('\n').length;
    if (editorCurrentLines === counterLines) return;
    removeLineFromGutter(gutter, editorCurrentLines);
  }

}

function removeLineFromGutter(editorGutter, currentLines) {
  while (counterLines !== currentLines) {
    counterLines -= 1;
    const spanLine = editorGutter.querySelector('span:last-child');
    spanLine.remove();
  }
}

function addLineFromGutter(editorGutter) {
  counterLines += 1;
  const newSpanLine = createEditorLine();
  editorGutter.appendChild(newSpanLine);
}


function createEditorLine() {
  const span = document.createElement('span');
  span.textContent = counterLines;
  return span;
}
