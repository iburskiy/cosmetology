import Header from '../blocks/header';
import Footer from '../blocks/footer';

document.addEventListener( 'DOMContentLoaded', function() {
  new Header().render();
  new Footer().render();
} );