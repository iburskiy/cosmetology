import {replace} from '../utils';
import Logo from '../components/logo';
import {Menu} from './menu';
import Socials from './socials';

const componentName = 'overlay';

export default class Overlay {
  constructor(parentClass) {
    this.parentElSelector = `.${parentClass}`;
  }
  init() {
    const $burgerIcon = document.querySelector('.burger-icon');
    $burgerIcon.addEventListener('click', () => {
      scroll(0, 0);
      this.toggleMobileMenu();
    })
  }

  get template() {
    return `<div class="overlay hidden">
                <div class="overlay__content">
                  <div class="overlay__header container-full__inner">
                    <!--logo-->
                    <div class="overlay__close-wrapper">
                      <img src="./images/icons/close.svg" alt="" class="overlay__close">
                    </div>
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
    replace(componentName, this.parentElSelector, this.template);
    new Logo(componentName).render();
    new Menu(componentName, 'overlay__list', 'overlay__item').render();
    new Socials(componentName).render();

    setTimeout(() => {
      const $closeIcon = document.querySelector('.overlay__close-wrapper');
      $closeIcon.addEventListener('click', () => {
        this.toggleMobileMenu();
      });

      document.querySelectorAll('.overlay a').forEach(($link) => {
        $link.addEventListener('click', () => {
          this.toggleMobileMenu();
        });
      })
    }, 0)
  }

  toggleMobileMenu() {
    document.querySelector('.overlay').classList.toggle('hidden');
    document.body.classList.toggle('no-overflow-js');
  }
}