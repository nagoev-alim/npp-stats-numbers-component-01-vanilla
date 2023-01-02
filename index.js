// ⚡️ Import Styles
import './style.scss';
import feather from 'feather-icons';

// ⚡️ Render Skeleton

document.querySelector('#app').innerHTML = `
<div class='app-container'>
  <div class='stats'>
    <h2>Our stats</h2>
    <ul>
      <li>
        <span class='h1' data-value='120'>0</span>
        <p>Succeeded projects</p>
      </li>
      <li>
        <span class='h1' data-value='140'>0</span>
        <p>Working hours spent</p>
      </li>
      <li>
        <span class='h1' data-value='150'>0</span>
        <p>Happy clients</p>
      </li>
    </ul>
  </div>

  <a class='app-author' href='https://github.com/nagoev-alim' target='_blank'>${feather.icons.github.toSvg()}</a>
</div>
`;

// ⚡️Create Class
class App {
  constructor() {
    this.DOM = {
      numbers: document.querySelectorAll('[data-value]'),
    };

    this.DOM.numbers.forEach(n => this.init(n));
  }

  /**
   * @function init - Update item value
   * @param element
   */
  init(element) {
    const value = parseInt(element.dataset.value);
    const increment = Math.ceil(value / 1000);
    let initialValue = 0;

    const increaseCount = setInterval(() => {
      initialValue += increment;

      if (initialValue > value) {
        element.textContent = `${value}+`;
        clearInterval(increaseCount);
        return;
      }

      element.textContent = `${initialValue}+`;
    }, 45);
  }
}

// ⚡️Class instance
new App();
