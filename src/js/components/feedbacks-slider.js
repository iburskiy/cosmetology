import Splide from '@splidejs/splide';

export default class FeedbacksSlider {
  render() {
    const feedbacksSlider = new Splide( '.feedbacks__slider', {
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