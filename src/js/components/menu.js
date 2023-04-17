import { replace } from '../utils';

const componentName = 'menu';

export class Menu {
  constructor(parentEl, ulClass, liClass) {
    this.parentEl = parentEl;
    this.ulClass = ulClass;
    this.liClass = liClass;
  }
  get template() {
    return `<ul class="${this.ulClass}">
              ${generateMenuItem(this.liClass, './#services', 'Services')}
              ${generateMenuItem(this.liClass,'./#team','Our Team')}
              ${generateMenuItem(this.liClass,'./#request','Advantages')}
              ${generateMenuItem(this.liClass,'./#feedbacks','Feedbacks')}
              ${generateMenuItem(this.liClass,'./#location','Contacts')}
            </ul>`
  }
  render() {
    replace(componentName, this.parentEl, this.template);
  }
}

export function generateMenuItem(liClass, href, text) {
  return `<li class="${liClass}">
              <a class="link" href="${href}">${text}</a>
            </li>`;
}