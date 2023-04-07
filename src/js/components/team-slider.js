import Splide from '@splidejs/splide';

export default class TeamSlider {
  render() {
    const teamSlider = new Splide( '.team__slider', {
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
  }
}