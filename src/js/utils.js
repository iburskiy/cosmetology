import {
  DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE,
  UNIVERSAL_PAGE_TITLE_KEY
} from './constants';

/**
 * Replaces comment in HTML file such as <!--header--> with template from JS file
 * @param componentName
 * @param parentElSelector
 * @param template
 */
export function replace(componentName, parentElSelector, template) {
  const parentEl = document.querySelector(parentElSelector);
  const regex = new RegExp(`<!--${componentName}-->`, "g");
  parentEl.innerHTML = parentEl.innerHTML.replace(regex, template);
}

export function initListenersToSetUniversalPageTitle() {
  document.querySelectorAll(DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE).forEach((link) => {
    link.addEventListener('click', () => {
      const text = link.getAttribute('data-text');
      sessionStorage.setItem(UNIVERSAL_PAGE_TITLE_KEY, text);
    })
  });
}