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
      this.validateForm();

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

  validateForm() {
    const $callMeBack = document.querySelector('.form__btn');
    $callMeBack.addEventListener('click', (event) => {
      const $username = document.getElementById('username');
      const $userphone = document.getElementById('userphone');
      const $agreement = document.getElementById('agreement');

      const usernameRegexp = /^[а-яёА-Я]+|[a-zA-Z]+$/;
      const userPhoneRegexp = /^[\+]?[0-9\-\(\)]{10,15}$/;

      $username.setCustomValidity('');
      $userphone.setCustomValidity('');
      $agreement.setCustomValidity('');

      if (usernameRegexp.test($username.value) && userPhoneRegexp.test($userphone.value) && $agreement.checked) {
        event.preventDefault();
        this.togglePopup();
      } else {
        if (!usernameRegexp.test($username.value)) {
          $username.setCustomValidity("Please enter a valid name");
        }
        if (!userPhoneRegexp.test($userphone.value)) {
          $userphone.setCustomValidity("Please enter a valid phone number");
        }
        if (!$agreement.checked) {
          $agreement.setCustomValidity("Please indicate that you accept the Terms and Conditions");
        }
      }
    });
  }
}