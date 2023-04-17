import Header from '../blocks/header';
import Footer from '../blocks/footer';
import FeedbacksSlider from '../components/feedbacks-slider';
import TeamSlider from '../components/team-slider';
import Socials from '../components/socials';

document.addEventListener( 'DOMContentLoaded', function() {
  new Header('body').render();
  new Footer('body').render();

  new Socials('top').render();

  new TeamSlider('team__slider').render();
  new FeedbacksSlider('feedbacks__slider').render();
} );