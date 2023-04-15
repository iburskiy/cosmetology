import {replace} from '../utils';
import Socials from './socials';
import Menu from './menu';

const componentName = 'overlay';

export default class Overlay {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }
  init() {
    const $burgerIcon = document.querySelector('.burger-icon');
    $burgerIcon.addEventListener('click', () => {
      this.toggleMobileMenu();
    })
  }

  get template() {
    return `<div class="overlay hidden">
                <div class="overlay__content">
                  <div class="overlay__close-wrapper">
                    <img src="./images/icons/close.svg" alt="" class="overlay__close">
                  </div>
                  <a href="./#form" class="overlay__cta cta">
                    <div class="cta__btn">CALL ME BACK</div>
                  </a>
                  <nav>
                    <!--menu-->
                  </nav>
                  <nav class="overlay__socials socials">
                    <!--socials-->
                  </nav>
                </div>
            </div>`
  }
  render() {
    replace(componentName, this.parentEl, this.template);
    new Menu('.overlay', 'overlay__list', 'overlay__item').render();
    new Socials('.overlay').render();

    setTimeout(() => {
      const $closeIcon = document.querySelector('.overlay__close-wrapper');
      $closeIcon.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }, 0)
  }

  toggleMobileMenu() {
    document.querySelector('.overlay').classList.toggle('hidden');
    document.body.classList.toggle('no-overflow-js');
  }
}