import Splide from '@splidejs/splide';

export default class FeedbacksSlider {
  constructor(parentClass) {
    this.parentElSelector = `.${parentClass}`;
  }
  render() {
    const feedbacksSlider = new Splide( this.parentElSelector, {
      type   : 'loop',
      perPage: 2,
      gap: '20px',
      pagination: false,
      breakpoints: {
        767: {
          perPage: 1,
        },
      }
    } );
    feedbacksSlider.mount();
  }
}