(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("../utils");
var _logo = _interopRequireDefault(require("../components/logo"));
var _menu = require("../components/menu");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var componentName = 'footer';
var Footer = /*#__PURE__*/function () {
  function Footer(parentClass) {
    _classCallCheck(this, Footer);
    this.parentElSelector = ".".concat(parentClass);
  }
  _createClass(Footer, [{
    key: "template",
    get: function get() {
      return "<footer class=\"footer container-full\">\n              <nav class=\"footer__content container-full__inner\">\n                <div class=\"footer__top\">\n                  <!--logo-->\n                  <a href=\"./#form\" class=\"cta\">\n                    <div class=\"cta__btn\">CALL ME BACK</div>\n                  </a>\n                </div>\n                <div class=\"footer__menu\">\n                  <ul class=\"footer__menu-col\">\n                    ".concat((0, _menu.generateMenuItem)('footer__menu-item', './#services', 'Services'), "\n                    ").concat((0, _menu.generateMenuItem)('footer__menu-item', './#team', 'Our Team'), "\n                    ").concat((0, _menu.generateMenuItem)('footer__menu-item', './#request', 'Advantages'), "\n                  </ul>\n                  <ul class=\"footer__menu-col\">\n                    ").concat((0, _menu.generateMenuItem)('footer__menu-item', './#feedbacks', 'Feedbacks'), "\n                    ").concat((0, _menu.generateMenuItem)('footer__menu-item', './#location', 'Contacts'), "\n                  </ul>\n                  <ul class=\"footer__menu-col\">\n                    <li class=\"footer__menu-item\">\n                      <a class=\"universal-page-link-js link\" href=\"privacy-policy.html\" data-text=\"Privacy Policy\">Privacy Policy</a>\n                    </li>\n                    <li class=\"footer__menu-item\">\n                      <a class=\"universal-page-link-js link\" href=\"universal.html\" data-text=\"Personal data processing agreement\">Personal data processing agreement</a>\n                    </li>\n                  </ul>\n                  <ul class=\"footer__menu-col footer__contact-wrapper\">\n                    <li class=\"footer__menu-item\">\n                      <a class=\"footer__contact\" href=\"tel:+17181234567\">+1 718-123-4567</a>\n                    </li>\n                    <li class=\"footer__menu-item\">\n                      <a class=\"footer__contact\" href=\"mailto:hello@beautymed.com\">hello@beautymed.com</a>\n                    </li>\n                  </ul>\n                </div>\n              </nav>\n            </footer>");
    }
  }, {
    key: "render",
    value: function render() {
      (0, _utils.replace)(componentName, this.parentElSelector, this.template);
      new _logo["default"](componentName).render();
      setTimeout(function () {
        (0, _utils.initListenersToSetUniversalPageTitle)();
      }, 0);
    }
  }]);
  return Footer;
}();
exports["default"] = Footer;

},{"../components/logo":3,"../components/menu":4,"../utils":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("../utils");
var _logo = _interopRequireDefault(require("../components/logo"));
var _overlay = _interopRequireDefault(require("../components/overlay"));
var _menu = require("../components/menu");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var componentName = 'header';
var Header = /*#__PURE__*/function () {
  function Header(parentClass) {
    _classCallCheck(this, Header);
    this.parentElSelector = ".".concat(parentClass);
  }
  _createClass(Header, [{
    key: "template",
    get: function get() {
      return "<header class=\"header container-full\">\n              <div class=\"header__content container-full__inner\">\n                <!--logo-->\n                <nav class=\"menu\">\n                  <!--menu-->\n                </nav>\n                <a href=\"./#form\" class=\"header__cta cta\">\n                  <div class=\"cta__btn\">CALL ME BACK</div>\n                </a>\n                <div class=\"burger-icon\">\n                  <img src=\"./images/icons/burger.svg\" alt=\"\">\n                </div>\n              </div>\n              <!--overlay-->\n            </header>";
    }
  }, {
    key: "render",
    value: function render() {
      (0, _utils.replace)(componentName, this.parentElSelector, this.template);
      new _logo["default"](componentName).render();
      new _menu.Menu(componentName, 'menu__list', 'menu__item').render();
      var overlay = new _overlay["default"](componentName);
      overlay.render();
      setTimeout(function () {
        overlay.init();
      }, 0);
    }
  }]);
  return Header;
}();
exports["default"] = Header;

},{"../components/logo":3,"../components/menu":4,"../components/overlay":5,"../utils":9}],3:[function(require,module,exports){
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
  function Logo(parentClass) {
    _classCallCheck(this, Logo);
    this.parentElSelector = ".".concat(parentClass);
  }
  _createClass(Logo, [{
    key: "template",
    get: function get() {
      return "<a href=\"./\" class=\"logo\">\n              <img src=\"images/logo.png\" alt=\"\" class=\"logo__img\">\n              <div class=\"logo__text\">BeautyMed</div>\n            </a>";
    }
  }, {
    key: "render",
    value: function render() {
      (0, _utils.replace)(componentName, this.parentElSelector, this.template);
    }
  }]);
  return Logo;
}();
exports["default"] = Logo;

},{"../utils":9}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = void 0;
exports.generateMenuItem = generateMenuItem;
var _utils = require("../utils");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var componentName = 'menu';
var Menu = /*#__PURE__*/function () {
  function Menu(parentClass, ulClass, liClass) {
    _classCallCheck(this, Menu);
    this.parentElSelector = ".".concat(parentClass);
    this.ulClass = ulClass;
    this.liClass = liClass;
  }
  _createClass(Menu, [{
    key: "template",
    get: function get() {
      return "<ul class=\"".concat(this.ulClass, "\">\n              ").concat(generateMenuItem(this.liClass, './#services', 'Services'), "\n              ").concat(generateMenuItem(this.liClass, './#team', 'Our Team'), "\n              ").concat(generateMenuItem(this.liClass, './#request', 'Advantages'), "\n              ").concat(generateMenuItem(this.liClass, './#feedbacks', 'Feedbacks'), "\n              ").concat(generateMenuItem(this.liClass, './#location', 'Contacts'), "\n            </ul>");
    }
  }, {
    key: "render",
    value: function render() {
      (0, _utils.replace)(componentName, this.parentElSelector, this.template);
    }
  }]);
  return Menu;
}();
exports.Menu = Menu;
function generateMenuItem(liClass, href, text) {
  return "<li class=\"".concat(liClass, "\">\n              <a class=\"link\" href=\"").concat(href, "\">").concat(text, "</a>\n            </li>");
}

},{"../utils":9}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("../utils");
var _logo = _interopRequireDefault(require("../components/logo"));
var _menu = require("./menu");
var _socials = _interopRequireDefault(require("./socials"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var componentName = 'overlay';
var Overlay = /*#__PURE__*/function () {
  function Overlay(parentClass) {
    _classCallCheck(this, Overlay);
    this.parentElSelector = ".".concat(parentClass);
  }
  _createClass(Overlay, [{
    key: "init",
    value: function init() {
      var _this = this;
      var $burgerIcon = document.querySelector('.burger-icon');
      $burgerIcon.addEventListener('click', function () {
        scroll(0, 0);
        _this.toggleMobileMenu();
      });
    }
  }, {
    key: "template",
    get: function get() {
      return "<div class=\"overlay hidden\">\n                <div class=\"overlay__content\">\n                  <div class=\"overlay__header container-full__inner\">\n                    <!--logo-->\n                    <div class=\"overlay__close-wrapper\">\n                      <img src=\"./images/icons/close.svg\" alt=\"\" class=\"overlay__close\">\n                    </div>\n                  </div>\n                  <a href=\"./#form\" class=\"overlay__cta cta\">\n                    <div class=\"cta__btn\">CALL ME BACK</div>\n                  </a>\n                  <nav>\n                    <!--menu-->\n                  </nav>\n                  <nav class=\"overlay__socials socials\">\n                    <!--socials-->\n                  </nav>\n                </div>\n            </div>";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      (0, _utils.replace)(componentName, this.parentElSelector, this.template);
      new _logo["default"](componentName).render();
      new _menu.Menu(componentName, 'overlay__list', 'overlay__item').render();
      new _socials["default"](componentName).render();
      setTimeout(function () {
        var $closeIcon = document.querySelector('.overlay__close-wrapper');
        $closeIcon.addEventListener('click', function () {
          _this2.toggleMobileMenu();
        });
        document.querySelectorAll('.overlay a').forEach(function ($link) {
          $link.addEventListener('click', function () {
            _this2.toggleMobileMenu();
          });
        });
      }, 0);
    }
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu() {
      document.querySelector('.overlay').classList.toggle('hidden');
      document.body.classList.toggle('no-overflow-js');
    }
  }]);
  return Overlay;
}();
exports["default"] = Overlay;

},{"../components/logo":3,"../utils":9,"./menu":4,"./socials":6}],6:[function(require,module,exports){
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
var componentName = 'socials';
var Socials = /*#__PURE__*/function () {
  function Socials(parentClass) {
    _classCallCheck(this, Socials);
    this.parentElSelector = ".".concat(parentClass);
  }
  _createClass(Socials, [{
    key: "template",
    get: function get() {
      return "<a class=\"socials__link link\" href=\"javascript:void(0);\">\n              <img src=\"./images/icons/youtube.svg\" alt=\"Youtube icon\">\n            </a>\n            <a class=\"socials__link link\" href=\"javascript:void(0);\">\n              <img src=\"./images/icons/instagram.svg\" alt=\"Instagram icon\">\n            </a>\n            <a class=\"socials__link link\" href=\"javascript:void(0);\">\n              <img src=\"./images/icons/facebook.svg\" alt=\"Facebook icon\">\n            </a>";
    }
  }, {
    key: "render",
    value: function render() {
      (0, _utils.replace)(componentName, this.parentElSelector, this.template);
    }
  }]);
  return Socials;
}();
exports["default"] = Socials;

},{"../utils":9}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNIVERSAL_PAGE_TITLE_KEY = exports.DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE = void 0;
var UNIVERSAL_PAGE_TITLE_KEY = 'universal-page-title';
exports.UNIVERSAL_PAGE_TITLE_KEY = UNIVERSAL_PAGE_TITLE_KEY;
var DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE = ".universal-page-link-js";
exports.DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE = DEFAULT_CSS_SELECTOR_FOR_LINK_TO_UNIVERSAL_PAGE;

},{}],8:[function(require,module,exports){
"use strict";

var _header = _interopRequireDefault(require("../blocks/header"));
var _footer = _interopRequireDefault(require("../blocks/footer"));
var _constants = require("../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
document.addEventListener('DOMContentLoaded', function () {
  new _header["default"]('body').render();
  new _footer["default"]('body').render();
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

},{"../blocks/footer":1,"../blocks/header":2,"../constants":7}],9:[function(require,module,exports){
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

},{"./constants":7}]},{},[8]);
