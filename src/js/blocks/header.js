import { initListenersToSetUniversalPageTitle, replace } from '../utils';
import Logo from '../components/logo';
import MenuMobile from '../components/menu-mobile';
import Menu from '../components/menu';

const componentName = 'header';

export default class Header {
  constructor() {
    this.parentEl = '.body';
  }
  get template() {
    return `<header class="header container-full">
              <nav class="header__content container-full__inner">
                <!--logo-->
                <!--menu-->
                <a href="./#form" class="header__cta cta">
                  <div class="cta__btn">CALL ME BACK</div>
                </a>
                <div class="burger-icon">
                  <img src="./images/icons/burger.svg" alt="">
                </div>
              </nav>
              <!--menu-mobile-->
            </header>`;
  }
  render() {
    replace(componentName, this.parentEl, this.template);
    new Logo('.header').render();
    new Menu('.header', 'menu', 'menu__item').render();
    const menuMobile = new MenuMobile('.header');
    menuMobile.render();

    setTimeout(() => {
      initListenersToSetUniversalPageTitle();
      menuMobile.init();
    }, 0);
  }
}