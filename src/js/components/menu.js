import { replace } from '../utils';

const componentName = 'menu';

export default class Menu {
  constructor(parentEl, ulClass, liClass) {
    this.parentEl = parentEl;
    this.ulClass = ulClass;
    this.liClass = liClass;
  }
  get template() {
    return `<ul class="${this.ulClass}">
              ${this.generateMenuItem('Services')}
              ${this.generateMenuItem('Our Team')}
              ${this.generateMenuItem('Advantages')}
              ${this.generateMenuItem('Feedbacks')}
              ${this.generateMenuItem('Contacts')}
            </ul>`
  }
  generateMenuItem(text) {
    return `<li class="${this.liClass}">
              <a class="universal-page-link-js link" href="universal.html" data-text="${text}">${text}</a>
            </li>`;
  }
  render() {
    replace(componentName, this.parentEl, this.template);
  }
}