import Header from '../blocks/header';
import Footer from '../blocks/footer';
import {UNIVERSAL_PAGE_TITLE_KEY} from '../constants'

document.addEventListener( 'DOMContentLoaded', function() {
  new Header().render();
  new Footer().render();

  setPageTitle();
} );

function setPageTitle() {
  const title = sessionStorage.getItem(UNIVERSAL_PAGE_TITLE_KEY);
  const reusableTemplage = () => `Here will be information for \"${pageTitle}\" page`;
  const pageTitle = (title && title !== 'null') ? title : 'Universal';
  const titleElem = document.querySelector('.title__text1');
  titleElem.innerHTML = titleElem.innerHTML + reusableTemplage();
  sessionStorage.clear();
}