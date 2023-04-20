import {replace} from '../utils';

const componentName = 'popup';

export default class Popup {
  constructor(parentClass) {
    this.parentElSelector = `.${parentClass}`;
  }
  get template() {
    return `<div class="popup hidden">
              <div class="popup__inner">
                <div class="popup__content">
                  <div class="popup__close-wrapper">
                    <img src="./images/icons/close.svg" alt="" class="popup__close" tabindex="0">
                  </div>
                  <div class="popup__text">
                    Thank you! We'll call you back soon
                  </div>
                </div>
              </div>
            </div>`;
  }
  render() {
    replace(componentName, this.parentElSelector, this.template);

    setTimeout(() => {
      const $callMeBack = document.querySelector('.form__btn');
      $callMeBack.addEventListener('click', (event) => {
        const $username = document.getElementById('username');
        const $userphone = document.getElementById('userphone');
        if ($username.checkValidity() == true && $userphone.checkValidity() == true) {
          event.preventDefault();
          this.togglePopup();
        }
      });

      const $closeIcon = document.querySelector('.popup__close');
      $closeIcon.addEventListener('click', () => {
        this.togglePopup();
      });
      $closeIcon.addEventListener('keydown', (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
          $closeIcon.click();
        }
      })
    }, 0)
  }

  togglePopup() {
    document.querySelector('.popup').classList.toggle('hidden');
    document.body.classList.toggle('no-overflow-js');
  }
}