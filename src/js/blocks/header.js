import {replace} from '../utils';
import Logo from '../components/logo';
import { UNIVERSAL_PAGE_TITLE_KEY } from '../constants';

const componentName = 'header';

export default class Header {
  constructor() {
    this.parentEl = '.body';
  }
  get template() {
    return `<header class="header container-full">
              <nav class="header__content container-full__inner">
                <!--logo-->
                <ul class="menu">
                  <li class="menu__item">
                    <a class="menu__link link" href="our-services.html" data-text="Services">SERVICES</a>
                  </li>
                  <li class="menu__item">
                    <a class="menu__link link" href="our-services.html" data-text="Our Team">OUR TEAM</a>
                  </li>
                  <li class="menu__item">
                    <a class="menu__link link" href="our-services.html" data-text="Advantages">ADVANTAGES</a>
                  </li>
                  <li class="menu__item">
                    <a class="menu__link link" href="our-services.html" data-text="Feedbacks">FEEDBACKS</a>
                  </li>
                  <li class="menu__item">
                    <a class="menu__link link" href="our-services.html" data-text="Contacts">CONTACTS</a>
                  </li>
                </ul>
                <a href="./" class="header__cta cta">
                  <div class="cta__btn">CALL ME BACK</div>
                </a>
                <div class="burger-icon">
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.75 15.5H23.25V13H0.75V15.5ZM0.75 9.25H23.25V6.75H0.75V9.25ZM0.75 0.5V3H23.25V0.5H0.75Z" fill="black"/>
                  </svg>
                </div>
              </nav>
            </header>`;
  }
  render() {
    replace(componentName, this.parentEl, this.template);
    new Logo('.header').render();

    setTimeout(() => {
      document.querySelectorAll('.menu__link').forEach((link) => {
        link.addEventListener('click', (event) => {
          const $target = event.target;
          const text = $target.getAttribute('data-text');
          sessionStorage.setItem(UNIVERSAL_PAGE_TITLE_KEY, text)
        })
      });
    }, 0);
  }
}