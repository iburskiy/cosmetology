import {replace} from '../utils';

const componentName = 'logo';

export default class Logo {
  constructor(parentClass) {
    this.parentElSelector = `.${parentClass}`;
  }
  get template() {
    return `<a href="./" class="logo">
              <img src="images/logo.png" alt="" class="logo__img">
              <div class="logo__text">BeautyMed</div>
            </a>`;
  }
  render() {
    replace(componentName, this.parentElSelector, this.template);
  }
}