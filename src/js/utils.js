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