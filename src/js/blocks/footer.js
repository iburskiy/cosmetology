import {replace} from '../utils';
import Logo from '../components/logo';

const componentName = 'footer';

export default class Footer {
  constructor() {
    this.parentEl = '.body';
  }
  get template() {
    return `<footer class="footer container-full">
              <nav class="footer__content container-full__inner">
                <div class="footer__top">
                  <!--logo-->
                  <a href="./" class="cta">
                    <div class="cta__btn">CALL ME BACK</div>
                  </a>
                </div>
                <div class="footer__menu">
                  <ul class="footer__menu-col">
                    <li class="footer__menu-item">
                      <a class="link" href="our-services.html">Services</a>
                    </li>
                    <li class="footer__menu-item">
                      <a class="link" href="#">Our team</a>
                    </li>
                    <li class="footer__menu-item">
                      <a class="link" href="#">Advantage</a>
                    </li>
                  </ul>
                  <ul class="footer__menu-col">
                    <li class="footer__menu-item">
                      <a class="link" href="#">Feedbacks</a>
                    </li>
                    <li class="footer__menu-item">
                      <a class="link" href="#">Contacts</a>
                    </li>
                  </ul>
                  <ul class="footer__menu-col">
                    <li class="footer__menu-item">
                      <a class="link" href="#">Privacy Policy</a>
                    </li>
                    <li class="footer__menu-item">
                      <a class="link" href="#">Personal data processing agreement</a>
                    </li>
                  </ul>
                  <div class="footer__menu-col footer__contact-wrapper">
                    <a class="footer__contact" href="tel:+17186149511">+1 718-614-9511</a>
                  </div>
                </div>
                <div class="footer__hr"></div>
                <ul class="footer__bottom">
                  <li class="footer__bottom-item">
                    <a class="link" href="#">Franchising</a>
                  </li>
                  <li class="footer__bottom-item">
                    <a class="link" href="#">Advertising</a>
                  </li>
                  <li class="footer__bottom-item"></li>
                  <li class="footer__bottom-item footer__contact-wrapper">
                    <a class="footer__contact" href="mailto:hello@beautymed.com">hello@beautymed.com</a>
                  </li>
                </ul>
              </nav>
            </footer>`;
  }
  render() {
    replace(componentName, this.parentEl, this.template);
    new Logo('.footer').render();
  }
}