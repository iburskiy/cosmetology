import { replace } from '../utils';

const componentName = 'socials';

export default class Socials {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }
  get template() {
    return `<a class="socials__link link" href="#">
              <img src="./images/icons/youtube.svg" alt="Youtube icon">
            </a>
            <a class="socials__link link" href="#">
              <img src="./images/icons/instagram.svg" alt="Instagram icon">
            </a>
            <a class="socials__link link" href="#">
              <img src="./images/icons/facebook.svg" alt="Facebook icon">
            </a>`;
  }
  render() {
    replace(componentName, this.parentEl, this.template);
  }
}