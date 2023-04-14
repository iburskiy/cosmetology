import { initListenersToSetUniversalPageTitle, replace } from '../utils';
import Logo from '../components/logo';

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
                    <a class="universal-page-link-js link" href="universal.html" data-text="Services">SERVICES</a>
                  </li>
                  <li class="menu__item">
                    <a class="universal-page-link-js link" href="universal.html" data-text="Our Team">OUR TEAM</a>
                  </li>
                  <li class="menu__item">
                    <a class="universal-page-link-js link" href="universal.html" data-text="Advantages">ADVANTAGES</a>
                  </li>
                  <li class="menu__item">
                    <a class="universal-page-link-js link" href="universal.html" data-text="Feedbacks">FEEDBACKS</a>
                  </li>
                  <li class="menu__item">
                    <a class="universal-page-link-js link" href="universal.html" data-text="Contacts">CONTACTS</a>
                  </li>
                </ul>
                <a href="./#form" class="header__cta cta">
                  <div class="cta__btn">CALL ME BACK</div>
                </a>
                <div class="burger-icon">
                  <img src="./images/icons/burger.svg" alt="">
                </div>
              </nav>
            </header>`;
  }
  render() {
    replace(componentName, this.parentEl, this.template);
    new Logo('.header').render();

    setTimeout(() => {
      initListenersToSetUniversalPageTitle();
    }, 0);
  }
}