import {replace} from '../utils';

const componentName = 'logo';

export default class Logo {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }
  get template() {
    return `<a href="./" class="logo">
              <img src="images/logo.png" alt="" class="logo__img">
              <div class="logo__text">BeautyMed</div>
            </a>`;
  }
  render() {
    replace(componentName, this.parentEl, this.template);
  }
}