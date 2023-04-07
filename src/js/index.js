import {initTeamSlider, initFeedbackSlider} from './slider.js';
import Header from './blocks/header';
import Footer from './blocks/footer';

document.addEventListener( 'DOMContentLoaded', function() {
  initTeamSlider();
  initFeedbackSlider();

  new Header().render();
  new Footer().render();
} );