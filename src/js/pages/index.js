import Header from '../blocks/header';
import Footer from '../blocks/footer';
import FeedbacksSlider from '../components/feedbacks-slider';
import TeamSlider from '../components/team-slider';

document.addEventListener( 'DOMContentLoaded', function() {
  new Header().render();
  new Footer().render();

  new TeamSlider().render();
  new FeedbacksSlider().render();
} );