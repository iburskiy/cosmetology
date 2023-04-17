import Splide from '@splidejs/splide';
import { initListenersToSetUniversalPageTitle } from '../utils';

export default class TeamSlider {
  constructor(parentClass) {
    this.parentElSelector = `.${parentClass}`;
  }
  render() {
    const teamSlider = new Splide( this.parentElSelector, {
      type   : 'loop',
      perPage: 3,
      gap: '20px',
      pagination: false,
      breakpoints: {
        1100: {
          perPage: 2,
        },
        767: {
          perPage: 1,
        },
      }
    } );
    teamSlider.mount();

    initListenersToSetUniversalPageTitle();
  }
}