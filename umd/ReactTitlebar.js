(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactTitlebar"] = factory(require("react"));
	else
		root["ReactTitlebar"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Titlebar = __webpack_require__(1);

	var _Titlebar2 = _interopRequireDefault(_Titlebar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  Titlebar: _Titlebar2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KEY_ALT = 18;

	var Titlebar = function (_React$Component) {
	  _inherits(Titlebar, _React$Component);

	  function Titlebar(props, defaultProps) {
	    _classCallCheck(this, Titlebar);

	    var _this = _possibleConstructorReturn(this, (Titlebar.__proto__ || Object.getPrototypeOf(Titlebar)).call(this, props, defaultProps));

	    _this.state = {
	      keyAltDown: false
	    };

	    _this.handleMaximize = _this.handleMaximize.bind(_this);
	    return _this;
	  }

	  _createClass(Titlebar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.body.addEventListener('keydown', this.handleKeyDown.bind(this)); // eslint-disable-line no-undef
	      document.body.addEventListener('keyup', this.handleKeyUp.bind(this)); // eslint-disable-line no-undef
	    }
	  }, {
	    key: 'componentWillUnMount',
	    value: function componentWillUnMount() {
	      document.body.removeEventListener('keydown', this.handleKeyDown); // eslint-disable-line no-undef
	      document.body.removeEventListener('keyup', this.handleKeyUp); // eslint-disable-line no-undef
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      if (e.keyCode === KEY_ALT) {
	        this.setState({
	          keyAltDown: true
	        });
	      }
	    }
	  }, {
	    key: 'handleKeyUp',
	    value: function handleKeyUp(e) {
	      if (e.keyCode === KEY_ALT) {
	        this.setState({
	          keyAltDown: false
	        });
	      }
	    }
	  }, {
	    key: 'handleMaximize',
	    value: function handleMaximize() {
	      var _props = this.props,
	          onMaximize = _props.onMaximize,
	          onFullscreen = _props.onFullscreen;
	      var keyAltDown = this.state.keyAltDown;


	      if (keyAltDown) {
	        onMaximize();
	      } else {
	        onFullscreen();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          draggable = _props2.draggable,
	          title = _props2.title,
	          transparent = _props2.transparent,
	          onClose = _props2.onClose,
	          onMinimize = _props2.onMinimize;
	      var keyAltDown = this.state.keyAltDown;


	      var clazz = (0, _classnames2.default)({
	        titlebar: true,
	        'webkit-draggable': draggable,
	        transparent: transparent,
	        alt: keyAltDown
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: clazz },
	        _react2.default.createElement(
	          'div',
	          { className: 'titlebar-stoplight' },
	          _react2.default.createElement(
	            'div',
	            { className: 'titlebar-close', onClick: onClose },
	            _react2.default.createElement(
	              'svg',
	              { x: '0px', y: '0px', viewBox: '0 0 6.4 6.4' },
	              _react2.default.createElement('polygon', { fill: '#4d0000', points: '6.4,0.8 5.6,0 3.2,2.4 0.8,0 0,0.8 2.4,3.2 0,5.6 0.8,6.4 3.2,4 5.6,6.4 6.4,5.6 4,3.2' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'titlebar-minimize', onClick: onMinimize },
	            _react2.default.createElement(
	              'svg',
	              { x: '0px', y: '0px', viewBox: '0 0 8 1.1' },
	              _react2.default.createElement('rect', { fill: '#995700', width: '8', height: '1.1' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'titlebar-fullscreen', onClick: this.handleMaximize },
	            _react2.default.createElement(
	              'svg',
	              { className: 'fullscreen-svg', x: '0px', y: '0px', viewBox: '0 0 6 5.9' },
	              _react2.default.createElement('path', { fill: '#006400', d: 'M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z' }),
	              _react2.default.createElement('path', { fill: '#006400', d: 'M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z' })
	            ),
	            _react2.default.createElement(
	              'svg',
	              { className: 'maximize-svg', x: '0px', y: '0px', viewBox: '0 0 7.9 7.9' },
	              _react2.default.createElement('polygon', { fill: '#006400', points: '7.9,4.5 7.9,3.4 4.5,3.4 4.5,0 3.4,0 3.4,3.4 0,3.4 0,4.5 3.4,4.5 3.4,7.9 4.5,7.9 4.5,4.5' })
	            )
	          )
	        ),
	        title && _react2.default.createElement(
	          'div',
	          { className: 'titlebar-text' },
	          'title'
	        )
	      );
	    }
	  }]);

	  return Titlebar;
	}(_react2.default.Component);

	Titlebar.defaultProps = {
	  draggable: false,
	  title: null,
	  transparent: false
	};


	Titlebar.propTypes = {
	  title: _react.PropTypes.string,
	  transparent: _react.PropTypes.bool,
	  draggable: _react.PropTypes.bool,
	  onClose: _react.PropTypes.func.isRequired,
	  onMinimize: _react.PropTypes.func.isRequired,
	  onMaximize: _react.PropTypes.func.isRequired,
	  onFullscreen: _react.PropTypes.func.isRequired
	};

	exports.default = Titlebar;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".titlebar {\n  padding: 0 3px;\n  display: flex;\n  background-color: #f6f6f6; }\n  .titlebar.transparent {\n    background-color: transparent; }\n  .titlebar.webkit-draggable {\n    -webkit-app-region: drag; }\n  .titlebar.alt svg.fullscreen-svg {\n    display: none; }\n  .titlebar.alt svg.maximize-svg {\n    display: block !important; }\n  .titlebar.webkit-draggable .titlebar-close,\n  .titlebar.webkit-draggable .titlebar-minimize,\n  .titlebar.webkit-draggable .titlebar-fullscreen {\n    -webkit-app-region: no-drag; }\n\n.titlebar-text {\n  flex-grow: 1;\n  text-align: center;\n  font-family: 'Helvetica Neue', Helvetica;\n  font-size: 14px;\n  line-height: 24px;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default; }\n\n.titlebar-stoplight {\n  flex-grow: 0;\n  display: flex; }\n  .titlebar-stoplight .titlebar-close,\n  .titlebar-stoplight .titlebar-minimize,\n  .titlebar-stoplight .titlebar-fullscreen {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    margin: 6px 4px;\n    line-height: 0; }\n  .titlebar-stoplight .titlebar-close {\n    border: 1px solid #e2463f;\n    background-color: #ff5f57;\n    margin-left: 6px; }\n    .titlebar-stoplight .titlebar-close:active {\n      border-color: #ad3934;\n      background-color: #bf4943; }\n    .titlebar-stoplight .titlebar-close svg {\n      width: 6px;\n      height: 6px;\n      margin-top: 2px;\n      margin-left: 2px;\n      opacity: 0; }\n  .titlebar-stoplight .titlebar-minimize {\n    border: 1px solid #e1a116;\n    background-color: #ffbd2e; }\n    .titlebar-stoplight .titlebar-minimize:active {\n      border-color: #ad7d15;\n      background-color: #bf9123; }\n    .titlebar-stoplight .titlebar-minimize svg {\n      width: 8px;\n      height: 8px;\n      margin-top: 1px;\n      margin-left: 1px;\n      opacity: 0; }\n  .titlebar-stoplight .titlebar-fullscreen,\n  .titlebar-stoplight .titlebar-maximize {\n    border: 1px solid #12ac28;\n    background-color: #28c940; }\n  .titlebar-stoplight .titlebar-fullscreen:active {\n    border-color: #128622;\n    background-color: #1f9a31; }\n  .titlebar-stoplight .titlebar-fullscreen svg.fullscreen-svg {\n    width: 6px;\n    height: 6px;\n    margin-top: 2px;\n    margin-left: 2px;\n    opacity: 0; }\n  .titlebar-stoplight .titlebar-fullscreen svg.maximize-svg {\n    width: 8px;\n    height: 8px;\n    margin-top: 1px;\n    margin-left: 1px;\n    opacity: 0;\n    display: none; }\n  .titlebar-stoplight:hover svg,\n  .titlebar-stoplight:hover svg.fullscreen-svg,\n  .titlebar-stoplight:hover svg.maximize-svg {\n    opacity: 1; }\n\n.titlebar:after,\n.titlebar-stoplight:after {\n  content: ' ';\n  display: table;\n  clear: both; }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Titlebar.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./Titlebar.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }
/******/ ])
});
;