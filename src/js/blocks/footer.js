import { initListenersToSetUniversalPageTitle, replace } from '../utils';
import Logo from '../components/logo';
import {generateMenuItem} from '../components/menu';

const componentName = 'footer';

export default class Footer {
  constructor(parentClass) {
    this.parentElSelector = `.${parentClass}`;
  }
  get template() {
    return `<footer class="footer container-full">
              <nav class="footer__content container-full__inner">
                <div class="footer__top">
                  <!--logo-->
                  <a href="./#form" class="cta">
                    <div class="cta__btn">CALL ME BACK</div>
                  </a>
                </div>
                <div class="footer__menu">
                  <ul class="footer__menu-col">
                    ${generateMenuItem('footer__menu-item', './#services', 'Services')}
                    ${generateMenuItem('footer__menu-item','./#team','Our Team')}
                    ${generateMenuItem('footer__menu-item','./#request','Advantages')}
                  </ul>
                  <ul class="footer__menu-col">
                    ${generateMenuItem('footer__menu-item','./#feedbacks','Feedbacks')}
                    ${generateMenuItem('footer__menu-item','./#location','Contacts')}
                  </ul>
                  <ul class="footer__menu-col">
                    <li class="footer__menu-item">
                      <a class="universal-page-link-js link" href="privacy-policy.html" data-text="Privacy Policy">Privacy Policy</a>
                    </li>
                    <li class="footer__menu-item">
                      <a class="universal-page-link-js link" href="universal.html" data-text="Personal data processing agreement">Personal data processing agreement</a>
                    </li>
                  </ul>
                  <ul class="footer__menu-col footer__contact-wrapper">
                    <li class="footer__menu-item">
                      <a class="footer__contact" href="tel:+17181234567">+1 718-123-4567</a>
                    </li>
                    <li class="footer__menu-item">
                      <a class="footer__contact" href="mailto:hello@beautymed.com">hello@beautymed.com</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </footer>`;
  }
  render() {
    replace(componentName, this.parentElSelector, this.template);
    new Logo(componentName).render();

    setTimeout(() => {
      initListenersToSetUniversalPageTitle();
    }, 0);
  }
}