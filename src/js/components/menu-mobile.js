import {replace} from '../utils';
import Socials from './socials';
import Menu from './menu';

const componentName = 'menu-mobile';

export default class MenuMobile {
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
    return `<div class="menu-mobile hidden">
                <div class="menu-mobile__content">
                  <div class="menu-mobile__close-wrapper">
                    <img src="./images/icons/close.svg" alt="" class="menu-mobile__close">
                  </div>
                  <a href="./#form" class="menu-mobile__cta cta">
                    <div class="cta__btn">CALL ME BACK</div>
                  </a>
                  <nav>
                    <!--menu-->
                  </nav>
                  <nav class="menu-mobile__socials socials">
                    <!--socials-->
                  </nav>
                </div>
            </div>`
  }
  render() {
    replace(componentName, this.parentEl, this.template);
    new Menu('.menu-mobile', 'menu-mobile__list', 'menu-mobile__item').render();
    new Socials('.menu-mobile').render();

    setTimeout(() => {
      const $closeIcon = document.querySelector('.menu-mobile__close-wrapper');
      $closeIcon.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }, 0)
  }

  toggleMobileMenu() {
    document.querySelector('.menu-mobile').classList.toggle('hidden');
    document.body.classList.toggle('no-overflow-js');
  }
}