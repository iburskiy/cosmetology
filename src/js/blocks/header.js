import {replace} from '../utils';
import Logo from '../components/logo';
import Overlay from '../components/overlay';
import {Menu} from '../components/menu';

const componentName = 'header';

export default class Header {
  constructor(parentClass) {
    this.parentElSelector = `.${parentClass}`;
  }
  get template() {
    return `<header class="header container-full">
              <div class="header__content container-full__inner">
                <!--logo-->
                <nav class="menu">
                  <!--menu-->
                </nav>
                <a href="./#form" class="header__cta cta">
                  <div class="cta__btn">CALL ME BACK</div>
                </a>
                <div class="burger-icon">
                  <img src="./images/icons/burger.svg" alt="">
                </div>
              </div>
              <!--overlay-->
            </header>`;
  }
  render() {
    replace(componentName, this.parentElSelector, this.template);
    new Logo(componentName).render();
    new Menu(componentName, 'menu__list', 'menu__item').render();
    const overlay = new Overlay(componentName);
    overlay.render();

    setTimeout(() => {
      overlay.init();
    }, 0);
  }
}