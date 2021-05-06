import Flower from './assets/flower.js';

const colors = ['red', 'orange', 'yellow', 'yellowgreen', 'green', 'blue', 'purple'];

class ColoringBook {
  constructor(root) {
    this.root = root;
    this.color = 'red';
  }

  execute() {
    this.render();
    this.bindEvent();
  }

  toTemplate() {
    return `
    <div class="main-container">
      ${Flower}
      <div class="palette">
        ${colors.map((color) => `<button class="palette-button ${color}" data-color=${color}></button>`).join('')}
      </div>
    </div>
    `;
  }

  render() {
    this.root.innerHTML = this.toTemplate();
  }

  bindEvent() {
    document.addEventListener('click', ({ target }) => {
      if (target.tagName === 'path' && target.id.match(/[petal | circle]/)) {
        target.style.fill = this.color;
      }
      if (target.classList.contains('palette-button')) {
        this.color = target.dataset.color;
      }
    });
  }
}

export default class App {
  constructor() {
    this.root = document.querySelector('#app');
    this.coloringBook = new ColoringBook(this.root);
  }

  execute() {
    this.coloringBook.execute();
  }
}

const app = new App();
app.execute();
