import Splide from '@splidejs/splide';

export function initTeamSlider() {
  const teamSplide = new Splide( '.team-slider', {
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
  teamSplide.mount();
}

export function initFeedbackSlider() {
  const feedbackSplide = new Splide( '.feedback-slider', {
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
  feedbackSplide.mount();
}