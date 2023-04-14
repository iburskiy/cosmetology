(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("../utils");
var _logo = _interopRequireDefault(require("../components/logo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var componentName = 'footer';
var Footer = /*#__PURE__*/function () {
  function Footer() {
    _classCallCheck(this, Footer);
    this.parentEl = '.body';
  }
  _createClass(Footer, [{
    key: "template",
    get: function get() {
      return "<footer class=\"footer container-full\">\n              <nav class=\"footer__content container-full__inner\">\n                <div class=\"footer__top\">\n                  <!--logo-->\n                  <a href=\"./#form\" class=\"cta\">\n                    <div class=\"cta__btn\">CALL ME BACK</div>\n                  </a>\n                </div>\n                <div class=\"footer__menu\">\n                  <ul class=\"footer__menu-col\">\n                    <li class=\"footer__menu-item\">\n                      <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Services\">Services</a>\n                    </li>\n                    <li class=\"footer__menu-item\">\n                      <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Our Team\">Our team</a>\n                    </li>\n                    <li class=\"footer__menu-item\">\n                      <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Advantage\">Advantage</a>\n                    </li>\n                  </ul>\n                  <ul class=\"footer__menu-col\">\n                    <li class=\"footer__menu-item\">\n                      <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Feedbacks\">Feedbacks</a>\n                    </li>\n                    <li class=\"footer__menu-item\">\n                      <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Contacts\">Contacts</a>\n                    </li>\n                  </ul>\n                  <ul class=\"footer__menu-col\">\n                    <li class=\"footer__menu-item\">\n                      <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Privacy Policy\">Privacy Policy</a>\n                    </li>\n                    <li class=\"footer__menu-item\">\n                      <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Personal data processing agreement\">Personal data processing agreement</a>\n                    </li>\n                  </ul>\n                  <div class=\"footer__menu-col footer__contact-wrapper\">\n                    <a class=\"footer__contact\" href=\"tel:+17186149511\">+1 718-614-9511</a>\n                  </div>\n                </div>\n                <div class=\"footer__hr\"></div>\n                <ul class=\"footer__bottom\">\n                  <li class=\"footer__bottom-item\">\n                    <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Franchising\">Franchising</a>\n                  </li>\n                  <li class=\"footer__bottom-item\">\n                    <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Advertising\">Advertising</a>\n                  </li>\n                  <li class=\"footer__bottom-item\"></li>\n                  <li class=\"footer__bottom-item footer__contact-wrapper\">\n                    <a class=\"footer__contact\" href=\"mailto:hello@beautymed.com\">hello@beautymed.com</a>\n                  </li>\n                </ul>\n              </nav>\n            </footer>";
    }
  }, {
    key: "render",
    value: function render() {
      (0, _utils.replace)(componentName, this.parentEl, this.template);
      new _logo["default"]('.footer').render();
      setTimeout(function () {
        (0, _utils.initListenersToSetUniversalPageTitle)();
      }, 0);
    }
  }]);
  return Footer;
}();
exports["default"] = Footer;

},{"../components/logo":3,"../utils":6}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("../utils");
var _logo = _interopRequireDefault(require("../components/logo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var componentName = 'header';
var Header = /*#__PURE__*/function () {
  function Header() {
    _classCallCheck(this, Header);
    this.parentEl = '.body';
  }
  _createClass(Header, [{
    key: "template",
    get: function get() {
      return "<header class=\"header container-full\">\n              <nav class=\"header__content container-full__inner\">\n                <!--logo-->\n                <ul class=\"menu\">\n                  <li class=\"menu__item\">\n                    <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Services\">SERVICES</a>\n                  </li>\n                  <li class=\"menu__item\">\n                    <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Our Team\">OUR TEAM</a>\n                  </li>\n                  <li class=\"menu__item\">\n                    <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Advantages\">ADVANTAGES</a>\n                  </li>\n                  <li class=\"menu__item\">\n                    <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Feedbacks\">FEEDBACKS</a>\n                  </li>\n                  <li class=\"menu__item\">\n                    <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Contacts\">CONTACTS</a>\n                  </li>\n                </ul>\n                <a href=\"./#form\" class=\"header__cta cta\">\n                  <div class=\"cta__btn\">CALL ME BACK</div>\n                </a>\n                <div class=\"burger-icon\">\n                  <img src=\"./images/icons/burger.svg\" alt=\"\">\n                </div>\n              </nav>\n            </header>";
    }
  }, {
    key: "render",
    value: function render() {
      (0, _utils.replace)(componentName, this.parentEl, this.template);
      new _logo["default"]('.header').render();
      setTimeout(function () {
        (0, _utils.initListenersToSetUniversalPageTitle)();
      }, 0);
    }
  }]);
  return Header;
}();
exports["default"] = Header;

},{"../components/logo":3,"../utils":6}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("../utils");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var componentName = 'logo';
var Logo = /*#__PURE__*/function () {
  function Logo(parentEl) {
    _classCallCheck(this, Logo);
    this.parentEl = parentEl;
  }
  _createClass(Logo, [{
    key: "template",
    get: function get() {
      return "<a href=\"./\" class=\"logo\">\n              <img src=\"images/logo.png\" alt=\"\" class=\"logo__img\">\n              <div class=\"logo__text\">BeautyMed</div>\n            </a>";
    }
  }, {
    key: "render",
    value: function render() {
      (0, _utils.replace)(componentName, this.parentEl, this.template);
    }
  }]);
  return Logo;
}();
exports["default"] = Logo;

},{"../utils":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNIVERSAL_PAGE_TITLE_KEY = exports.DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE = void 0;
var UNIVERSAL_PAGE_TITLE_KEY = 'universal-page-title';
exports.UNIVERSAL_PAGE_TITLE_KEY = UNIVERSAL_PAGE_TITLE_KEY;
var DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE = ".universal-page-link-js";
exports.DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE = DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE;

},{}],5:[function(require,module,exports){
"use strict";

var _header = _interopRequireDefault(require("../blocks/header"));
var _footer = _interopRequireDefault(require("../blocks/footer"));
var _constants = require("../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
document.addEventListener('DOMContentLoaded', function () {
  new _header["default"]().render();
  new _footer["default"]().render();
  setPageTitle();
});
function setPageTitle() {
  var title = sessionStorage.getItem(_constants.UNIVERSAL_PAGE_TITLE_KEY);
  var reusableTemplage = function reusableTemplage() {
    return "Here will be information for \"".concat(pageTitle, "\" page");
  };
  var pageTitle = title && title !== 'null' ? title : 'Universal';
  var titleElem = document.querySelector('.title__text1');
  titleElem.innerHTML = titleElem.innerHTML + reusableTemplage();
  sessionStorage.clear();
}

},{"../blocks/footer":1,"../blocks/header":2,"../constants":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initListenersToSetUniversalPageTitle = initListenersToSetUniversalPageTitle;
exports.replace = replace;
var _constants = require("./constants");
/**
 * Replaces comment in HTML file such as <!--header--> with template from JS file
 * @param componentName
 * @param parentElSelector
 * @param template
 */
function replace(componentName, parentElSelector, template) {
  var parentEl = document.querySelector(parentElSelector);
  var regex = new RegExp("<!--".concat(componentName, "-->"), "g");
  parentEl.innerHTML = parentEl.innerHTML.replace(regex, template);
}
function initListenersToSetUniversalPageTitle() {
  document.querySelectorAll(_constants.DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE).forEach(function (link) {
    link.addEventListener('click', function () {
      var text = link.getAttribute('data-text');
      sessionStorage.setItem(_constants.UNIVERSAL_PAGE_TITLE_KEY, text);
    });
  });
}

},{"./constants":4}]},{},[5]);
