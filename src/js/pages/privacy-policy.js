import Header from '../blocks/header';
import Footer from '../blocks/footer';

document.addEventListener( 'DOMContentLoaded', function() {
  new Header('body').render();
  new Footer('body').render();
} );