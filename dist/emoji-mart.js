(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory(require("react"), require("prop-types"));
	else
		root["EmojiMart"] = factory(root["React"], root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.frequently = exports.store = exports.emojiIndex = exports.Category = exports.Emoji = exports.Picker = undefined;

	var _components = __webpack_require__(1);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _components.Picker;
	  }
	});
	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _components.Emoji;
	  }
	});
	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _components.Category;
	  }
	});

	var _emojiIndex = __webpack_require__(28);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	var _store = __webpack_require__(18);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(17);

	var _frequently2 = _interopRequireDefault(_frequently);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.emojiIndex = _emojiIndex2.default;
	exports.store = _store2.default;
	exports.frequently = _frequently2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _anchors = __webpack_require__(2);

	Object.defineProperty(exports, 'Anchors', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_anchors).default;
	  }
	});

	var _category = __webpack_require__(16);

	Object.defineProperty(exports, 'Category', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_category).default;
	  }
	});

	var _emoji = __webpack_require__(19);

	Object.defineProperty(exports, 'Emoji', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_emoji).default;
	  }
	});

	var _picker = __webpack_require__(23);

	Object.defineProperty(exports, 'Picker', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_picker).default;
	  }
	});

	var _preview = __webpack_require__(26);

	Object.defineProperty(exports, 'Preview', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_preview).default;
	  }
	});

	var _search = __webpack_require__(27);

	Object.defineProperty(exports, 'Search', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_search).default;
	  }
	});

	var _skins = __webpack_require__(33);

	Object.defineProperty(exports, 'Skins', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_skins).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _svgs = __webpack_require__(5);

	var SVGs = _interopRequireWildcard(_svgs);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Anchors = function (_React$Component) {
	  _inherits(Anchors, _React$Component);

	  function Anchors(props) {
	    _classCallCheck(this, Anchors);

	    var _this = _possibleConstructorReturn(this, (Anchors.__proto__ || Object.getPrototypeOf(Anchors)).call(this, props));

	    var defaultCategory = null;
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = props.categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var category = _step.value;

	        if (category.first) {
	          defaultCategory = category;
	          break;
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    _this.state = {
	      selected: defaultCategory.name
	    };
	    return _this;
	  }

	  _createClass(Anchors, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var categories = _props.categories;
	      var onAnchorClick = _props.onAnchorClick;
	      var color = _props.color;
	      var i18n = _props.i18n;
	      var selected = this.state.selected;


	      return _react2.default.createElement(
	        'div',
	        { className: 'emoji-mart-anchors' },
	        categories.map(function (category, i) {
	          var name = category.name;
	          var anchor = category.anchor;
	          var isSelected = name == selected;
	          var SVGElement = SVGs[name];

	          if (anchor === false) {
	            return null;
	          }

	          return _react2.default.createElement(
	            'span',
	            {
	              key: name,
	              title: i18n.categories[name.toLowerCase()],
	              onClick: function onClick() {
	                return onAnchorClick(category, i);
	              },
	              className: 'emoji-mart-anchor ' + (isSelected ? 'emoji-mart-anchor-selected' : ''),
	              style: { color: isSelected ? color : null }
	            },
	            _react2.default.createElement(SVGElement, null),
	            _react2.default.createElement('span', { className: 'emoji-mart-anchor-bar', style: { backgroundColor: color } })
	          );
	        })
	      );
	    }
	  }]);

	  return Anchors;
	}(_react2.default.Component);

	exports.default = Anchors;


	Anchors.propTypes = {
	  categories: _propTypes2.default.array,
	  onAnchorClick: _propTypes2.default.func
	};

	Anchors.defaultProps = {
	  categories: [],
	  onAnchorClick: function onAnchorClick() {}
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _activity = __webpack_require__(6);

	Object.defineProperty(exports, 'Activity', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_activity).default;
	  }
	});

	var _flags = __webpack_require__(7);

	Object.defineProperty(exports, 'Flags', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_flags).default;
	  }
	});

	var _foods = __webpack_require__(8);

	Object.defineProperty(exports, 'Foods', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_foods).default;
	  }
	});

	var _nature = __webpack_require__(9);

	Object.defineProperty(exports, 'Nature', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_nature).default;
	  }
	});

	var _objects = __webpack_require__(10);

	Object.defineProperty(exports, 'Objects', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_objects).default;
	  }
	});

	var _people = __webpack_require__(11);

	Object.defineProperty(exports, 'People', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_people).default;
	  }
	});

	var _places = __webpack_require__(12);

	Object.defineProperty(exports, 'Places', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_places).default;
	  }
	});

	var _recent = __webpack_require__(13);

	Object.defineProperty(exports, 'Recent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_recent).default;
	  }
	});

	var _symbols = __webpack_require__(14);

	Object.defineProperty(exports, 'Symbols', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_symbols).default;
	  }
	});

	var _custom = __webpack_require__(15);

	Object.defineProperty(exports, 'Custom', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_custom).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var activity = function (_React$Component) {
	    _inherits(activity, _React$Component);

	    function activity() {
	        _classCallCheck(this, activity);

	        return _possibleConstructorReturn(this, (activity.__proto__ || Object.getPrototypeOf(activity)).apply(this, arguments));
	    }

	    _createClass(activity, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                _extends({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113" })
	            );
	        }
	    }]);

	    return activity;
	}(_react2.default.Component);

	exports.default = activity;
	;

	activity.displayName = "activity";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var flags = function (_React$Component) {
	    _inherits(flags, _React$Component);

	    function flags() {
	        _classCallCheck(this, flags);

	        return _possibleConstructorReturn(this, (flags.__proto__ || Object.getPrototypeOf(flags)).apply(this, arguments));
	    }

	    _createClass(flags, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                _extends({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z" })
	            );
	        }
	    }]);

	    return flags;
	}(_react2.default.Component);

	exports.default = flags;
	;

	flags.displayName = "flags";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var foods = function (_React$Component) {
	    _inherits(foods, _React$Component);

	    function foods() {
	        _classCallCheck(this, foods);

	        return _possibleConstructorReturn(this, (foods.__proto__ || Object.getPrototypeOf(foods)).apply(this, arguments));
	    }

	    _createClass(foods, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                _extends({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9" })
	            );
	        }
	    }]);

	    return foods;
	}(_react2.default.Component);

	exports.default = foods;
	;

	foods.displayName = "foods";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var nature = function (_React$Component) {
	    _inherits(nature, _React$Component);

	    function nature() {
	        _classCallCheck(this, nature);

	        return _possibleConstructorReturn(this, (nature.__proto__ || Object.getPrototypeOf(nature)).apply(this, arguments));
	    }

	    _createClass(nature, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                _extends({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8" }),
	                _react2.default.createElement("path", { d: "M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235" })
	            );
	        }
	    }]);

	    return nature;
	}(_react2.default.Component);

	exports.default = nature;
	;

	nature.displayName = "nature";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var objects = function (_React$Component) {
	    _inherits(objects, _React$Component);

	    function objects() {
	        _classCallCheck(this, objects);

	        return _possibleConstructorReturn(this, (objects.__proto__ || Object.getPrototypeOf(objects)).apply(this, arguments));
	    }

	    _createClass(objects, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                _extends({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z" }),
	                _react2.default.createElement("path", { d: "M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789" })
	            );
	        }
	    }]);

	    return objects;
	}(_react2.default.Component);

	exports.default = objects;
	;

	objects.displayName = "objects";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var people = function (_React$Component) {
	    _inherits(people, _React$Component);

	    function people() {
	        _classCallCheck(this, people);

	        return _possibleConstructorReturn(this, (people.__proto__ || Object.getPrototypeOf(people)).apply(this, arguments));
	    }

	    _createClass(people, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                _extends({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" }),
	                _react2.default.createElement("path", { d: "M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0" })
	            );
	        }
	    }]);

	    return people;
	}(_react2.default.Component);

	exports.default = people;
	;

	people.displayName = "people";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var places = function (_React$Component) {
	    _inherits(places, _React$Component);

	    function places() {
	        _classCallCheck(this, places);

	        return _possibleConstructorReturn(this, (places.__proto__ || Object.getPrototypeOf(places)).apply(this, arguments));
	    }

	    _createClass(places, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                _extends({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5" }),
	                _react2.default.createElement("path", { d: "M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z" })
	            );
	        }
	    }]);

	    return places;
	}(_react2.default.Component);

	exports.default = places;
	;

	places.displayName = "places";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var recent = function (_React$Component) {
	    _inherits(recent, _React$Component);

	    function recent() {
	        _classCallCheck(this, recent);

	        return _possibleConstructorReturn(this, (recent.__proto__ || Object.getPrototypeOf(recent)).apply(this, arguments));
	    }

	    _createClass(recent, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                _extends({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z" }),
	                _react2.default.createElement("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" })
	            );
	        }
	    }]);

	    return recent;
	}(_react2.default.Component);

	exports.default = recent;
	;

	recent.displayName = "recent";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var symbols = function (_React$Component) {
	    _inherits(symbols, _React$Component);

	    function symbols() {
	        _classCallCheck(this, symbols);

	        return _possibleConstructorReturn(this, (symbols.__proto__ || Object.getPrototypeOf(symbols)).apply(this, arguments));
	    }

	    _createClass(symbols, [{
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "svg",
	                _extends({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
	                _react2.default.createElement("path", { d: "M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76" })
	            );
	        }
	    }]);

	    return symbols;
	}(_react2.default.Component);

	exports.default = symbols;
	;

	symbols.displayName = "symbols";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var custom = function (_React$Component) {
					_inherits(custom, _React$Component);

					function custom() {
									_classCallCheck(this, custom);

									return _possibleConstructorReturn(this, (custom.__proto__ || Object.getPrototypeOf(custom)).apply(this, arguments));
					}

					_createClass(custom, [{
									key: "render",
									value: function render() {
													return _react2.default.createElement(
																	"svg",
																	_extends({ height: "24", width: "24", viewBox: "0 0 24 24" }, this.props),
																	_react2.default.createElement(
																					"g",
																					{ transform: "translate(2.000000, 1.000000)" },
																					_react2.default.createElement("rect", { height: "21", id: "Rectangle", width: "3", rx: "1.5", x: "8", y: "0" }),
																					_react2.default.createElement("rect", { height: "21", id: "Rectangle", width: "3", rx: "1.5", transform: "translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) ", x: "8.343", y: "0.049" }),
																					_react2.default.createElement("rect", { height: "21", id: "Rectangle", width: "3", rx: "1.5", transform: "translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) ", x: "8.343", y: "0.049" })
																	)
													);
									}
					}]);

					return custom;
	}(_react2.default.Component);

	exports.default = custom;
	;

	custom.displayName = "custom";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _frequently = __webpack_require__(17);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Category = function (_React$Component) {
	  _inherits(Category, _React$Component);

	  function Category() {
	    _classCallCheck(this, Category);

	    return _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).apply(this, arguments));
	  }

	  _createClass(Category, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.container = this.refs.container;
	      this.label = this.refs.label;
	      this.parent = this.container.parentNode;

	      this.margin = 0;
	      this.minMargin = 0;

	      this.memoizeSize();
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      var _props = this.props;
	      var name = _props.name;
	      var perLine = _props.perLine;
	      var native = _props.native;
	      var hasStickyPosition = _props.hasStickyPosition;
	      var emojis = _props.emojis;
	      var emojiProps = _props.emojiProps;
	      var skin = emojiProps.skin;
	      var size = emojiProps.size;
	      var set = emojiProps.set;
	      var nextPerLine = nextProps.perLine;
	      var nextNative = nextProps.native;
	      var nextHasStickyPosition = nextProps.hasStickyPosition;
	      var nextEmojis = nextProps.emojis;
	      var nextEmojiProps = nextProps.emojiProps;
	      var nextSkin = nextEmojiProps.skin;
	      var nextSize = nextEmojiProps.size;
	      var nextSet = nextEmojiProps.set;
	      var shouldUpdate = false;

	      if (name == 'Recent' && perLine != nextPerLine) {
	        shouldUpdate = true;
	      }

	      if (name == 'Search') {
	        shouldUpdate = !(emojis == nextEmojis);
	      }

	      if (skin != nextSkin || size != nextSize || native != nextNative || set != nextSet || hasStickyPosition != nextHasStickyPosition) {
	        shouldUpdate = true;
	      }

	      return shouldUpdate;
	    }
	  }, {
	    key: 'memoizeSize',
	    value: function memoizeSize() {
	      var _container$getBoundin = this.container.getBoundingClientRect();

	      var top = _container$getBoundin.top;
	      var height = _container$getBoundin.height;

	      var _parent$getBoundingCl = this.parent.getBoundingClientRect();

	      var parentTop = _parent$getBoundingCl.top;

	      var _label$getBoundingCli = this.label.getBoundingClientRect();

	      var labelHeight = _label$getBoundingCli.height;


	      this.top = top - parentTop + this.parent.scrollTop;

	      if (height == 0) {
	        this.maxMargin = 0;
	      } else {
	        this.maxMargin = height - labelHeight;
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll(scrollTop) {
	      var margin = scrollTop - this.top;
	      margin = margin < this.minMargin ? this.minMargin : margin;
	      margin = margin > this.maxMargin ? this.maxMargin : margin;

	      if (margin == this.margin) return;
	      var name = this.props.name;


	      if (!this.props.hasStickyPosition) {
	        this.label.style.top = margin + 'px';
	      }

	      this.margin = margin;
	      return true;
	    }
	  }, {
	    key: 'getEmojis',
	    value: function getEmojis() {
	      var _props2 = this.props;
	      var name = _props2.name;
	      var emojis = _props2.emojis;
	      var perLine = _props2.perLine;


	      if (name == 'Recent') {
	        var custom = this.props.custom;

	        var frequentlyUsed = _frequently2.default.get(perLine);

	        if (frequentlyUsed.length) {
	          emojis = frequentlyUsed.map(function (id) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;

	            try {
	              for (var _iterator = custom[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var emoji = _step.value;

	                if (emoji.id === id) {
	                  return emoji;
	                }
	              }
	            } catch (err) {
	              _didIteratorError = true;
	              _iteratorError = err;
	            } finally {
	              try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                  _iterator.return();
	                }
	              } finally {
	                if (_didIteratorError) {
	                  throw _iteratorError;
	                }
	              }
	            }

	            return id;
	          });
	        }
	      }

	      if (emojis) {
	        emojis = emojis.slice(0);
	      }

	      return emojis;
	    }
	  }, {
	    key: 'updateDisplay',
	    value: function updateDisplay(display) {
	      var emojis = this.getEmojis();

	      if (!emojis) {
	        return;
	      }

	      this.container.style.display = display;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var name = _props3.name;
	      var hasStickyPosition = _props3.hasStickyPosition;
	      var emojiProps = _props3.emojiProps;
	      var i18n = _props3.i18n;
	      var emojis = this.getEmojis();
	      var labelStyles = {};
	      var labelSpanStyles = {};
	      var containerStyles = {};

	      if (!emojis) {
	        containerStyles = {
	          display: 'none'
	        };
	      }

	      if (!hasStickyPosition) {
	        labelStyles = {
	          height: 28
	        };

	        labelSpanStyles = {
	          position: 'absolute'
	        };
	      }

	      return _react2.default.createElement(
	        'div',
	        { ref: 'container', className: 'emoji-mart-category ' + (emojis && !emojis.length ? 'emoji-mart-no-results' : ''), style: containerStyles },
	        _react2.default.createElement(
	          'div',
	          { style: labelStyles, 'data-name': name, className: 'emoji-mart-category-label' },
	          _react2.default.createElement(
	            'span',
	            { style: labelSpanStyles, ref: 'label' },
	            i18n.categories[name.toLowerCase()]
	          )
	        ),
	        emojis && emojis.map(function (emoji) {
	          return (0, _.Emoji)(_extends({
	            emoji: emoji
	          }, emojiProps));
	        }),
	        emojis && !emojis.length && _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'div',
	            null,
	            (0, _.Emoji)(_extends({}, emojiProps, {
	              size: 38,
	              emoji: 'sleuth_or_spy',
	              onOver: null,
	              onLeave: null,
	              onClick: null
	            }))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-no-results-label' },
	            i18n.notfound
	          )
	        )
	      );
	    }
	  }]);

	  return Category;
	}(_react2.default.Component);

	exports.default = Category;


	Category.propTypes = {
	  emojis: _propTypes2.default.array,
	  hasStickyPosition: _propTypes2.default.bool,
	  name: _propTypes2.default.string.isRequired,
	  native: _propTypes2.default.bool.isRequired,
	  perLine: _propTypes2.default.number.isRequired,
	  emojiProps: _propTypes2.default.object.isRequired
	};

	Category.defaultProps = {
	  emojis: [],
	  hasStickyPosition: true
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _store = __webpack_require__(18);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];

	var frequently = _store2.default.get('frequently');
	var defaults = {};

	function add(emoji) {
	  var id = emoji.id;


	  frequently || (frequently = defaults);
	  frequently[id] || (frequently[id] = 0);
	  frequently[id] += 1;

	  _store2.default.set('last', id);
	  _store2.default.set('frequently', frequently);
	}

	function get(perLine) {
	  if (!frequently) {
	    defaults = {};

	    // Use Array.prototype.fill() when it is more widely supported.
	    return [].concat(_toConsumableArray(Array(perLine))).map(function (_, i) {
	      defaults[DEFAULTS[i]] = perLine - i;
	      return DEFAULTS[i];
	    });
	  }

	  var quantity = perLine * 4,
	      sorted = Object.keys(frequently).sort(function (a, b) {
	    return frequently[a] - frequently[b];
	  }).reverse(),
	      sliced = sorted.slice(0, quantity),
	      last = _store2.default.get('last');

	  if (last && sliced.indexOf(last) == -1) {
	    sliced.pop();
	    sliced.push(last);
	  }

	  return sliced;
	}

	exports.default = { add: add, get: get };

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NAMESPACE = 'emoji-mart';

	var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;

	function update(state) {
	  for (var key in state) {
	    var value = state[key];
	    set(key, value);
	  }
	}

	function set(key, value) {
	  if (!isLocalStorageSupported) return;
	  try {
	    window.localStorage[NAMESPACE + '.' + key] = JSON.stringify(value);
	  } catch (e) {}
	}

	function get(key) {
	  if (!isLocalStorageSupported) return;
	  try {
	    var value = window.localStorage[NAMESPACE + '.' + key];
	  } catch (e) {
	    return;
	  }

	  if (value) {
	    return JSON.parse(value);
	  }
	}

	function setNamespace(namespace) {
	  NAMESPACE = namespace;
	}

	exports.default = { update: update, set: set, get: get, setNamespace: setNamespace };

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _data = __webpack_require__(20);

	var _data2 = _interopRequireDefault(_data);

	var _utils = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SHEET_COLUMNS = 49;

	var _getPosition = function _getPosition(props) {
	  var _getData2 = _getData(props);

	  var sheet_x = _getData2.sheet_x;
	  var sheet_y = _getData2.sheet_y;
	  var multiply = 100 / (SHEET_COLUMNS - 1);

	  return multiply * sheet_x + '% ' + multiply * sheet_y + '%';
	};

	var _getData = function _getData(props) {
	  var emoji = props.emoji;
	  var skin = props.skin;
	  var set = props.set;

	  return (0, _utils.getData)(emoji, skin, set);
	};

	var _getSanitizedData = function _getSanitizedData(props) {
	  var emoji = props.emoji;
	  var skin = props.skin;
	  var set = props.set;

	  return (0, _utils.getSanitizedData)(emoji, skin, set);
	};

	var _handleClick = function _handleClick(e, props) {
	  if (!props.onClick) {
	    return;
	  }
	  var onClick = props.onClick;
	  var emoji = _getSanitizedData(props);

	  onClick(emoji, e);
	};

	var _handleOver = function _handleOver(e, props) {
	  if (!props.onOver) {
	    return;
	  }
	  var onOver = props.onOver;
	  var emoji = _getSanitizedData(props);

	  onOver(emoji, e);
	};

	var _handleLeave = function _handleLeave(e, props) {
	  if (!props.onLeave) {
	    return;
	  }
	  var onLeave = props.onLeave;
	  var emoji = _getSanitizedData(props);

	  onLeave(emoji, e);
	};

	var Emoji = function Emoji(props) {
	  for (var k in Emoji.defaultProps) {
	    if (props[k] == undefined && Emoji.defaultProps[k] != undefined) {
	      props[k] = Emoji.defaultProps[k];
	    }
	  }

	  var _getData3 = _getData(props);

	  var unified = _getData3.unified;
	  var custom = _getData3.custom;
	  var imageUrl = _getData3.imageUrl;
	  var style = {};
	  var children = props.children;

	  if (!unified && !custom) {
	    return null;
	  }

	  if (props.native && unified) {
	    style = { fontSize: props.size };
	    children = (0, _utils.unifiedToNative)(unified);

	    if (props.forceSize) {
	      style.display = 'inline-block';
	      style.width = props.size;
	      style.height = props.size;
	    }
	  } else if (custom) {
	    style = {
	      width: props.size,
	      height: props.size,
	      display: 'inline-block',
	      backgroundImage: 'url(' + imageUrl + ')',
	      backgroundSize: '100%'
	    };
	  } else {
	    var setHasEmoji = _getData(props)['has_img_' + props.set];

	    if (!setHasEmoji) {
	      return null;
	    }

	    style = {
	      width: props.size,
	      height: props.size,
	      display: 'inline-block',
	      backgroundImage: 'url(' + props.backgroundImageFn(props.set, props.sheetSize) + ')',
	      backgroundSize: 100 * SHEET_COLUMNS + '%',
	      backgroundPosition: _getPosition(props)
	    };
	  }

	  return _react2.default.createElement(
	    'span',
	    {
	      key: props.emoji.id || props.emoji,
	      onClick: function onClick(e) {
	        return _handleClick(e, props);
	      },
	      onMouseEnter: function onMouseEnter(e) {
	        return _handleOver(e, props);
	      },
	      onMouseLeave: function onMouseLeave(e) {
	        return _handleLeave(e, props);
	      },
	      className: 'emoji-mart-emoji' },
	    _react2.default.createElement(
	      'span',
	      { style: style },
	      children
	    )
	  );
	};

	Emoji.propTypes = {
	  onOver: _propTypes2.default.func,
	  onLeave: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  backgroundImageFn: _propTypes2.default.func,
	  native: _propTypes2.default.bool,
	  forceSize: _propTypes2.default.bool,
	  skin: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6]),
	  sheetSize: _propTypes2.default.oneOf([16, 20, 32, 64]),
	  set: _propTypes2.default.oneOf(['apple', 'google', 'twitter', 'emojione', 'messenger', 'facebook']),
	  size: _propTypes2.default.number.isRequired,
	  emoji: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired
	};

	Emoji.defaultProps = {
	  skin: 1,
	  set: 'apple',
	  sheetSize: 64,
	  native: false,
	  forceSize: false,
	  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
	    return 'https://unpkg.com/emoji-datasource-' + set + '@' + ('^3.0.0') + '/img/' + set + '/sheets/' + sheetSize + '.png';
	  },
	  onOver: function onOver() {},
	  onLeave: function onLeave() {},
	  onClick: function onClick() {}
	};

	exports.default = Emoji;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = { categories: [{ name: "People", emojis: ["grinning", "smiley", "smile", "grin", "laughing", "sweat_smile", "joy", "relaxed", "blush", "innocent", "wink", "relieved", "heart_eyes", "kissing_heart", "kissing", "kissing_smiling_eyes", "kissing_closed_eyes", "yum", "stuck_out_tongue_winking_eye", "stuck_out_tongue_closed_eyes", "stuck_out_tongue", "sunglasses", "smirk", "unamused", "disappointed", "pensive", "worried", "confused", "white_frowning_face", "persevere", "confounded", "tired_face", "weary", "triumph", "angry", "rage", "no_mouth", "neutral_face", "expressionless", "hushed", "frowning", "anguished", "open_mouth", "astonished", "dizzy_face", "flushed", "scream", "fearful", "cold_sweat", "cry", "disappointed_relieved", "sob", "sweat", "sleepy", "sleeping", "grimacing", "mask", "smiling_imp", "imp", "japanese_ogre", "japanese_goblin", "hankey", "ghost", "skull", "skull_and_crossbones", "alien", "space_invader", "jack_o_lantern", "smiley_cat", "smile_cat", "joy_cat", "heart_eyes_cat", "smirk_cat", "kissing_cat", "scream_cat", "crying_cat_face", "pouting_cat", "open_hands", "raised_hands", "clap", "pray", "+1", "-1", "facepunch", "fist", "v", "ok_hand", "point_left", "point_right", "point_up_2", "point_down", "point_up", "hand", "wave", "muscle", "writing_hand", "nail_care", "ring", "lipstick", "kiss", "lips", "tongue", "ear", "nose", "footprints", "eyes", "bust_in_silhouette", "busts_in_silhouette", "baby", "boy", "girl", "man", "woman", "blond-haired-woman", "person_with_blond_hair", "older_man", "older_woman", "man_with_gua_pi_mao", "woman-wearing-turban", "man_with_turban", "female-police-officer", "cop", "female-construction-worker", "construction_worker", "female-guard", "guardsman", "female-doctor", "male-doctor", "female-farmer", "male-farmer", "female-cook", "male-cook", "female-student", "male-student", "female-singer", "male-singer", "female-teacher", "male-teacher", "female-factory-worker", "male-factory-worker", "female-technologist", "male-technologist", "female-office-worker", "male-office-worker", "female-mechanic", "male-mechanic", "female-scientist", "male-scientist", "female-artist", "male-artist", "female-firefighter", "male-firefighter", "female-pilot", "male-pilot", "female-astronaut", "male-astronaut", "female-judge", "male-judge", "santa", "princess", "bride_with_veil", "angel", "woman-bowing", "bow", "information_desk_person", "man-tipping-hand", "no_good", "man-gesturing-no", "ok_woman", "man-gesturing-ok", "raising_hand", "man-raising-hand", "person_with_pouting_face", "man-pouting", "person_frowning", "man-frowning", "haircut", "man-getting-haircut", "massage", "man-getting-massage", "dancer", "dancers", "man-with-bunny-ears-partying", "woman-walking", "walking", "woman-running", "runner", "couple", "two_women_holding_hands", "two_men_holding_hands", "couple_with_heart", "woman-heart-woman", "man-heart-man", "couplekiss", "woman-kiss-woman", "man-kiss-man", "family", "man-woman-girl", "man-woman-girl-boy", "man-woman-boy-boy", "man-woman-girl-girl", "woman-woman-boy", "woman-woman-girl", "woman-woman-girl-boy", "woman-woman-boy-boy", "woman-woman-girl-girl", "man-man-boy", "man-man-girl", "man-man-girl-boy", "man-man-boy-boy", "man-man-girl-girl", "woman-boy", "woman-girl", "woman-girl-boy", "woman-boy-boy", "woman-girl-girl", "man-boy", "man-girl", "man-girl-boy", "man-boy-boy", "man-girl-girl", "womans_clothes", "shirt", "jeans", "necktie", "dress", "bikini", "kimono", "high_heel", "sandal", "boot", "mans_shoe", "athletic_shoe", "womans_hat", "tophat", "mortar_board", "crown", "helmet_with_white_cross", "school_satchel", "pouch", "purse", "handbag", "briefcase", "eyeglasses", "closed_umbrella", "umbrella", "man-woman-boy", "woman-heart-man", "woman-kiss-man", "male-police-officer", "blond-haired-man", "man-wearing-turban", "male-construction-worker", "male-guard", "woman-with-bunny-ears-partying", "man-running", "woman-getting-massage", "woman-getting-haircut", "man-walking", "woman-tipping-hand", "woman-gesturing-no", "woman-gesturing-ok", "man-bowing", "woman-raising-hand", "woman-frowning", "woman-pouting"] }, { name: "Nature", emojis: ["dog", "cat", "mouse", "hamster", "rabbit", "bear", "panda_face", "koala", "tiger", "cow", "pig", "pig_nose", "frog", "monkey_face", "see_no_evil", "hear_no_evil", "speak_no_evil", "monkey", "chicken", "penguin", "bird", "baby_chick", "hatching_chick", "hatched_chick", "wolf", "boar", "horse", "bee", "bug", "snail", "shell", "beetle", "ant", "turtle", "snake", "octopus", "tropical_fish", "fish", "blowfish", "dolphin", "whale", "whale2", "crocodile", "leopard", "tiger2", "water_buffalo", "ox", "cow2", "dromedary_camel", "camel", "elephant", "racehorse", "pig2", "goat", "ram", "sheep", "dog2", "poodle", "cat2", "rooster", "rabbit2", "mouse2", "rat", "feet", "dragon", "dragon_face", "cactus", "christmas_tree", "evergreen_tree", "deciduous_tree", "palm_tree", "seedling", "herb", "shamrock", "four_leaf_clover", "bamboo", "tanabata_tree", "leaves", "fallen_leaf", "maple_leaf", "mushroom", "ear_of_rice", "bouquet", "tulip", "rose", "sunflower", "blossom", "cherry_blossom", "hibiscus", "earth_americas", "earth_africa", "earth_asia", "full_moon", "waning_gibbous_moon", "last_quarter_moon", "waning_crescent_moon", "new_moon", "waxing_crescent_moon", "first_quarter_moon", "moon", "new_moon_with_face", "full_moon_with_face", "sun_with_face", "first_quarter_moon_with_face", "last_quarter_moon_with_face", "crescent_moon", "dizzy", "star", "star2", "sparkles", "zap", "fire", "boom", "comet", "sunny", "partly_sunny", "rainbow", "cloud", "thunder_cloud_and_rain", "snowman", "snowman_without_snow", "snowflake", "dash", "ocean", "droplet", "sweat_drops", "umbrella_with_rain_drops"] }, { name: "Foods", emojis: ["green_apple", "apple", "pear", "tangerine", "lemon", "banana", "watermelon", "grapes", "strawberry", "melon", "cherries", "peach", "pineapple", "tomato", "eggplant", "corn", "sweet_potato", "chestnut", "honey_pot", "bread", "fried_egg", "fried_shrimp", "poultry_leg", "meat_on_bone", "pizza", "hamburger", "fries", "spaghetti", "ramen", "stew", "fish_cake", "sushi", "bento", "curry", "rice", "rice_ball", "rice_cracker", "oden", "dango", "shaved_ice", "ice_cream", "icecream", "cake", "birthday", "custard", "lollipop", "candy", "chocolate_bar", "doughnut", "cookie", "baby_bottle", "coffee", "tea", "sake", "beer", "beers", "wine_glass", "cocktail", "tropical_drink", "fork_and_knife"] }, { name: "Activity", emojis: ["soccer", "basketball", "football", "baseball", "tennis", "rugby_football", "8ball", "golf", "fishing_pole_and_fish", "ice_skate", "ski", "skier", "snowboarder", "woman-bouncing-ball", "person_with_ball", "woman-surfing", "surfer", "woman-swimming", "swimmer", "woman-rowing-boat", "rowboat", "horse_racing", "woman-biking", "bicyclist", "woman-mountain-biking", "mountain_bicyclist", "running_shirt_with_sash", "trophy", "ticket", "circus_tent", "performing_arts", "art", "clapper", "microphone", "headphones", "musical_score", "musical_keyboard", "saxophone", "trumpet", "guitar", "violin", "game_die", "dart", "bowling", "video_game", "slot_machine", "man-bouncing-ball", "man-surfing", "man-swimming", "man-rowing-boat", "man-biking", "man-mountain-biking"] }, { name: "Places", emojis: ["car", "taxi", "blue_car", "bus", "trolleybus", "police_car", "ambulance", "fire_engine", "minibus", "truck", "articulated_lorry", "tractor", "bike", "rotating_light", "oncoming_police_car", "oncoming_bus", "oncoming_automobile", "oncoming_taxi", "aerial_tramway", "mountain_cableway", "suspension_railway", "railway_car", "train", "mountain_railway", "monorail", "bullettrain_side", "bullettrain_front", "light_rail", "steam_locomotive", "train2", "metro", "tram", "station", "helicopter", "airplane", "rocket", "seat", "boat", "speedboat", "ferry", "ship", "anchor", "construction", "fuelpump", "busstop", "vertical_traffic_light", "traffic_light", "moyai", "statue_of_liberty", "fountain", "tokyo_tower", "european_castle", "japanese_castle", "ferris_wheel", "roller_coaster", "carousel_horse", "umbrella_on_ground", "mountain", "mount_fuji", "volcano", "tent", "factory", "house", "house_with_garden", "office", "department_store", "post_office", "european_post_office", "hospital", "bank", "hotel", "convenience_store", "school", "love_hotel", "wedding", "church", "shinto_shrine", "japan", "rice_scene", "sunrise", "sunrise_over_mountains", "stars", "sparkler", "fireworks", "city_sunrise", "city_sunset", "night_with_stars", "milky_way", "bridge_at_night", "foggy"] }, { name: "Objects", emojis: ["watch", "iphone", "calling", "computer", "keyboard", "minidisc", "floppy_disk", "cd", "dvd", "vhs", "camera", "video_camera", "movie_camera", "telephone_receiver", "phone", "pager", "fax", "tv", "radio", "stopwatch", "timer_clock", "alarm_clock", "hourglass", "hourglass_flowing_sand", "satellite_antenna", "battery", "electric_plug", "bulb", "flashlight", "money_with_wings", "dollar", "yen", "euro", "pound", "moneybag", "credit_card", "gem", "scales", "wrench", "hammer", "hammer_and_pick", "pick", "nut_and_bolt", "gear", "chains", "gun", "bomb", "hocho", "crossed_swords", "smoking", "coffin", "funeral_urn", "crystal_ball", "barber", "alembic", "telescope", "microscope", "pill", "syringe", "toilet", "potable_water", "shower", "bathtub", "bath", "key", "door", "gift", "balloon", "flags", "ribbon", "confetti_ball", "tada", "dolls", "izakaya_lantern", "wind_chime", "email", "envelope_with_arrow", "incoming_envelope", "e-mail", "love_letter", "inbox_tray", "outbox_tray", "package", "mailbox_closed", "mailbox", "mailbox_with_mail", "mailbox_with_no_mail", "postbox", "postal_horn", "scroll", "page_with_curl", "page_facing_up", "bookmark_tabs", "bar_chart", "chart_with_upwards_trend", "chart_with_downwards_trend", "calendar", "date", "card_index", "clipboard", "file_folder", "open_file_folder", "newspaper", "notebook", "notebook_with_decorative_cover", "ledger", "closed_book", "green_book", "blue_book", "orange_book", "books", "book", "bookmark", "link", "paperclip", "triangular_ruler", "straight_ruler", "pushpin", "round_pushpin", "scissors", "black_nib", "memo", "pencil2", "mag", "mag_right", "lock_with_ink_pen", "closed_lock_with_key", "lock", "unlock"] }, { name: "Symbols", emojis: ["heart", "yellow_heart", "green_heart", "blue_heart", "purple_heart", "broken_heart", "heavy_heart_exclamation_mark_ornament", "two_hearts", "revolving_hearts", "heartbeat", "heartpulse", "sparkling_heart", "cupid", "gift_heart", "heart_decoration", "peace_symbol", "latin_cross", "star_and_crescent", "wheel_of_dharma", "star_of_david", "six_pointed_star", "yin_yang", "orthodox_cross", "ophiuchus", "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpius", "sagittarius", "capricorn", "aquarius", "pisces", "id", "atom_symbol", "accept", "radioactive_sign", "biohazard_sign", "mobile_phone_off", "vibration_mode", "u6709", "u7121", "u7533", "u55b6", "u6708", "eight_pointed_black_star", "vs", "white_flower", "ideograph_advantage", "secret", "congratulations", "u5408", "u6e80", "u5272", "u7981", "a", "b", "ab", "cl", "o2", "sos", "x", "o", "no_entry", "name_badge", "no_entry_sign", "100", "anger", "hotsprings", "no_pedestrians", "do_not_litter", "no_bicycles", "non-potable_water", "underage", "no_mobile_phones", "no_smoking", "exclamation", "grey_exclamation", "question", "grey_question", "bangbang", "interrobang", "low_brightness", "high_brightness", "part_alternation_mark", "warning", "children_crossing", "trident", "fleur_de_lis", "beginner", "recycle", "white_check_mark", "u6307", "chart", "sparkle", "eight_spoked_asterisk", "negative_squared_cross_mark", "globe_with_meridians", "diamond_shape_with_a_dot_inside", "m", "cyclone", "zzz", "atm", "wc", "wheelchair", "parking", "u7a7a", "sa", "passport_control", "customs", "baggage_claim", "left_luggage", "mens", "womens", "baby_symbol", "restroom", "put_litter_in_its_place", "cinema", "signal_strength", "koko", "symbols", "information_source", "abc", "abcd", "capital_abcd", "ng", "ok", "up", "cool", "new", "free", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "keycap_ten", "1234", "hash", "keycap_star", "arrow_forward", "black_right_pointing_triangle_with_double_vertical_bar", "eject", "black_right_pointing_double_triangle_with_vertical_bar", "black_left_pointing_double_triangle_with_vertical_bar", "fast_forward", "rewind", "arrow_double_up", "arrow_double_down", "arrow_backward", "arrow_up_small", "arrow_down_small", "arrow_right", "arrow_left", "arrow_up", "arrow_down", "arrow_upper_right", "arrow_lower_right", "arrow_lower_left", "arrow_upper_left", "arrow_up_down", "left_right_arrow", "arrow_right_hook", "leftwards_arrow_with_hook", "arrow_heading_up", "arrow_heading_down", "twisted_rightwards_arrows", "repeat", "repeat_one", "arrows_counterclockwise", "arrows_clockwise", "musical_note", "notes", "heavy_plus_sign", "heavy_minus_sign", "heavy_division_sign", "heavy_multiplication_x", "heavy_dollar_sign", "currency_exchange", "tm", "copyright", "registered", "wavy_dash", "curly_loop", "loop", "end", "back", "on", "top", "soon", "heavy_check_mark", "ballot_box_with_check", "radio_button", "white_circle", "black_circle", "red_circle", "large_blue_circle", "small_red_triangle", "small_red_triangle_down", "small_orange_diamond", "small_blue_diamond", "large_orange_diamond", "large_blue_diamond", "white_square_button", "black_square_button", "black_small_square", "white_small_square", "black_medium_small_square", "white_medium_small_square", "black_medium_square", "white_medium_square", "black_large_square", "white_large_square", "speaker", "mute", "sound", "loud_sound", "bell", "no_bell", "mega", "loudspeaker", "speech_balloon", "thought_balloon", "spades", "clubs", "hearts", "diamonds", "black_joker", "flower_playing_cards", "mahjong", "clock1", "clock2", "clock3", "clock4", "clock5", "clock6", "clock7", "clock8", "clock9", "clock10", "clock11", "clock12", "clock130", "clock230", "clock330", "clock430", "clock530", "clock630", "clock730", "clock830", "clock930", "clock1030", "clock1130", "clock1230", "female_sign", "male_sign", "staff_of_aesculapius"] }, { name: "Flags", emojis: ["checkered_flag", "crossed_flags", "flag-ac", "flag-ad", "flag-ae", "flag-af", "flag-ag", "flag-ai", "flag-al", "flag-am", "flag-ao", "flag-aq", "flag-ar", "flag-as", "flag-at", "flag-au", "flag-aw", "flag-ax", "flag-az", "flag-ba", "flag-bb", "flag-bd", "flag-be", "flag-bf", "flag-bg", "flag-bh", "flag-bi", "flag-bj", "flag-bl", "flag-bm", "flag-bn", "flag-bo", "flag-bq", "flag-br", "flag-bs", "flag-bt", "flag-bv", "flag-bw", "flag-by", "flag-bz", "flag-ca", "flag-cc", "flag-cd", "flag-cf", "flag-cg", "flag-ch", "flag-ci", "flag-ck", "flag-cl", "flag-cm", "flag-cn", "flag-co", "flag-cp", "flag-cr", "flag-cu", "flag-cv", "flag-cw", "flag-cx", "flag-cy", "flag-cz", "flag-de", "flag-dg", "flag-dj", "flag-dk", "flag-dm", "flag-do", "flag-dz", "flag-ea", "flag-ec", "flag-ee", "flag-eg", "flag-eh", "flag-er", "flag-es", "flag-et", "flag-eu", "flag-fi", "flag-fj", "flag-fk", "flag-fm", "flag-fo", "flag-fr", "flag-ga", "flag-gb", "flag-gd", "flag-ge", "flag-gf", "flag-gg", "flag-gh", "flag-gi", "flag-gl", "flag-gm", "flag-gn", "flag-gp", "flag-gq", "flag-gr", "flag-gs", "flag-gt", "flag-gu", "flag-gw", "flag-gy", "flag-hk", "flag-hm", "flag-hn", "flag-hr", "flag-ht", "flag-hu", "flag-ic", "flag-id", "flag-ie", "flag-il", "flag-im", "flag-in", "flag-io", "flag-iq", "flag-ir", "flag-is", "flag-it", "flag-je", "flag-jm", "flag-jo", "flag-jp", "flag-ke", "flag-kg", "flag-kh", "flag-ki", "flag-km", "flag-kn", "flag-kp", "flag-kr", "flag-kw", "flag-ky", "flag-kz", "flag-la", "flag-lb", "flag-lc", "flag-li", "flag-lk", "flag-lr", "flag-ls", "flag-lt", "flag-lu", "flag-lv", "flag-ly", "flag-ma", "flag-mc", "flag-md", "flag-me", "flag-mf", "flag-mg", "flag-mh", "flag-mk", "flag-ml", "flag-mm", "flag-mn", "flag-mo", "flag-mp", "flag-mq", "flag-mr", "flag-ms", "flag-mt", "flag-mu", "flag-mv", "flag-mw", "flag-mx", "flag-my", "flag-mz", "flag-na", "flag-nc", "flag-ne", "flag-nf", "flag-ng", "flag-ni", "flag-nl", "flag-no", "flag-np", "flag-nr", "flag-nu", "flag-nz", "flag-om", "flag-pa", "flag-pe", "flag-pf", "flag-pg", "flag-ph", "flag-pk", "flag-pl", "flag-pm", "flag-pn", "flag-pr", "flag-ps", "flag-pt", "flag-pw", "flag-py", "flag-qa", "flag-re", "flag-ro", "flag-rs", "flag-ru", "flag-rw", "flag-sa", "flag-sb", "flag-sc", "flag-sd", "flag-se", "flag-sg", "flag-sh", "flag-si", "flag-sj", "flag-sk", "flag-sl", "flag-sm", "flag-sn", "flag-so", "flag-sr", "flag-ss", "flag-st", "flag-sv", "flag-sx", "flag-sy", "flag-sz", "flag-ta", "flag-tc", "flag-td", "flag-tf", "flag-tg", "flag-th", "flag-tj", "flag-tk", "flag-tl", "flag-tm", "flag-tn", "flag-to", "flag-tr", "flag-tt", "flag-tv", "flag-tw", "flag-tz", "flag-ua", "flag-ug", "flag-um", "flag-un", "flag-us", "flag-uy", "flag-uz", "flag-va", "flag-vc", "flag-ve", "flag-vg", "flag-vi", "flag-vn", "flag-vu", "flag-wf", "flag-ws", "flag-xk", "flag-ye", "flag-yt", "flag-za", "flag-zm", "flag-zw", "triangular_flag_on_post"] }], emojis: { "100": { name: "Hundred Points Symbol", unified: "1F4AF", short_names: ["100"], text: "", search: "100,hundred,points,symbol,score,perfect,numbers,century,exam,quiz,test,pass" }, "1234": { name: "Input Symbol for Numbers", unified: "1F522", short_names: ["1234"], text: "", search: "1234,input,symbol,for,numbers,blue-square" }, dog: { name: "Dog Face", unified: "1F436", short_names: ["dog"], text: "", search: "dog,face,animal,friend,nature,woof,puppy,pet,faithful" }, green_apple: { name: "Green Apple", unified: "1F34F", short_names: ["green_apple"], text: "", search: "green,apple,fruit,nature" }, watch: { name: "Watch", unified: "231A", variations: ["231A-FE0F"], short_names: ["watch"], text: "", search: "watch,time,accessories" }, heart: { name: "Heavy Black Heart", unified: "2764", variations: ["2764-FE0F"], short_names: ["heart"], text: "<3", emoticons: ["<3"], search: "heart,heavy,black,love,like,valentines,<3" }, car: { name: "Automobile", unified: "1F697", short_names: ["car", "red_car"], text: "", search: "car,red,automobile" }, soccer: { name: "Soccer Ball", unified: "26BD", variations: ["26BD-FE0F"], short_names: ["soccer"], text: "", search: "soccer,ball,sports,football" }, grinning: { name: "Grinning Face", unified: "1F600", short_names: ["grinning"], text: ":D", search: "grinning,face,smile,happy,joy,:d,grin" }, yellow_heart: { name: "Yellow Heart", unified: "1F49B", short_names: ["yellow_heart"], text: "<3", search: "yellow,heart,love,like,affection,valentines" }, iphone: { name: "Mobile Phone", unified: "1F4F1", short_names: ["iphone"], text: "", search: "iphone,mobile,phone,technology,apple,gadgets,dial" }, cat: { name: "Cat Face", unified: "1F431", short_names: ["cat"], text: "", search: "cat,face,animal,meow,nature,pet,kitten" }, taxi: { name: "Taxi", unified: "1F695", short_names: ["taxi"], text: "", search: "taxi,uber,vehicle,cars,transportation" }, apple: { name: "Red Apple", unified: "1F34E", short_names: ["apple"], text: "", search: "apple,red,fruit,mac,school" }, basketball: { name: "Basketball and Hoop", unified: "1F3C0", short_names: ["basketball"], text: "", search: "basketball,and,hoop,sports,balls,nba" }, smiley: { name: "Smiling Face with Open Mouth", unified: "1F603", short_names: ["smiley"], text: ":)", emoticons: ["=)", "=-)"], search: "smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,:),smile,funny,=),=-)" }, mouse: { name: "Mouse Face", unified: "1F42D", short_names: ["mouse"], text: "", search: "mouse,face,animal,nature,cheese_wedge,rodent" }, calling: { name: "Mobile Phone with Rightwards Arrow at Left", unified: "1F4F2", short_names: ["calling"], text: "", search: "calling,mobile,phone,with,rightwards,arrow,at,left,iphone,incoming" }, blue_car: { name: "Recreational Vehicle", unified: "1F699", short_names: ["blue_car"], text: "", search: "blue,car,recreational,vehicle,transportation" }, pear: { name: "Pear", unified: "1F350", short_names: ["pear"], text: "", search: "pear,fruit,nature,food" }, checkered_flag: { name: "Chequered FLAG", unified: "1F3C1", short_names: ["checkered_flag"], text: "", search: "checkered,flag,chequered,contest,finishline,race,gokart" }, green_heart: { name: "Green Heart", unified: "1F49A", short_names: ["green_heart"], text: "<3", search: "green,heart,love,like,affection,valentines" }, football: { name: "American Football", unified: "1F3C8", short_names: ["football"], text: "", search: "football,american,sports,balls,nfl" }, smile: { name: "Smiling Face with Open Mouth and Smiling Eyes", unified: "1F604", short_names: ["smile"], text: ":)", emoticons: ["C:", "c:", ":D", ":-D"], search: "smile,smiling,face,with,open,mouth,and,eyes,happy,joy,funny,haha,laugh,like,:d,:),c:,:-d" }, tangerine: { name: "Tangerine", unified: "1F34A", short_names: ["tangerine"], text: "", search: "tangerine,food,fruit,nature,orange" }, bus: { name: "Bus", unified: "1F68C", short_names: ["bus"], text: "", search: "bus,car,vehicle,transportation" }, baseball: { name: "Baseball", unified: "26BE", variations: ["26BE-FE0F"], short_names: ["baseball"], text: "", search: "baseball,sports,balls" }, hamster: { name: "Hamster Face", unified: "1F439", short_names: ["hamster"], text: "", search: "hamster,face,animal,nature" }, blue_heart: { name: "Blue Heart", unified: "1F499", short_names: ["blue_heart"], text: "<3", search: "blue,heart,love,like,affection,valentines" }, grin: { name: "Grinning Face with Smiling Eyes", unified: "1F601", short_names: ["grin"], text: "", search: "grin,grinning,face,with,smiling,eyes,happy,smile,joy,kawaii" }, triangular_flag_on_post: { name: "Triangular Flag on POST", unified: "1F6A9", short_names: ["triangular_flag_on_post"], text: "", search: "triangular,flag,on,post,mark,milestone,place" }, computer: { name: "Personal Computer", unified: "1F4BB", short_names: ["computer"], text: "", search: "computer,personal,technology,laptop,screen,display,monitor" }, tennis: { name: "Tennis Racquet and Ball", unified: "1F3BE", short_names: ["tennis"], text: "", search: "tennis,racquet,and,ball,sports,balls,green" }, trolleybus: { name: "Trolleybus", unified: "1F68E", short_names: ["trolleybus"], text: "", search: "trolleybus,bart,transportation,vehicle" }, laughing: { name: "Smiling Face with Open Mouth and Tightly-Closed Eyes", unified: "1F606", short_names: ["laughing", "satisfied"], text: "", emoticons: [":>", ":->"], search: "laughing,satisfied,smiling,face,with,open,mouth,and,tightly,closed,eyes,happy,joy,lol,haha,glad,xd,laugh,:>,:->" }, rabbit: { name: "Rabbit Face", unified: "1F430", short_names: ["rabbit"], text: "", search: "rabbit,face,animal,nature,pet,spring,magic,bunny" }, lemon: { name: "Lemon", unified: "1F34B", short_names: ["lemon"], text: "", search: "lemon,fruit,nature" }, keyboard: { name: "Keyboard", unified: "2328", variations: ["2328-FE0F"], short_names: ["keyboard"], text: "", search: "keyboard,technology,computer,type,input,text" }, purple_heart: { name: "Purple Heart", unified: "1F49C", short_names: ["purple_heart"], text: "<3", search: "purple,heart,love,like,affection,valentines" }, "flag-af": { name: "Regional Indicator Symbol Letters AF", unified: "1F1E6-1F1EB", short_names: ["flag-af"], text: "", search: "flag,af,regional,indicator,symbol,letters" }, sweat_smile: { name: "Smiling Face with Open Mouth and Cold Sweat", unified: "1F605", short_names: ["sweat_smile"], text: "", search: "sweat,smile,smiling,face,with,open,mouth,and,cold,hot,happy,laugh,relief" }, banana: { name: "Banana", unified: "1F34C", short_names: ["banana"], text: "", search: "banana,fruit,food,monkey" }, "flag-ax": { name: "Regional Indicator Symbol Letters AX", unified: "1F1E6-1F1FD", short_names: ["flag-ax"], text: "", search: "flag,ax,regional,indicator,symbol,letters" }, rugby_football: { name: "Rugby Football", unified: "1F3C9", short_names: ["rugby_football"], text: "", search: "rugby,football,sports,team" }, watermelon: { name: "Watermelon", unified: "1F349", short_names: ["watermelon"], text: "", search: "watermelon,fruit,food,picnic,summer" }, broken_heart: { name: "Broken Heart", unified: "1F494", short_names: ["broken_heart"], text: "</3", emoticons: ["</3"], search: "broken,heart,sad,sorry,break,heartbreak,</3" }, police_car: { name: "Police Car", unified: "1F693", short_names: ["police_car"], text: "", search: "police,car,vehicle,cars,transportation,law,legal,enforcement" }, bear: { name: "Bear Face", unified: "1F43B", short_names: ["bear"], text: "", search: "bear,face,animal,nature,wild" }, joy: { name: "Face with Tears of Joy", unified: "1F602", short_names: ["joy"], text: "", search: "joy,face,with,tears,of,cry,weep,happy,happytears,haha" }, ambulance: { name: "Ambulance", unified: "1F691", short_names: ["ambulance"], text: "", search: "ambulance,health,911,hospital" }, panda_face: { name: "Panda Face", unified: "1F43C", short_names: ["panda_face"], text: "", search: "panda,face,animal,nature" }, heavy_heart_exclamation_mark_ornament: { name: "Heavy Heart Exclamation Mark Ornament", unified: "2763", variations: ["2763-FE0F"], short_names: ["heavy_heart_exclamation_mark_ornament"], text: "", search: "heavy,heart,exclamation,mark,ornament" }, grapes: { name: "Grapes", unified: "1F347", short_names: ["grapes"], text: "", search: "grapes,fruit,food,wine" }, "8ball": { name: "Billiards", unified: "1F3B1", short_names: ["8ball"], text: "", search: "8ball,billiards,pool,hobby,game,luck,magic" }, "flag-al": { name: "Regional Indicator Symbol Letters AL", unified: "1F1E6-1F1F1", short_names: ["flag-al"], text: "", search: "flag,al,regional,indicator,symbol,letters" }, fire_engine: { name: "Fire Engine", unified: "1F692", short_names: ["fire_engine"], text: "", search: "fire,engine,transportation,cars,vehicle" }, two_hearts: { name: "Two Hearts", unified: "1F495", short_names: ["two_hearts"], text: "", search: "two,hearts,love,like,affection,valentines,heart" }, "flag-dz": { name: "Regional Indicator Symbol Letters DZ", unified: "1F1E9-1F1FF", short_names: ["flag-dz"], text: "", search: "flag,dz,regional,indicator,symbol,letters" }, koala: { name: "Koala", unified: "1F428", short_names: ["koala"], text: "", search: "koala,animal,nature" }, relaxed: { name: "White Smiling Face", unified: "263A", variations: ["263A-FE0F"], short_names: ["relaxed"], text: "", search: "relaxed,white,smiling,face,blush,massage,happiness" }, strawberry: { name: "Strawberry", unified: "1F353", short_names: ["strawberry"], text: "", search: "strawberry,fruit,food,nature" }, tiger: { name: "Tiger Face", unified: "1F42F", short_names: ["tiger"], text: "", search: "tiger,face,animal,cat,danger,wild,nature,roar" }, "flag-as": { name: "Regional Indicator Symbol Letters AS", unified: "1F1E6-1F1F8", short_names: ["flag-as"], text: "", search: "flag,as,regional,indicator,symbol,letters" }, revolving_hearts: { name: "Revolving Hearts", unified: "1F49E", short_names: ["revolving_hearts"], text: "", search: "revolving,hearts,love,like,affection,valentines" }, blush: { name: "Smiling Face with Smiling Eyes", unified: "1F60A", short_names: ["blush"], text: ":)", search: "blush,smiling,face,with,eyes,smile,happy,flushed,crush,embarrassed,shy,joy" }, melon: { name: "Melon", unified: "1F348", short_names: ["melon"], text: "", search: "melon,fruit,nature,food" }, minibus: { name: "Minibus", unified: "1F690", short_names: ["minibus"], text: "", search: "minibus,vehicle,car,transportation" }, innocent: { name: "Smiling Face with Halo", unified: "1F607", short_names: ["innocent"], text: "", search: "innocent,smiling,face,with,halo,angel,heaven" }, heartbeat: { name: "Beating Heart", unified: "1F493", short_names: ["heartbeat"], text: "", search: "heartbeat,beating,heart,love,like,affection,valentines,pink" }, "flag-ad": { name: "Regional Indicator Symbol Letters AD", unified: "1F1E6-1F1E9", short_names: ["flag-ad"], text: "", search: "flag,ad,regional,indicator,symbol,letters" }, cherries: { name: "Cherries", unified: "1F352", short_names: ["cherries"], text: "", search: "cherries,food,fruit" }, truck: { name: "Delivery Truck", unified: "1F69A", short_names: ["truck"], text: "", search: "truck,delivery,cars,transportation" }, minidisc: { name: "Minidisc", unified: "1F4BD", short_names: ["minidisc"], text: "", search: "minidisc,technology,record,data,disk,90s" }, "flag-ao": { name: "Regional Indicator Symbol Letters AO", unified: "1F1E6-1F1F4", short_names: ["flag-ao"], text: "", search: "flag,ao,regional,indicator,symbol,letters" }, articulated_lorry: { name: "Articulated Lorry", unified: "1F69B", short_names: ["articulated_lorry"], text: "", search: "articulated,lorry,vehicle,cars,transportation,express" }, peach: { name: "Peach", unified: "1F351", short_names: ["peach"], text: "", search: "peach,fruit,nature,food" }, cow: { name: "Cow Face", unified: "1F42E", short_names: ["cow"], text: "", search: "cow,face,beef,ox,animal,nature,moo,milk" }, heartpulse: { name: "Growing Heart", unified: "1F497", short_names: ["heartpulse"], text: "", search: "heartpulse,growing,heart,like,love,affection,valentines,pink" }, floppy_disk: { name: "Floppy Disk", unified: "1F4BE", short_names: ["floppy_disk"], text: "", search: "floppy,disk,oldschool,technology,save,90s,80s" }, sparkling_heart: { name: "Sparkling Heart", unified: "1F496", short_names: ["sparkling_heart"], text: "", search: "sparkling,heart,love,like,affection,valentines" }, tractor: { name: "Tractor", unified: "1F69C", short_names: ["tractor"], text: "", search: "tractor,vehicle,car,farming,agriculture" }, pineapple: { name: "Pineapple", unified: "1F34D", short_names: ["pineapple"], text: "", search: "pineapple,fruit,nature,food" }, pig: { name: "Pig Face", unified: "1F437", short_names: ["pig"], text: "", search: "pig,face,animal,oink,nature" }, "flag-ai": { name: "Regional Indicator Symbol Letters AI", unified: "1F1E6-1F1EE", short_names: ["flag-ai"], text: "", search: "flag,ai,regional,indicator,symbol,letters" }, wink: { name: "Winking Face", unified: "1F609", short_names: ["wink"], text: ";)", emoticons: [";)", ";-)"], search: "wink,winking,face,happy,mischievous,secret,;),smile,eye,;-)" }, pig_nose: { name: "Pig Nose", unified: "1F43D", short_names: ["pig_nose"], text: "", search: "pig,nose,animal,oink" }, cd: { name: "Optical Disc", unified: "1F4BF", short_names: ["cd"], text: "", search: "cd,optical,disc,technology,dvd,disk,90s" }, cupid: { name: "Heart with Arrow", unified: "1F498", short_names: ["cupid"], text: "", search: "cupid,heart,with,arrow,love,like,affection,valentines" }, "flag-aq": { name: "Regional Indicator Symbol Letters AQ", unified: "1F1E6-1F1F6", short_names: ["flag-aq"], text: "", search: "flag,aq,regional,indicator,symbol,letters" }, relieved: { name: "Relieved Face", unified: "1F60C", short_names: ["relieved"], text: "", search: "relieved,face,relaxed,phew,massage,happiness" }, frog: { name: "Frog Face", unified: "1F438", short_names: ["frog"], text: "", search: "frog,face,animal,nature,croak,toad" }, bike: { name: "Bicycle", unified: "1F6B2", short_names: ["bike"], text: "", search: "bike,bicycle,sports,exercise,hipster" }, "flag-ag": { name: "Regional Indicator Symbol Letters AG", unified: "1F1E6-1F1EC", short_names: ["flag-ag"], text: "", search: "flag,ag,regional,indicator,symbol,letters" }, golf: { name: "Flag in Hole", unified: "26F3", variations: ["26F3-FE0F"], short_names: ["golf"], text: "", search: "golf,flag,in,hole,sports,business,summer" }, dvd: { name: "Dvd", unified: "1F4C0", short_names: ["dvd"], text: "", search: "dvd,cd,disk,disc" }, gift_heart: { name: "Heart with Ribbon", unified: "1F49D", short_names: ["gift_heart"], text: "", search: "gift,heart,with,ribbon,love,valentines" }, tomato: { name: "Tomato", unified: "1F345", short_names: ["tomato"], text: "", search: "tomato,fruit,vegetable,nature,food" }, vhs: { name: "Videocassette", unified: "1F4FC", short_names: ["vhs"], text: "", search: "vhs,videocassette,record,video,oldschool,90s,80s" }, "flag-ar": { name: "Regional Indicator Symbol Letters AR", unified: "1F1E6-1F1F7", short_names: ["flag-ar"], text: "", search: "flag,ar,regional,indicator,symbol,letters" }, heart_decoration: { name: "Heart Decoration", unified: "1F49F", short_names: ["heart_decoration"], text: "", search: "heart,decoration,purple-square,love,like" }, monkey_face: { name: "Monkey Face", unified: "1F435", short_names: ["monkey_face"], text: "", emoticons: [":o)"], search: "monkey,face,animal,nature,circus,:o)" }, heart_eyes: { name: "Smiling Face with Heart-Shaped Eyes", unified: "1F60D", short_names: ["heart_eyes"], text: "", search: "heart,eyes,smiling,face,with,shaped,love,like,affection,valentines,infatuation,crush" }, "flag-am": { name: "Regional Indicator Symbol Letters AM", unified: "1F1E6-1F1F2", short_names: ["flag-am"], text: "", search: "flag,am,regional,indicator,symbol,letters" }, peace_symbol: { name: "Peace Symbol", unified: "262E", variations: ["262E-FE0F"], short_names: ["peace_symbol"], text: "", search: "peace,symbol,hippie" }, camera: { name: "Camera", unified: "1F4F7", short_names: ["camera"], text: "", search: "camera,gadgets,photography" }, kissing_heart: { name: "Face Throwing a Kiss", unified: "1F618", short_names: ["kissing_heart"], text: "", emoticons: [":*", ":-*"], search: "kissing,heart,face,throwing,a,kiss,love,like,affection,valentines,infatuation,:*,:-*" }, eggplant: { name: "Aubergine", unified: "1F346", short_names: ["eggplant"], text: "", search: "eggplant,aubergine,vegetable,nature,food" }, see_no_evil: { name: "See-No-Evil Monkey", unified: "1F648", short_names: ["see_no_evil"], text: "", search: "see,no,evil,monkey,animal,nature,haha" }, fishing_pole_and_fish: { name: "Fishing Pole and Fish", unified: "1F3A3", short_names: ["fishing_pole_and_fish"], text: "", search: "fishing,pole,and,fish,food,hobby,summer" }, rotating_light: { name: "Police Cars Revolving Light", unified: "1F6A8", short_names: ["rotating_light"], text: "", search: "rotating,light,police,cars,revolving,ambulance,911,emergency,alert,error,pinged,law,legal" }, hear_no_evil: { name: "Hear-No-Evil Monkey", unified: "1F649", short_names: ["hear_no_evil"], text: "", search: "hear,no,evil,monkey,animal,nature" }, kissing: { name: "Kissing Face", unified: "1F617", short_names: ["kissing"], text: "", search: "kissing,face,love,like,3,valentines,infatuation,kiss" }, "flag-aw": { name: "Regional Indicator Symbol Letters AW", unified: "1F1E6-1F1FC", short_names: ["flag-aw"], text: "", search: "flag,aw,regional,indicator,symbol,letters" }, latin_cross: { name: "Latin Cross", unified: "271D", variations: ["271D-FE0F"], short_names: ["latin_cross"], text: "", search: "latin,cross,christianity" }, "flag-au": { name: "Regional Indicator Symbol Letters AU", unified: "1F1E6-1F1FA", short_names: ["flag-au"], text: "", search: "flag,au,regional,indicator,symbol,letters" }, star_and_crescent: { name: "Star and Crescent", unified: "262A", variations: ["262A-FE0F"], short_names: ["star_and_crescent"], text: "", search: "star,and,crescent,islam" }, video_camera: { name: "Video Camera", unified: "1F4F9", short_names: ["video_camera"], text: "", search: "video,camera,film,record" }, kissing_smiling_eyes: { name: "Kissing Face with Smiling Eyes", unified: "1F619", short_names: ["kissing_smiling_eyes"], text: "", search: "kissing,smiling,eyes,face,with,affection,valentines,infatuation,kiss" }, speak_no_evil: { name: "Speak-No-Evil Monkey", unified: "1F64A", short_names: ["speak_no_evil"], text: "", search: "speak,no,evil,monkey,animal,nature,omg" }, oncoming_police_car: { name: "Oncoming Police Car", unified: "1F694", short_names: ["oncoming_police_car"], text: "", search: "oncoming,police,car,vehicle,law,legal,enforcement,911" }, oncoming_bus: { name: "Oncoming Bus", unified: "1F68D", short_names: ["oncoming_bus"], text: "", search: "oncoming,bus,vehicle,transportation" }, movie_camera: { name: "Movie Camera", unified: "1F3A5", short_names: ["movie_camera"], text: "", search: "movie,camera,film,record" }, corn: { name: "Ear of Maize", unified: "1F33D", short_names: ["corn"], text: "", search: "corn,ear,of,maize,food,vegetable,plant" }, monkey: { name: "Monkey", unified: "1F412", short_names: ["monkey"], text: "", search: "monkey,animal,nature,banana,circus" }, ice_skate: { name: "Ice Skate", unified: "26F8", short_names: ["ice_skate"], text: "", search: "ice,skate,sports" }, kissing_closed_eyes: { name: "Kissing Face with Closed Eyes", unified: "1F61A", short_names: ["kissing_closed_eyes"], text: "", search: "kissing,closed,eyes,face,with,love,like,affection,valentines,infatuation,kiss" }, "flag-at": { name: "Regional Indicator Symbol Letters AT", unified: "1F1E6-1F1F9", short_names: ["flag-at"], text: "", search: "flag,at,regional,indicator,symbol,letters" }, oncoming_automobile: { name: "Oncoming Automobile", unified: "1F698", short_names: ["oncoming_automobile"], text: "", search: "oncoming,automobile,car,vehicle,transportation" }, yum: { name: "Face Savouring Delicious Food", unified: "1F60B", short_names: ["yum"], text: "", search: "yum,face,savouring,delicious,food,happy,joy,tongue,smile,silly,yummy,nom" }, chicken: { name: "Chicken", unified: "1F414", short_names: ["chicken"], text: "", search: "chicken,animal,cluck,nature,bird" }, "flag-az": { name: "Regional Indicator Symbol Letters AZ", unified: "1F1E6-1F1FF", short_names: ["flag-az"], text: "", search: "flag,az,regional,indicator,symbol,letters" }, wheel_of_dharma: { name: "Wheel of Dharma", unified: "2638", variations: ["2638-FE0F"], short_names: ["wheel_of_dharma"], text: "", search: "wheel,of,dharma,hinduism,buddhism,sikhism,jainism" }, ski: { name: "Ski and Ski Boot", unified: "1F3BF", short_names: ["ski"], text: "", search: "ski,and,boot,sports,winter,cold,snow" }, "flag-bs": { name: "Regional Indicator Symbol Letters BS", unified: "1F1E7-1F1F8", short_names: ["flag-bs"], text: "", search: "flag,bs,regional,indicator,symbol,letters" }, stuck_out_tongue_winking_eye: { name: "Face with Stuck-out Tongue and Winking Eye", unified: "1F61C", short_names: ["stuck_out_tongue_winking_eye"], text: ";p", emoticons: [";p", ";-p", ";b", ";-b", ";P", ";-P"], search: "stuck,out,tongue,winking,eye,face,with,and,prank,childish,playful,mischievous,smile,wink,;p,;-p,;b,;-b" }, star_of_david: { name: "Star of David", unified: "2721", variations: ["2721-FE0F"], short_names: ["star_of_david"], text: "", search: "star,of,david,judaism" }, skier: { name: "Skier", unified: "26F7", short_names: ["skier"], text: "", search: "skier,sports,winter,snow" }, oncoming_taxi: { name: "Oncoming Taxi", unified: "1F696", short_names: ["oncoming_taxi"], text: "", search: "oncoming,taxi,vehicle,cars,uber" }, penguin: { name: "Penguin", unified: "1F427", short_names: ["penguin"], text: "", search: "penguin,animal,nature" }, telephone_receiver: { name: "Telephone Receiver", unified: "1F4DE", short_names: ["telephone_receiver"], text: "", search: "telephone,receiver,technology,communication,dial" }, "flag-bh": { name: "Regional Indicator Symbol Letters BH", unified: "1F1E7-1F1ED", short_names: ["flag-bh"], text: "", search: "flag,bh,regional,indicator,symbol,letters" }, snowboarder: { name: "Snowboarder", unified: "1F3C2", short_names: ["snowboarder"], text: "", search: "snowboarder,sports,winter" }, sweet_potato: { name: "Roasted Sweet Potato", unified: "1F360", short_names: ["sweet_potato"], text: "", search: "sweet,potato,roasted,food,nature" }, stuck_out_tongue_closed_eyes: { name: "Face with Stuck-out Tongue and Tightly-Closed Eyes", unified: "1F61D", short_names: ["stuck_out_tongue_closed_eyes"], text: "", search: "stuck,out,tongue,closed,eyes,face,with,and,tightly,prank,playful,mischievous,smile" }, bird: { name: "Bird", unified: "1F426", short_names: ["bird"], text: "", search: "bird,animal,nature,fly,tweet,spring" }, aerial_tramway: { name: "Aerial Tramway", unified: "1F6A1", short_names: ["aerial_tramway"], text: "", search: "aerial,tramway,transportation,vehicle,ski" }, six_pointed_star: { name: "Six Pointed Star with Middle Dot", unified: "1F52F", short_names: ["six_pointed_star"], text: "", search: "six,pointed,star,with,middle,dot,purple-square,religion,jewish,hexagram" }, phone: { name: "Black Telephone", unified: "260E", variations: ["260E-FE0F"], short_names: ["phone", "telephone"], text: "", search: "phone,telephone,black,technology,communication,dial" }, baby_chick: { name: "Baby Chick", unified: "1F424", short_names: ["baby_chick"], text: "", search: "baby,chick,animal,chicken,bird" }, chestnut: { name: "Chestnut", unified: "1F330", short_names: ["chestnut"], text: "", search: "chestnut,food,squirrel" }, stuck_out_tongue: { name: "Face with Stuck-out Tongue", unified: "1F61B", short_names: ["stuck_out_tongue"], text: ":p", emoticons: [":p", ":-p", ":P", ":-P", ":b", ":-b"], search: "stuck,out,tongue,face,with,prank,childish,playful,mischievous,smile,:p,:-p,:b,:-b" }, "flag-bd": { name: "Regional Indicator Symbol Letters BD", unified: "1F1E7-1F1E9", short_names: ["flag-bd"], text: "", search: "flag,bd,regional,indicator,symbol,letters" }, mountain_cableway: { name: "Mountain Cableway", unified: "1F6A0", short_names: ["mountain_cableway"], text: "", search: "mountain,cableway,transportation,vehicle,ski" }, yin_yang: { name: "Yin Yang", unified: "262F", variations: ["262F-FE0F"], short_names: ["yin_yang"], text: "", search: "yin,yang,balance" }, suspension_railway: { name: "Suspension Railway", unified: "1F69F", short_names: ["suspension_railway"], text: "", search: "suspension,railway,vehicle,transportation" }, "flag-bb": { name: "Regional Indicator Symbol Letters BB", unified: "1F1E7-1F1E7", short_names: ["flag-bb"], text: "", search: "flag,bb,regional,indicator,symbol,letters" }, pager: { name: "Pager", unified: "1F4DF", short_names: ["pager"], text: "", search: "pager,bbcall,oldschool,90s" }, hatching_chick: { name: "Hatching Chick", unified: "1F423", short_names: ["hatching_chick"], text: "", search: "hatching,chick,animal,chicken,egg,born,baby,bird" }, fax: { name: "Fax Machine", unified: "1F4E0", short_names: ["fax"], text: "", search: "fax,machine,communication,technology" }, railway_car: { name: "Railway Car", unified: "1F683", short_names: ["railway_car"], text: "", search: "railway,car,transportation,vehicle" }, hatched_chick: { name: "Front-Facing Baby Chick", unified: "1F425", short_names: ["hatched_chick"], text: "", search: "hatched,chick,front,facing,baby,animal,chicken,bird" }, "flag-by": { name: "Regional Indicator Symbol Letters BY", unified: "1F1E7-1F1FE", short_names: ["flag-by"], text: "", search: "flag,by,regional,indicator,symbol,letters" }, honey_pot: { name: "Honey Pot", unified: "1F36F", short_names: ["honey_pot"], text: "", search: "honey,pot,bees,sweet,kitchen" }, orthodox_cross: { name: "Orthodox Cross", unified: "2626", variations: ["2626-FE0F"], short_names: ["orthodox_cross"], text: "", search: "orthodox,cross,suppedaneum,religion" }, train: { name: "Tram Car", unified: "1F68B", short_names: ["train"], text: "", search: "train,tram,car,transportation,vehicle,carriage,public,travel" }, "flag-be": { name: "Regional Indicator Symbol Letters BE", unified: "1F1E7-1F1EA", short_names: ["flag-be"], text: "", search: "flag,be,regional,indicator,symbol,letters" }, tv: { name: "Television", unified: "1F4FA", short_names: ["tv"], text: "", search: "tv,television,technology,program,oldschool,show" }, sunglasses: { name: "Smiling Face with Sunglasses", unified: "1F60E", short_names: ["sunglasses"], text: "", emoticons: ["8)"], search: "sunglasses,smiling,face,with,cool,smile,summer,beach,sunglass,8)" }, ophiuchus: { name: "Ophiuchus", unified: "26CE", short_names: ["ophiuchus"], text: "", search: "ophiuchus,sign,purple-square,constellation,astrology" }, bread: { name: "Bread", unified: "1F35E", short_names: ["bread"], text: "", search: "bread,food,wheat,breakfast,toast" }, "flag-bz": { name: "Regional Indicator Symbol Letters BZ", unified: "1F1E7-1F1FF", short_names: ["flag-bz"], text: "", search: "flag,bz,regional,indicator,symbol,letters" }, mountain_railway: { name: "Mountain Railway", unified: "1F69E", short_names: ["mountain_railway"], text: "", search: "mountain,railway,transportation,vehicle" }, radio: { name: "Radio", unified: "1F4FB", short_names: ["radio"], text: "", search: "radio,communication,music,podcast,program" }, monorail: { name: "Monorail", unified: "1F69D", short_names: ["monorail"], text: "", search: "monorail,transportation,vehicle" }, "flag-bj": { name: "Regional Indicator Symbol Letters BJ", unified: "1F1E7-1F1EF", short_names: ["flag-bj"], text: "", search: "flag,bj,regional,indicator,symbol,letters" }, aries: { name: "Aries", unified: "2648", variations: ["2648-FE0F"], short_names: ["aries"], text: "", search: "aries,sign,purple-square,zodiac,astrology" }, "flag-bm": { name: "Regional Indicator Symbol Letters BM", unified: "1F1E7-1F1F2", short_names: ["flag-bm"], text: "", search: "flag,bm,regional,indicator,symbol,letters" }, taurus: { name: "Taurus", unified: "2649", variations: ["2649-FE0F"], short_names: ["taurus"], text: "", search: "taurus,purple-square,sign,zodiac,astrology" }, bullettrain_side: { name: "High-Speed Train", unified: "1F684", short_names: ["bullettrain_side"], text: "", search: "bullettrain,side,high,speed,train,transportation,vehicle" }, smirk: { name: "Smirking Face", unified: "1F60F", short_names: ["smirk"], text: "", search: "smirk,smirking,face,smile,mean,prank,smug,sarcasm" }, "flag-bt": { name: "Regional Indicator Symbol Letters BT", unified: "1F1E7-1F1F9", short_names: ["flag-bt"], text: "", search: "flag,bt,regional,indicator,symbol,letters" }, gemini: { name: "Gemini", unified: "264A", variations: ["264A-FE0F"], short_names: ["gemini"], text: "", search: "gemini,sign,zodiac,purple-square,astrology" }, bullettrain_front: { name: "High-Speed Train with Bullet Nose", unified: "1F685", short_names: ["bullettrain_front"], text: "", search: "bullettrain,front,high,speed,train,with,bullet,nose,transportation,vehicle,fast,public,travel" }, wolf: { name: "Wolf Face", unified: "1F43A", short_names: ["wolf"], text: "", search: "wolf,face,animal,nature,wild" }, stopwatch: { name: "Stopwatch", unified: "23F1", short_names: ["stopwatch"], text: "", search: "stopwatch,time,deadline" }, unamused: { name: "Unamused Face", unified: "1F612", short_names: ["unamused"], text: ":(", search: "unamused,face,indifference,bored,straight face,serious,sarcasm" }, light_rail: { name: "Light Rail", unified: "1F688", short_names: ["light_rail"], text: "", search: "light,rail,transportation,vehicle" }, boar: { name: "Boar", unified: "1F417", short_names: ["boar"], text: "", search: "boar,animal,nature" }, "flag-bo": { name: "Regional Indicator Symbol Letters BO", unified: "1F1E7-1F1F4", short_names: ["flag-bo"], text: "", search: "flag,bo,regional,indicator,symbol,letters" }, fried_egg: { name: "Cooking", unified: "1F373", short_names: ["fried_egg", "cooking"], text: "", search: "fried,egg,cooking,food,breakfast,kitchen" }, cancer: { name: "Cancer", unified: "264B", variations: ["264B-FE0F"], short_names: ["cancer"], text: "", search: "cancer,sign,zodiac,purple-square,astrology" }, leo: { name: "Leo", unified: "264C", variations: ["264C-FE0F"], short_names: ["leo"], text: "", search: "leo,sign,purple-square,zodiac,astrology" }, disappointed: { name: "Disappointed Face", unified: "1F61E", short_names: ["disappointed"], text: ":(", emoticons: ["):", ":(", ":-("], search: "disappointed,face,sad,upset,depressed,:(,):,:-(" }, timer_clock: { name: "Timer Clock", unified: "23F2", short_names: ["timer_clock"], text: "", search: "timer,clock,alarm" }, steam_locomotive: { name: "Steam Locomotive", unified: "1F682", short_names: ["steam_locomotive"], text: "", search: "steam,locomotive,transportation,vehicle,train" }, horse: { name: "Horse Face", unified: "1F434", short_names: ["horse"], text: "", search: "horse,face,animal,brown,nature" }, "flag-bq": { name: "Regional Indicator Symbol Letters BQ", unified: "1F1E7-1F1F6", short_names: ["flag-bq"], text: "", search: "flag,bq,regional,indicator,symbol,letters" }, "woman-bouncing-ball": { name: "Woman Bouncing Ball", unified: "26F9-FE0F-200D-2640-FE0F", short_names: ["woman-bouncing-ball"], text: "", search: "woman,bouncing,ball" }, pensive: { name: "Pensive Face", unified: "1F614", short_names: ["pensive"], text: "", search: "pensive,face,sad,depressed,okay,upset" }, "train2": { name: "Train", unified: "1F686", short_names: ["train2"], text: "", search: "train2,train,transportation,vehicle" }, virgo: { name: "Virgo", unified: "264D", variations: ["264D-FE0F"], short_names: ["virgo"], text: "", search: "virgo,sign,zodiac,purple-square,astrology" }, person_with_ball: { name: "Person with Ball", unified: "26F9", variations: ["26F9-FE0F"], short_names: ["person_with_ball"], text: "", obsoleted_by: "26F9-FE0F-200D-2642-FE0F", search: "person,with,ball" }, "flag-ba": { name: "Regional Indicator Symbol Letters BA", unified: "1F1E7-1F1E6", short_names: ["flag-ba"], text: "", search: "flag,ba,regional,indicator,symbol,letters" }, alarm_clock: { name: "Alarm Clock", unified: "23F0", short_names: ["alarm_clock"], text: "", search: "alarm,clock,time,wake" }, fried_shrimp: { name: "Fried Shrimp", unified: "1F364", short_names: ["fried_shrimp"], text: "", search: "fried,shrimp,food,animal,appetizer,summer" }, "flag-bw": { name: "Regional Indicator Symbol Letters BW", unified: "1F1E7-1F1FC", short_names: ["flag-bw"], text: "", search: "flag,bw,regional,indicator,symbol,letters" }, worried: { name: "Worried Face", unified: "1F61F", short_names: ["worried"], text: "", search: "worried,face,concern,nervous,:(" }, libra: { name: "Libra", unified: "264E", variations: ["264E-FE0F"], short_names: ["libra"], text: "", search: "libra,sign,purple-square,zodiac,astrology" }, metro: { name: "Metro", unified: "1F687", short_names: ["metro"], text: "", search: "metro,transportation,blue-square,mrt,underground,tube" }, bee: { name: "Honeybee", unified: "1F41D", short_names: ["bee", "honeybee"], text: "", search: "bee,honeybee" }, hourglass: { name: "Hourglass", unified: "231B", variations: ["231B-FE0F"], short_names: ["hourglass"], text: "", search: "hourglass,time,clock,oldschool,limit,exam,quiz,test" }, "flag-br": { name: "Regional Indicator Symbol Letters BR", unified: "1F1E7-1F1F7", short_names: ["flag-br"], text: "", search: "flag,br,regional,indicator,symbol,letters" }, tram: { name: "Tram", unified: "1F68A", short_names: ["tram"], text: "", search: "tram,transportation,vehicle" }, scorpius: { name: "Scorpius", unified: "264F", variations: ["264F-FE0F"], short_names: ["scorpius"], text: "", search: "scorpius,sign,zodiac,purple-square,astrology,scorpio" }, poultry_leg: { name: "Poultry Leg", unified: "1F357", short_names: ["poultry_leg"], text: "", search: "poultry,leg,food,meat,drumstick,bird,chicken,turkey" }, bug: { name: "Bug", unified: "1F41B", short_names: ["bug"], text: "", search: "bug,animal,insect,nature,worm" }, confused: { name: "Confused Face", unified: "1F615", short_names: ["confused"], text: "", emoticons: [":\\", ":-\\", ":/", ":-/"], search: "confused,face,indifference,huh,weird,hmmm,:/,:\\,:-\\,:-/" }, sagittarius: { name: "Sagittarius", unified: "2650", variations: ["2650-FE0F"], short_names: ["sagittarius"], text: "", search: "sagittarius,sign,zodiac,purple-square,astrology" }, hourglass_flowing_sand: { name: "Hourglass with Flowing Sand", unified: "23F3", short_names: ["hourglass_flowing_sand"], text: "", search: "hourglass,flowing,sand,with,oldschool,time,countdown" }, "flag-io": { name: "Regional Indicator Symbol Letters IO", unified: "1F1EE-1F1F4", short_names: ["flag-io"], text: "", search: "flag,io,regional,indicator,symbol,letters" }, station: { name: "Station", unified: "1F689", short_names: ["station"], text: "", search: "station,transportation,vehicle,public" }, meat_on_bone: { name: "Meat on Bone", unified: "1F356", short_names: ["meat_on_bone"], text: "", search: "meat,on,bone,good,food,drumstick" }, "flag-vg": { name: "Regional Indicator Symbol Letters VG", unified: "1F1FB-1F1EC", short_names: ["flag-vg"], text: "", search: "flag,vg,regional,indicator,symbol,letters" }, satellite_antenna: { name: "Satellite Antenna", unified: "1F4E1", short_names: ["satellite_antenna"], text: "", search: "satellite,antenna" }, helicopter: { name: "Helicopter", unified: "1F681", short_names: ["helicopter"], text: "", search: "helicopter,transportation,vehicle,fly" }, pizza: { name: "Slice of Pizza", unified: "1F355", short_names: ["pizza"], text: "", search: "pizza,slice,of,food,party" }, snail: { name: "Snail", unified: "1F40C", short_names: ["snail"], text: "", search: "snail,slow,animal,shell" }, white_frowning_face: { name: "White Frowning Face", unified: "2639", variations: ["2639-FE0F"], short_names: ["white_frowning_face"], text: "", search: "white,frowning,face" }, capricorn: { name: "Capricorn", unified: "2651", variations: ["2651-FE0F"], short_names: ["capricorn"], text: "", search: "capricorn,sign,zodiac,purple-square,astrology" }, "flag-bn": { name: "Regional Indicator Symbol Letters BN", unified: "1F1E7-1F1F3", short_names: ["flag-bn"], text: "", search: "flag,bn,regional,indicator,symbol,letters" }, battery: { name: "Battery", unified: "1F50B", short_names: ["battery"], text: "", search: "battery,power,energy,sustain" }, shell: { name: "Spiral Shell", unified: "1F41A", short_names: ["shell"], text: "", search: "shell,spiral,nature,sea,beach" }, aquarius: { name: "Aquarius", unified: "2652", variations: ["2652-FE0F"], short_names: ["aquarius"], text: "", search: "aquarius,sign,purple-square,zodiac,astrology" }, persevere: { name: "Persevering Face", unified: "1F623", short_names: ["persevere"], text: "", search: "persevere,persevering,face,sick,no,upset,oops" }, beetle: { name: "Lady Beetle", unified: "1F41E", short_names: ["beetle"], text: "", search: "beetle,lady,animal,insect,nature,ladybug" }, airplane: { name: "Airplane", unified: "2708", variations: ["2708-FE0F"], short_names: ["airplane"], text: "", search: "airplane,vehicle,transportation,flight,fly" }, "woman-surfing": { name: "Woman Surfing", unified: "1F3C4-200D-2640-FE0F", short_names: ["woman-surfing"], text: "", search: "woman,surfing" }, pisces: { name: "Pisces", unified: "2653", variations: ["2653-FE0F"], short_names: ["pisces"], text: "", search: "pisces,purple-square,sign,zodiac,astrology" }, electric_plug: { name: "Electric Plug", unified: "1F50C", short_names: ["electric_plug"], text: "", search: "electric,plug,charger,power" }, hamburger: { name: "Hamburger", unified: "1F354", short_names: ["hamburger"], text: "", search: "hamburger,meat,fast food,beef,cheeseburger,mcdonalds,burger king" }, confounded: { name: "Confounded Face", unified: "1F616", short_names: ["confounded"], text: "", search: "confounded,face,confused,sick,unwell,oops,:s" }, "flag-bg": { name: "Regional Indicator Symbol Letters BG", unified: "1F1E7-1F1EC", short_names: ["flag-bg"], text: "", search: "flag,bg,regional,indicator,symbol,letters" }, tired_face: { name: "Tired Face", unified: "1F62B", short_names: ["tired_face"], text: "", search: "tired,face,sick,whine,upset,frustrated" }, surfer: { name: "Surfer", unified: "1F3C4", short_names: ["surfer"], text: "", obsoleted_by: "1F3C4-200D-2642-FE0F", search: "surfer" }, fries: { name: "French Fries", unified: "1F35F", short_names: ["fries"], text: "", search: "fries,french,chips,snack,fast food" }, bulb: { name: "Electric Light Bulb", unified: "1F4A1", short_names: ["bulb"], text: "", search: "bulb,electric,light,electricity,idea" }, id: { name: "Squared Id", unified: "1F194", short_names: ["id"], text: "", search: "id,squared,purple-square,words" }, "flag-bf": { name: "Regional Indicator Symbol Letters BF", unified: "1F1E7-1F1EB", short_names: ["flag-bf"], text: "", search: "flag,bf,regional,indicator,symbol,letters" }, ant: { name: "Ant", unified: "1F41C", short_names: ["ant"], text: "", search: "ant,animal,insect,nature,bug" }, weary: { name: "Weary Face", unified: "1F629", short_names: ["weary"], text: "", search: "weary,face,tired,sleepy,sad,frustrated,upset" }, "flag-bi": { name: "Regional Indicator Symbol Letters BI", unified: "1F1E7-1F1EE", short_names: ["flag-bi"], text: "", search: "flag,bi,regional,indicator,symbol,letters" }, "woman-swimming": { name: "Woman Swimming", unified: "1F3CA-200D-2640-FE0F", short_names: ["woman-swimming"], text: "", search: "woman,swimming" }, flashlight: { name: "Electric Torch", unified: "1F526", short_names: ["flashlight"], text: "", search: "flashlight,electric,torch,dark,camping,sight,night" }, atom_symbol: { name: "Atom Symbol", unified: "269B", variations: ["269B-FE0F"], short_names: ["atom_symbol"], text: "", search: "atom,symbol,science" }, triumph: { name: "Face with Look of Triumph", unified: "1F624", short_names: ["triumph"], text: "", search: "triumph,face,with,look,of,gas,phew,proud,pride" }, swimmer: { name: "Swimmer", unified: "1F3CA", short_names: ["swimmer"], text: "", obsoleted_by: "1F3CA-200D-2642-FE0F", search: "swimmer" }, "flag-cv": { name: "Regional Indicator Symbol Letters CV", unified: "1F1E8-1F1FB", short_names: ["flag-cv"], text: "", search: "flag,cv,regional,indicator,symbol,letters" }, accept: { name: "Circled Ideograph Accept", unified: "1F251", short_names: ["accept"], text: "", search: "accept,circled,ideograph,ok,good,chinese,kanji,agree,yes,orange-circle" }, rocket: { name: "Rocket", unified: "1F680", short_names: ["rocket"], text: "", search: "rocket,launch,ship,staffmode,nasa,outer space,outer_space,fly" }, "flag-kh": { name: "Regional Indicator Symbol Letters KH", unified: "1F1F0-1F1ED", short_names: ["flag-kh"], text: "", search: "flag,kh,regional,indicator,symbol,letters" }, radioactive_sign: { name: "Radioactive Sign", unified: "2622", variations: ["2622-FE0F"], short_names: ["radioactive_sign"], text: "", search: "radioactive,sign" }, angry: { name: "Angry Face", unified: "1F620", short_names: ["angry"], text: "", emoticons: [">:(", ">:-("], search: "angry,face,mad,annoyed,frustrated,>:(,>:-(" }, turtle: { name: "Turtle", unified: "1F422", short_names: ["turtle"], text: "", search: "turtle,animal,slow,nature,tortoise" }, snake: { name: "Snake", unified: "1F40D", short_names: ["snake"], text: "", search: "snake,animal,evil,nature,hiss,python" }, rage: { name: "Pouting Face", unified: "1F621", short_names: ["rage"], text: "", search: "rage,pouting,face,angry,mad,hate,despise" }, seat: { name: "Seat", unified: "1F4BA", short_names: ["seat"], text: "", search: "seat,sit,airplane,transport,bus,flight,fly" }, biohazard_sign: { name: "Biohazard Sign", unified: "2623", variations: ["2623-FE0F"], short_names: ["biohazard_sign"], text: "", search: "biohazard,sign" }, "flag-cm": { name: "Regional Indicator Symbol Letters CM", unified: "1F1E8-1F1F2", short_names: ["flag-cm"], text: "", search: "flag,cm,regional,indicator,symbol,letters" }, "flag-ca": { name: "Regional Indicator Symbol Letters CA", unified: "1F1E8-1F1E6", short_names: ["flag-ca"], text: "", search: "flag,ca,regional,indicator,symbol,letters" }, mobile_phone_off: { name: "Mobile Phone off", unified: "1F4F4", short_names: ["mobile_phone_off"], text: "", search: "mobile,phone,off,mute,orange-square,silence,quiet" }, money_with_wings: { name: "Money with Wings", unified: "1F4B8", short_names: ["money_with_wings"], text: "", search: "money,with,wings,dollar,bills,payment,sale" }, no_mouth: { name: "Face Without Mouth", unified: "1F636", short_names: ["no_mouth"], text: "", search: "no,mouth,face,without,hellokitty" }, "flag-ic": { name: "Regional Indicator Symbol Letters IC", unified: "1F1EE-1F1E8", short_names: ["flag-ic"], text: "", search: "flag,ic,regional,indicator,symbol,letters" }, neutral_face: { name: "Neutral Face", unified: "1F610", short_names: ["neutral_face"], text: "", emoticons: [":|", ":-|"], search: "neutral,face,indifference,meh,:|,:-|" }, dollar: { name: "Banknote with Dollar Sign", unified: "1F4B5", short_names: ["dollar"], text: "", search: "dollar,banknote,with,sign,money,sales,bill,currency" }, vibration_mode: { name: "Vibration Mode", unified: "1F4F3", short_names: ["vibration_mode"], text: "", search: "vibration,mode,orange-square,phone" }, spaghetti: { name: "Spaghetti", unified: "1F35D", short_names: ["spaghetti"], text: "", search: "spaghetti,food,italian,noodle" }, "woman-rowing-boat": { name: "Woman Rowing Boat", unified: "1F6A3-200D-2640-FE0F", short_names: ["woman-rowing-boat"], text: "", search: "woman,rowing,boat" }, boat: { name: "Sailboat", unified: "26F5", variations: ["26F5-FE0F"], short_names: ["boat", "sailboat"], text: "", search: "boat,sailboat" }, "flag-ky": { name: "Regional Indicator Symbol Letters KY", unified: "1F1F0-1F1FE", short_names: ["flag-ky"], text: "", search: "flag,ky,regional,indicator,symbol,letters" }, rowboat: { name: "Rowboat", unified: "1F6A3", short_names: ["rowboat"], text: "", obsoleted_by: "1F6A3-200D-2642-FE0F", search: "rowboat" }, expressionless: { name: "Expressionless Face", unified: "1F611", short_names: ["expressionless"], text: "", search: "expressionless,face,indifferent,-_-,meh,deadpan" }, "u6709": { name: "Squared Cjk Unified Ideograph-6709", unified: "1F236", short_names: ["u6709"], text: "", search: "u6709,squared,cjk,unified,ideograph,6709,orange-square,chinese,have,kanji" }, yen: { name: "Banknote with Yen Sign", unified: "1F4B4", short_names: ["yen"], text: "", search: "yen,banknote,with,sign,money,sales,japanese,dollar,currency" }, ramen: { name: "Steaming Bowl", unified: "1F35C", short_names: ["ramen"], text: "", search: "ramen,steaming,bowl,food,japanese,noodle,chopsticks" }, "flag-cf": { name: "Regional Indicator Symbol Letters CF", unified: "1F1E8-1F1EB", short_names: ["flag-cf"], text: "", search: "flag,cf,regional,indicator,symbol,letters" }, hushed: { name: "Hushed Face", unified: "1F62F", short_names: ["hushed"], text: "", search: "hushed,face,woo,shh" }, "u7121": { name: "Squared Cjk Unified Ideograph-7121", unified: "1F21A", variations: ["1F21A-FE0F"], short_names: ["u7121"], text: "", search: "u7121,squared,cjk,unified,ideograph,7121,nothing,chinese,kanji,japanese,orange-square" }, speedboat: { name: "Speedboat", unified: "1F6A4", short_names: ["speedboat"], text: "", search: "speedboat,ship,transportation,vehicle,summer" }, stew: { name: "Pot of Food", unified: "1F372", short_names: ["stew"], text: "", search: "stew,pot,of,food,meat,soup" }, horse_racing: { name: "Horse Racing", unified: "1F3C7", short_names: ["horse_racing"], text: "", search: "horse,racing,animal,betting,competition,gambling,luck" }, euro: { name: "Banknote with Euro Sign", unified: "1F4B6", short_names: ["euro"], text: "", search: "euro,banknote,with,sign,money,sales,dollar,currency" }, pound: { name: "Banknote with Pound Sign", unified: "1F4B7", short_names: ["pound"], text: "", search: "pound,banknote,with,sign,british,sterling,money,sales,bills,uk,england,currency" }, fish_cake: { name: "Fish Cake with Swirl Design", unified: "1F365", short_names: ["fish_cake"], text: "", search: "fish,cake,with,swirl,design,food,japan,sea,beach" }, octopus: { name: "Octopus", unified: "1F419", short_names: ["octopus"], text: "", search: "octopus,animal,creature,ocean,sea,nature,beach" }, "woman-biking": { name: "Woman Biking", unified: "1F6B4-200D-2640-FE0F", short_names: ["woman-biking"], text: "", search: "woman,biking" }, frowning: { name: "Frowning Face with Open Mouth", unified: "1F626", short_names: ["frowning"], text: "", search: "frowning,face,with,open,mouth,aw,what" }, "flag-td": { name: "Regional Indicator Symbol Letters TD", unified: "1F1F9-1F1E9", short_names: ["flag-td"], text: "", search: "flag,td,regional,indicator,symbol,letters" }, "u7533": { name: "Squared Cjk Unified Ideograph-7533", unified: "1F238", short_names: ["u7533"], text: "", search: "u7533,squared,cjk,unified,ideograph,7533,chinese,japanese,kanji,orange-square" }, "u55b6": { name: "Squared Cjk Unified Ideograph-55b6", unified: "1F23A", short_names: ["u55b6"], text: "", search: "u55b6,squared,cjk,unified,ideograph,55b6,japanese,opening hours,orange-square" }, anguished: { name: "Anguished Face", unified: "1F627", short_names: ["anguished"], text: "", emoticons: ["D:"], search: "anguished,face,stunned,nervous,d:" }, moneybag: { name: "Money Bag", unified: "1F4B0", short_names: ["moneybag"], text: "", search: "moneybag,money,bag,dollar,payment,coins,sale" }, sushi: { name: "Sushi", unified: "1F363", short_names: ["sushi"], text: "", search: "sushi,food,fish,japanese,rice" }, bicyclist: { name: "Bicyclist", unified: "1F6B4", short_names: ["bicyclist"], text: "", obsoleted_by: "1F6B4-200D-2642-FE0F", search: "bicyclist" }, ferry: { name: "Ferry", unified: "26F4", short_names: ["ferry"], text: "", search: "ferry,boat,ship,yacht" }, "flag-cl": { name: "Regional Indicator Symbol Letters CL", unified: "1F1E8-1F1F1", short_names: ["flag-cl"], text: "", search: "flag,cl,regional,indicator,symbol,letters" }, credit_card: { name: "Credit Card", unified: "1F4B3", short_names: ["credit_card"], text: "", search: "credit,card,money,sales,dollar,bill,payment,shopping" }, "flag-cn": { name: "Regional Indicator Symbol Letters CN", unified: "1F1E8-1F1F3", short_names: ["flag-cn", "cn"], text: "", search: "flag,cn,regional,indicator,symbol,letters" }, bento: { name: "Bento Box", unified: "1F371", short_names: ["bento"], text: "", search: "bento,box,food,japanese" }, ship: { name: "Ship", unified: "1F6A2", short_names: ["ship"], text: "", search: "ship,transportation,titanic,deploy" }, open_mouth: { name: "Face with Open Mouth", unified: "1F62E", short_names: ["open_mouth"], text: "", emoticons: [":o", ":-o", ":O", ":-O"], search: "open,mouth,face,with,surprise,impressed,wow,whoa,:o,:-o" }, "u6708": { name: "Squared Cjk Unified Ideograph-6708", unified: "1F237", variations: ["1F237-FE0F"], short_names: ["u6708"], text: "", search: "u6708,squared,cjk,unified,ideograph,6708,chinese,month,moon,japanese,orange-square,kanji" }, tropical_fish: { name: "Tropical Fish", unified: "1F420", short_names: ["tropical_fish"], text: "", search: "tropical,fish,animal,swim,ocean,beach,nemo" }, "woman-mountain-biking": { name: "Woman Mountain Biking", unified: "1F6B5-200D-2640-FE0F", short_names: ["woman-mountain-biking"], text: "", search: "woman,mountain,biking" }, "flag-cx": { name: "Regional Indicator Symbol Letters CX", unified: "1F1E8-1F1FD", short_names: ["flag-cx"], text: "", search: "flag,cx,regional,indicator,symbol,letters" }, fish: { name: "Fish", unified: "1F41F", short_names: ["fish"], text: "", search: "fish,animal,food,nature" }, eight_pointed_black_star: { name: "Eight Pointed Black Star", unified: "2734", variations: ["2734-FE0F"], short_names: ["eight_pointed_black_star"], text: "", search: "eight,pointed,black,star,orange-square,shape,polygon" }, anchor: { name: "Anchor", unified: "2693", variations: ["2693-FE0F"], short_names: ["anchor"], text: "", search: "anchor,ship,ferry,sea,boat" }, gem: { name: "Gem Stone", unified: "1F48E", short_names: ["gem"], text: "", search: "gem,stone,blue,ruby,diamond,jewelry" }, astonished: { name: "Astonished Face", unified: "1F632", short_names: ["astonished"], text: "", search: "astonished,face,xox,surprised,poisoned" }, mountain_bicyclist: { name: "Mountain Bicyclist", unified: "1F6B5", short_names: ["mountain_bicyclist"], text: "", obsoleted_by: "1F6B5-200D-2642-FE0F", search: "mountain,bicyclist" }, curry: { name: "Curry and Rice", unified: "1F35B", short_names: ["curry"], text: "", search: "curry,and,rice,food,spicy,hot,indian" }, "flag-cc": { name: "Regional Indicator Symbol Letters CC", unified: "1F1E8-1F1E8", short_names: ["flag-cc"], text: "", search: "flag,cc,regional,indicator,symbol,letters" }, blowfish: { name: "Blowfish", unified: "1F421", short_names: ["blowfish"], text: "", search: "blowfish,animal,nature,food,sea,ocean" }, rice: { name: "Cooked Rice", unified: "1F35A", short_names: ["rice"], text: "", search: "rice,cooked,food,china,asian" }, running_shirt_with_sash: { name: "Running Shirt with Sash", unified: "1F3BD", short_names: ["running_shirt_with_sash"], text: "", search: "running,shirt,with,sash,play,pageant" }, dizzy_face: { name: "Dizzy Face", unified: "1F635", short_names: ["dizzy_face"], text: "", search: "dizzy,face,spent,unconscious,xox" }, construction: { name: "Construction Sign", unified: "1F6A7", short_names: ["construction"], text: "", search: "construction,sign,wip,progress,caution,warning" }, scales: { name: "Scales", unified: "2696", variations: ["2696-FE0F"], short_names: ["scales"], text: "", search: "scales" }, vs: { name: "Squared Vs", unified: "1F19A", short_names: ["vs"], text: "", search: "vs,squared,words,orange-square" }, fuelpump: { name: "Fuel Pump", unified: "26FD", variations: ["26FD-FE0F"], short_names: ["fuelpump"], text: "", search: "fuelpump,fuel,pump,gas station,petroleum" }, white_flower: { name: "White Flower", unified: "1F4AE", short_names: ["white_flower"], text: "", search: "white,flower,japanese,spring" }, rice_ball: { name: "Rice Ball", unified: "1F359", short_names: ["rice_ball"], text: "", search: "rice,ball,food,japanese" }, dolphin: { name: "Dolphin", unified: "1F42C", short_names: ["dolphin", "flipper"], text: "", search: "dolphin,flipper,animal,nature,fish,sea,ocean,fins,beach" }, wrench: { name: "Wrench", unified: "1F527", short_names: ["wrench"], text: "", search: "wrench,tools,diy,ikea,fix,maintainer" }, "flag-co": { name: "Regional Indicator Symbol Letters CO", unified: "1F1E8-1F1F4", short_names: ["flag-co"], text: "", search: "flag,co,regional,indicator,symbol,letters" }, flushed: { name: "Flushed Face", unified: "1F633", short_names: ["flushed"], text: "", search: "flushed,face,blush,shy,flattered" }, hammer: { name: "Hammer", unified: "1F528", short_names: ["hammer"], text: "", search: "hammer,tools,build,create" }, ideograph_advantage: { name: "Circled Ideograph Advantage", unified: "1F250", short_names: ["ideograph_advantage"], text: "", search: "ideograph,advantage,circled,chinese,kanji,obtain,get,circle" }, "flag-km": { name: "Regional Indicator Symbol Letters KM", unified: "1F1F0-1F1F2", short_names: ["flag-km"], text: "", search: "flag,km,regional,indicator,symbol,letters" }, scream: { name: "Face Screaming in Fear", unified: "1F631", short_names: ["scream"], text: "", search: "scream,face,screaming,in,fear,munch,scared,omg" }, busstop: { name: "Bus Stop", unified: "1F68F", short_names: ["busstop"], text: "", search: "busstop,bus,stop,transportation,wait" }, rice_cracker: { name: "Rice Cracker", unified: "1F358", short_names: ["rice_cracker"], text: "", search: "rice,cracker,food,japanese" }, vertical_traffic_light: { name: "Vertical Traffic Light", unified: "1F6A6", short_names: ["vertical_traffic_light"], text: "", search: "vertical,traffic,light,transportation,driving" }, hammer_and_pick: { name: "Hammer and Pick", unified: "2692", short_names: ["hammer_and_pick"], text: "", search: "hammer,and,pick,tools,build,create" }, "flag-cg": { name: "Regional Indicator Symbol Letters CG", unified: "1F1E8-1F1EC", short_names: ["flag-cg"], text: "", search: "flag,cg,regional,indicator,symbol,letters" }, whale: { name: "Spouting Whale", unified: "1F433", short_names: ["whale"], text: "", search: "whale,spouting,animal,nature,sea,ocean" }, secret: { name: "Circled Ideograph Secret", unified: "3299", variations: ["3299-FE0F"], short_names: ["secret"], text: "", search: "secret,circled,ideograph,privacy,chinese,sshh,kanji,red-circle" }, fearful: { name: "Fearful Face", unified: "1F628", short_names: ["fearful"], text: "", search: "fearful,face,scared,terrified,nervous,oops,huh" }, oden: { name: "Oden", unified: "1F362", short_names: ["oden"], text: "", search: "oden,food,japanese" }, "whale2": { name: "Whale", unified: "1F40B", short_names: ["whale2"], text: "", search: "whale2,whale,animal,nature,sea,ocean" }, traffic_light: { name: "Horizontal Traffic Light", unified: "1F6A5", short_names: ["traffic_light"], text: "", search: "traffic,light,horizontal,transportation,signal" }, "flag-cd": { name: "Regional Indicator Symbol Letters CD", unified: "1F1E8-1F1E9", short_names: ["flag-cd"], text: "", search: "flag,cd,regional,indicator,symbol,letters" }, dango: { name: "Dango", unified: "1F361", short_names: ["dango"], text: "", search: "dango,food,dessert,sweet,japanese,barbecue,meat" }, cold_sweat: { name: "Face with Open Mouth and Cold Sweat", unified: "1F630", short_names: ["cold_sweat"], text: "", search: "cold,sweat,face,with,open,mouth,and,nervous" }, congratulations: { name: "Circled Ideograph Congratulation", unified: "3297", variations: ["3297-FE0F"], short_names: ["congratulations"], text: "", search: "congratulations,circled,ideograph,congratulation,chinese,kanji,japanese,red-circle" }, cry: { name: "Crying Face", unified: "1F622", short_names: ["cry"], text: ":'(", emoticons: [":'("], search: "cry,crying,face,tears,sad,depressed,upset,:'(" }, crocodile: { name: "Crocodile", unified: "1F40A", short_names: ["crocodile"], text: "", search: "crocodile,animal,nature,reptile,lizard,alligator" }, "u5408": { name: "Squared Cjk Unified Ideograph-5408", unified: "1F234", short_names: ["u5408"], text: "", search: "u5408,squared,cjk,unified,ideograph,5408,japanese,chinese,join,kanji,red-square" }, "flag-ck": { name: "Regional Indicator Symbol Letters CK", unified: "1F1E8-1F1F0", short_names: ["flag-ck"], text: "", search: "flag,ck,regional,indicator,symbol,letters" }, pick: { name: "Pick", unified: "26CF", short_names: ["pick"], text: "", search: "pick,tools,dig" }, shaved_ice: { name: "Shaved Ice", unified: "1F367", short_names: ["shaved_ice"], text: "", search: "shaved,ice,hot,dessert,summer" }, trophy: { name: "Trophy", unified: "1F3C6", short_names: ["trophy"], text: "", search: "trophy,win,award,contest,place,ftw,ceremony" }, "flag-cr": { name: "Regional Indicator Symbol Letters CR", unified: "1F1E8-1F1F7", short_names: ["flag-cr"], text: "", search: "flag,cr,regional,indicator,symbol,letters" }, moyai: { name: "Moyai", unified: "1F5FF", short_names: ["moyai"], text: "", search: "moyai,rock,easter island,moai" }, "u6e80": { name: "Squared Cjk Unified Ideograph-6e80", unified: "1F235", short_names: ["u6e80"], text: "", search: "u6e80,squared,cjk,unified,ideograph,6e80,full,chinese,japanese,red-square,kanji" }, leopard: { name: "Leopard", unified: "1F406", short_names: ["leopard"], text: "", search: "leopard,animal,nature" }, nut_and_bolt: { name: "Nut and Bolt", unified: "1F529", short_names: ["nut_and_bolt"], text: "", search: "nut,and,bolt,handy,tools,fix" }, disappointed_relieved: { name: "Disappointed but Relieved Face", unified: "1F625", short_names: ["disappointed_relieved"], text: "", search: "disappointed,relieved,but,face,phew,sweat,nervous" }, ice_cream: { name: "Ice Cream", unified: "1F368", short_names: ["ice_cream"], text: "", search: "ice,cream,food,hot,dessert" }, icecream: { name: "Soft Ice Cream", unified: "1F366", short_names: ["icecream"], text: "", search: "icecream,soft,ice,cream,food,hot,dessert,summer" }, "u5272": { name: "Squared Cjk Unified Ideograph-5272", unified: "1F239", short_names: ["u5272"], text: "", search: "u5272,squared,cjk,unified,ideograph,5272,cut,divide,chinese,kanji,pink-square" }, statue_of_liberty: { name: "Statue of Liberty", unified: "1F5FD", short_names: ["statue_of_liberty"], text: "", search: "statue,of,liberty,american,newyork" }, gear: { name: "Gear", unified: "2699", variations: ["2699-FE0F"], short_names: ["gear"], text: "", search: "gear,cog" }, "flag-ci": { name: "Regional Indicator Symbol Letters CI", unified: "1F1E8-1F1EE", short_names: ["flag-ci"], text: "", search: "flag,ci,regional,indicator,symbol,letters" }, "tiger2": { name: "Tiger", unified: "1F405", short_names: ["tiger2"], text: "", search: "tiger2,tiger,animal,nature,roar" }, sob: { name: "Loudly Crying Face", unified: "1F62D", short_names: ["sob"], text: ":'(", search: "sob,loudly,crying,face,cry,tears,sad,upset,depressed" }, "flag-hr": { name: "Regional Indicator Symbol Letters HR", unified: "1F1ED-1F1F7", short_names: ["flag-hr"], text: "", search: "flag,hr,regional,indicator,symbol,letters" }, fountain: { name: "Fountain", unified: "26F2", variations: ["26F2-FE0F"], short_names: ["fountain"], text: "", search: "fountain,photo,summer,water,fresh" }, water_buffalo: { name: "Water Buffalo", unified: "1F403", short_names: ["water_buffalo"], text: "", search: "water,buffalo,animal,nature,ox,cow" }, cake: { name: "Shortcake", unified: "1F370", short_names: ["cake"], text: "", search: "cake,shortcake,food,dessert" }, "u7981": { name: "Squared Cjk Unified Ideograph-7981", unified: "1F232", short_names: ["u7981"], text: "", search: "u7981,squared,cjk,unified,ideograph,7981,kanji,japanese,chinese,forbidden,limit,restricted,red-square" }, chains: { name: "Chains", unified: "26D3", short_names: ["chains"], text: "", search: "chains,lock,arrest" }, "flag-cu": { name: "Regional Indicator Symbol Letters CU", unified: "1F1E8-1F1FA", short_names: ["flag-cu"], text: "", search: "flag,cu,regional,indicator,symbol,letters" }, sweat: { name: "Face with Cold Sweat", unified: "1F613", short_names: ["sweat"], text: "", search: "sweat,face,with,cold,hot,sad,tired,exercise" }, gun: { name: "Pistol", unified: "1F52B", short_names: ["gun"], text: "", search: "gun,pistol,violence,weapon,revolver" }, a: { name: "Negative Squared Latin Capital Letter a", unified: "1F170", variations: ["1F170-FE0F"], short_names: ["a"], text: "", search: "a,negative,squared,latin,capital,letter,red-square,alphabet" }, ox: { name: "Ox", unified: "1F402", short_names: ["ox"], text: "", search: "ox,animal,cow,beef" }, tokyo_tower: { name: "Tokyo Tower", unified: "1F5FC", short_names: ["tokyo_tower"], text: "", search: "tokyo,tower,photo,japanese" }, birthday: { name: "Birthday Cake", unified: "1F382", short_names: ["birthday"], text: "", search: "birthday,cake,food,dessert" }, ticket: { name: "Ticket", unified: "1F3AB", short_names: ["ticket"], text: "", search: "ticket,event,concert,pass" }, sleepy: { name: "Sleepy Face", unified: "1F62A", short_names: ["sleepy"], text: "", search: "sleepy,face,tired,rest,nap" }, european_castle: { name: "European Castle", unified: "1F3F0", short_names: ["european_castle"], text: "", search: "european,castle,building,royalty,history" }, custard: { name: "Custard", unified: "1F36E", short_names: ["custard"], text: "", search: "custard,dessert,food" }, "cow2": { name: "Cow", unified: "1F404", short_names: ["cow2"], text: "", search: "cow2,cow,beef,ox,animal,nature,moo,milk" }, bomb: { name: "Bomb", unified: "1F4A3", short_names: ["bomb"], text: "", search: "bomb,boom,explode,explosion,terrorism" }, "flag-cw": { name: "Regional Indicator Symbol Letters CW", unified: "1F1E8-1F1FC", short_names: ["flag-cw"], text: "", search: "flag,cw,regional,indicator,symbol,letters" }, b: { name: "Negative Squared Latin Capital Letter B", unified: "1F171", variations: ["1F171-FE0F"], short_names: ["b"], text: "", search: "b,negative,squared,latin,capital,letter,red-square,alphabet" }, ab: { name: "Negative Squared Ab", unified: "1F18E", short_names: ["ab"], text: "", search: "ab,negative,squared,red-square,alphabet" }, sleeping: { name: "Sleeping Face", unified: "1F634", short_names: ["sleeping"], text: "", search: "sleeping,face,tired,sleepy,night,zzz" }, "flag-cy": { name: "Regional Indicator Symbol Letters CY", unified: "1F1E8-1F1FE", short_names: ["flag-cy"], text: "", search: "flag,cy,regional,indicator,symbol,letters" }, lollipop: { name: "Lollipop", unified: "1F36D", short_names: ["lollipop"], text: "", search: "lollipop,food,snack,candy,sweet" }, japanese_castle: { name: "Japanese Castle", unified: "1F3EF", short_names: ["japanese_castle"], text: "", search: "japanese,castle,photo,building" }, hocho: { name: "Hocho", unified: "1F52A", short_names: ["hocho", "knife"], text: "", search: "hocho,knife,blade,cutlery,kitchen,weapon" }, circus_tent: { name: "Circus Tent", unified: "1F3AA", short_names: ["circus_tent"], text: "", search: "circus,tent,festival,carnival,party" }, cl: { name: "Squared Cl", unified: "1F191", short_names: ["cl"], text: "", search: "cl,squared,alphabet,words,red-square" }, candy: { name: "Candy", unified: "1F36C", short_names: ["candy"], text: "", search: "candy,snack,dessert,sweet,lolly" }, "flag-cz": { name: "Regional Indicator Symbol Letters CZ", unified: "1F1E8-1F1FF", short_names: ["flag-cz"], text: "", search: "flag,cz,regional,indicator,symbol,letters" }, dromedary_camel: { name: "Dromedary Camel", unified: "1F42A", short_names: ["dromedary_camel"], text: "", search: "dromedary,camel,animal,hot,desert,hump" }, "o2": { name: "Negative Squared Latin Capital Letter O", unified: "1F17E", variations: ["1F17E-FE0F"], short_names: ["o2"], text: "", search: "o2,negative,squared,latin,capital,letter,o,alphabet,red-square" }, "flag-dk": { name: "Regional Indicator Symbol Letters DK", unified: "1F1E9-1F1F0", short_names: ["flag-dk"], text: "", search: "flag,dk,regional,indicator,symbol,letters" }, camel: { name: "Bactrian Camel", unified: "1F42B", short_names: ["camel"], text: "", search: "camel,bactrian,animal,nature,hot,desert,hump" }, ferris_wheel: { name: "Ferris Wheel", unified: "1F3A1", short_names: ["ferris_wheel"], text: "", search: "ferris,wheel,photo,carnival,londoneye" }, crossed_swords: { name: "Crossed Swords", unified: "2694", variations: ["2694-FE0F"], short_names: ["crossed_swords"], text: "", search: "crossed,swords,weapon" }, chocolate_bar: { name: "Chocolate Bar", unified: "1F36B", short_names: ["chocolate_bar"], text: "", search: "chocolate,bar,food,snack,dessert,sweet" }, roller_coaster: { name: "Roller Coaster", unified: "1F3A2", short_names: ["roller_coaster"], text: "", search: "roller,coaster,carnival,playground,photo,fun" }, sos: { name: "Squared Sos", unified: "1F198", short_names: ["sos"], text: "", search: "sos,squared,help,red-square,words,emergency,911" }, "flag-dj": { name: "Regional Indicator Symbol Letters DJ", unified: "1F1E9-1F1EF", short_names: ["flag-dj"], text: "", search: "flag,dj,regional,indicator,symbol,letters" }, elephant: { name: "Elephant", unified: "1F418", short_names: ["elephant"], text: "", search: "elephant,animal,nature,nose,th,circus" }, carousel_horse: { name: "Carousel Horse", unified: "1F3A0", short_names: ["carousel_horse"], text: "", search: "carousel,horse,photo,carnival" }, performing_arts: { name: "Performing Arts", unified: "1F3AD", short_names: ["performing_arts"], text: "", search: "performing,arts,acting,theater,drama" }, x: { name: "Cross Mark", unified: "274C", short_names: ["x"], text: "", search: "x,cross,mark,no,delete,remove,cancel" }, grimacing: { name: "Grimacing Face", unified: "1F62C", short_names: ["grimacing"], text: "", search: "grimacing,face,grimace,teeth" }, doughnut: { name: "Doughnut", unified: "1F369", short_names: ["doughnut"], text: "", search: "doughnut,food,dessert,snack,sweet,donut" }, "flag-dm": { name: "Regional Indicator Symbol Letters DM", unified: "1F1E9-1F1F2", short_names: ["flag-dm"], text: "", search: "flag,dm,regional,indicator,symbol,letters" }, smoking: { name: "Smoking Symbol", unified: "1F6AC", short_names: ["smoking"], text: "", search: "smoking,symbol,kills,tobacco,cigarette,joint,smoke" }, o: { name: "Heavy Large Circle", unified: "2B55", variations: ["2B55-FE0F"], short_names: ["o"], text: "", search: "o,heavy,large,circle,round" }, umbrella_on_ground: { name: "Umbrella on Ground", unified: "26F1", short_names: ["umbrella_on_ground"], text: "", search: "umbrella,on,ground" }, "flag-do": { name: "Regional Indicator Symbol Letters DO", unified: "1F1E9-1F1F4", short_names: ["flag-do"], text: "", search: "flag,do,regional,indicator,symbol,letters" }, coffin: { name: "Coffin", unified: "26B0", variations: ["26B0-FE0F"], short_names: ["coffin"], text: "", search: "coffin,vampire,dead,die,death,rip,graveyard,cemetery" }, cookie: { name: "Cookie", unified: "1F36A", short_names: ["cookie"], text: "", search: "cookie,food,snack,oreo,chocolate,sweet,dessert" }, art: { name: "Artist Palette", unified: "1F3A8", short_names: ["art"], text: "", search: "art,artist,palette,design,paint,draw,colors" }, "flag-ec": { name: "Regional Indicator Symbol Letters EC", unified: "1F1EA-1F1E8", short_names: ["flag-ec"], text: "", search: "flag,ec,regional,indicator,symbol,letters" }, funeral_urn: { name: "Funeral Urn", unified: "26B1", variations: ["26B1-FE0F"], short_names: ["funeral_urn"], text: "", search: "funeral,urn,dead,die,death,rip,ashes" }, racehorse: { name: "Horse", unified: "1F40E", short_names: ["racehorse"], text: "", search: "racehorse,horse,animal,gamble,luck" }, clapper: { name: "Clapper Board", unified: "1F3AC", short_names: ["clapper"], text: "", search: "clapper,board,movie,film,record" }, baby_bottle: { name: "Baby Bottle", unified: "1F37C", short_names: ["baby_bottle"], text: "", search: "baby,bottle,food,container,milk" }, "pig2": { name: "Pig", unified: "1F416", short_names: ["pig2"], text: "", search: "pig2,pig,animal,nature" }, microphone: { name: "Microphone", unified: "1F3A4", short_names: ["microphone"], text: "", search: "microphone,sound,music,pa" }, "flag-eg": { name: "Regional Indicator Symbol Letters EG", unified: "1F1EA-1F1EC", short_names: ["flag-eg"], text: "", search: "flag,eg,regional,indicator,symbol,letters" }, no_entry: { name: "No Entry", unified: "26D4", variations: ["26D4-FE0F"], short_names: ["no_entry"], text: "", search: "no,entry,limit,security,privacy,bad,denied,stop,circle" }, name_badge: { name: "Name Badge", unified: "1F4DB", short_names: ["name_badge"], text: "", search: "name,badge,fire,forbid" }, mask: { name: "Face with Medical Mask", unified: "1F637", short_names: ["mask"], text: "", search: "mask,face,with,medical,sick,ill,disease" }, coffee: { name: "Hot Beverage", unified: "2615", variations: ["2615-FE0F"], short_names: ["coffee"], text: "", search: "coffee,hot,beverage,caffeine,latte,espresso" }, mountain: { name: "Mountain", unified: "26F0", short_names: ["mountain"], text: "", search: "mountain,photo,nature,environment" }, headphones: { name: "Headphone", unified: "1F3A7", short_names: ["headphones"], text: "", search: "headphones,headphone,music,score,gadgets" }, goat: { name: "Goat", unified: "1F410", short_names: ["goat"], text: "", search: "goat,animal,nature" }, "flag-sv": { name: "Regional Indicator Symbol Letters SV", unified: "1F1F8-1F1FB", short_names: ["flag-sv"], text: "", search: "flag,sv,regional,indicator,symbol,letters" }, crystal_ball: { name: "Crystal Ball", unified: "1F52E", short_names: ["crystal_ball"], text: "", search: "crystal,ball,disco,party,magic,circus,fortune_teller" }, "flag-gq": { name: "Regional Indicator Symbol Letters GQ", unified: "1F1EC-1F1F6", short_names: ["flag-gq"], text: "", search: "flag,gq,regional,indicator,symbol,letters" }, musical_score: { name: "Musical Score", unified: "1F3BC", short_names: ["musical_score"], text: "", search: "musical,score,treble,clef" }, ram: { name: "Ram", unified: "1F40F", short_names: ["ram"], text: "", search: "ram,animal,sheep,nature" }, tea: { name: "Teacup Without Handle", unified: "1F375", short_names: ["tea"], text: "", search: "tea,teacup,without,handle,drink,bowl,breakfast,green,british" }, no_entry_sign: { name: "No Entry Sign", unified: "1F6AB", short_names: ["no_entry_sign"], text: "", search: "no,entry,sign,forbid,stop,limit,denied,disallow,circle" }, barber: { name: "Barber Pole", unified: "1F488", short_names: ["barber"], text: "", search: "barber,pole,hair,salon,style" }, mount_fuji: { name: "Mount Fuji", unified: "1F5FB", short_names: ["mount_fuji"], text: "", search: "mount,fuji,photo,mountain,nature,japanese" }, sheep: { name: "Sheep", unified: "1F411", short_names: ["sheep"], text: "", search: "sheep,animal,nature,wool,shipit" }, "flag-er": { name: "Regional Indicator Symbol Letters ER", unified: "1F1EA-1F1F7", short_names: ["flag-er"], text: "", search: "flag,er,regional,indicator,symbol,letters" }, sake: { name: "Sake Bottle and Cup", unified: "1F376", short_names: ["sake"], text: "", search: "sake,bottle,and,cup,wine,drink,drunk,beverage,japanese,alcohol,booze" }, musical_keyboard: { name: "Musical Keyboard", unified: "1F3B9", short_names: ["musical_keyboard"], text: "", search: "musical,keyboard,piano,instrument" }, smiling_imp: { name: "Smiling Face with Horns", unified: "1F608", short_names: ["smiling_imp"], text: "", search: "smiling,imp,face,with,horns,devil" }, "dog2": { name: "Dog", unified: "1F415", short_names: ["dog2"], text: "", search: "dog2,dog,animal,nature,friend,doge,pet,faithful" }, beer: { name: "Beer Mug", unified: "1F37A", short_names: ["beer"], text: "", search: "beer,mug,relax,beverage,drink,drunk,party,pub,summer,alcohol,booze" }, alembic: { name: "Alembic", unified: "2697", variations: ["2697-FE0F"], short_names: ["alembic"], text: "", search: "alembic,distilling,science,experiment" }, "flag-ee": { name: "Regional Indicator Symbol Letters EE", unified: "1F1EA-1F1EA", short_names: ["flag-ee"], text: "", search: "flag,ee,regional,indicator,symbol,letters" }, volcano: { name: "Volcano", unified: "1F30B", short_names: ["volcano"], text: "", search: "volcano,photo,nature,disaster" }, anger: { name: "Anger Symbol", unified: "1F4A2", short_names: ["anger"], text: "", search: "anger,symbol,angry,mad" }, saxophone: { name: "Saxophone", unified: "1F3B7", short_names: ["saxophone"], text: "", search: "saxophone,music,instrument,jazz,blues" }, poodle: { name: "Poodle", unified: "1F429", short_names: ["poodle"], text: "", search: "poodle,dog,animal,101,nature,pet" }, hotsprings: { name: "Hot Springs", unified: "2668", variations: ["2668-FE0F"], short_names: ["hotsprings"], text: "", search: "hotsprings,hot,springs,bath,warm,relax" }, "flag-et": { name: "Regional Indicator Symbol Letters ET", unified: "1F1EA-1F1F9", short_names: ["flag-et"], text: "", search: "flag,et,regional,indicator,symbol,letters" }, beers: { name: "Clinking Beer Mugs", unified: "1F37B", short_names: ["beers"], text: "", search: "beers,clinking,beer,mugs,relax,beverage,drink,drunk,party,pub,summer,alcohol,booze" }, imp: { name: "Imp", unified: "1F47F", short_names: ["imp"], text: "", search: "imp,devil,angry,horns" }, telescope: { name: "Telescope", unified: "1F52D", short_names: ["telescope"], text: "", search: "telescope,stars,space,zoom" }, japanese_ogre: { name: "Japanese Ogre", unified: "1F479", short_names: ["japanese_ogre"], text: "", search: "japanese,ogre,monster,red,mask,halloween,scary,creepy,devil,demon" }, no_pedestrians: { name: "No Pedestrians", unified: "1F6B7", short_names: ["no_pedestrians"], text: "", search: "no,pedestrians,rules,crossing,walking,circle" }, "cat2": { name: "Cat", unified: "1F408", short_names: ["cat2"], text: "", search: "cat2,cat,animal,meow,pet,cats" }, trumpet: { name: "Trumpet", unified: "1F3BA", short_names: ["trumpet"], text: "", search: "trumpet,music,brass" }, "flag-eu": { name: "Regional Indicator Symbol Letters EU", unified: "1F1EA-1F1FA", short_names: ["flag-eu"], text: "", search: "flag,eu,regional,indicator,symbol,letters" }, microscope: { name: "Microscope", unified: "1F52C", short_names: ["microscope"], text: "", search: "microscope,laboratory,experiment,zoomin,science,study" }, wine_glass: { name: "Wine Glass", unified: "1F377", short_names: ["wine_glass"], text: "", search: "wine,glass,drink,beverage,drunk,alcohol,booze" }, japanese_goblin: { name: "Japanese Goblin", unified: "1F47A", short_names: ["japanese_goblin"], text: "", search: "japanese,goblin,red,evil,mask,monster,scary,creepy" }, tent: { name: "Tent", unified: "26FA", variations: ["26FA-FE0F"], short_names: ["tent"], text: "", search: "tent,photo,camping,outdoors" }, rooster: { name: "Rooster", unified: "1F413", short_names: ["rooster"], text: "", search: "rooster,animal,nature,chicken" }, do_not_litter: { name: "Do Not Litter Symbol", unified: "1F6AF", short_names: ["do_not_litter"], text: "", search: "do,not,litter,symbol,trash,bin,garbage,circle" }, "flag-fk": { name: "Regional Indicator Symbol Letters FK", unified: "1F1EB-1F1F0", short_names: ["flag-fk"], text: "", search: "flag,fk,regional,indicator,symbol,letters" }, guitar: { name: "Guitar", unified: "1F3B8", short_names: ["guitar"], text: "", search: "guitar,music,instrument" }, "flag-fo": { name: "Regional Indicator Symbol Letters FO", unified: "1F1EB-1F1F4", short_names: ["flag-fo"], text: "", search: "flag,fo,regional,indicator,symbol,letters" }, no_bicycles: { name: "No Bicycles", unified: "1F6B3", short_names: ["no_bicycles"], text: "", search: "no,bicycles,cyclist,prohibited,circle" }, violin: { name: "Violin", unified: "1F3BB", short_names: ["violin"], text: "", search: "violin,music,instrument,orchestra,symphony" }, hankey: { name: "Pile of Poo", unified: "1F4A9", short_names: ["hankey", "poop", "shit"], text: "", search: "hankey,poop,shit,pile,of,poo" }, pill: { name: "Pill", unified: "1F48A", short_names: ["pill"], text: "", search: "pill,health,medicine,doctor,pharmacy,drug" }, cocktail: { name: "Cocktail Glass", unified: "1F378", short_names: ["cocktail"], text: "", search: "cocktail,glass,drink,drunk,alcohol,beverage,booze,mojito" }, game_die: { name: "Game Die", unified: "1F3B2", short_names: ["game_die"], text: "", search: "game,die,dice,random,tabletop,play,luck" }, "flag-fj": { name: "Regional Indicator Symbol Letters FJ", unified: "1F1EB-1F1EF", short_names: ["flag-fj"], text: "", search: "flag,fj,regional,indicator,symbol,letters" }, "non-potable_water": { name: "Non-Potable Water Symbol", unified: "1F6B1", short_names: ["non-potable_water"], text: "", search: "non,potable,water,symbol,drink,faucet,tap,circle" }, ghost: { name: "Ghost", unified: "1F47B", short_names: ["ghost"], text: "", search: "ghost,halloween,spooky,scary" }, syringe: { name: "Syringe", unified: "1F489", short_names: ["syringe"], text: "", search: "syringe,health,hospital,drugs,blood,medicine,needle,doctor,nurse" }, "flag-fi": { name: "Regional Indicator Symbol Letters FI", unified: "1F1EB-1F1EE", short_names: ["flag-fi"], text: "", search: "flag,fi,regional,indicator,symbol,letters" }, tropical_drink: { name: "Tropical Drink", unified: "1F379", short_names: ["tropical_drink"], text: "", search: "tropical,drink,beverage,cocktail,summer,beach,alcohol,booze,mojito" }, skull: { name: "Skull", unified: "1F480", short_names: ["skull"], text: "", search: "skull,dead,skeleton,creepy" }, dart: { name: "Direct Hit", unified: "1F3AF", short_names: ["dart"], text: "", search: "dart,direct,hit,game,play,bar" }, "rabbit2": { name: "Rabbit", unified: "1F407", short_names: ["rabbit2"], text: "", search: "rabbit2,rabbit,animal,nature,pet,magic,spring" }, underage: { name: "No One Under Eighteen Symbol", unified: "1F51E", short_names: ["underage"], text: "", search: "underage,no,one,under,eighteen,symbol,18,drink,pub,night,minor,circle" }, "flag-fr": { name: "Regional Indicator Symbol Letters FR", unified: "1F1EB-1F1F7", short_names: ["flag-fr", "fr"], text: "", search: "flag,fr,regional,indicator,symbol,letters" }, factory: { name: "Factory", unified: "1F3ED", short_names: ["factory"], text: "", search: "factory,building,industry,pollution,smoke" }, "mouse2": { name: "Mouse", unified: "1F401", short_names: ["mouse2"], text: "", search: "mouse2,mouse,animal,nature,rodent" }, toilet: { name: "Toilet", unified: "1F6BD", short_names: ["toilet"], text: "", search: "toilet,restroom,wc,washroom,bathroom,potty" }, no_mobile_phones: { name: "No Mobile Phones", unified: "1F4F5", short_names: ["no_mobile_phones"], text: "", search: "no,mobile,phones,iphone,mute,circle" }, bowling: { name: "Bowling", unified: "1F3B3", short_names: ["bowling"], text: "", search: "bowling,sports,fun,play" }, skull_and_crossbones: { name: "Skull and Crossbones", unified: "2620", variations: ["2620-FE0F"], short_names: ["skull_and_crossbones"], text: "", search: "skull,and,crossbones,poison,danger,deadly,scary" }, video_game: { name: "Video Game", unified: "1F3AE", short_names: ["video_game"], text: "", search: "video,game,play,console,ps4,controller" }, no_smoking: { name: "No Smoking Symbol", unified: "1F6AD", short_names: ["no_smoking"], text: "", search: "no,smoking,symbol,cigarette,blue-square,smell,smoke" }, "flag-gf": { name: "Regional Indicator Symbol Letters GF", unified: "1F1EC-1F1EB", short_names: ["flag-gf"], text: "", search: "flag,gf,regional,indicator,symbol,letters" }, alien: { name: "Extraterrestrial Alien", unified: "1F47D", short_names: ["alien"], text: "", search: "alien,extraterrestrial,ufo,paul,weird,outer_space" }, house: { name: "House Building", unified: "1F3E0", short_names: ["house"], text: "", search: "house,building,home" }, rat: { name: "Rat", unified: "1F400", short_names: ["rat"], text: "", search: "rat,animal,mouse,rodent" }, potable_water: { name: "Potable Water Symbol", unified: "1F6B0", short_names: ["potable_water"], text: "", search: "potable,water,symbol,blue-square,liquid,restroom,cleaning,faucet" }, exclamation: { name: "Heavy Exclamation Mark Symbol", unified: "2757", variations: ["2757-FE0F"], short_names: ["exclamation", "heavy_exclamation_mark"], text: "", search: "exclamation,heavy,mark,symbol,heavy_exclamation_mark,danger,surprise,punctuation,wow,warning" }, "flag-pf": { name: "Regional Indicator Symbol Letters PF", unified: "1F1F5-1F1EB", short_names: ["flag-pf"], text: "", search: "flag,pf,regional,indicator,symbol,letters" }, space_invader: { name: "Alien Monster", unified: "1F47E", short_names: ["space_invader"], text: "", search: "space,invader,alien,monster,game,arcade,play" }, slot_machine: { name: "Slot Machine", unified: "1F3B0", short_names: ["slot_machine"], text: "", search: "slot,machine,bet,gamble,vegas,fruit machine,luck,casino" }, shower: { name: "Shower", unified: "1F6BF", short_names: ["shower"], text: "", search: "shower,clean,water,bathroom" }, fork_and_knife: { name: "Fork and Knife", unified: "1F374", short_names: ["fork_and_knife"], text: "", search: "fork,and,knife,cutlery,kitchen" }, house_with_garden: { name: "House with Garden", unified: "1F3E1", short_names: ["house_with_garden"], text: "", search: "house,with,garden,home,plant,nature" }, feet: { name: "Paw Prints", unified: "1F43E", short_names: ["feet", "paw_prints"], text: "", search: "feet,paw,prints" }, grey_exclamation: { name: "White Exclamation Mark Ornament", unified: "2755", short_names: ["grey_exclamation"], text: "", search: "grey,exclamation,white,mark,ornament,surprise,punctuation,gray,wow,warning" }, "man-bouncing-ball": { name: "Man Bouncing Ball", unified: "26F9-FE0F-200D-2642-FE0F", short_names: ["man-bouncing-ball"], text: "", obsoletes: "26F9", search: "man,bouncing,ball" }, bathtub: { name: "Bathtub", unified: "1F6C1", short_names: ["bathtub"], text: "", search: "bathtub,clean,shower,bathroom" }, "flag-tf": { name: "Regional Indicator Symbol Letters TF", unified: "1F1F9-1F1EB", short_names: ["flag-tf"], text: "", search: "flag,tf,regional,indicator,symbol,letters" }, "flag-ga": { name: "Regional Indicator Symbol Letters GA", unified: "1F1EC-1F1E6", short_names: ["flag-ga"], text: "", search: "flag,ga,regional,indicator,symbol,letters" }, bath: { name: "Bath", unified: "1F6C0", short_names: ["bath"], text: "", search: "bath,clean,shower,bathroom" }, dragon: { name: "Dragon", unified: "1F409", short_names: ["dragon"], text: "", search: "dragon,animal,myth,nature,chinese,green" }, jack_o_lantern: { name: "Jack-O-Lantern", unified: "1F383", short_names: ["jack_o_lantern"], text: "", search: "jack,o,lantern,halloween,light,pumpkin,creepy,fall" }, question: { name: "Black Question Mark Ornament", unified: "2753", short_names: ["question"], text: "", search: "question,black,mark,ornament,doubt,confused" }, smiley_cat: { name: "Smiling Cat Face with Open Mouth", unified: "1F63A", short_names: ["smiley_cat"], text: "", search: "smiley,cat,smiling,face,with,open,mouth,animal,cats,happy,smile" }, dragon_face: { name: "Dragon Face", unified: "1F432", short_names: ["dragon_face"], text: "", search: "dragon,face,animal,myth,nature,chinese,green" }, grey_question: { name: "White Question Mark Ornament", unified: "2754", short_names: ["grey_question"], text: "", search: "grey,question,white,mark,ornament,doubts,gray,huh,confused" }, office: { name: "Office Building", unified: "1F3E2", short_names: ["office"], text: "", search: "office,building,bureau,work" }, "flag-gm": { name: "Regional Indicator Symbol Letters GM", unified: "1F1EC-1F1F2", short_names: ["flag-gm"], text: "", search: "flag,gm,regional,indicator,symbol,letters" }, "flag-ge": { name: "Regional Indicator Symbol Letters GE", unified: "1F1EC-1F1EA", short_names: ["flag-ge"], text: "", search: "flag,ge,regional,indicator,symbol,letters" }, key: { name: "Key", unified: "1F511", short_names: ["key"], text: "", search: "key,lock,door,password" }, bangbang: { name: "Double Exclamation Mark", unified: "203C", variations: ["203C-FE0F"], short_names: ["bangbang"], text: "", search: "bangbang,double,exclamation,mark,surprise" }, cactus: { name: "Cactus", unified: "1F335", short_names: ["cactus"], text: "", search: "cactus,vegetable,plant,nature" }, department_store: { name: "Department Store", unified: "1F3EC", short_names: ["department_store"], text: "", search: "department,store,building,shopping,mall" }, "man-surfing": { name: "Man Surfing", unified: "1F3C4-200D-2642-FE0F", short_names: ["man-surfing"], text: "", obsoletes: "1F3C4", search: "man,surfing" }, smile_cat: { name: "Grinning Cat Face with Smiling Eyes", unified: "1F638", short_names: ["smile_cat"], text: "", search: "smile,cat,grinning,face,with,smiling,eyes,animal,cats" }, "man-swimming": { name: "Man Swimming", unified: "1F3CA-200D-2642-FE0F", short_names: ["man-swimming"], text: "", obsoletes: "1F3CA", search: "man,swimming" }, "flag-de": { name: "Regional Indicator Symbol Letters DE", unified: "1F1E9-1F1EA", short_names: ["flag-de", "de"], text: "", search: "flag,de,regional,indicator,symbol,letters" }, post_office: { name: "Japanese Post Office", unified: "1F3E3", short_names: ["post_office"], text: "", search: "post,office,japanese,building,envelope,communication" }, interrobang: { name: "Exclamation Question Mark", unified: "2049", variations: ["2049-FE0F"], short_names: ["interrobang"], text: "", search: "interrobang,exclamation,question,mark,wat,punctuation,surprise" }, joy_cat: { name: "Cat Face with Tears of Joy", unified: "1F639", short_names: ["joy_cat"], text: "", search: "joy,cat,face,with,tears,of,animal,cats,haha,happy" }, christmas_tree: { name: "Christmas Tree", unified: "1F384", short_names: ["christmas_tree"], text: "", search: "christmas,tree,festival,vacation,december,xmas,celebration" }, low_brightness: { name: "Low Brightness Symbol", unified: "1F505", short_names: ["low_brightness"], text: "", search: "low,brightness,symbol,sun,afternoon,warm,summer" }, evergreen_tree: { name: "Evergreen Tree", unified: "1F332", short_names: ["evergreen_tree"], text: "", search: "evergreen,tree,plant,nature" }, heart_eyes_cat: { name: "Smiling Cat Face with Heart-Shaped Eyes", unified: "1F63B", short_names: ["heart_eyes_cat"], text: "", search: "heart,eyes,cat,smiling,face,with,shaped,animal,love,like,affection,cats,valentines" }, "man-rowing-boat": { name: "Man Rowing Boat", unified: "1F6A3-200D-2642-FE0F", short_names: ["man-rowing-boat"], text: "", obsoletes: "1F6A3", search: "man,rowing,boat" }, door: { name: "Door", unified: "1F6AA", short_names: ["door"], text: "", search: "door,house,entry,exit" }, "flag-gh": { name: "Regional Indicator Symbol Letters GH", unified: "1F1EC-1F1ED", short_names: ["flag-gh"], text: "", search: "flag,gh,regional,indicator,symbol,letters" }, european_post_office: { name: "European Post Office", unified: "1F3E4", short_names: ["european_post_office"], text: "", search: "european,post,office,building,email" }, high_brightness: { name: "High Brightness Symbol", unified: "1F506", short_names: ["high_brightness"], text: "", search: "high,brightness,symbol,sun,light" }, deciduous_tree: { name: "Deciduous Tree", unified: "1F333", short_names: ["deciduous_tree"], text: "", search: "deciduous,tree,plant,nature" }, "man-biking": { name: "Man Biking", unified: "1F6B4-200D-2642-FE0F", short_names: ["man-biking"], text: "", obsoletes: "1F6B4", search: "man,biking" }, hospital: { name: "Hospital", unified: "1F3E5", short_names: ["hospital"], text: "", search: "hospital,building,health,surgery,doctor" }, "flag-gi": { name: "Regional Indicator Symbol Letters GI", unified: "1F1EC-1F1EE", short_names: ["flag-gi"], text: "", search: "flag,gi,regional,indicator,symbol,letters" }, smirk_cat: { name: "Cat Face with Wry Smile", unified: "1F63C", short_names: ["smirk_cat"], text: "", search: "smirk,cat,face,with,wry,smile,animal,cats" }, bank: { name: "Bank", unified: "1F3E6", short_names: ["bank"], text: "", search: "bank,building,money,sales,cash,business,enterprise" }, part_alternation_mark: { name: "Part Alternation Mark", unified: "303D", variations: ["303D-FE0F"], short_names: ["part_alternation_mark"], text: "", search: "part,alternation,mark,graph,presentation,stats,business,economics,bad" }, kissing_cat: { name: "Kissing Cat Face with Closed Eyes", unified: "1F63D", short_names: ["kissing_cat"], text: "", search: "kissing,cat,face,with,closed,eyes,animal,cats,kiss" }, "man-mountain-biking": { name: "Man Mountain Biking", unified: "1F6B5-200D-2642-FE0F", short_names: ["man-mountain-biking"], text: "", obsoletes: "1F6B5", search: "man,mountain,biking" }, "flag-gr": { name: "Regional Indicator Symbol Letters GR", unified: "1F1EC-1F1F7", short_names: ["flag-gr"], text: "", search: "flag,gr,regional,indicator,symbol,letters" }, palm_tree: { name: "Palm Tree", unified: "1F334", short_names: ["palm_tree"], text: "", search: "palm,tree,plant,vegetable,nature,summer,beach,mojito,tropical" }, hotel: { name: "Hotel", unified: "1F3E8", short_names: ["hotel"], text: "", search: "hotel,building,accomodation,checkin" }, scream_cat: { name: "Weary Cat Face", unified: "1F640", short_names: ["scream_cat"], text: "", search: "scream,cat,weary,face,animal,cats,munch,scared" }, "flag-gl": { name: "Regional Indicator Symbol Letters GL", unified: "1F1EC-1F1F1", short_names: ["flag-gl"], text: "", search: "flag,gl,regional,indicator,symbol,letters" }, seedling: { name: "Seedling", unified: "1F331", short_names: ["seedling"], text: "", search: "seedling,plant,nature,grass,lawn,spring" }, warning: { name: "Warning Sign", unified: "26A0", variations: ["26A0-FE0F"], short_names: ["warning"], text: "", search: "warning,sign,exclamation,wip,alert,error,problem,issue" }, herb: { name: "Herb", unified: "1F33F", short_names: ["herb"], text: "", search: "herb,vegetable,plant,medicine,weed,grass,lawn" }, crying_cat_face: { name: "Crying Cat Face", unified: "1F63F", short_names: ["crying_cat_face"], text: "", search: "crying,cat,face,animal,tears,weep,sad,cats,upset,cry" }, children_crossing: { name: "Children Crossing", unified: "1F6B8", short_names: ["children_crossing"], text: "", search: "children,crossing,school,warning,danger,sign,driving,yellow-diamond" }, "flag-gd": { name: "Regional Indicator Symbol Letters GD", unified: "1F1EC-1F1E9", short_names: ["flag-gd"], text: "", search: "flag,gd,regional,indicator,symbol,letters" }, convenience_store: { name: "Convenience Store", unified: "1F3EA", short_names: ["convenience_store"], text: "", search: "convenience,store,building,shopping,groceries" }, school: { name: "School", unified: "1F3EB", short_names: ["school"], text: "", search: "school,building,student,education,learn,teach" }, pouting_cat: { name: "Pouting Cat Face", unified: "1F63E", short_names: ["pouting_cat"], text: "", search: "pouting,cat,face,animal,cats" }, "flag-gp": { name: "Regional Indicator Symbol Letters GP", unified: "1F1EC-1F1F5", short_names: ["flag-gp"], text: "", search: "flag,gp,regional,indicator,symbol,letters" }, trident: { name: "Trident Emblem", unified: "1F531", short_names: ["trident"], text: "", search: "trident,emblem,weapon,spear" }, shamrock: { name: "Shamrock", unified: "2618", variations: ["2618-FE0F"], short_names: ["shamrock"], text: "", search: "shamrock,vegetable,plant,nature,irish,clover" }, love_hotel: { name: "Love Hotel", unified: "1F3E9", short_names: ["love_hotel"], text: "", search: "love,hotel,like,affection,dating" }, fleur_de_lis: { name: "Fleur-De-Lis", unified: "269C", variations: ["269C-FE0F"], short_names: ["fleur_de_lis"], text: "", search: "fleur,de,lis,decorative,scout" }, four_leaf_clover: { name: "Four Leaf Clover", unified: "1F340", short_names: ["four_leaf_clover"], text: "", search: "four,leaf,clover,vegetable,plant,nature,lucky,irish" }, "flag-gu": { name: "Regional Indicator Symbol Letters GU", unified: "1F1EC-1F1FA", short_names: ["flag-gu"], text: "", search: "flag,gu,regional,indicator,symbol,letters" }, open_hands: { name: "Open Hands Sign", unified: "1F450", short_names: ["open_hands"], text: "", search: "open,hands,sign,fingers,butterfly" }, raised_hands: { name: "Person Raising Both Hands in Celebration", unified: "1F64C", short_names: ["raised_hands"], text: "", search: "raised,hands,person,raising,both,in,celebration,gesture,hooray,yea" }, wedding: { name: "Wedding", unified: "1F492", short_names: ["wedding"], text: "", search: "wedding,love,like,affection,couple,marriage,bride,groom" }, bamboo: { name: "Pine Decoration", unified: "1F38D", short_names: ["bamboo"], text: "", search: "bamboo,pine,decoration,plant,nature,vegetable,panda,pine_decoration" }, beginner: { name: "Japanese Symbol for Beginner", unified: "1F530", short_names: ["beginner"], text: "", search: "beginner,japanese,symbol,for,badge,shield" }, "flag-gt": { name: "Regional Indicator Symbol Letters GT", unified: "1F1EC-1F1F9", short_names: ["flag-gt"], text: "", search: "flag,gt,regional,indicator,symbol,letters" }, gift: { name: "Wrapped Present", unified: "1F381", short_names: ["gift"], text: "", search: "gift,wrapped,present,birthday,christmas,xmas" }, "flag-gg": { name: "Regional Indicator Symbol Letters GG", unified: "1F1EC-1F1EC", short_names: ["flag-gg"], text: "", search: "flag,gg,regional,indicator,symbol,letters" }, balloon: { name: "Balloon", unified: "1F388", short_names: ["balloon"], text: "", search: "balloon,party,celebration,birthday,circus" }, tanabata_tree: { name: "Tanabata Tree", unified: "1F38B", short_names: ["tanabata_tree"], text: "", search: "tanabata,tree,plant,nature,branch,summer" }, clap: { name: "Clapping Hands Sign", unified: "1F44F", short_names: ["clap"], text: "", search: "clap,clapping,hands,sign,praise,applause,congrats,yay" }, recycle: { name: "Black Universal Recycling Symbol", unified: "267B", variations: ["267B-FE0F"], short_names: ["recycle"], text: "", search: "recycle,black,universal,recycling,symbol,arrow,environment,garbage,trash" }, pray: { name: "Person with Folded Hands", unified: "1F64F", short_names: ["pray"], text: "", search: "pray,person,with,folded,hands,please,hope,wish,namaste,highfive" }, church: { name: "Church", unified: "26EA", variations: ["26EA-FE0F"], short_names: ["church"], text: "", search: "church,building,religion,christ" }, white_check_mark: { name: "White Heavy Check Mark", unified: "2705", short_names: ["white_check_mark"], text: "", search: "white,check,mark,heavy,green-square,ok,agree,vote,election,answer" }, flags: { name: "Carp Streamer", unified: "1F38F", short_names: ["flags"], text: "", search: "flags,carp,streamer,fish,japanese,koinobori,banner" }, leaves: { name: "Leaf Fluttering in Wind", unified: "1F343", short_names: ["leaves"], text: "", search: "leaves,leaf,fluttering,in,wind,nature,plant,tree,vegetable,grass,lawn,spring" }, "flag-gn": { name: "Regional Indicator Symbol Letters GN", unified: "1F1EC-1F1F3", short_names: ["flag-gn"], text: "", search: "flag,gn,regional,indicator,symbol,letters" }, ribbon: { name: "Ribbon", unified: "1F380", short_names: ["ribbon"], text: "", search: "ribbon,decoration,pink,girl,bowtie" }, "flag-gw": { name: "Regional Indicator Symbol Letters GW", unified: "1F1EC-1F1FC", short_names: ["flag-gw"], text: "", search: "flag,gw,regional,indicator,symbol,letters" }, "u6307": { name: "Squared Cjk Unified Ideograph-6307", unified: "1F22F", variations: ["1F22F-FE0F"], short_names: ["u6307"], text: "", search: "u6307,squared,cjk,unified,ideograph,6307,chinese,point,green-square,kanji" }, fallen_leaf: { name: "Fallen Leaf", unified: "1F342", short_names: ["fallen_leaf"], text: "", search: "fallen,leaf,nature,plant,vegetable,leaves" }, chart: { name: "Chart with Upwards Trend and Yen Sign", unified: "1F4B9", short_names: ["chart"], text: "", search: "chart,with,upwards,trend,and,yen,sign,green-square,graph,presentation,stats" }, "flag-gy": { name: "Regional Indicator Symbol Letters GY", unified: "1F1EC-1F1FE", short_names: ["flag-gy"], text: "", search: "flag,gy,regional,indicator,symbol,letters" }, "+1": { name: "Thumbs Up Sign", unified: "1F44D", short_names: ["+1", "thumbsup"], text: "", search: "+1,thumbsup,thumbs,up,sign,yes,awesome,good,agree,accept,cool,hand,like" }, maple_leaf: { name: "Maple Leaf", unified: "1F341", short_names: ["maple_leaf"], text: "", search: "maple,leaf,nature,plant,vegetable,ca,fall" }, confetti_ball: { name: "Confetti Ball", unified: "1F38A", short_names: ["confetti_ball"], text: "", search: "confetti,ball,festival,party,birthday,circus" }, tada: { name: "Party Popper", unified: "1F389", short_names: ["tada"], text: "", search: "tada,party,popper,congratulations,birthday,magic,circus,celebration" }, "-1": { name: "Thumbs Down Sign", unified: "1F44E", short_names: ["-1", "thumbsdown"], text: "", search: ",1,thumbsdown,thumbs,down,sign,no,dislike,hand" }, sparkle: { name: "Sparkle", unified: "2747", variations: ["2747-FE0F"], short_names: ["sparkle"], text: "", search: "sparkle,stars,green-square,awesome,good,fireworks" }, "flag-ht": { name: "Regional Indicator Symbol Letters HT", unified: "1F1ED-1F1F9", short_names: ["flag-ht"], text: "", search: "flag,ht,regional,indicator,symbol,letters" }, mushroom: { name: "Mushroom", unified: "1F344", short_names: ["mushroom"], text: "", search: "mushroom,plant,vegetable" }, "flag-hn": { name: "Regional Indicator Symbol Letters HN", unified: "1F1ED-1F1F3", short_names: ["flag-hn"], text: "", search: "flag,hn,regional,indicator,symbol,letters" }, shinto_shrine: { name: "Shinto Shrine", unified: "26E9", short_names: ["shinto_shrine"], text: "", search: "shinto,shrine,temple,japan,kyoto" }, ear_of_rice: { name: "Ear of Rice", unified: "1F33E", short_names: ["ear_of_rice"], text: "", search: "ear,of,rice,nature,plant" }, facepunch: { name: "Fisted Hand Sign", unified: "1F44A", short_names: ["facepunch", "punch"], text: "", search: "facepunch,punch,fisted,hand,sign,angry,violence,fist,hit,attack" }, eight_spoked_asterisk: { name: "Eight Spoked Asterisk", unified: "2733", variations: ["2733-FE0F"], short_names: ["eight_spoked_asterisk"], text: "", search: "eight,spoked,asterisk,star,sparkle,green-square" }, dolls: { name: "Japanese Dolls", unified: "1F38E", short_names: ["dolls"], text: "", search: "dolls,japanese,toy,kimono" }, bouquet: { name: "Bouquet", unified: "1F490", short_names: ["bouquet"], text: "", search: "bouquet,flowers,nature,spring" }, negative_squared_cross_mark: { name: "Negative Squared Cross Mark", unified: "274E", short_names: ["negative_squared_cross_mark"], text: "", search: "negative,squared,cross,mark,x,green-square,no,deny" }, "flag-hk": { name: "Regional Indicator Symbol Letters HK", unified: "1F1ED-1F1F0", short_names: ["flag-hk"], text: "", search: "flag,hk,regional,indicator,symbol,letters" }, fist: { name: "Raised Fist", unified: "270A", short_names: ["fist"], text: "", search: "fist,raised,fingers,hand,grasp" }, izakaya_lantern: { name: "Izakaya Lantern", unified: "1F3EE", short_names: ["izakaya_lantern", "lantern"], text: "", search: "izakaya,lantern,light,paper,halloween,spooky" }, japan: { name: "Silhouette of Japan", unified: "1F5FE", short_names: ["japan"], text: "", search: "japan,silhouette,of,nation,country,japanese,asia" }, tulip: { name: "Tulip", unified: "1F337", short_names: ["tulip"], text: "", search: "tulip,flowers,plant,nature,summer,spring" }, rice_scene: { name: "Moon Viewing Ceremony", unified: "1F391", short_names: ["rice_scene"], text: "", search: "rice,scene,moon,viewing,ceremony,photo,japan,asia,tsukimi" }, wind_chime: { name: "Wind Chime", unified: "1F390", short_names: ["wind_chime"], text: "", search: "wind,chime,nature,ding,spring,bell" }, globe_with_meridians: { name: "Globe with Meridians", unified: "1F310", short_names: ["globe_with_meridians"], text: "", search: "globe,with,meridians,earth,international,world,internet,interweb,i18n" }, "flag-hu": { name: "Regional Indicator Symbol Letters HU", unified: "1F1ED-1F1FA", short_names: ["flag-hu"], text: "", search: "flag,hu,regional,indicator,symbol,letters" }, diamond_shape_with_a_dot_inside: { name: "Diamond Shape with a Dot Inside", unified: "1F4A0", short_names: ["diamond_shape_with_a_dot_inside"], text: "", search: "diamond,shape,with,a,dot,inside,jewel,blue,gem,crystal,fancy" }, email: { name: "Envelope", unified: "2709", variations: ["2709-FE0F"], short_names: ["email", "envelope"], text: "", search: "email,envelope,letter,postal,inbox,communication" }, rose: { name: "Rose", unified: "1F339", short_names: ["rose"], text: "", search: "rose,flowers,valentines,love,spring" }, "flag-is": { name: "Regional Indicator Symbol Letters IS", unified: "1F1EE-1F1F8", short_names: ["flag-is"], text: "", search: "flag,is,regional,indicator,symbol,letters" }, m: { name: "Circled Latin Capital Letter M", unified: "24C2", variations: ["24C2-FE0F"], short_names: ["m"], text: "", search: "m,circled,latin,capital,letter,alphabet,blue-circle" }, sunrise: { name: "Sunrise", unified: "1F305", short_names: ["sunrise"], text: "", search: "sunrise,morning,view,vacation,photo" }, envelope_with_arrow: { name: "Envelope with Downwards Arrow Above", unified: "1F4E9", short_names: ["envelope_with_arrow"], text: "", search: "envelope,with,arrow,downwards,above,email,communication" }, "flag-in": { name: "Regional Indicator Symbol Letters IN", unified: "1F1EE-1F1F3", short_names: ["flag-in"], text: "", search: "flag,in,regional,indicator,symbol,letters" }, "flag-id": { name: "Regional Indicator Symbol Letters ID", unified: "1F1EE-1F1E9", short_names: ["flag-id"], text: "", search: "flag,id,regional,indicator,symbol,letters" }, v: { name: "Victory Hand", unified: "270C", variations: ["270C-FE0F"], short_names: ["v"], text: "", search: "v,victory,hand,fingers,ohyeah,peace,two" }, sunrise_over_mountains: { name: "Sunrise over Mountains", unified: "1F304", short_names: ["sunrise_over_mountains"], text: "", search: "sunrise,over,mountains,view,vacation,photo" }, sunflower: { name: "Sunflower", unified: "1F33B", short_names: ["sunflower"], text: "", search: "sunflower,nature,plant,fall" }, cyclone: { name: "Cyclone", unified: "1F300", short_names: ["cyclone"], text: "", search: "cyclone,weather,swirl,blue,cloud,vortex,spiral,whirlpool,spin" }, incoming_envelope: { name: "Incoming Envelope", unified: "1F4E8", short_names: ["incoming_envelope"], text: "", search: "incoming,envelope,email,inbox" }, "e-mail": { name: "E-Mail Symbol", unified: "1F4E7", short_names: ["e-mail"], text: "", search: "e,mail,symbol,communication,inbox" }, blossom: { name: "Blossom", unified: "1F33C", short_names: ["blossom"], text: "", search: "blossom,nature,flowers,yellow" }, stars: { name: "Shooting Star", unified: "1F320", short_names: ["stars"], text: "", search: "stars,shooting,star,night,photo" }, zzz: { name: "Sleeping Symbol", unified: "1F4A4", short_names: ["zzz"], text: "", search: "zzz,sleeping,symbol,sleepy,tired" }, "flag-ir": { name: "Regional Indicator Symbol Letters IR", unified: "1F1EE-1F1F7", short_names: ["flag-ir"], text: "", search: "flag,ir,regional,indicator,symbol,letters" }, "flag-iq": { name: "Regional Indicator Symbol Letters IQ", unified: "1F1EE-1F1F6", short_names: ["flag-iq"], text: "", search: "flag,iq,regional,indicator,symbol,letters" }, love_letter: { name: "Love Letter", unified: "1F48C", short_names: ["love_letter"], text: "", search: "love,letter,email,like,affection,envelope,valentines" }, ok_hand: { name: "Ok Hand Sign", unified: "1F44C", short_names: ["ok_hand"], text: "", search: "ok,hand,sign,fingers,limbs,perfect" }, sparkler: { name: "Firework Sparkler", unified: "1F387", short_names: ["sparkler"], text: "", search: "sparkler,firework,stars,night,shine" }, atm: { name: "Automated Teller Machine", unified: "1F3E7", short_names: ["atm"], text: "", search: "atm,automated,teller,machine,money,sales,cash,blue-square,payment,bank" }, cherry_blossom: { name: "Cherry Blossom", unified: "1F338", short_names: ["cherry_blossom"], text: "", search: "cherry,blossom,nature,plant,spring,flower" }, wc: { name: "Water Closet", unified: "1F6BE", short_names: ["wc"], text: "", search: "wc,water,closet,toilet,restroom,blue-square" }, "flag-ie": { name: "Regional Indicator Symbol Letters IE", unified: "1F1EE-1F1EA", short_names: ["flag-ie"], text: "", search: "flag,ie,regional,indicator,symbol,letters" }, inbox_tray: { name: "Inbox Tray", unified: "1F4E5", short_names: ["inbox_tray"], text: "", search: "inbox,tray,email,documents" }, point_left: { name: "White Left Pointing Backhand Index", unified: "1F448", short_names: ["point_left"], text: "", search: "point,left,white,pointing,backhand,index,direction,fingers,hand" }, fireworks: { name: "Fireworks", unified: "1F386", short_names: ["fireworks"], text: "", search: "fireworks,photo,festival,carnival,congratulations" }, hibiscus: { name: "Hibiscus", unified: "1F33A", short_names: ["hibiscus"], text: "", search: "hibiscus,plant,vegetable,flowers,beach" }, outbox_tray: { name: "Outbox Tray", unified: "1F4E4", short_names: ["outbox_tray"], text: "", search: "outbox,tray,inbox,email" }, point_right: { name: "White Right Pointing Backhand Index", unified: "1F449", short_names: ["point_right"], text: "", search: "point,right,white,pointing,backhand,index,fingers,hand,direction" }, city_sunrise: { name: "Sunset over Buildings", unified: "1F307", short_names: ["city_sunrise"], text: "", search: "city,sunrise,sunset,over,buildings,photo,good morning,dawn" }, "flag-im": { name: "Regional Indicator Symbol Letters IM", unified: "1F1EE-1F1F2", short_names: ["flag-im"], text: "", search: "flag,im,regional,indicator,symbol,letters" }, earth_americas: { name: "Earth Globe Americas", unified: "1F30E", short_names: ["earth_americas"], text: "", search: "earth,americas,globe,world,usa,international" }, wheelchair: { name: "Wheelchair Symbol", unified: "267F", variations: ["267F-FE0F"], short_names: ["wheelchair"], text: "", search: "wheelchair,symbol,blue-square,disabled,a11y,accessibility" }, "point_up_2": { name: "White Up Pointing Backhand Index", unified: "1F446", short_names: ["point_up_2"], text: "", search: "point,up,2,white,pointing,backhand,index,fingers,hand,direction" }, parking: { name: "Negative Squared Latin Capital Letter P", unified: "1F17F", variations: ["1F17F-FE0F"], short_names: ["parking"], text: "", search: "parking,negative,squared,latin,capital,letter,p,cars,blue-square,alphabet" }, city_sunset: { name: "Cityscape at Dusk", unified: "1F306", short_names: ["city_sunset"], text: "", search: "city,sunset,cityscape,at,dusk,photo,evening,sky,buildings" }, earth_africa: { name: "Earth Globe Europe-Africa", unified: "1F30D", short_names: ["earth_africa"], text: "", search: "earth,africa,globe,europe,world,international" }, package: { name: "Package", unified: "1F4E6", short_names: ["package"], text: "", search: "package,mail,gift,cardboard,box,moving" }, "flag-il": { name: "Regional Indicator Symbol Letters IL", unified: "1F1EE-1F1F1", short_names: ["flag-il"], text: "", search: "flag,il,regional,indicator,symbol,letters" }, point_down: { name: "White Down Pointing Backhand Index", unified: "1F447", short_names: ["point_down"], text: "", search: "point,down,white,pointing,backhand,index,fingers,hand,direction" }, "flag-it": { name: "Regional Indicator Symbol Letters IT", unified: "1F1EE-1F1F9", short_names: ["flag-it", "it"], text: "", search: "flag,it,regional,indicator,symbol,letters" }, "u7a7a": { name: "Squared Cjk Unified Ideograph-7a7a", unified: "1F233", short_names: ["u7a7a"], text: "", search: "u7a7a,squared,cjk,unified,ideograph,7a7a,kanji,japanese,chinese,empty,sky,blue-square" }, earth_asia: { name: "Earth Globe Asia-Australia", unified: "1F30F", short_names: ["earth_asia"], text: "", search: "earth,asia,globe,australia,world,east,international" }, "flag-jm": { name: "Regional Indicator Symbol Letters JM", unified: "1F1EF-1F1F2", short_names: ["flag-jm"], text: "", search: "flag,jm,regional,indicator,symbol,letters" }, sa: { name: "Squared Katakana Sa", unified: "1F202", variations: ["1F202-FE0F"], short_names: ["sa"], text: "", search: "sa,squared,katakana,japanese,blue-square" }, night_with_stars: { name: "Night with Stars", unified: "1F303", short_names: ["night_with_stars"], text: "", search: "night,with,stars,evening,city,downtown" }, mailbox_closed: { name: "Closed Mailbox with Lowered Flag", unified: "1F4EA", short_names: ["mailbox_closed"], text: "", search: "mailbox,closed,with,lowered,flag,email,communication,inbox" }, point_up: { name: "White Up Pointing Index", unified: "261D", variations: ["261D-FE0F"], short_names: ["point_up"], text: "", search: "point,up,white,pointing,index,hand,fingers,direction" }, full_moon: { name: "Full Moon Symbol", unified: "1F315", short_names: ["full_moon"], text: "", search: "full,moon,symbol,nature,yellow,twilight,planet,space,night,evening,sleep" }, mailbox: { name: "Closed Mailbox with Raised Flag", unified: "1F4EB", short_names: ["mailbox"], text: "", search: "mailbox,closed,with,raised,flag,email,inbox,communication" }, milky_way: { name: "Milky Way", unified: "1F30C", short_names: ["milky_way"], text: "", search: "milky,way,photo,space,stars" }, waning_gibbous_moon: { name: "Waning Gibbous Moon Symbol", unified: "1F316", short_names: ["waning_gibbous_moon"], text: "", search: "waning,gibbous,moon,symbol,nature,twilight,planet,space,night,evening,sleep,waxing_gibbous_moon" }, "flag-jp": { name: "Regional Indicator Symbol Letters JP", unified: "1F1EF-1F1F5", short_names: ["flag-jp", "jp"], text: "", search: "flag,jp,regional,indicator,symbol,letters" }, hand: { name: "Raised Hand", unified: "270B", short_names: ["hand", "raised_hand"], text: "", search: "hand,raised" }, passport_control: { name: "Passport Control", unified: "1F6C2", short_names: ["passport_control"], text: "", search: "passport,control,custom,blue-square" }, mailbox_with_mail: { name: "Open Mailbox with Raised Flag", unified: "1F4EC", short_names: ["mailbox_with_mail"], text: "", search: "mailbox,with,mail,open,raised,flag,email,inbox,communication" }, customs: { name: "Customs", unified: "1F6C3", short_names: ["customs"], text: "", search: "customs,passport,border,blue-square" }, bridge_at_night: { name: "Bridge at Night", unified: "1F309", short_names: ["bridge_at_night"], text: "", search: "bridge,at,night,photo,sanfrancisco" }, last_quarter_moon: { name: "Last Quarter Moon Symbol", unified: "1F317", short_names: ["last_quarter_moon"], text: "", search: "last,quarter,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, crossed_flags: { name: "Crossed FLAGS", unified: "1F38C", short_names: ["crossed_flags"], text: "", search: "crossed,flags,japanese,nation,country,border" }, waning_crescent_moon: { name: "Waning Crescent Moon Symbol", unified: "1F318", short_names: ["waning_crescent_moon"], text: "", search: "waning,crescent,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, baggage_claim: { name: "Baggage Claim", unified: "1F6C4", short_names: ["baggage_claim"], text: "", search: "baggage,claim,blue-square,airport,transport" }, foggy: { name: "Foggy", unified: "1F301", short_names: ["foggy"], text: "", search: "foggy,photo,mountain" }, mailbox_with_no_mail: { name: "Open Mailbox with Lowered Flag", unified: "1F4ED", short_names: ["mailbox_with_no_mail"], text: "", search: "mailbox,with,no,mail,open,lowered,flag,email,inbox" }, "flag-je": { name: "Regional Indicator Symbol Letters JE", unified: "1F1EF-1F1EA", short_names: ["flag-je"], text: "", search: "flag,je,regional,indicator,symbol,letters" }, new_moon: { name: "New Moon Symbol", unified: "1F311", short_names: ["new_moon"], text: "", search: "new,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, "flag-jo": { name: "Regional Indicator Symbol Letters JO", unified: "1F1EF-1F1F4", short_names: ["flag-jo"], text: "", search: "flag,jo,regional,indicator,symbol,letters" }, postbox: { name: "Postbox", unified: "1F4EE", short_names: ["postbox"], text: "", search: "postbox,email,letter,envelope" }, left_luggage: { name: "Left Luggage", unified: "1F6C5", short_names: ["left_luggage"], text: "", search: "left,luggage,blue-square,travel" }, waxing_crescent_moon: { name: "Waxing Crescent Moon Symbol", unified: "1F312", short_names: ["waxing_crescent_moon"], text: "", search: "waxing,crescent,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, mens: { name: "Mens Symbol", unified: "1F6B9", short_names: ["mens"], text: "", search: "mens,symbol,toilet,restroom,wc,blue-square,gender,male" }, postal_horn: { name: "Postal Horn", unified: "1F4EF", short_names: ["postal_horn"], text: "", search: "postal,horn,instrument,music" }, wave: { name: "Waving Hand Sign", unified: "1F44B", short_names: ["wave"], text: "", search: "wave,waving,hand,sign,hands,gesture,goodbye,solong,farewell,hello,palm" }, "flag-kz": { name: "Regional Indicator Symbol Letters KZ", unified: "1F1F0-1F1FF", short_names: ["flag-kz"], text: "", search: "flag,kz,regional,indicator,symbol,letters" }, scroll: { name: "Scroll", unified: "1F4DC", short_names: ["scroll"], text: "", search: "scroll,documents,ancient,history,paper" }, womens: { name: "Womens Symbol", unified: "1F6BA", short_names: ["womens"], text: "", search: "womens,symbol,purple-square,woman,female,toilet,loo,restroom,gender" }, first_quarter_moon: { name: "First Quarter Moon Symbol", unified: "1F313", short_names: ["first_quarter_moon"], text: "", search: "first,quarter,moon,symbol,nature,twilight,planet,space,night,evening,sleep" }, "flag-ke": { name: "Regional Indicator Symbol Letters KE", unified: "1F1F0-1F1EA", short_names: ["flag-ke"], text: "", search: "flag,ke,regional,indicator,symbol,letters" }, muscle: { name: "Flexed Biceps", unified: "1F4AA", short_names: ["muscle"], text: "", search: "muscle,flexed,biceps,arm,flex,hand,summer,strong" }, moon: { name: "Waxing Gibbous Moon Symbol", unified: "1F314", short_names: ["moon", "waxing_gibbous_moon"], text: "", search: "moon,waxing,gibbous,symbol" }, "flag-ki": { name: "Regional Indicator Symbol Letters KI", unified: "1F1F0-1F1EE", short_names: ["flag-ki"], text: "", search: "flag,ki,regional,indicator,symbol,letters" }, page_with_curl: { name: "Page with Curl", unified: "1F4C3", short_names: ["page_with_curl"], text: "", search: "page,with,curl,documents,office,paper" }, baby_symbol: { name: "Baby Symbol", unified: "1F6BC", short_names: ["baby_symbol"], text: "", search: "baby,symbol,orange-square,child" }, page_facing_up: { name: "Page Facing Up", unified: "1F4C4", short_names: ["page_facing_up"], text: "", search: "page,facing,up,documents,office,paper,information" }, "flag-xk": { name: "Regional Indicator Symbol Letters XK", unified: "1F1FD-1F1F0", short_names: ["flag-xk"], text: "", search: "flag,xk,regional,indicator,symbol,letters" }, restroom: { name: "Restroom", unified: "1F6BB", short_names: ["restroom"], text: "", search: "restroom,blue-square,toilet,refresh,wc,gender" }, new_moon_with_face: { name: "New Moon with Face", unified: "1F31A", short_names: ["new_moon_with_face"], text: "", search: "new,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, bookmark_tabs: { name: "Bookmark Tabs", unified: "1F4D1", short_names: ["bookmark_tabs"], text: "", search: "bookmark,tabs,favorite,save,order,tidy" }, put_litter_in_its_place: { name: "Put Litter in Its Place Symbol", unified: "1F6AE", short_names: ["put_litter_in_its_place"], text: "", search: "put,litter,in,its,place,symbol,blue-square,sign,human,info" }, writing_hand: { name: "Writing Hand", unified: "270D", variations: ["270D-FE0F"], short_names: ["writing_hand"], text: "", search: "writing,hand,lower_left_ballpoint_pen,stationery,write" }, "flag-kw": { name: "Regional Indicator Symbol Letters KW", unified: "1F1F0-1F1FC", short_names: ["flag-kw"], text: "", search: "flag,kw,regional,indicator,symbol,letters" }, full_moon_with_face: { name: "Full Moon with Face", unified: "1F31D", short_names: ["full_moon_with_face"], text: "", search: "full,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, sun_with_face: { name: "Sun with Face", unified: "1F31E", short_names: ["sun_with_face"], text: "", search: "sun,with,face,nature,morning,sky" }, "flag-kg": { name: "Regional Indicator Symbol Letters KG", unified: "1F1F0-1F1EC", short_names: ["flag-kg"], text: "", search: "flag,kg,regional,indicator,symbol,letters" }, cinema: { name: "Cinema", unified: "1F3A6", short_names: ["cinema"], text: "", search: "cinema,blue-square,record,film,movie,curtain,stage,theater" }, bar_chart: { name: "Bar Chart", unified: "1F4CA", short_names: ["bar_chart"], text: "", search: "bar,chart,graph,presentation,stats" }, first_quarter_moon_with_face: { name: "First Quarter Moon with Face", unified: "1F31B", short_names: ["first_quarter_moon_with_face"], text: "", search: "first,quarter,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, nail_care: { name: "Nail Polish", unified: "1F485", short_names: ["nail_care"], text: "", search: "nail,care,polish,beauty,manicure,finger,fashion" }, signal_strength: { name: "Antenna with Bars", unified: "1F4F6", short_names: ["signal_strength"], text: "", search: "signal,strength,antenna,with,bars,blue-square,reception,phone,internet,connection,wifi,bluetooth" }, "flag-la": { name: "Regional Indicator Symbol Letters LA", unified: "1F1F1-1F1E6", short_names: ["flag-la"], text: "", search: "flag,la,regional,indicator,symbol,letters" }, chart_with_upwards_trend: { name: "Chart with Upwards Trend", unified: "1F4C8", short_names: ["chart_with_upwards_trend"], text: "", search: "chart,with,upwards,trend,graph,presentation,stats,recovery,business,economics,money,sales,good,success" }, chart_with_downwards_trend: { name: "Chart with Downwards Trend", unified: "1F4C9", short_names: ["chart_with_downwards_trend"], text: "", search: "chart,with,downwards,trend,graph,presentation,stats,recession,business,economics,money,sales,bad,failure" }, last_quarter_moon_with_face: { name: "Last Quarter Moon with Face", unified: "1F31C", short_names: ["last_quarter_moon_with_face"], text: "", search: "last,quarter,moon,with,face,nature,twilight,planet,space,night,evening,sleep" }, "flag-lv": { name: "Regional Indicator Symbol Letters LV", unified: "1F1F1-1F1FB", short_names: ["flag-lv"], text: "", search: "flag,lv,regional,indicator,symbol,letters" }, koko: { name: "Squared Katakana Koko", unified: "1F201", short_names: ["koko"], text: "", search: "koko,squared,katakana,blue-square,here,japanese,destination" }, ring: { name: "Ring", unified: "1F48D", short_names: ["ring"], text: "", search: "ring,wedding,propose,marriage,valentines,diamond,fashion,jewelry,gem,engagement" }, crescent_moon: { name: "Crescent Moon", unified: "1F319", short_names: ["crescent_moon"], text: "", search: "crescent,moon,night,sleep,sky,evening,magic" }, symbols: { name: "Input Symbol for Symbols", unified: "1F523", short_names: ["symbols"], text: "", search: "symbols,input,symbol,for,blue-square,music,note,ampersand,percent,glyphs,characters" }, lipstick: { name: "Lipstick", unified: "1F484", short_names: ["lipstick"], text: "", search: "lipstick,female,girl,fashion,woman" }, "flag-lb": { name: "Regional Indicator Symbol Letters LB", unified: "1F1F1-1F1E7", short_names: ["flag-lb"], text: "", search: "flag,lb,regional,indicator,symbol,letters" }, kiss: { name: "Kiss Mark", unified: "1F48B", short_names: ["kiss"], text: "", search: "kiss,mark,face,lips,love,like,affection,valentines" }, information_source: { name: "Information Source", unified: "2139", variations: ["2139-FE0F"], short_names: ["information_source"], text: "", search: "information,source,blue-square,alphabet,letter" }, "flag-ls": { name: "Regional Indicator Symbol Letters LS", unified: "1F1F1-1F1F8", short_names: ["flag-ls"], text: "", search: "flag,ls,regional,indicator,symbol,letters" }, dizzy: { name: "Dizzy Symbol", unified: "1F4AB", short_names: ["dizzy"], text: "", search: "dizzy,symbol,star,sparkle,shoot,magic" }, "flag-lr": { name: "Regional Indicator Symbol Letters LR", unified: "1F1F1-1F1F7", short_names: ["flag-lr"], text: "", search: "flag,lr,regional,indicator,symbol,letters" }, abc: { name: "Input Symbol for Latin Letters", unified: "1F524", short_names: ["abc"], text: "", search: "abc,input,symbol,for,latin,letters,blue-square,alphabet" }, lips: { name: "Mouth", unified: "1F444", short_names: ["lips"], text: "", search: "lips,mouth,kiss" }, star: { name: "White Medium Star", unified: "2B50", variations: ["2B50-FE0F"], short_names: ["star"], text: "", search: "star,white,medium,night,yellow" }, calendar: { name: "Tear-off Calendar", unified: "1F4C6", short_names: ["calendar"], text: "", search: "calendar,tear,off,schedule,date,planning" }, "star2": { name: "Glowing Star", unified: "1F31F", short_names: ["star2"], text: "", search: "star2,glowing,star,night,sparkle,awesome,good,magic" }, tongue: { name: "Tongue", unified: "1F445", short_names: ["tongue"], text: "", search: "tongue,mouth,playful" }, abcd: { name: "Input Symbol for Latin Small Letters", unified: "1F521", short_names: ["abcd"], text: "", search: "abcd,input,symbol,for,latin,small,letters,blue-square,alphabet" }, date: { name: "Calendar", unified: "1F4C5", short_names: ["date"], text: "", search: "date,calendar,schedule" }, "flag-ly": { name: "Regional Indicator Symbol Letters LY", unified: "1F1F1-1F1FE", short_names: ["flag-ly"], text: "", search: "flag,ly,regional,indicator,symbol,letters" }, capital_abcd: { name: "Input Symbol for Latin Capital Letters", unified: "1F520", short_names: ["capital_abcd"], text: "", search: "capital,abcd,input,symbol,for,latin,letters,alphabet,words,blue-square" }, sparkles: { name: "Sparkles", unified: "2728", short_names: ["sparkles"], text: "", search: "sparkles,stars,shine,shiny,cool,awesome,good,magic" }, ear: { name: "Ear", unified: "1F442", short_names: ["ear"], text: "", search: "ear,face,hear,sound,listen" }, "flag-li": { name: "Regional Indicator Symbol Letters LI", unified: "1F1F1-1F1EE", short_names: ["flag-li"], text: "", search: "flag,li,regional,indicator,symbol,letters" }, card_index: { name: "Card Index", unified: "1F4C7", short_names: ["card_index"], text: "", search: "card,index,business,stationery" }, zap: { name: "High Voltage Sign", unified: "26A1", variations: ["26A1-FE0F"], short_names: ["zap"], text: "", search: "zap,high,voltage,sign,thunder,weather,lightning bolt,fast" }, "flag-lt": { name: "Regional Indicator Symbol Letters LT", unified: "1F1F1-1F1F9", short_names: ["flag-lt"], text: "", search: "flag,lt,regional,indicator,symbol,letters" }, nose: { name: "Nose", unified: "1F443", short_names: ["nose"], text: "", search: "nose,smell,sniff" }, ng: { name: "Squared Ng", unified: "1F196", short_names: ["ng"], text: "", search: "ng,squared,blue-square,words,shape,icon" }, ok: { name: "Squared Ok", unified: "1F197", short_names: ["ok"], text: "", search: "ok,squared,good,agree,yes,blue-square" }, footprints: { name: "Footprints", unified: "1F463", short_names: ["footprints"], text: "", search: "footprints,feet,tracking,walking,beach" }, "flag-lu": { name: "Regional Indicator Symbol Letters LU", unified: "1F1F1-1F1FA", short_names: ["flag-lu"], text: "", search: "flag,lu,regional,indicator,symbol,letters" }, fire: { name: "Fire", unified: "1F525", short_names: ["fire"], text: "", search: "fire,hot,cook,flame" }, boom: { name: "Collision Symbol", unified: "1F4A5", short_names: ["boom", "collision"], text: "", search: "boom,collision,symbol,bomb,explode,explosion,blown" }, up: { name: "Squared Up with Exclamation Mark", unified: "1F199", short_names: ["up"], text: "", search: "up,squared,with,exclamation,mark,blue-square,above,high" }, "flag-mo": { name: "Regional Indicator Symbol Letters MO", unified: "1F1F2-1F1F4", short_names: ["flag-mo"], text: "", search: "flag,mo,regional,indicator,symbol,letters" }, "flag-mk": { name: "Regional Indicator Symbol Letters MK", unified: "1F1F2-1F1F0", short_names: ["flag-mk"], text: "", search: "flag,mk,regional,indicator,symbol,letters" }, cool: { name: "Squared Cool", unified: "1F192", short_names: ["cool"], text: "", search: "cool,squared,words,blue-square" }, comet: { name: "Comet", unified: "2604", variations: ["2604-FE0F"], short_names: ["comet"], text: "", search: "comet,space" }, eyes: { name: "Eyes", unified: "1F440", short_names: ["eyes"], text: "", search: "eyes,look,watch,stalk,peek,see" }, clipboard: { name: "Clipboard", unified: "1F4CB", short_names: ["clipboard"], text: "", search: "clipboard,stationery,documents" }, file_folder: { name: "File Folder", unified: "1F4C1", short_names: ["file_folder"], text: "", search: "file,folder,documents,business,office" }, "flag-mg": { name: "Regional Indicator Symbol Letters MG", unified: "1F1F2-1F1EC", short_names: ["flag-mg"], text: "", search: "flag,mg,regional,indicator,symbol,letters" }, new: { name: "Squared New", unified: "1F195", short_names: ["new"], text: "", search: "new,squared,blue-square,words,start" }, sunny: { name: "Black Sun with Rays", unified: "2600", variations: ["2600-FE0F"], short_names: ["sunny"], text: "", search: "sunny,black,sun,with,rays,weather,nature,brightness,summer,beach,spring" }, "flag-mw": { name: "Regional Indicator Symbol Letters MW", unified: "1F1F2-1F1FC", short_names: ["flag-mw"], text: "", search: "flag,mw,regional,indicator,symbol,letters" }, bust_in_silhouette: { name: "Bust in Silhouette", unified: "1F464", short_names: ["bust_in_silhouette"], text: "", search: "bust,in,silhouette,user,person,human" }, open_file_folder: { name: "Open File Folder", unified: "1F4C2", short_names: ["open_file_folder"], text: "", search: "open,file,folder,documents,load" }, free: { name: "Squared Free", unified: "1F193", short_names: ["free"], text: "", search: "free,squared,blue-square,words" }, "flag-my": { name: "Regional Indicator Symbol Letters MY", unified: "1F1F2-1F1FE", short_names: ["flag-my"], text: "", search: "flag,my,regional,indicator,symbol,letters" }, busts_in_silhouette: { name: "Busts in Silhouette", unified: "1F465", short_names: ["busts_in_silhouette"], text: "", search: "busts,in,silhouette,user,person,human,group,team" }, partly_sunny: { name: "Sun Behind Cloud", unified: "26C5", variations: ["26C5-FE0F"], short_names: ["partly_sunny"], text: "", search: "partly,sunny,sun,behind,cloud,weather,nature,cloudy,morning,fall,spring" }, zero: { name: "Keycap 0", unified: "0030-20E3", variations: ["0030-FE0F-20E3"], short_names: ["zero"], text: "", search: "zero,keycap,0,numbers,blue-square,null" }, baby: { name: "Baby", unified: "1F476", short_names: ["baby"], text: "", search: "baby,child,boy,girl,toddler" }, one: { name: "Keycap 1", unified: "0031-20E3", variations: ["0031-FE0F-20E3"], short_names: ["one"], text: "", search: "one,keycap,1,blue-square,numbers" }, "flag-mv": { name: "Regional Indicator Symbol Letters MV", unified: "1F1F2-1F1FB", short_names: ["flag-mv"], text: "", search: "flag,mv,regional,indicator,symbol,letters" }, newspaper: { name: "Newspaper", unified: "1F4F0", short_names: ["newspaper"], text: "", search: "newspaper,press,headline" }, boy: { name: "Boy", unified: "1F466", short_names: ["boy"], text: "", search: "boy,man,male,guy,teenager" }, two: { name: "Keycap 2", unified: "0032-20E3", variations: ["0032-FE0F-20E3"], short_names: ["two"], text: "", search: "two,keycap,2,numbers,prime,blue-square" }, "flag-ml": { name: "Regional Indicator Symbol Letters ML", unified: "1F1F2-1F1F1", short_names: ["flag-ml"], text: "", search: "flag,ml,regional,indicator,symbol,letters" }, three: { name: "Keycap 3", unified: "0033-20E3", variations: ["0033-FE0F-20E3"], short_names: ["three"], text: "", search: "three,keycap,3,numbers,prime,blue-square" }, notebook: { name: "Notebook", unified: "1F4D3", short_names: ["notebook"], text: "", search: "notebook,stationery,record,notes,paper,study" }, "flag-mt": { name: "Regional Indicator Symbol Letters MT", unified: "1F1F2-1F1F9", short_names: ["flag-mt"], text: "", search: "flag,mt,regional,indicator,symbol,letters" }, girl: { name: "Girl", unified: "1F467", short_names: ["girl"], text: "", search: "girl,female,woman,teenager" }, rainbow: { name: "Rainbow", unified: "1F308", short_names: ["rainbow"], text: "", search: "rainbow,nature,happy,unicorn_face,photo,sky,spring" }, four: { name: "Keycap 4", unified: "0034-20E3", variations: ["0034-FE0F-20E3"], short_names: ["four"], text: "", search: "four,keycap,4,numbers,blue-square" }, man: { name: "Man", unified: "1F468", short_names: ["man"], text: "", search: "man,mustache,father,dad,guy,classy,sir,moustache" }, "flag-mh": { name: "Regional Indicator Symbol Letters MH", unified: "1F1F2-1F1ED", short_names: ["flag-mh"], text: "", search: "flag,mh,regional,indicator,symbol,letters" }, cloud: { name: "Cloud", unified: "2601", variations: ["2601-FE0F"], short_names: ["cloud"], text: "", search: "cloud,weather,sky" }, notebook_with_decorative_cover: { name: "Notebook with Decorative Cover", unified: "1F4D4", short_names: ["notebook_with_decorative_cover"], text: "", search: "notebook,with,decorative,cover,classroom,notes,record,paper,study" }, woman: { name: "Woman", unified: "1F469", short_names: ["woman"], text: "", search: "woman,female,girls,lady" }, five: { name: "Keycap 5", unified: "0035-20E3", variations: ["0035-FE0F-20E3"], short_names: ["five"], text: "", search: "five,keycap,5,numbers,blue-square,prime" }, "flag-mq": { name: "Regional Indicator Symbol Letters MQ", unified: "1F1F2-1F1F6", short_names: ["flag-mq"], text: "", search: "flag,mq,regional,indicator,symbol,letters" }, ledger: { name: "Ledger", unified: "1F4D2", short_names: ["ledger"], text: "", search: "ledger,notes,paper" }, closed_book: { name: "Closed Book", unified: "1F4D5", short_names: ["closed_book"], text: "", search: "closed,book,read,library,knowledge,textbook,learn" }, six: { name: "Keycap 6", unified: "0036-20E3", variations: ["0036-FE0F-20E3"], short_names: ["six"], text: "", search: "six,keycap,6,numbers,blue-square" }, "flag-mr": { name: "Regional Indicator Symbol Letters MR", unified: "1F1F2-1F1F7", short_names: ["flag-mr"], text: "", search: "flag,mr,regional,indicator,symbol,letters" }, "blond-haired-woman": { name: "Blond Haired Woman", unified: "1F471-200D-2640-FE0F", short_names: ["blond-haired-woman"], text: "", search: "blond,haired,woman" }, thunder_cloud_and_rain: { name: "Thunder Cloud and Rain", unified: "26C8", short_names: ["thunder_cloud_and_rain"], text: "", search: "thunder,cloud,and,rain" }, "flag-mu": { name: "Regional Indicator Symbol Letters MU", unified: "1F1F2-1F1FA", short_names: ["flag-mu"], text: "", search: "flag,mu,regional,indicator,symbol,letters" }, green_book: { name: "Green Book", unified: "1F4D7", short_names: ["green_book"], text: "", search: "green,book,read,library,knowledge,study" }, person_with_blond_hair: { name: "Person with Blond Hair", unified: "1F471", short_names: ["person_with_blond_hair"], text: "", obsoleted_by: "1F471-200D-2642-FE0F", search: "person,with,blond,hair" }, seven: { name: "Keycap 7", unified: "0037-20E3", variations: ["0037-FE0F-20E3"], short_names: ["seven"], text: "", search: "seven,keycap,7,numbers,blue-square,prime" }, older_man: { name: "Older Man", unified: "1F474", short_names: ["older_man"], text: "", search: "older,man,human,male,men,old,elder,senior" }, "flag-yt": { name: "Regional Indicator Symbol Letters YT", unified: "1F1FE-1F1F9", short_names: ["flag-yt"], text: "", search: "flag,yt,regional,indicator,symbol,letters" }, blue_book: { name: "Blue Book", unified: "1F4D8", short_names: ["blue_book"], text: "", search: "blue,book,read,library,knowledge,learn,study" }, eight: { name: "Keycap 8", unified: "0038-20E3", variations: ["0038-FE0F-20E3"], short_names: ["eight"], text: "", search: "eight,keycap,8,blue-square,numbers" }, orange_book: { name: "Orange Book", unified: "1F4D9", short_names: ["orange_book"], text: "", search: "orange,book,read,library,knowledge,textbook,study" }, snowman: { name: "Snowman", unified: "2603", variations: ["2603-FE0F"], short_names: ["snowman"], text: "", search: "snowman,winter,season,cold,weather,christmas,xmas,frozen,without_snow" }, older_woman: { name: "Older Woman", unified: "1F475", short_names: ["older_woman"], text: "", search: "older,woman,human,female,women,lady,old,elder,senior" }, "flag-mx": { name: "Regional Indicator Symbol Letters MX", unified: "1F1F2-1F1FD", short_names: ["flag-mx"], text: "", search: "flag,mx,regional,indicator,symbol,letters" }, nine: { name: "Keycap 9", unified: "0039-20E3", variations: ["0039-FE0F-20E3"], short_names: ["nine"], text: "", search: "nine,keycap,9,blue-square,numbers" }, keycap_ten: { name: "Keycap Ten", unified: "1F51F", short_names: ["keycap_ten"], text: "", search: "keycap,ten,numbers,10,blue-square" }, man_with_gua_pi_mao: { name: "Man with Gua Pi Mao", unified: "1F472", short_names: ["man_with_gua_pi_mao"], text: "", search: "man,with,gua,pi,mao,male,boy,chinese" }, books: { name: "Books", unified: "1F4DA", short_names: ["books"], text: "", search: "books,literature,library,study" }, "flag-fm": { name: "Regional Indicator Symbol Letters FM", unified: "1F1EB-1F1F2", short_names: ["flag-fm"], text: "", search: "flag,fm,regional,indicator,symbol,letters" }, snowman_without_snow: { name: "Snowman Without Snow", unified: "26C4", variations: ["26C4-FE0F"], short_names: ["snowman_without_snow"], text: "", search: "snowman,without,snow" }, book: { name: "Open Book", unified: "1F4D6", short_names: ["book", "open_book"], text: "", search: "book,open" }, "woman-wearing-turban": { name: "Woman Wearing Turban", unified: "1F473-200D-2640-FE0F", short_names: ["woman-wearing-turban"], text: "", search: "woman,wearing,turban" }, "flag-md": { name: "Regional Indicator Symbol Letters MD", unified: "1F1F2-1F1E9", short_names: ["flag-md"], text: "", search: "flag,md,regional,indicator,symbol,letters" }, snowflake: { name: "Snowflake", unified: "2744", variations: ["2744-FE0F"], short_names: ["snowflake"], text: "", search: "snowflake,winter,season,cold,weather,christmas,xmas" }, bookmark: { name: "Bookmark", unified: "1F516", short_names: ["bookmark"], text: "", search: "bookmark,favorite,label,save" }, "flag-mc": { name: "Regional Indicator Symbol Letters MC", unified: "1F1F2-1F1E8", short_names: ["flag-mc"], text: "", search: "flag,mc,regional,indicator,symbol,letters" }, man_with_turban: { name: "Man with Turban", unified: "1F473", short_names: ["man_with_turban"], text: "", obsoleted_by: "1F473-200D-2642-FE0F", search: "man,with,turban,male,indian,hinduism,arabs" }, hash: { name: "Hash Key", unified: "0023-20E3", variations: ["0023-FE0F-20E3"], short_names: ["hash"], text: "", search: "hash,key,symbol,blue-square,twitter" }, "flag-mn": { name: "Regional Indicator Symbol Letters MN", unified: "1F1F2-1F1F3", short_names: ["flag-mn"], text: "", search: "flag,mn,regional,indicator,symbol,letters" }, link: { name: "Link Symbol", unified: "1F517", short_names: ["link"], text: "", search: "link,symbol,rings,url" }, keycap_star: { name: "Keycap Star", unified: "002A-20E3", variations: ["002A-FE0F-20E3"], short_names: ["keycap_star"], text: "", search: "keycap,star" }, "female-police-officer": { name: "Female Police Officer", unified: "1F46E-200D-2640-FE0F", short_names: ["female-police-officer"], text: "", search: "female,police,officer" }, dash: { name: "Dash Symbol", unified: "1F4A8", short_names: ["dash"], text: "", search: "dash,symbol,wind,air,fast,shoo,fart,smoke,puff" }, arrow_forward: { name: "Black Right-Pointing Triangle", unified: "25B6", variations: ["25B6-FE0F"], short_names: ["arrow_forward"], text: "", search: "arrow,forward,black,right,pointing,triangle,blue-square,direction,play" }, paperclip: { name: "Paperclip", unified: "1F4CE", short_names: ["paperclip"], text: "", search: "paperclip,documents,stationery" }, cop: { name: "Police Officer", unified: "1F46E", short_names: ["cop"], text: "", obsoleted_by: "1F46E-200D-2642-FE0F", search: "cop,police,officer" }, "flag-me": { name: "Regional Indicator Symbol Letters ME", unified: "1F1F2-1F1EA", short_names: ["flag-me"], text: "", search: "flag,me,regional,indicator,symbol,letters" }, "flag-ms": { name: "Regional Indicator Symbol Letters MS", unified: "1F1F2-1F1F8", short_names: ["flag-ms"], text: "", search: "flag,ms,regional,indicator,symbol,letters" }, "female-construction-worker": { name: "Female Construction Worker", unified: "1F477-200D-2640-FE0F", short_names: ["female-construction-worker"], text: "", search: "female,construction,worker" }, triangular_ruler: { name: "Triangular Ruler", unified: "1F4D0", short_names: ["triangular_ruler"], text: "", search: "triangular,ruler,stationery,math,architect,sketch" }, "flag-ma": { name: "Regional Indicator Symbol Letters MA", unified: "1F1F2-1F1E6", short_names: ["flag-ma"], text: "", search: "flag,ma,regional,indicator,symbol,letters" }, ocean: { name: "Water Wave", unified: "1F30A", short_names: ["ocean"], text: "", search: "ocean,water,wave,sea,nature,tsunami,disaster" }, construction_worker: { name: "Construction Worker", unified: "1F477", short_names: ["construction_worker"], text: "", obsoleted_by: "1F477-200D-2642-FE0F", search: "construction,worker" }, black_right_pointing_triangle_with_double_vertical_bar: { name: "Black Right-Pointing Triangle with Double Vertical Bar", unified: "23EF", short_names: ["black_right_pointing_triangle_with_double_vertical_bar"], text: "", search: "black,right,pointing,triangle,with,double,vertical,bar" }, droplet: { name: "Droplet", unified: "1F4A7", short_names: ["droplet"], text: "", search: "droplet,water,drip,faucet,spring" }, straight_ruler: { name: "Straight Ruler", unified: "1F4CF", short_names: ["straight_ruler"], text: "", search: "straight,ruler,stationery,calculate,length,math,school,drawing,architect,sketch" }, "female-guard": { name: "Female Guard", unified: "1F482-200D-2640-FE0F", short_names: ["female-guard"], text: "", search: "female,guard" }, "flag-mz": { name: "Regional Indicator Symbol Letters MZ", unified: "1F1F2-1F1FF", short_names: ["flag-mz"], text: "", search: "flag,mz,regional,indicator,symbol,letters" }, sweat_drops: { name: "Splashing Sweat Symbol", unified: "1F4A6", short_names: ["sweat_drops"], text: "", search: "sweat,drops,splashing,symbol,water,drip,oops" }, guardsman: { name: "Guardsman", unified: "1F482", short_names: ["guardsman"], text: "", obsoleted_by: "1F482-200D-2642-FE0F", search: "guardsman,uk,gb,british,male,guy,royal" }, pushpin: { name: "Pushpin", unified: "1F4CC", short_names: ["pushpin"], text: "", search: "pushpin,stationery,mark,here" }, "flag-mm": { name: "Regional Indicator Symbol Letters MM", unified: "1F1F2-1F1F2", short_names: ["flag-mm"], text: "", search: "flag,mm,regional,indicator,symbol,letters" }, eject: { name: "Eject Symbol", unified: "23CF", short_names: ["eject"], text: "", search: "eject,symbol" }, "flag-na": { name: "Regional Indicator Symbol Letters NA", unified: "1F1F3-1F1E6", short_names: ["flag-na"], text: "", search: "flag,na,regional,indicator,symbol,letters" }, umbrella_with_rain_drops: { name: "Umbrella with Rain Drops", unified: "2614", variations: ["2614-FE0F"], short_names: ["umbrella_with_rain_drops"], text: "", search: "umbrella,with,rain,drops" }, round_pushpin: { name: "Round Pushpin", unified: "1F4CD", short_names: ["round_pushpin"], text: "", search: "round,pushpin,stationery,location,map,here" }, scissors: { name: "Black Scissors", unified: "2702", variations: ["2702-FE0F"], short_names: ["scissors"], text: "", search: "scissors,black,stationery,cut" }, black_right_pointing_double_triangle_with_vertical_bar: { name: "Black Right-Pointing Double Triangle with Vertical Bar", unified: "23ED", short_names: ["black_right_pointing_double_triangle_with_vertical_bar"], text: "", search: "black,right,pointing,double,triangle,with,vertical,bar" }, "flag-nr": { name: "Regional Indicator Symbol Letters NR", unified: "1F1F3-1F1F7", short_names: ["flag-nr"], text: "", search: "flag,nr,regional,indicator,symbol,letters" }, "female-doctor": { name: "Female Doctor", unified: "1F469-200D-2695-FE0F", short_names: ["female-doctor"], text: "", search: "female,doctor" }, black_left_pointing_double_triangle_with_vertical_bar: { name: "Black Left-Pointing Double Triangle with Vertical Bar", unified: "23EE", short_names: ["black_left_pointing_double_triangle_with_vertical_bar"], text: "", search: "black,left,pointing,double,triangle,with,vertical,bar" }, "flag-np": { name: "Regional Indicator Symbol Letters NP", unified: "1F1F3-1F1F5", short_names: ["flag-np"], text: "", search: "flag,np,regional,indicator,symbol,letters" }, "flag-nl": { name: "Regional Indicator Symbol Letters NL", unified: "1F1F3-1F1F1", short_names: ["flag-nl"], text: "", search: "flag,nl,regional,indicator,symbol,letters" }, fast_forward: { name: "Black Right-Pointing Double Triangle", unified: "23E9", short_names: ["fast_forward"], text: "", search: "fast,forward,black,right,pointing,double,triangle,blue-square,play,speed,continue" }, "male-doctor": { name: "Male Doctor", unified: "1F468-200D-2695-FE0F", short_names: ["male-doctor"], text: "", search: "male,doctor" }, rewind: { name: "Black Left-Pointing Double Triangle", unified: "23EA", short_names: ["rewind"], text: "", search: "rewind,black,left,pointing,double,triangle,play,blue-square" }, "female-farmer": { name: "Female Farmer", unified: "1F469-200D-1F33E", short_names: ["female-farmer"], text: "", search: "female,farmer" }, "flag-nc": { name: "Regional Indicator Symbol Letters NC", unified: "1F1F3-1F1E8", short_names: ["flag-nc"], text: "", search: "flag,nc,regional,indicator,symbol,letters" }, black_nib: { name: "Black Nib", unified: "2712", variations: ["2712-FE0F"], short_names: ["black_nib"], text: "", search: "black,nib,pen,stationery,writing,write" }, "flag-nz": { name: "Regional Indicator Symbol Letters NZ", unified: "1F1F3-1F1FF", short_names: ["flag-nz"], text: "", search: "flag,nz,regional,indicator,symbol,letters" }, arrow_double_up: { name: "Black Up-Pointing Double Triangle", unified: "23EB", short_names: ["arrow_double_up"], text: "", search: "arrow,double,up,black,pointing,triangle,blue-square,direction,top" }, "male-farmer": { name: "Male Farmer", unified: "1F468-200D-1F33E", short_names: ["male-farmer"], text: "", search: "male,farmer" }, arrow_double_down: { name: "Black Down-Pointing Double Triangle", unified: "23EC", short_names: ["arrow_double_down"], text: "", search: "arrow,double,down,black,pointing,triangle,blue-square,direction,bottom" }, "female-cook": { name: "Female Cook", unified: "1F469-200D-1F373", short_names: ["female-cook"], text: "", search: "female,cook" }, "flag-ni": { name: "Regional Indicator Symbol Letters NI", unified: "1F1F3-1F1EE", short_names: ["flag-ni"], text: "", search: "flag,ni,regional,indicator,symbol,letters" }, memo: { name: "Memo", unified: "1F4DD", short_names: ["memo", "pencil"], text: "", search: "memo,pencil,write,documents,stationery,paper,writing,legal,exam,quiz,test,study" }, arrow_backward: { name: "Black Left-Pointing Triangle", unified: "25C0", variations: ["25C0-FE0F"], short_names: ["arrow_backward"], text: "", search: "arrow,backward,black,left,pointing,triangle,blue-square,direction" }, "flag-ne": { name: "Regional Indicator Symbol Letters NE", unified: "1F1F3-1F1EA", short_names: ["flag-ne"], text: "", search: "flag,ne,regional,indicator,symbol,letters" }, "male-cook": { name: "Male Cook", unified: "1F468-200D-1F373", short_names: ["male-cook"], text: "", search: "male,cook" }, "flag-ng": { name: "Regional Indicator Symbol Letters NG", unified: "1F1F3-1F1EC", short_names: ["flag-ng"], text: "", search: "flag,ng,regional,indicator,symbol,letters" }, "pencil2": { name: "Pencil", unified: "270F", variations: ["270F-FE0F"], short_names: ["pencil2"], text: "", search: "pencil2,pencil,stationery,write,paper,writing,school,study" }, arrow_up_small: { name: "Up-Pointing Small Red Triangle", unified: "1F53C", short_names: ["arrow_up_small"], text: "", search: "arrow,up,small,pointing,red,triangle,blue-square,direction,point,forward,top" }, "female-student": { name: "Female Student", unified: "1F469-200D-1F393", short_names: ["female-student"], text: "", search: "female,student" }, "male-student": { name: "Male Student", unified: "1F468-200D-1F393", short_names: ["male-student"], text: "", search: "male,student" }, "flag-nu": { name: "Regional Indicator Symbol Letters NU", unified: "1F1F3-1F1FA", short_names: ["flag-nu"], text: "", search: "flag,nu,regional,indicator,symbol,letters" }, mag: { name: "Left-Pointing Magnifying Glass", unified: "1F50D", short_names: ["mag"], text: "", search: "mag,left,pointing,magnifying,glass,search,zoom,find,detective" }, arrow_down_small: { name: "Down-Pointing Small Red Triangle", unified: "1F53D", short_names: ["arrow_down_small"], text: "", search: "arrow,down,small,pointing,red,triangle,blue-square,direction,bottom" }, arrow_right: { name: "Black Rightwards Arrow", unified: "27A1", variations: ["27A1-FE0F"], short_names: ["arrow_right"], text: "", search: "arrow,right,black,rightwards,blue-square,next" }, "flag-nf": { name: "Regional Indicator Symbol Letters NF", unified: "1F1F3-1F1EB", short_names: ["flag-nf"], text: "", search: "flag,nf,regional,indicator,symbol,letters" }, mag_right: { name: "Right-Pointing Magnifying Glass", unified: "1F50E", short_names: ["mag_right"], text: "", search: "mag,right,pointing,magnifying,glass,search,zoom,find,detective" }, "female-singer": { name: "Female Singer", unified: "1F469-200D-1F3A4", short_names: ["female-singer"], text: "", search: "female,singer" }, arrow_left: { name: "Leftwards Black Arrow", unified: "2B05", variations: ["2B05-FE0F"], short_names: ["arrow_left"], text: "", search: "arrow,left,leftwards,black,blue-square,previous,back" }, "flag-mp": { name: "Regional Indicator Symbol Letters MP", unified: "1F1F2-1F1F5", short_names: ["flag-mp"], text: "", search: "flag,mp,regional,indicator,symbol,letters" }, lock_with_ink_pen: { name: "Lock with Ink Pen", unified: "1F50F", short_names: ["lock_with_ink_pen"], text: "", search: "lock,with,ink,pen,security,secret" }, "male-singer": { name: "Male Singer", unified: "1F468-200D-1F3A4", short_names: ["male-singer"], text: "", search: "male,singer" }, arrow_up: { name: "Upwards Black Arrow", unified: "2B06", variations: ["2B06-FE0F"], short_names: ["arrow_up"], text: "", search: "arrow,up,upwards,black,blue-square,continue,top,direction" }, "female-teacher": { name: "Female Teacher", unified: "1F469-200D-1F3EB", short_names: ["female-teacher"], text: "", search: "female,teacher" }, "flag-kp": { name: "Regional Indicator Symbol Letters KP", unified: "1F1F0-1F1F5", short_names: ["flag-kp"], text: "", search: "flag,kp,regional,indicator,symbol,letters" }, closed_lock_with_key: { name: "Closed Lock with Key", unified: "1F510", short_names: ["closed_lock_with_key"], text: "", search: "closed,lock,with,key,security,privacy" }, arrow_down: { name: "Downwards Black Arrow", unified: "2B07", variations: ["2B07-FE0F"], short_names: ["arrow_down"], text: "", search: "arrow,down,downwards,black,blue-square,direction,bottom" }, "male-teacher": { name: "Male Teacher", unified: "1F468-200D-1F3EB", short_names: ["male-teacher"], text: "", search: "male,teacher" }, "flag-no": { name: "Regional Indicator Symbol Letters NO", unified: "1F1F3-1F1F4", short_names: ["flag-no"], text: "", search: "flag,no,regional,indicator,symbol,letters" }, lock: { name: "Lock", unified: "1F512", short_names: ["lock"], text: "", search: "lock,security,password,padlock" }, unlock: { name: "Open Lock", unified: "1F513", short_names: ["unlock"], text: "", search: "unlock,open,lock,privacy,security" }, "flag-om": { name: "Regional Indicator Symbol Letters OM", unified: "1F1F4-1F1F2", short_names: ["flag-om"], text: "", search: "flag,om,regional,indicator,symbol,letters" }, arrow_upper_right: { name: "North East Arrow", unified: "2197", variations: ["2197-FE0F"], short_names: ["arrow_upper_right"], text: "", search: "arrow,upper,right,north,east,blue-square,point,direction,diagonal,northeast" }, "female-factory-worker": { name: "Female Factory Worker", unified: "1F469-200D-1F3ED", short_names: ["female-factory-worker"], text: "", search: "female,factory,worker" }, "male-factory-worker": { name: "Male Factory Worker", unified: "1F468-200D-1F3ED", short_names: ["male-factory-worker"], text: "", search: "male,factory,worker" }, "flag-pk": { name: "Regional Indicator Symbol Letters PK", unified: "1F1F5-1F1F0", short_names: ["flag-pk"], text: "", search: "flag,pk,regional,indicator,symbol,letters" }, arrow_lower_right: { name: "South East Arrow", unified: "2198", variations: ["2198-FE0F"], short_names: ["arrow_lower_right"], text: "", search: "arrow,lower,right,south,east,blue-square,direction,diagonal,southeast" }, "flag-pw": { name: "Regional Indicator Symbol Letters PW", unified: "1F1F5-1F1FC", short_names: ["flag-pw"], text: "", search: "flag,pw,regional,indicator,symbol,letters" }, "female-technologist": { name: "Female Technologist", unified: "1F469-200D-1F4BB", short_names: ["female-technologist"], text: "", search: "female,technologist" }, arrow_lower_left: { name: "South West Arrow", unified: "2199", variations: ["2199-FE0F"], short_names: ["arrow_lower_left"], text: "", search: "arrow,lower,left,south,west,blue-square,direction,diagonal,southwest" }, arrow_upper_left: { name: "North West Arrow", unified: "2196", variations: ["2196-FE0F"], short_names: ["arrow_upper_left"], text: "", search: "arrow,upper,left,north,west,blue-square,point,direction,diagonal,northwest" }, "flag-ps": { name: "Regional Indicator Symbol Letters PS", unified: "1F1F5-1F1F8", short_names: ["flag-ps"], text: "", search: "flag,ps,regional,indicator,symbol,letters" }, "male-technologist": { name: "Male Technologist", unified: "1F468-200D-1F4BB", short_names: ["male-technologist"], text: "", search: "male,technologist" }, "flag-pa": { name: "Regional Indicator Symbol Letters PA", unified: "1F1F5-1F1E6", short_names: ["flag-pa"], text: "", search: "flag,pa,regional,indicator,symbol,letters" }, "female-office-worker": { name: "Female Office Worker", unified: "1F469-200D-1F4BC", short_names: ["female-office-worker"], text: "", search: "female,office,worker" }, arrow_up_down: { name: "Up Down Arrow", unified: "2195", variations: ["2195-FE0F"], short_names: ["arrow_up_down"], text: "", search: "arrow,up,down,blue-square,direction,way,vertical" }, "male-office-worker": { name: "Male Office Worker", unified: "1F468-200D-1F4BC", short_names: ["male-office-worker"], text: "", search: "male,office,worker" }, "flag-pg": { name: "Regional Indicator Symbol Letters PG", unified: "1F1F5-1F1EC", short_names: ["flag-pg"], text: "", search: "flag,pg,regional,indicator,symbol,letters" }, left_right_arrow: { name: "Left Right Arrow", unified: "2194", variations: ["2194-FE0F"], short_names: ["left_right_arrow"], text: "", search: "left,right,arrow,shape,direction,horizontal,sideways" }, "flag-py": { name: "Regional Indicator Symbol Letters PY", unified: "1F1F5-1F1FE", short_names: ["flag-py"], text: "", search: "flag,py,regional,indicator,symbol,letters" }, arrow_right_hook: { name: "Rightwards Arrow with Hook", unified: "21AA", variations: ["21AA-FE0F"], short_names: ["arrow_right_hook"], text: "", search: "arrow,right,hook,rightwards,with,blue-square,return,rotate,direction" }, "female-mechanic": { name: "Female Mechanic", unified: "1F469-200D-1F527", short_names: ["female-mechanic"], text: "", search: "female,mechanic" }, "flag-pe": { name: "Regional Indicator Symbol Letters PE", unified: "1F1F5-1F1EA", short_names: ["flag-pe"], text: "", search: "flag,pe,regional,indicator,symbol,letters" }, "male-mechanic": { name: "Male Mechanic", unified: "1F468-200D-1F527", short_names: ["male-mechanic"], text: "", search: "male,mechanic" }, leftwards_arrow_with_hook: { name: "Leftwards Arrow with Hook", unified: "21A9", variations: ["21A9-FE0F"], short_names: ["leftwards_arrow_with_hook"], text: "", search: "leftwards,arrow,with,hook,back,return,blue-square,undo,enter" }, "female-scientist": { name: "Female Scientist", unified: "1F469-200D-1F52C", short_names: ["female-scientist"], text: "", search: "female,scientist" }, arrow_heading_up: { name: "Arrow Pointing Rightwards Then Curving Upwards", unified: "2934", variations: ["2934-FE0F"], short_names: ["arrow_heading_up"], text: "", search: "arrow,heading,up,pointing,rightwards,then,curving,upwards,blue-square,direction,top" }, "flag-ph": { name: "Regional Indicator Symbol Letters PH", unified: "1F1F5-1F1ED", short_names: ["flag-ph"], text: "", search: "flag,ph,regional,indicator,symbol,letters" }, "flag-pn": { name: "Regional Indicator Symbol Letters PN", unified: "1F1F5-1F1F3", short_names: ["flag-pn"], text: "", search: "flag,pn,regional,indicator,symbol,letters" }, arrow_heading_down: { name: "Arrow Pointing Rightwards Then Curving Downwards", unified: "2935", variations: ["2935-FE0F"], short_names: ["arrow_heading_down"], text: "", search: "arrow,heading,down,pointing,rightwards,then,curving,downwards,blue-square,direction,bottom" }, "male-scientist": { name: "Male Scientist", unified: "1F468-200D-1F52C", short_names: ["male-scientist"], text: "", search: "male,scientist" }, "flag-pl": { name: "Regional Indicator Symbol Letters PL", unified: "1F1F5-1F1F1", short_names: ["flag-pl"], text: "", search: "flag,pl,regional,indicator,symbol,letters" }, twisted_rightwards_arrows: { name: "Twisted Rightwards Arrows", unified: "1F500", short_names: ["twisted_rightwards_arrows"], text: "", search: "twisted,rightwards,arrows,blue-square,shuffle,music,random" }, "female-artist": { name: "Female Artist", unified: "1F469-200D-1F3A8", short_names: ["female-artist"], text: "", search: "female,artist" }, repeat: { name: "Clockwise Rightwards and Leftwards Open Circle Arrows", unified: "1F501", short_names: ["repeat"], text: "", search: "repeat,clockwise,rightwards,and,leftwards,open,circle,arrows,loop,record" }, "male-artist": { name: "Male Artist", unified: "1F468-200D-1F3A8", short_names: ["male-artist"], text: "", search: "male,artist" }, "flag-pt": { name: "Regional Indicator Symbol Letters PT", unified: "1F1F5-1F1F9", short_names: ["flag-pt"], text: "", search: "flag,pt,regional,indicator,symbol,letters" }, "flag-pr": { name: "Regional Indicator Symbol Letters PR", unified: "1F1F5-1F1F7", short_names: ["flag-pr"], text: "", search: "flag,pr,regional,indicator,symbol,letters" }, repeat_one: { name: "Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay", unified: "1F502", short_names: ["repeat_one"], text: "", search: "repeat,one,clockwise,rightwards,and,leftwards,open,circle,arrows,with,circled,overlay,blue-square,loop" }, "female-firefighter": { name: "Female Firefighter", unified: "1F469-200D-1F692", short_names: ["female-firefighter"], text: "", search: "female,firefighter" }, "male-firefighter": { name: "Male Firefighter", unified: "1F468-200D-1F692", short_names: ["male-firefighter"], text: "", search: "male,firefighter" }, "flag-qa": { name: "Regional Indicator Symbol Letters QA", unified: "1F1F6-1F1E6", short_names: ["flag-qa"], text: "", search: "flag,qa,regional,indicator,symbol,letters" }, arrows_counterclockwise: { name: "Anticlockwise Downwards and Upwards Open Circle Arrows", unified: "1F504", short_names: ["arrows_counterclockwise"], text: "", search: "arrows,counterclockwise,anticlockwise,downwards,and,upwards,open,circle,blue-square,sync,cycle" }, arrows_clockwise: { name: "Clockwise Downwards and Upwards Open Circle Arrows", unified: "1F503", short_names: ["arrows_clockwise"], text: "", search: "arrows,clockwise,downwards,and,upwards,open,circle,sync,cycle,round,repeat" }, "female-pilot": { name: "Female Pilot", unified: "1F469-200D-2708-FE0F", short_names: ["female-pilot"], text: "", search: "female,pilot" }, "flag-re": { name: "Regional Indicator Symbol Letters RE", unified: "1F1F7-1F1EA", short_names: ["flag-re"], text: "", search: "flag,re,regional,indicator,symbol,letters" }, musical_note: { name: "Musical Note", unified: "1F3B5", short_names: ["musical_note"], text: "", search: "musical,note,score,tone,sound" }, "male-pilot": { name: "Male Pilot", unified: "1F468-200D-2708-FE0F", short_names: ["male-pilot"], text: "", search: "male,pilot" }, "flag-ro": { name: "Regional Indicator Symbol Letters RO", unified: "1F1F7-1F1F4", short_names: ["flag-ro"], text: "", search: "flag,ro,regional,indicator,symbol,letters" }, notes: { name: "Multiple Musical Notes", unified: "1F3B6", short_names: ["notes"], text: "", search: "notes,multiple,musical,music,score" }, "female-astronaut": { name: "Female Astronaut", unified: "1F469-200D-1F680", short_names: ["female-astronaut"], text: "", search: "female,astronaut" }, "flag-ru": { name: "Regional Indicator Symbol Letters RU", unified: "1F1F7-1F1FA", short_names: ["flag-ru", "ru"], text: "", search: "flag,ru,regional,indicator,symbol,letters" }, heavy_plus_sign: { name: "Heavy Plus Sign", unified: "2795", short_names: ["heavy_plus_sign"], text: "", search: "heavy,plus,sign,math,calculation,addition,more,increase" }, "flag-rw": { name: "Regional Indicator Symbol Letters RW", unified: "1F1F7-1F1FC", short_names: ["flag-rw"], text: "", search: "flag,rw,regional,indicator,symbol,letters" }, "male-astronaut": { name: "Male Astronaut", unified: "1F468-200D-1F680", short_names: ["male-astronaut"], text: "", search: "male,astronaut" }, heavy_minus_sign: { name: "Heavy Minus Sign", unified: "2796", short_names: ["heavy_minus_sign"], text: "", search: "heavy,minus,sign,math,calculation,subtract,less" }, "female-judge": { name: "Female Judge", unified: "1F469-200D-2696-FE0F", short_names: ["female-judge"], text: "", search: "female,judge" }, "flag-bl": { name: "Regional Indicator Symbol Letters BL", unified: "1F1E7-1F1F1", short_names: ["flag-bl"], text: "", search: "flag,bl,regional,indicator,symbol,letters" }, "flag-sh": { name: "Regional Indicator Symbol Letters SH", unified: "1F1F8-1F1ED", short_names: ["flag-sh"], text: "", search: "flag,sh,regional,indicator,symbol,letters" }, heavy_division_sign: { name: "Heavy Division Sign", unified: "2797", short_names: ["heavy_division_sign"], text: "", search: "heavy,division,sign,divide,math,calculation" }, "male-judge": { name: "Male Judge", unified: "1F468-200D-2696-FE0F", short_names: ["male-judge"], text: "", search: "male,judge" }, heavy_multiplication_x: { name: "Heavy Multiplication X", unified: "2716", variations: ["2716-FE0F"], short_names: ["heavy_multiplication_x"], text: "", search: "heavy,multiplication,x,math,calculation" }, "flag-kn": { name: "Regional Indicator Symbol Letters KN", unified: "1F1F0-1F1F3", short_names: ["flag-kn"], text: "", search: "flag,kn,regional,indicator,symbol,letters" }, heavy_dollar_sign: { name: "Heavy Dollar Sign", unified: "1F4B2", short_names: ["heavy_dollar_sign"], text: "", search: "heavy,dollar,sign,money,sales,payment,currency,buck" }, "flag-lc": { name: "Regional Indicator Symbol Letters LC", unified: "1F1F1-1F1E8", short_names: ["flag-lc"], text: "", search: "flag,lc,regional,indicator,symbol,letters" }, santa: { name: "Father Christmas", unified: "1F385", short_names: ["santa"], text: "", search: "santa,father,christmas,festival,man,male,xmas,father christmas" }, currency_exchange: { name: "Currency Exchange", unified: "1F4B1", short_names: ["currency_exchange"], text: "", search: "currency,exchange,money,sales,dollar,travel" }, princess: { name: "Princess", unified: "1F478", short_names: ["princess"], text: "", search: "princess,girl,woman,female,blond,crown,royal,queen" }, "flag-pm": { name: "Regional Indicator Symbol Letters PM", unified: "1F1F5-1F1F2", short_names: ["flag-pm"], text: "", search: "flag,pm,regional,indicator,symbol,letters" }, "flag-vc": { name: "Regional Indicator Symbol Letters VC", unified: "1F1FB-1F1E8", short_names: ["flag-vc"], text: "", search: "flag,vc,regional,indicator,symbol,letters" }, tm: { name: "Trade Mark Sign", unified: "2122", variations: ["2122-FE0F"], short_names: ["tm"], text: "", search: "tm,trade,mark,sign,trademark,brand,law,legal" }, "flag-ws": { name: "Regional Indicator Symbol Letters WS", unified: "1F1FC-1F1F8", short_names: ["flag-ws"], text: "", search: "flag,ws,regional,indicator,symbol,letters" }, copyright: { name: "Copyright Sign", unified: "00A9", variations: ["00A9-FE0F"], short_names: ["copyright"], text: "", search: "copyright,sign,ip,license,circle,law,legal" }, bride_with_veil: { name: "Bride with Veil", unified: "1F470", short_names: ["bride_with_veil"], text: "", search: "bride,with,veil,couple,marriage,wedding,woman" }, registered: { name: "Registered Sign", unified: "00AE", variations: ["00AE-FE0F"], short_names: ["registered"], text: "", search: "registered,sign,alphabet,circle" }, "flag-sm": { name: "Regional Indicator Symbol Letters SM", unified: "1F1F8-1F1F2", short_names: ["flag-sm"], text: "", search: "flag,sm,regional,indicator,symbol,letters" }, angel: { name: "Baby Angel", unified: "1F47C", short_names: ["angel"], text: "", search: "angel,baby,heaven,wings,halo" }, wavy_dash: { name: "Wavy Dash", unified: "3030", variations: ["3030-FE0F"], short_names: ["wavy_dash"], text: "", search: "wavy,dash,draw,line,moustache,mustache,squiggle,scribble" }, "flag-st": { name: "Regional Indicator Symbol Letters ST", unified: "1F1F8-1F1F9", short_names: ["flag-st"], text: "", search: "flag,st,regional,indicator,symbol,letters" }, curly_loop: { name: "Curly Loop", unified: "27B0", short_names: ["curly_loop"], text: "", search: "curly,loop,scribble,draw,shape,squiggle" }, "flag-sa": { name: "Regional Indicator Symbol Letters SA", unified: "1F1F8-1F1E6", short_names: ["flag-sa"], text: "", search: "flag,sa,regional,indicator,symbol,letters" }, loop: { name: "Double Curly Loop", unified: "27BF", short_names: ["loop"], text: "", search: "loop,double,curly,tape,cassette" }, "woman-bowing": { name: "Woman Bowing", unified: "1F647-200D-2640-FE0F", short_names: ["woman-bowing"], text: "", search: "woman,bowing" }, "flag-sn": { name: "Regional Indicator Symbol Letters SN", unified: "1F1F8-1F1F3", short_names: ["flag-sn"], text: "", search: "flag,sn,regional,indicator,symbol,letters" }, "flag-rs": { name: "Regional Indicator Symbol Letters RS", unified: "1F1F7-1F1F8", short_names: ["flag-rs"], text: "", search: "flag,rs,regional,indicator,symbol,letters" }, bow: { name: "Person Bowing Deeply", unified: "1F647", short_names: ["bow"], text: "", obsoleted_by: "1F647-200D-2642-FE0F", search: "bow,person,bowing,deeply" }, end: { name: "End with Leftwards Arrow Above", unified: "1F51A", short_names: ["end"], text: "", search: "end,with,leftwards,arrow,above,words" }, back: { name: "Back with Leftwards Arrow Above", unified: "1F519", short_names: ["back"], text: "", search: "back,with,leftwards,arrow,above,words,return" }, information_desk_person: { name: "Information Desk Person", unified: "1F481", short_names: ["information_desk_person"], text: "", obsoleted_by: "1F481-200D-2640-FE0F", search: "information,desk,person" }, "flag-sc": { name: "Regional Indicator Symbol Letters SC", unified: "1F1F8-1F1E8", short_names: ["flag-sc"], text: "", search: "flag,sc,regional,indicator,symbol,letters" }, on: { name: "On with Exclamation Mark with Left Right Arrow Above", unified: "1F51B", short_names: ["on"], text: "", search: "on,with,exclamation,mark,left,right,arrow,above,words" }, "man-tipping-hand": { name: "Man Tipping Hand", unified: "1F481-200D-2642-FE0F", short_names: ["man-tipping-hand"], text: "", search: "man,tipping,hand" }, "flag-sl": { name: "Regional Indicator Symbol Letters SL", unified: "1F1F8-1F1F1", short_names: ["flag-sl"], text: "", search: "flag,sl,regional,indicator,symbol,letters" }, "flag-sg": { name: "Regional Indicator Symbol Letters SG", unified: "1F1F8-1F1EC", short_names: ["flag-sg"], text: "", search: "flag,sg,regional,indicator,symbol,letters" }, no_good: { name: "Face with No Good Gesture", unified: "1F645", short_names: ["no_good"], text: "", obsoleted_by: "1F645-200D-2640-FE0F", search: "no,good,face,with,gesture" }, top: { name: "Top with Upwards Arrow Above", unified: "1F51D", short_names: ["top"], text: "", search: "top,with,upwards,arrow,above,words,blue-square" }, "flag-sx": { name: "Regional Indicator Symbol Letters SX", unified: "1F1F8-1F1FD", short_names: ["flag-sx"], text: "", search: "flag,sx,regional,indicator,symbol,letters" }, soon: { name: "Soon with Rightwards Arrow Above", unified: "1F51C", short_names: ["soon"], text: "", search: "soon,with,rightwards,arrow,above,words" }, "man-gesturing-no": { name: "Man Gesturing No", unified: "1F645-200D-2642-FE0F", short_names: ["man-gesturing-no"], text: "", search: "man,gesturing,no" }, "flag-sk": { name: "Regional Indicator Symbol Letters SK", unified: "1F1F8-1F1F0", short_names: ["flag-sk"], text: "", search: "flag,sk,regional,indicator,symbol,letters" }, heavy_check_mark: { name: "Heavy Check Mark", unified: "2714", variations: ["2714-FE0F"], short_names: ["heavy_check_mark"], text: "", search: "heavy,check,mark,ok,nike,answer,yes,tick" }, ok_woman: { name: "Face with Ok Gesture", unified: "1F646", short_names: ["ok_woman"], text: "", obsoleted_by: "1F646-200D-2640-FE0F", search: "ok,woman,face,with,gesture,women,girl,female,pink,human" }, "man-gesturing-ok": { name: "Man Gesturing Ok", unified: "1F646-200D-2642-FE0F", short_names: ["man-gesturing-ok"], text: "", search: "man,gesturing,ok" }, "flag-si": { name: "Regional Indicator Symbol Letters SI", unified: "1F1F8-1F1EE", short_names: ["flag-si"], text: "", search: "flag,si,regional,indicator,symbol,letters" }, ballot_box_with_check: { name: "Ballot Box with Check", unified: "2611", variations: ["2611-FE0F"], short_names: ["ballot_box_with_check"], text: "", search: "ballot,box,with,check,ok,agree,confirm,black-square,vote,election,yes" }, "flag-sb": { name: "Regional Indicator Symbol Letters SB", unified: "1F1F8-1F1E7", short_names: ["flag-sb"], text: "", search: "flag,sb,regional,indicator,symbol,letters" }, radio_button: { name: "Radio Button", unified: "1F518", short_names: ["radio_button"], text: "", search: "radio,button,input,old,music,circle" }, raising_hand: { name: "Happy Person Raising One Hand", unified: "1F64B", short_names: ["raising_hand"], text: "", obsoleted_by: "1F64B-200D-2640-FE0F", search: "raising,hand,happy,person,one" }, white_circle: { name: "Medium White Circle", unified: "26AA", variations: ["26AA-FE0F"], short_names: ["white_circle"], text: "", search: "white,circle,medium,shape,round" }, "man-raising-hand": { name: "Man Raising Hand", unified: "1F64B-200D-2642-FE0F", short_names: ["man-raising-hand"], text: "", search: "man,raising,hand" }, "flag-so": { name: "Regional Indicator Symbol Letters SO", unified: "1F1F8-1F1F4", short_names: ["flag-so"], text: "", search: "flag,so,regional,indicator,symbol,letters" }, black_circle: { name: "Medium Black Circle", unified: "26AB", variations: ["26AB-FE0F"], short_names: ["black_circle"], text: "", search: "black,circle,medium,shape,button,round" }, "flag-za": { name: "Regional Indicator Symbol Letters ZA", unified: "1F1FF-1F1E6", short_names: ["flag-za"], text: "", search: "flag,za,regional,indicator,symbol,letters" }, red_circle: { name: "Large Red Circle", unified: "1F534", short_names: ["red_circle"], text: "", search: "red,circle,large,shape,error,danger" }, "flag-gs": { name: "Regional Indicator Symbol Letters GS", unified: "1F1EC-1F1F8", short_names: ["flag-gs"], text: "", search: "flag,gs,regional,indicator,symbol,letters" }, large_blue_circle: { name: "Large Blue Circle", unified: "1F535", short_names: ["large_blue_circle"], text: "", search: "large,blue,circle,shape,icon,button" }, "flag-kr": { name: "Regional Indicator Symbol Letters KR", unified: "1F1F0-1F1F7", short_names: ["flag-kr", "kr"], text: "", search: "flag,kr,regional,indicator,symbol,letters" }, small_red_triangle: { name: "Up-Pointing Red Triangle", unified: "1F53A", short_names: ["small_red_triangle"], text: "", search: "small,red,triangle,up,pointing,shape,direction,top" }, "flag-ss": { name: "Regional Indicator Symbol Letters SS", unified: "1F1F8-1F1F8", short_names: ["flag-ss"], text: "", search: "flag,ss,regional,indicator,symbol,letters" }, small_red_triangle_down: { name: "Down-Pointing Red Triangle", unified: "1F53B", short_names: ["small_red_triangle_down"], text: "", search: "small,red,triangle,down,pointing,shape,direction,bottom" }, "flag-es": { name: "Regional Indicator Symbol Letters ES", unified: "1F1EA-1F1F8", short_names: ["flag-es", "es"], text: "", search: "flag,es,regional,indicator,symbol,letters" }, small_orange_diamond: { name: "Small Orange Diamond", unified: "1F538", short_names: ["small_orange_diamond"], text: "", search: "small,orange,diamond,shape,jewel,gem" }, "flag-lk": { name: "Regional Indicator Symbol Letters LK", unified: "1F1F1-1F1F0", short_names: ["flag-lk"], text: "", search: "flag,lk,regional,indicator,symbol,letters" }, small_blue_diamond: { name: "Small Blue Diamond", unified: "1F539", short_names: ["small_blue_diamond"], text: "", search: "small,blue,diamond,shape,jewel,gem" }, person_with_pouting_face: { name: "Person with Pouting Face", unified: "1F64E", short_names: ["person_with_pouting_face"], text: "", obsoleted_by: "1F64E-200D-2640-FE0F", search: "person,with,pouting,face" }, "flag-sd": { name: "Regional Indicator Symbol Letters SD", unified: "1F1F8-1F1E9", short_names: ["flag-sd"], text: "", search: "flag,sd,regional,indicator,symbol,letters" }, "man-pouting": { name: "Man Pouting", unified: "1F64E-200D-2642-FE0F", short_names: ["man-pouting"], text: "", search: "man,pouting" }, large_orange_diamond: { name: "Large Orange Diamond", unified: "1F536", short_names: ["large_orange_diamond"], text: "", search: "large,orange,diamond,shape,jewel,gem" }, "flag-sr": { name: "Regional Indicator Symbol Letters SR", unified: "1F1F8-1F1F7", short_names: ["flag-sr"], text: "", search: "flag,sr,regional,indicator,symbol,letters" }, "flag-sz": { name: "Regional Indicator Symbol Letters SZ", unified: "1F1F8-1F1FF", short_names: ["flag-sz"], text: "", search: "flag,sz,regional,indicator,symbol,letters" }, large_blue_diamond: { name: "Large Blue Diamond", unified: "1F537", short_names: ["large_blue_diamond"], text: "", search: "large,blue,diamond,shape,jewel,gem" }, person_frowning: { name: "Person Frowning", unified: "1F64D", short_names: ["person_frowning"], text: "", obsoleted_by: "1F64D-200D-2640-FE0F", search: "person,frowning" }, "man-frowning": { name: "Man Frowning", unified: "1F64D-200D-2642-FE0F", short_names: ["man-frowning"], text: "", search: "man,frowning" }, "flag-se": { name: "Regional Indicator Symbol Letters SE", unified: "1F1F8-1F1EA", short_names: ["flag-se"], text: "", search: "flag,se,regional,indicator,symbol,letters" }, white_square_button: { name: "White Square Button", unified: "1F533", short_names: ["white_square_button"], text: "", search: "white,square,button,shape,input" }, "flag-ch": { name: "Regional Indicator Symbol Letters CH", unified: "1F1E8-1F1ED", short_names: ["flag-ch"], text: "", search: "flag,ch,regional,indicator,symbol,letters" }, haircut: { name: "Haircut", unified: "1F487", short_names: ["haircut"], text: "", obsoleted_by: "1F487-200D-2640-FE0F", search: "haircut" }, black_square_button: { name: "Black Square Button", unified: "1F532", short_names: ["black_square_button"], text: "", search: "black,square,button,shape,input,frame" }, "man-getting-haircut": { name: "Man Getting Haircut", unified: "1F487-200D-2642-FE0F", short_names: ["man-getting-haircut"], text: "", search: "man,getting,haircut" }, black_small_square: { name: "Black Small Square", unified: "25AA", variations: ["25AA-FE0F"], short_names: ["black_small_square"], text: "", search: "black,small,square,shape,icon" }, "flag-sy": { name: "Regional Indicator Symbol Letters SY", unified: "1F1F8-1F1FE", short_names: ["flag-sy"], text: "", search: "flag,sy,regional,indicator,symbol,letters" }, "flag-tw": { name: "Regional Indicator Symbol Letters TW", unified: "1F1F9-1F1FC", short_names: ["flag-tw"], text: "", search: "flag,tw,regional,indicator,symbol,letters" }, massage: { name: "Face Massage", unified: "1F486", short_names: ["massage"], text: "", obsoleted_by: "1F486-200D-2640-FE0F", search: "massage,face" }, white_small_square: { name: "White Small Square", unified: "25AB", variations: ["25AB-FE0F"], short_names: ["white_small_square"], text: "", search: "white,small,square,shape,icon" }, black_medium_small_square: { name: "Black Medium Small Square", unified: "25FE", variations: ["25FE-FE0F"], short_names: ["black_medium_small_square"], text: "", search: "black,medium,small,square,icon,shape,button" }, "man-getting-massage": { name: "Man Getting Massage", unified: "1F486-200D-2642-FE0F", short_names: ["man-getting-massage"], text: "", search: "man,getting,massage" }, "flag-tj": { name: "Regional Indicator Symbol Letters TJ", unified: "1F1F9-1F1EF", short_names: ["flag-tj"], text: "", search: "flag,tj,regional,indicator,symbol,letters" }, "flag-tz": { name: "Regional Indicator Symbol Letters TZ", unified: "1F1F9-1F1FF", short_names: ["flag-tz"], text: "", search: "flag,tz,regional,indicator,symbol,letters" }, white_medium_small_square: { name: "White Medium Small Square", unified: "25FD", variations: ["25FD-FE0F"], short_names: ["white_medium_small_square"], text: "", search: "white,medium,small,square,shape,stone,icon,button" }, dancer: { name: "Dancer", unified: "1F483", short_names: ["dancer"], text: "", search: "dancer,female,girl,woman,fun" }, black_medium_square: { name: "Black Medium Square", unified: "25FC", variations: ["25FC-FE0F"], short_names: ["black_medium_square"], text: "", search: "black,medium,square,shape,button,icon" }, "flag-th": { name: "Regional Indicator Symbol Letters TH", unified: "1F1F9-1F1ED", short_names: ["flag-th"], text: "", search: "flag,th,regional,indicator,symbol,letters" }, "flag-tl": { name: "Regional Indicator Symbol Letters TL", unified: "1F1F9-1F1F1", short_names: ["flag-tl"], text: "", search: "flag,tl,regional,indicator,symbol,letters" }, white_medium_square: { name: "White Medium Square", unified: "25FB", variations: ["25FB-FE0F"], short_names: ["white_medium_square"], text: "", search: "white,medium,square,shape,stone,icon" }, "flag-tg": { name: "Regional Indicator Symbol Letters TG", unified: "1F1F9-1F1EC", short_names: ["flag-tg"], text: "", search: "flag,tg,regional,indicator,symbol,letters" }, black_large_square: { name: "Black Large Square", unified: "2B1B", variations: ["2B1B-FE0F"], short_names: ["black_large_square"], text: "", search: "black,large,square,shape,icon,button" }, dancers: { name: "Woman with Bunny Ears", unified: "1F46F", short_names: ["dancers"], text: "", obsoleted_by: "1F46F-200D-2640-FE0F", search: "dancers,woman,with,bunny,ears" }, "man-with-bunny-ears-partying": { name: "Man with Bunny Ears Partying", unified: "1F46F-200D-2642-FE0F", short_names: ["man-with-bunny-ears-partying"], text: "", search: "man,with,bunny,ears,partying" }, "flag-tk": { name: "Regional Indicator Symbol Letters TK", unified: "1F1F9-1F1F0", short_names: ["flag-tk"], text: "", search: "flag,tk,regional,indicator,symbol,letters" }, white_large_square: { name: "White Large Square", unified: "2B1C", variations: ["2B1C-FE0F"], short_names: ["white_large_square"], text: "", search: "white,large,square,shape,icon,stone,button" }, speaker: { name: "Speaker", unified: "1F508", short_names: ["speaker"], text: "", search: "speaker,sound,volume,silence,broadcast" }, "woman-walking": { name: "Woman Walking", unified: "1F6B6-200D-2640-FE0F", short_names: ["woman-walking"], text: "", search: "woman,walking" }, "flag-to": { name: "Regional Indicator Symbol Letters TO", unified: "1F1F9-1F1F4", short_names: ["flag-to"], text: "", search: "flag,to,regional,indicator,symbol,letters" }, mute: { name: "Speaker with Cancellation Stroke", unified: "1F507", short_names: ["mute"], text: "", search: "mute,speaker,with,cancellation,stroke,sound,volume,silence,quiet" }, walking: { name: "Pedestrian", unified: "1F6B6", short_names: ["walking"], text: "", obsoleted_by: "1F6B6-200D-2642-FE0F", search: "walking,pedestrian" }, "flag-tt": { name: "Regional Indicator Symbol Letters TT", unified: "1F1F9-1F1F9", short_names: ["flag-tt"], text: "", search: "flag,tt,regional,indicator,symbol,letters" }, "flag-tn": { name: "Regional Indicator Symbol Letters TN", unified: "1F1F9-1F1F3", short_names: ["flag-tn"], text: "", search: "flag,tn,regional,indicator,symbol,letters" }, "woman-running": { name: "Woman Running", unified: "1F3C3-200D-2640-FE0F", short_names: ["woman-running"], text: "", search: "woman,running" }, sound: { name: "Speaker with One Sound Wave", unified: "1F509", short_names: ["sound"], text: "", search: "sound,speaker,with,one,wave,volume,broadcast" }, runner: { name: "Runner", unified: "1F3C3", short_names: ["runner", "running"], text: "", obsoleted_by: "1F3C3-200D-2642-FE0F", search: "runner,running" }, "flag-tr": { name: "Regional Indicator Symbol Letters TR", unified: "1F1F9-1F1F7", short_names: ["flag-tr"], text: "", search: "flag,tr,regional,indicator,symbol,letters" }, loud_sound: { name: "Speaker with Three Sound Waves", unified: "1F50A", short_names: ["loud_sound"], text: "", search: "loud,sound,speaker,with,three,waves,volume,noise,noisy,broadcast" }, "flag-tm": { name: "Regional Indicator Symbol Letters TM", unified: "1F1F9-1F1F2", short_names: ["flag-tm"], text: "", search: "flag,tm,regional,indicator,symbol,letters" }, couple: { name: "Man and Woman Holding Hands", unified: "1F46B", short_names: ["couple", "man_and_woman_holding_hands"], text: "", search: "couple,man,and,woman,holding,hands,pair,people,human,love,date,dating,like,affection,valentines,marriage" }, bell: { name: "Bell", unified: "1F514", short_names: ["bell"], text: "", search: "bell,sound,notification,christmas,xmas,chime" }, no_bell: { name: "Bell with Cancellation Stroke", unified: "1F515", short_names: ["no_bell"], text: "", search: "no,bell,with,cancellation,stroke,sound,volume,mute,quiet,silent" }, two_women_holding_hands: { name: "Two Women Holding Hands", unified: "1F46D", short_names: ["two_women_holding_hands"], text: "", search: "two,women,holding,hands,pair,friendship,couple,love,like,female,people,human" }, "flag-tc": { name: "Regional Indicator Symbol Letters TC", unified: "1F1F9-1F1E8", short_names: ["flag-tc"], text: "", search: "flag,tc,regional,indicator,symbol,letters" }, "flag-tv": { name: "Regional Indicator Symbol Letters TV", unified: "1F1F9-1F1FB", short_names: ["flag-tv"], text: "", search: "flag,tv,regional,indicator,symbol,letters" }, two_men_holding_hands: { name: "Two Men Holding Hands", unified: "1F46C", short_names: ["two_men_holding_hands"], text: "", search: "two,men,holding,hands,pair,couple,love,like,bromance,friendship,people,human" }, mega: { name: "Cheering Megaphone", unified: "1F4E3", short_names: ["mega"], text: "", search: "mega,cheering,megaphone,sound,speaker,volume" }, "flag-ug": { name: "Regional Indicator Symbol Letters UG", unified: "1F1FA-1F1EC", short_names: ["flag-ug"], text: "", search: "flag,ug,regional,indicator,symbol,letters" }, loudspeaker: { name: "Public Address Loudspeaker", unified: "1F4E2", short_names: ["loudspeaker"], text: "", search: "loudspeaker,public,address,volume,sound" }, couple_with_heart: { name: "Couple with Heart", unified: "1F491", short_names: ["couple_with_heart"], text: "", obsoleted_by: "1F469-200D-2764-FE0F-200D-1F468", search: "couple,with,heart" }, "woman-heart-woman": { name: "Woman Heart Woman", unified: "1F469-200D-2764-FE0F-200D-1F469", short_names: ["woman-heart-woman"], text: "", search: "woman,heart" }, "flag-ua": { name: "Regional Indicator Symbol Letters UA", unified: "1F1FA-1F1E6", short_names: ["flag-ua"], text: "", search: "flag,ua,regional,indicator,symbol,letters" }, "man-heart-man": { name: "Man Heart Man", unified: "1F468-200D-2764-FE0F-200D-1F468", short_names: ["man-heart-man"], text: "", search: "man,heart" }, "flag-ae": { name: "Regional Indicator Symbol Letters AE", unified: "1F1E6-1F1EA", short_names: ["flag-ae"], text: "", search: "flag,ae,regional,indicator,symbol,letters" }, speech_balloon: { name: "Speech Balloon", unified: "1F4AC", short_names: ["speech_balloon"], text: "", search: "speech,balloon,bubble,words,message,talk,chatting" }, "flag-gb": { name: "Regional Indicator Symbol Letters GB", unified: "1F1EC-1F1E7", short_names: ["flag-gb", "gb", "uk"], text: "", search: "flag,gb,uk,regional,indicator,symbol,letters" }, couplekiss: { name: "Kiss", unified: "1F48F", short_names: ["couplekiss"], text: "", obsoleted_by: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468", search: "couplekiss,kiss" }, "flag-us": { name: "Regional Indicator Symbol Letters US", unified: "1F1FA-1F1F8", short_names: ["flag-us", "us"], text: "", search: "flag,us,regional,indicator,symbol,letters" }, thought_balloon: { name: "Thought Balloon", unified: "1F4AD", short_names: ["thought_balloon"], text: "", search: "thought,balloon,bubble,cloud,speech,thinking" }, "woman-kiss-woman": { name: "Woman Kiss Woman", unified: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F469", short_names: ["woman-kiss-woman"], text: "", search: "woman,kiss" }, "man-kiss-man": { name: "Man Kiss Man", unified: "1F468-200D-2764-FE0F-200D-1F48B-200D-1F468", short_names: ["man-kiss-man"], text: "", search: "man,kiss" }, "flag-vi": { name: "Regional Indicator Symbol Letters VI", unified: "1F1FB-1F1EE", short_names: ["flag-vi"], text: "", search: "flag,vi,regional,indicator,symbol,letters" }, "flag-uy": { name: "Regional Indicator Symbol Letters UY", unified: "1F1FA-1F1FE", short_names: ["flag-uy"], text: "", search: "flag,uy,regional,indicator,symbol,letters" }, family: { name: "Family", unified: "1F46A", short_names: ["family", "man-woman-boy"], text: "", obsoleted_by: "1F468-200D-1F469-200D-1F466", search: "family,man,woman,boy" }, spades: { name: "Black Spade Suit", unified: "2660", variations: ["2660-FE0F"], short_names: ["spades"], text: "", search: "spades,black,spade,suit,poker,cards,suits,magic" }, "man-woman-girl": { name: "Man Woman Girl", unified: "1F468-200D-1F469-200D-1F467", short_names: ["man-woman-girl"], text: "", search: "man,woman,girl" }, clubs: { name: "Black Club Suit", unified: "2663", variations: ["2663-FE0F"], short_names: ["clubs"], text: "", search: "clubs,black,club,suit,poker,cards,magic,suits" }, "flag-uz": { name: "Regional Indicator Symbol Letters UZ", unified: "1F1FA-1F1FF", short_names: ["flag-uz"], text: "", search: "flag,uz,regional,indicator,symbol,letters" }, "man-woman-girl-boy": { name: "Man Woman Girl Boy", unified: "1F468-200D-1F469-200D-1F467-200D-1F466", short_names: ["man-woman-girl-boy"], text: "", search: "man,woman,girl,boy" }, "flag-vu": { name: "Regional Indicator Symbol Letters VU", unified: "1F1FB-1F1FA", short_names: ["flag-vu"], text: "", search: "flag,vu,regional,indicator,symbol,letters" }, hearts: { name: "Black Heart Suit", unified: "2665", variations: ["2665-FE0F"], short_names: ["hearts"], text: "", search: "hearts,black,heart,suit,poker,cards,magic,suits" }, "flag-va": { name: "Regional Indicator Symbol Letters VA", unified: "1F1FB-1F1E6", short_names: ["flag-va"], text: "", search: "flag,va,regional,indicator,symbol,letters" }, "man-woman-boy-boy": { name: "Man Woman Boy Boy", unified: "1F468-200D-1F469-200D-1F466-200D-1F466", short_names: ["man-woman-boy-boy"], text: "", search: "man,woman,boy" }, diamonds: { name: "Black Diamond Suit", unified: "2666", variations: ["2666-FE0F"], short_names: ["diamonds"], text: "", search: "diamonds,black,diamond,suit,poker,cards,magic,suits" }, "man-woman-girl-girl": { name: "Man Woman Girl Girl", unified: "1F468-200D-1F469-200D-1F467-200D-1F467", short_names: ["man-woman-girl-girl"], text: "", search: "man,woman,girl" }, black_joker: { name: "Playing Card Black Joker", unified: "1F0CF", short_names: ["black_joker"], text: "", search: "black,joker,playing,card,poker,cards,game,play,magic" }, "flag-ve": { name: "Regional Indicator Symbol Letters VE", unified: "1F1FB-1F1EA", short_names: ["flag-ve"], text: "", search: "flag,ve,regional,indicator,symbol,letters" }, "woman-woman-boy": { name: "Woman Woman Boy", unified: "1F469-200D-1F469-200D-1F466", short_names: ["woman-woman-boy"], text: "", search: "woman,boy" }, flower_playing_cards: { name: "Flower Playing Cards", unified: "1F3B4", short_names: ["flower_playing_cards"], text: "", search: "flower,playing,cards,game,sunset,red" }, "flag-vn": { name: "Regional Indicator Symbol Letters VN", unified: "1F1FB-1F1F3", short_names: ["flag-vn"], text: "", search: "flag,vn,regional,indicator,symbol,letters" }, "woman-woman-girl": { name: "Woman Woman Girl", unified: "1F469-200D-1F469-200D-1F467", short_names: ["woman-woman-girl"], text: "", search: "woman,girl" }, "flag-wf": { name: "Regional Indicator Symbol Letters WF", unified: "1F1FC-1F1EB", short_names: ["flag-wf"], text: "", search: "flag,wf,regional,indicator,symbol,letters" }, mahjong: { name: "Mahjong Tile Red Dragon", unified: "1F004", variations: ["1F004-FE0F"], short_names: ["mahjong"], text: "", search: "mahjong,tile,red,dragon,game,play,chinese,kanji" }, "woman-woman-girl-boy": { name: "Woman Woman Girl Boy", unified: "1F469-200D-1F469-200D-1F467-200D-1F466", short_names: ["woman-woman-girl-boy"], text: "", search: "woman,girl,boy" }, "flag-eh": { name: "Regional Indicator Symbol Letters EH", unified: "1F1EA-1F1ED", short_names: ["flag-eh"], text: "", search: "flag,eh,regional,indicator,symbol,letters" }, "clock1": { name: "Clock Face One Oclock", unified: "1F550", short_names: ["clock1"], text: "", search: "clock1,clock,face,one,oclock,time,late,early,schedule" }, "woman-woman-boy-boy": { name: "Woman Woman Boy Boy", unified: "1F469-200D-1F469-200D-1F466-200D-1F466", short_names: ["woman-woman-boy-boy"], text: "", search: "woman,boy" }, "clock2": { name: "Clock Face Two Oclock", unified: "1F551", short_names: ["clock2"], text: "", search: "clock2,clock,face,two,oclock,time,late,early,schedule" }, "flag-ye": { name: "Regional Indicator Symbol Letters YE", unified: "1F1FE-1F1EA", short_names: ["flag-ye"], text: "", search: "flag,ye,regional,indicator,symbol,letters" }, "clock3": { name: "Clock Face Three Oclock", unified: "1F552", short_names: ["clock3"], text: "", search: "clock3,clock,face,three,oclock,time,late,early,schedule" }, "woman-woman-girl-girl": { name: "Woman Woman Girl Girl", unified: "1F469-200D-1F469-200D-1F467-200D-1F467", short_names: ["woman-woman-girl-girl"], text: "", search: "woman,girl" }, "flag-zm": { name: "Regional Indicator Symbol Letters ZM", unified: "1F1FF-1F1F2", short_names: ["flag-zm"], text: "", search: "flag,zm,regional,indicator,symbol,letters" }, "clock4": { name: "Clock Face Four Oclock", unified: "1F553", short_names: ["clock4"], text: "", search: "clock4,clock,face,four,oclock,time,late,early,schedule" }, "man-man-boy": { name: "Man Man Boy", unified: "1F468-200D-1F468-200D-1F466", short_names: ["man-man-boy"], text: "", search: "man,boy" }, "flag-zw": { name: "Regional Indicator Symbol Letters ZW", unified: "1F1FF-1F1FC", short_names: ["flag-zw"], text: "", search: "flag,zw,regional,indicator,symbol,letters" }, "clock5": { name: "Clock Face Five Oclock", unified: "1F554", short_names: ["clock5"], text: "", search: "clock5,clock,face,five,oclock,time,late,early,schedule" }, "flag-ac": { name: "Regional Indicator Symbol Letters AC", unified: "1F1E6-1F1E8", short_names: ["flag-ac"], text: "", search: "flag,ac,regional,indicator,symbol,letters" }, "man-man-girl": { name: "Man Man Girl", unified: "1F468-200D-1F468-200D-1F467", short_names: ["man-man-girl"], text: "", search: "man,girl" }, "flag-bv": { name: "Regional Indicator Symbol Letters BV", unified: "1F1E7-1F1FB", short_names: ["flag-bv"], text: "", search: "flag,bv,regional,indicator,symbol,letters" }, "clock6": { name: "Clock Face Six Oclock", unified: "1F555", short_names: ["clock6"], text: "", search: "clock6,clock,face,six,oclock,time,late,early,schedule,dawn,dusk" }, "man-man-girl-boy": { name: "Man Man Girl Boy", unified: "1F468-200D-1F468-200D-1F467-200D-1F466", short_names: ["man-man-girl-boy"], text: "", search: "man,girl,boy" }, "clock7": { name: "Clock Face Seven Oclock", unified: "1F556", short_names: ["clock7"], text: "", search: "clock7,clock,face,seven,oclock,time,late,early,schedule" }, "flag-cp": { name: "Regional Indicator Symbol Letters CP", unified: "1F1E8-1F1F5", short_names: ["flag-cp"], text: "", search: "flag,cp,regional,indicator,symbol,letters" }, "man-man-boy-boy": { name: "Man Man Boy Boy", unified: "1F468-200D-1F468-200D-1F466-200D-1F466", short_names: ["man-man-boy-boy"], text: "", search: "man,boy" }, "flag-dg": { name: "Regional Indicator Symbol Letters DG", unified: "1F1E9-1F1EC", short_names: ["flag-dg"], text: "", search: "flag,dg,regional,indicator,symbol,letters" }, "clock8": { name: "Clock Face Eight Oclock", unified: "1F557", short_names: ["clock8"], text: "", search: "clock8,clock,face,eight,oclock,time,late,early,schedule" }, "man-man-girl-girl": { name: "Man Man Girl Girl", unified: "1F468-200D-1F468-200D-1F467-200D-1F467", short_names: ["man-man-girl-girl"], text: "", search: "man,girl" }, "woman-boy": { name: "Woman Boy", unified: "1F469-200D-1F466", short_names: ["woman-boy"], text: "", search: "woman,boy" }, "flag-ea": { name: "Regional Indicator Symbol Letters EA", unified: "1F1EA-1F1E6", short_names: ["flag-ea"], text: "", search: "flag,ea,regional,indicator,symbol,letters" }, "clock9": { name: "Clock Face Nine Oclock", unified: "1F558", short_names: ["clock9"], text: "", search: "clock9,clock,face,nine,oclock,time,late,early,schedule" }, "woman-girl": { name: "Woman Girl", unified: "1F469-200D-1F467", short_names: ["woman-girl"], text: "", search: "woman,girl" }, "clock10": { name: "Clock Face Ten Oclock", unified: "1F559", short_names: ["clock10"], text: "", search: "clock10,clock,face,ten,oclock,time,late,early,schedule" }, "flag-hm": { name: "Regional Indicator Symbol Letters HM", unified: "1F1ED-1F1F2", short_names: ["flag-hm"], text: "", search: "flag,hm,regional,indicator,symbol,letters" }, "clock11": { name: "Clock Face Eleven Oclock", unified: "1F55A", short_names: ["clock11"], text: "", search: "clock11,clock,face,eleven,oclock,time,late,early,schedule" }, "woman-girl-boy": { name: "Woman Girl Boy", unified: "1F469-200D-1F467-200D-1F466", short_names: ["woman-girl-boy"], text: "", search: "woman,girl,boy" }, "flag-mf": { name: "Regional Indicator Symbol Letters MF", unified: "1F1F2-1F1EB", short_names: ["flag-mf"], text: "", search: "flag,mf,regional,indicator,symbol,letters" }, "woman-boy-boy": { name: "Woman Boy Boy", unified: "1F469-200D-1F466-200D-1F466", short_names: ["woman-boy-boy"], text: "", search: "woman,boy" }, "flag-sj": { name: "Regional Indicator Symbol Letters SJ", unified: "1F1F8-1F1EF", short_names: ["flag-sj"], text: "", search: "flag,sj,regional,indicator,symbol,letters" }, "clock12": { name: "Clock Face Twelve Oclock", unified: "1F55B", short_names: ["clock12"], text: "", search: "clock12,clock,face,twelve,oclock,time,noon,midnight,midday,late,early,schedule" }, "clock130": { name: "Clock Face One-Thirty", unified: "1F55C", short_names: ["clock130"], text: "", search: "clock130,clock,face,one,thirty,time,late,early,schedule" }, "flag-ta": { name: "Regional Indicator Symbol Letters TA", unified: "1F1F9-1F1E6", short_names: ["flag-ta"], text: "", search: "flag,ta,regional,indicator,symbol,letters" }, "woman-girl-girl": { name: "Woman Girl Girl", unified: "1F469-200D-1F467-200D-1F467", short_names: ["woman-girl-girl"], text: "", search: "woman,girl" }, "flag-um": { name: "Regional Indicator Symbol Letters UM", unified: "1F1FA-1F1F2", short_names: ["flag-um"], text: "", search: "flag,um,regional,indicator,symbol,letters" }, "man-boy": { name: "Man Boy", unified: "1F468-200D-1F466", short_names: ["man-boy"], text: "", search: "man,boy" }, "clock230": { name: "Clock Face Two-Thirty", unified: "1F55D", short_names: ["clock230"], text: "", search: "clock230,clock,face,two,thirty,time,late,early,schedule" }, "clock330": { name: "Clock Face Three-Thirty", unified: "1F55E", short_names: ["clock330"], text: "", search: "clock330,clock,face,three,thirty,time,late,early,schedule" }, "man-girl": { name: "Man Girl", unified: "1F468-200D-1F467", short_names: ["man-girl"], text: "", search: "man,girl" }, "flag-un": { name: "Regional Indicator Symbol Letters UN", unified: "1F1FA-1F1F3", short_names: ["flag-un"], text: "", search: "flag,un,regional,indicator,symbol,letters" }, "man-girl-boy": { name: "Man Girl Boy", unified: "1F468-200D-1F467-200D-1F466", short_names: ["man-girl-boy"], text: "", search: "man,girl,boy" }, "clock430": { name: "Clock Face Four-Thirty", unified: "1F55F", short_names: ["clock430"], text: "", search: "clock430,clock,face,four,thirty,time,late,early,schedule" }, "clock530": { name: "Clock Face Five-Thirty", unified: "1F560", short_names: ["clock530"], text: "", search: "clock530,clock,face,five,thirty,time,late,early,schedule" }, "man-boy-boy": { name: "Man Boy Boy", unified: "1F468-200D-1F466-200D-1F466", short_names: ["man-boy-boy"], text: "", search: "man,boy" }, "clock630": { name: "Clock Face Six-Thirty", unified: "1F561", short_names: ["clock630"], text: "", search: "clock630,clock,face,six,thirty,time,late,early,schedule" }, "man-girl-girl": { name: "Man Girl Girl", unified: "1F468-200D-1F467-200D-1F467", short_names: ["man-girl-girl"], text: "", search: "man,girl" }, womans_clothes: { name: "Womans Clothes", unified: "1F45A", short_names: ["womans_clothes"], text: "", search: "womans,clothes,fashion,shopping_bags,female" }, "clock730": { name: "Clock Face Seven-Thirty", unified: "1F562", short_names: ["clock730"], text: "", search: "clock730,clock,face,seven,thirty,time,late,early,schedule" }, shirt: { name: "T-Shirt", unified: "1F455", short_names: ["shirt", "tshirt"], text: "", search: "shirt,tshirt,t" }, "clock830": { name: "Clock Face Eight-Thirty", unified: "1F563", short_names: ["clock830"], text: "", search: "clock830,clock,face,eight,thirty,time,late,early,schedule" }, jeans: { name: "Jeans", unified: "1F456", short_names: ["jeans"], text: "", search: "jeans,fashion,shopping" }, "clock930": { name: "Clock Face Nine-Thirty", unified: "1F564", short_names: ["clock930"], text: "", search: "clock930,clock,face,nine,thirty,time,late,early,schedule" }, "clock1030": { name: "Clock Face Ten-Thirty", unified: "1F565", short_names: ["clock1030"], text: "", search: "clock1030,clock,face,ten,thirty,time,late,early,schedule" }, necktie: { name: "Necktie", unified: "1F454", short_names: ["necktie"], text: "", search: "necktie,shirt,suitup,formal,fashion,cloth,business" }, dress: { name: "Dress", unified: "1F457", short_names: ["dress"], text: "", search: "dress,clothes,fashion,shopping" }, "clock1130": { name: "Clock Face Eleven-Thirty", unified: "1F566", short_names: ["clock1130"], text: "", search: "clock1130,clock,face,eleven,thirty,time,late,early,schedule" }, "clock1230": { name: "Clock Face Twelve-Thirty", unified: "1F567", short_names: ["clock1230"], text: "", search: "clock1230,clock,face,twelve,thirty,time,late,early,schedule" }, bikini: { name: "Bikini", unified: "1F459", short_names: ["bikini"], text: "", search: "bikini,swimming,female,woman,girl,fashion,beach,summer" }, kimono: { name: "Kimono", unified: "1F458", short_names: ["kimono"], text: "", search: "kimono,dress,fashion,women,female,japanese" }, female_sign: { name: "Female Sign", unified: "2640", short_names: ["female_sign"], text: "", search: "female,sign" }, high_heel: { name: "High-Heeled Shoe", unified: "1F460", short_names: ["high_heel"], text: "", search: "high,heel,heeled,shoe,fashion,shoes,female,pumps,stiletto" }, male_sign: { name: "Male Sign", unified: "2642", short_names: ["male_sign"], text: "", search: "male,sign" }, staff_of_aesculapius: { name: "Staff of Aesculapius", unified: "2695", short_names: ["staff_of_aesculapius"], text: "", search: "staff,of,aesculapius" }, sandal: { name: "Womans Sandal", unified: "1F461", short_names: ["sandal"], text: "", search: "sandal,womans,shoes,fashion,flip flops" }, boot: { name: "Womans Boots", unified: "1F462", short_names: ["boot"], text: "", search: "boot,womans,boots,shoes,fashion" }, mans_shoe: { name: "Mans Shoe", unified: "1F45E", short_names: ["mans_shoe", "shoe"], text: "", search: "mans,shoe,fashion,male" }, athletic_shoe: { name: "Athletic Shoe", unified: "1F45F", short_names: ["athletic_shoe"], text: "", search: "athletic,shoe,shoes,sports,sneakers" }, womans_hat: { name: "Womans Hat", unified: "1F452", short_names: ["womans_hat"], text: "", search: "womans,hat,fashion,accessories,female,lady,spring" }, tophat: { name: "Top Hat", unified: "1F3A9", short_names: ["tophat"], text: "", search: "tophat,top,hat,magic,gentleman,classy,circus" }, mortar_board: { name: "Graduation Cap", unified: "1F393", short_names: ["mortar_board"], text: "", search: "mortar,board,graduation,cap,school,college,degree,university,hat,legal,learn,education" }, crown: { name: "Crown", unified: "1F451", short_names: ["crown"], text: "", search: "crown,king,kod,leader,royalty,lord" }, helmet_with_white_cross: { name: "Helmet with White Cross", unified: "26D1", short_names: ["helmet_with_white_cross"], text: "", search: "helmet,with,white,cross" }, school_satchel: { name: "School Satchel", unified: "1F392", short_names: ["school_satchel"], text: "", search: "school,satchel,student,education,bag,backpack" }, pouch: { name: "Pouch", unified: "1F45D", short_names: ["pouch"], text: "", search: "pouch,bag,accessories,shopping" }, purse: { name: "Purse", unified: "1F45B", short_names: ["purse"], text: "", search: "purse,fashion,accessories,money,sales,shopping" }, handbag: { name: "Handbag", unified: "1F45C", short_names: ["handbag"], text: "", search: "handbag,fashion,accessory,accessories,shopping" }, briefcase: { name: "Briefcase", unified: "1F4BC", short_names: ["briefcase"], text: "", search: "briefcase,business,documents,work,law,legal" }, eyeglasses: { name: "Eyeglasses", unified: "1F453", short_names: ["eyeglasses"], text: "", search: "eyeglasses,fashion,accessories,eyesight,nerdy,dork,geek" }, closed_umbrella: { name: "Closed Umbrella", unified: "1F302", short_names: ["closed_umbrella"], text: "", search: "closed,umbrella,weather,rain,drizzle" }, umbrella: { name: "Umbrella", unified: "2602", variations: ["2602-FE0F"], short_names: ["umbrella"], text: "", search: "umbrella,rainy,weather,spring" }, "man-woman-boy": { name: "Man Woman Boy", unified: "1F468-200D-1F469-200D-1F466", short_names: ["man-woman-boy", "family"], text: "", obsoletes: "1F46A", search: "man,woman,boy,family" }, "woman-heart-man": { name: "Woman Heart Man", unified: "1F469-200D-2764-FE0F-200D-1F468", short_names: ["woman-heart-man"], text: "", obsoletes: "1F491", search: "woman,heart,man" }, "woman-kiss-man": { name: "Woman Kiss Man", unified: "1F469-200D-2764-FE0F-200D-1F48B-200D-1F468", short_names: ["woman-kiss-man"], text: "", obsoletes: "1F48F", search: "woman,kiss,man" }, "male-police-officer": { name: "Male Police Officer", unified: "1F46E-200D-2642-FE0F", short_names: ["male-police-officer"], text: "", obsoletes: "1F46E", search: "male,police,officer" }, "blond-haired-man": { name: "Blond Haired Man", unified: "1F471-200D-2642-FE0F", short_names: ["blond-haired-man"], text: "", obsoletes: "1F471", search: "blond,haired,man" }, "man-wearing-turban": { name: "Man Wearing Turban", unified: "1F473-200D-2642-FE0F", short_names: ["man-wearing-turban"], text: "", obsoletes: "1F473", search: "man,wearing,turban" }, "male-construction-worker": { name: "Male Construction Worker", unified: "1F477-200D-2642-FE0F", short_names: ["male-construction-worker"], text: "", obsoletes: "1F477", search: "male,construction,worker" }, "male-guard": { name: "Male Guard", unified: "1F482-200D-2642-FE0F", short_names: ["male-guard"], text: "", obsoletes: "1F482", search: "male,guard" }, "woman-with-bunny-ears-partying": { name: "Woman with Bunny Ears Partying", unified: "1F46F-200D-2640-FE0F", short_names: ["woman-with-bunny-ears-partying"], text: "", obsoletes: "1F46F", search: "woman,with,bunny,ears,partying" }, "man-running": { name: "Man Running", unified: "1F3C3-200D-2642-FE0F", short_names: ["man-running"], text: "", obsoletes: "1F3C3", search: "man,running" }, "woman-getting-massage": { name: "Woman Getting Massage", unified: "1F486-200D-2640-FE0F", short_names: ["woman-getting-massage"], text: "", obsoletes: "1F486", search: "woman,getting,massage" }, "woman-getting-haircut": { name: "Woman Getting Haircut", unified: "1F487-200D-2640-FE0F", short_names: ["woman-getting-haircut"], text: "", obsoletes: "1F487", search: "woman,getting,haircut" }, "man-walking": { name: "Man Walking", unified: "1F6B6-200D-2642-FE0F", short_names: ["man-walking"], text: "", obsoletes: "1F6B6", search: "man,walking" }, "woman-tipping-hand": { name: "Woman Tipping Hand", unified: "1F481-200D-2640-FE0F", short_names: ["woman-tipping-hand"], text: "", obsoletes: "1F481", search: "woman,tipping,hand" }, "woman-gesturing-no": { name: "Woman Gesturing No", unified: "1F645-200D-2640-FE0F", short_names: ["woman-gesturing-no"], text: "", obsoletes: "1F645", search: "woman,gesturing,no" }, "woman-gesturing-ok": { name: "Woman Gesturing Ok", unified: "1F646-200D-2640-FE0F", short_names: ["woman-gesturing-ok"], text: "", obsoletes: "1F646", search: "woman,gesturing,ok" }, "man-bowing": { name: "Man Bowing", unified: "1F647-200D-2642-FE0F", short_names: ["man-bowing"], text: "", obsoletes: "1F647", search: "man,bowing" }, "woman-raising-hand": { name: "Woman Raising Hand", unified: "1F64B-200D-2640-FE0F", short_names: ["woman-raising-hand"], text: "", obsoletes: "1F64B", search: "woman,raising,hand" }, "woman-frowning": { name: "Woman Frowning", unified: "1F64D-200D-2640-FE0F", short_names: ["woman-frowning"], text: "", obsoletes: "1F64D", search: "woman,frowning" }, "woman-pouting": { name: "Woman Pouting", unified: "1F64E-200D-2640-FE0F", short_names: ["woman-pouting"], text: "", obsoletes: "1F64E", search: "woman,pouting" } }, skins: {}, short_names: { red_car: "car", satisfied: "laughing", telephone: "phone", cooking: "fried_egg", honeybee: "bee", sailboat: "boat", cn: "flag-cn", flipper: "dolphin", knife: "hocho", poop: "hankey", shit: "hankey", fr: "flag-fr", heavy_exclamation_mark: "exclamation", paw_prints: "feet", de: "flag-de", thumbsup: "+1", thumbsdown: "-1", punch: "facepunch", lantern: "izakaya_lantern", envelope: "email", it: "flag-it", jp: "flag-jp", raised_hand: "hand", waxing_gibbous_moon: "moon", collision: "boom", open_book: "book", pencil: "memo", ru: "flag-ru", kr: "flag-kr", es: "flag-es", running: "runner", man_and_woman_holding_hands: "couple", gb: "flag-gb", uk: "flag-gb", us: "flag-us", "man-woman-boy": "family", tshirt: "shirt", shoe: "mans_shoe", family: "man-woman-boy" } };

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.unifiedToNative = exports.deepMerge = exports.intersect = exports.getSanitizedData = exports.getData = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _buildSearch = __webpack_require__(22);

	var _buildSearch2 = _interopRequireDefault(_buildSearch);

	var _data = __webpack_require__(20);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
	var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

	function unifiedToNative(unified) {
	  var unicodes = unified.split('-'),
	      codePoints = unicodes.map(function (u) {
	    return '0x' + u;
	  });

	  return String.fromCodePoint.apply(String, _toConsumableArray(codePoints));
	}

	function sanitize(emoji) {
	  var name = emoji.name;
	  var short_names = emoji.short_names;
	  var skin_tone = emoji.skin_tone;
	  var skin_variations = emoji.skin_variations;
	  var emoticons = emoji.emoticons;
	  var unified = emoji.unified;
	  var custom = emoji.custom;
	  var imageUrl = emoji.imageUrl;
	  var id = emoji.id || short_names[0];
	  var colons = ':' + id + ':';

	  if (custom) {
	    return {
	      id: id,
	      name: name,
	      colons: colons,
	      emoticons: emoticons,
	      custom: custom,
	      imageUrl: imageUrl
	    };
	  }

	  if (skin_tone) {
	    colons += ':skin-tone-' + skin_tone + ':';
	  }

	  return {
	    id: id,
	    name: name,
	    colons: colons,
	    emoticons: emoticons,
	    unified: unified.toLowerCase(),
	    skin: skin_tone || (skin_variations ? 1 : null),
	    native: unifiedToNative(unified)
	  };
	}

	function getSanitizedData() {
	  return sanitize(getData.apply(undefined, arguments));
	}

	function getData(emoji, skin, set) {
	  var emojiData = {};

	  if (typeof emoji == 'string') {
	    var matches = emoji.match(COLONS_REGEX);

	    if (matches) {
	      emoji = matches[1];

	      if (matches[2]) {
	        skin = parseInt(matches[2]);
	      }
	    }

	    if (_data2.default.short_names.hasOwnProperty(emoji)) {
	      emoji = _data2.default.short_names[emoji];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji)) {
	      emojiData = _data2.default.emojis[emoji];
	    }
	  } else if (emoji.custom) {
	    emojiData = emoji;

	    emojiData.search = (0, _buildSearch2.default)({
	      short_names: emoji.short_names,
	      name: emoji.name,
	      keywords: emoji.keywords,
	      emoticons: emoji.emoticons
	    });

	    emojiData.search = emojiData.search.join(',');
	  } else if (emoji.id) {
	    if (_data2.default.short_names.hasOwnProperty(emoji.id)) {
	      emoji.id = _data2.default.short_names[emoji.id];
	    }

	    if (_data2.default.emojis.hasOwnProperty(emoji.id)) {
	      emojiData = _data2.default.emojis[emoji.id];
	      skin || (skin = emoji.skin);
	    }
	  }

	  emojiData.emoticons || (emojiData.emoticons = []);
	  emojiData.variations || (emojiData.variations = []);

	  if (emojiData.skin_variations && skin > 1 && set) {
	    emojiData = JSON.parse(JSON.stringify(emojiData));

	    var skinKey = SKINS[skin - 1],
	        variationData = emojiData.skin_variations[skinKey];

	    if (!variationData.variations && emojiData.variations) {
	      delete emojiData.variations;
	    }

	    if (variationData['has_img_' + set]) {
	      emojiData.skin_tone = skin;

	      for (var k in variationData) {
	        var v = variationData[k];
	        emojiData[k] = v;
	      }
	    }
	  }

	  if (emojiData.variations && emojiData.variations.length) {
	    emojiData = JSON.parse(JSON.stringify(emojiData));
	    emojiData.unified = emojiData.variations.shift();
	  }

	  return emojiData;
	}

	function intersect(a, b) {
	  var aSet = new Set(a),
	      bSet = new Set(b),
	      intersection = null;

	  intersection = new Set([].concat(_toConsumableArray(aSet)).filter(function (x) {
	    return bSet.has(x);
	  }));

	  return Array.from(intersection);
	}

	function deepMerge(a, b) {
	  var o = {};

	  for (var key in a) {
	    var originalValue = a[key],
	        value = originalValue;

	    if (b.hasOwnProperty(key)) {
	      value = b[key];
	    }

	    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
	      value = deepMerge(originalValue, value);
	    }

	    o[key] = value;
	  }

	  return o;
	}

	exports.getData = getData;
	exports.getSanitizedData = getSanitizedData;
	exports.intersect = intersect;
	exports.deepMerge = deepMerge;
	exports.unifiedToNative = unifiedToNative;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (data) {
	  var search = [];

	  var addToSearch = function addToSearch(strings, split) {
	    if (!strings) {
	      return;
	    }

	    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
	      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
	        s = s.toLowerCase();

	        if (search.indexOf(s) == -1) {
	          search.push(s);
	        }
	      });
	    });
	  };

	  addToSearch(data.short_names, true);
	  addToSearch(data.name, true);
	  addToSearch(data.keywords, false);
	  addToSearch(data.emoticons, false);

	  return search;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(24);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _measureScrollbar = __webpack_require__(25);

	var _measureScrollbar2 = _interopRequireDefault(_measureScrollbar);

	var _data = __webpack_require__(20);

	var _data2 = _interopRequireDefault(_data);

	var _store = __webpack_require__(18);

	var _store2 = _interopRequireDefault(_store);

	var _frequently = __webpack_require__(17);

	var _frequently2 = _interopRequireDefault(_frequently);

	var _utils = __webpack_require__(21);

	var _ = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RECENT_CATEGORY = { name: 'Recent', emojis: null };
	var SEARCH_CATEGORY = { name: 'Search', emojis: null, anchor: false };
	var CUSTOM_CATEGORY = { name: 'Custom', emojis: [] };

	var I18N = {
	  search: 'Search',
	  notfound: 'No Emoji Found',
	  categories: {
	    search: 'Search Results',
	    recent: 'Frequently Used',
	    people: 'Smileys & People',
	    nature: 'Animals & Nature',
	    foods: 'Food & Drink',
	    activity: 'Activity',
	    places: 'Travel & Places',
	    objects: 'Objects',
	    symbols: 'Symbols',
	    flags: 'Flags',
	    custom: 'Custom'
	  }
	};

	var Picker = function (_React$Component) {
	  _inherits(Picker, _React$Component);

	  function Picker(props) {
	    _classCallCheck(this, Picker);

	    var _this = _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).call(this, props));

	    _this.i18n = (0, _utils.deepMerge)(I18N, props.i18n);
	    _this.state = {
	      skin: _store2.default.get('skin') || props.skin,
	      firstRender: true
	    };

	    _this.categories = [];
	    var allCategories = [].concat(_data2.default.categories);

	    if (props.custom.length > 0) {
	      CUSTOM_CATEGORY.emojis = props.custom.map(function (emoji) {
	        return _extends({}, emoji, {
	          // `<Category />` expects emoji to have an `id`.
	          id: emoji.short_names[0],
	          custom: true
	        });
	      });

	      allCategories.push(CUSTOM_CATEGORY);
	    }

	    _this.hideRecent = true;

	    if (props.include != undefined) {
	      _data2.default.categories.sort(function (a, b) {
	        var aName = a.name.toLowerCase();
	        var bName = b.name.toLowerCase();

	        if (props.include.indexOf(aName) > props.include.indexOf(bName)) {
	          return 1;
	        }

	        return 0;
	      });
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = allCategories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var category = _step.value;

	        var isIncluded = props.include && props.include.length ? props.include.indexOf(category.name.toLowerCase()) > -1 : true;
	        var isExcluded = props.exclude && props.exclude.length ? props.exclude.indexOf(category.name.toLowerCase()) > -1 : false;
	        if (!isIncluded || isExcluded) {
	          continue;
	        }

	        if (props.emojisToShowFilter) {
	          var newEmojis = [];

	          var _iteratorNormalCompletion2 = true;
	          var _didIteratorError2 = false;
	          var _iteratorError2 = undefined;

	          try {
	            for (var _iterator2 = category.emojis[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	              var emoji = _step2.value;

	              if (props.emojisToShowFilter(_data2.default.emojis[emoji] || emoji)) {
	                newEmojis.push(emoji);
	              }
	            }
	          } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	              }
	            } finally {
	              if (_didIteratorError2) {
	                throw _iteratorError2;
	              }
	            }
	          }

	          if (newEmojis.length) {
	            var newCategory = {
	              emojis: newEmojis,
	              name: category.name
	            };

	            _this.categories.push(newCategory);
	          }
	        } else {
	          _this.categories.push(category);
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }

	    var includeRecent = props.include && props.include.length ? props.include.indexOf('recent') > -1 : true;
	    var excludeRecent = props.exclude && props.exclude.length ? props.exclude.indexOf('recent') > -1 : false;
	    if (includeRecent && !excludeRecent) {
	      _this.hideRecent = false;
	      _this.categories.unshift(RECENT_CATEGORY);
	    }

	    if (_this.categories[0]) {
	      _this.categories[0].first = true;
	    }

	    _this.categories.unshift(SEARCH_CATEGORY);
	    return _this;
	  }

	  _createClass(Picker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(props) {
	      if (props.skin && !_store2.default.get('skin')) {
	        this.setState({ skin: props.skin });
	      }
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      if (this.state.firstRender) {
	        this.testStickyPosition();
	        this.firstRenderTimeout = setTimeout(function () {
	          _this2.setState({ firstRender: false });
	        }, 60);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.updateCategoriesSize();
	      this.handleScroll();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      SEARCH_CATEGORY.emojis = null;

	      clearTimeout(this.leaveTimeout);
	      clearTimeout(this.firstRenderTimeout);
	    }
	  }, {
	    key: 'testStickyPosition',
	    value: function testStickyPosition() {
	      var stickyTestElement = document.createElement('div');
	      var _arr = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
	      for (var _i = 0; _i < _arr.length; _i++) {
	        var prefix = _arr[_i];
	        stickyTestElement.style.position = prefix + 'sticky';
	      }

	      this.hasStickyPosition = !!stickyTestElement.style.position.length;
	    }
	  }, {
	    key: 'handleEmojiOver',
	    value: function handleEmojiOver(emoji) {
	      var preview = this.refs.preview;
	      // Use Array.prototype.find() when it is more widely supported.

	      var emojiData = CUSTOM_CATEGORY.emojis.filter(function (customEmoji) {
	        return customEmoji.id === emoji.id;
	      })[0];
	      preview.setState({ emoji: Object.assign(emoji, emojiData) });
	      clearTimeout(this.leaveTimeout);
	    }
	  }, {
	    key: 'handleEmojiLeave',
	    value: function handleEmojiLeave(emoji) {
	      var _this3 = this;

	      this.leaveTimeout = setTimeout(function () {
	        var preview = _this3.refs.preview;

	        preview.setState({ emoji: null });
	      }, 16);
	    }
	  }, {
	    key: 'handleEmojiClick',
	    value: function handleEmojiClick(emoji, e) {
	      var _this4 = this;

	      this.props.onClick(emoji, e);
	      if (!this.hideRecent) _frequently2.default.add(emoji);

	      var component = this.refs['category-1'];
	      if (component) {
	        var maxMargin = component.maxMargin;
	        component.forceUpdate();

	        window.requestAnimationFrame(function () {
	          component.memoizeSize();
	          if (maxMargin == component.maxMargin) return;

	          _this4.updateCategoriesSize();
	          _this4.handleScrollPaint();

	          if (SEARCH_CATEGORY.emojis) {
	            component.updateDisplay('none');
	          }
	        });
	      }
	    }
	  }, {
	    key: 'handleScroll',
	    value: function handleScroll() {
	      if (!this.waitingForPaint) {
	        this.waitingForPaint = true;
	        window.requestAnimationFrame(this.handleScrollPaint.bind(this));
	      }
	    }
	  }, {
	    key: 'handleScrollPaint',
	    value: function handleScrollPaint() {
	      this.waitingForPaint = false;

	      if (!this.refs.scroll) {
	        return;
	      }

	      var activeCategory = null;

	      if (SEARCH_CATEGORY.emojis) {
	        activeCategory = SEARCH_CATEGORY;
	      } else {
	        var target = this.refs.scroll,
	            scrollTop = target.scrollTop,
	            scrollingDown = scrollTop > (this.scrollTop || 0),
	            minTop = 0;

	        for (var i = 0, l = this.categories.length; i < l; i++) {
	          var ii = scrollingDown ? this.categories.length - 1 - i : i,
	              category = this.categories[ii],
	              component = this.refs['category-' + ii];

	          if (component) {
	            var active = component.handleScroll(scrollTop);

	            if (!minTop || component.top < minTop) {
	              if (component.top > 0) {
	                minTop = component.top;
	              }
	            }

	            if (active && !activeCategory) {
	              activeCategory = category;
	            }
	          }
	        }

	        if (scrollTop < minTop) {
	          var _iteratorNormalCompletion3 = true;
	          var _didIteratorError3 = false;
	          var _iteratorError3 = undefined;

	          try {
	            for (var _iterator3 = this.categories[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	              var _category = _step3.value;

	              if (_category.anchor === false) {
	                continue;
	              }

	              activeCategory = _category;
	              break;
	            }
	          } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	              }
	            } finally {
	              if (_didIteratorError3) {
	                throw _iteratorError3;
	              }
	            }
	          }
	        } else if (scrollTop + this.clientHeight >= this.scrollHeight) {
	          activeCategory = this.categories[this.categories.length - 1];
	        }
	      }

	      if (activeCategory) {
	        var anchors = this.refs.anchors;
	        var _activeCategory = activeCategory;
	        var categoryName = _activeCategory.name;


	        if (anchors.state.selected != categoryName) {
	          anchors.setState({ selected: categoryName });
	        }
	      }

	      this.scrollTop = scrollTop;
	    }
	  }, {
	    key: 'handleSearch',
	    value: function handleSearch(emojis) {
	      SEARCH_CATEGORY.emojis = emojis;

	      for (var i = 0, l = this.categories.length; i < l; i++) {
	        var component = this.refs['category-' + i];

	        if (component && component.props.name != 'Search') {
	          var display = emojis ? 'none' : 'inherit';
	          component.updateDisplay(display);
	        }
	      }

	      this.forceUpdate();
	      this.refs.scroll.scrollTop = 0;
	      this.handleScroll();
	    }
	  }, {
	    key: 'handleAnchorClick',
	    value: function handleAnchorClick(category, i) {
	      var component = this.refs['category-' + i];
	      var _refs = this.refs;
	      var scroll = _refs.scroll;
	      var anchors = _refs.anchors;
	      var scrollToComponent = null;

	      scrollToComponent = function scrollToComponent() {
	        if (component) {
	          var top = component.top;


	          if (category.first) {
	            top = 0;
	          } else {
	            top += 1;
	          }

	          scroll.scrollTop = top;
	        }
	      };

	      if (SEARCH_CATEGORY.emojis) {
	        this.handleSearch(null);
	        this.refs.search.clear();

	        window.requestAnimationFrame(scrollToComponent);
	      } else {
	        scrollToComponent();
	      }
	    }
	  }, {
	    key: 'handleSkinChange',
	    value: function handleSkinChange(skin) {
	      var newState = { skin: skin };

	      this.setState(newState);
	      _store2.default.update(newState);
	    }
	  }, {
	    key: 'updateCategoriesSize',
	    value: function updateCategoriesSize() {
	      for (var i = 0, l = this.categories.length; i < l; i++) {
	        var component = this.refs['category-' + i];
	        if (component) component.memoizeSize();
	      }

	      if (this.refs.scroll) {
	        var target = this.refs.scroll;
	        this.scrollHeight = target.scrollHeight;
	        this.clientHeight = target.clientHeight;
	      }
	    }
	  }, {
	    key: 'getCategories',
	    value: function getCategories() {
	      return this.state.firstRender ? this.categories.slice(0, 3) : this.categories;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var _props = this.props;
	      var perLine = _props.perLine;
	      var emojiSize = _props.emojiSize;
	      var set = _props.set;
	      var sheetSize = _props.sheetSize;
	      var style = _props.style;
	      var title = _props.title;
	      var emoji = _props.emoji;
	      var color = _props.color;
	      var native = _props.native;
	      var backgroundImageFn = _props.backgroundImageFn;
	      var emojisToShowFilter = _props.emojisToShowFilter;
	      var include = _props.include;
	      var exclude = _props.exclude;
	      var autoFocus = _props.autoFocus;
	      var enableSkins = _props.enableSkins;
	      var skin = this.state.skin;
	      var width = perLine * (emojiSize + 12) + 12 + 2 + (0, _measureScrollbar2.default)();

	      return _react2.default.createElement(
	        'div',
	        { style: _extends({ width: width }, style), className: 'emoji-mart' },
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Anchors, {
	            ref: 'anchors',
	            i18n: this.i18n,
	            color: color,
	            categories: this.categories,
	            onAnchorClick: this.handleAnchorClick.bind(this)
	          })
	        ),
	        _react2.default.createElement(_.Search, {
	          ref: 'search',
	          onSearch: this.handleSearch.bind(this),
	          i18n: this.i18n,
	          emojisToShowFilter: emojisToShowFilter,
	          include: include,
	          exclude: exclude,
	          custom: CUSTOM_CATEGORY.emojis,
	          autoFocus: autoFocus
	        }),
	        _react2.default.createElement(
	          'div',
	          { ref: 'scroll', className: 'emoji-mart-scroll', onScroll: this.handleScroll.bind(this) },
	          this.getCategories().map(function (category, i) {
	            return _react2.default.createElement(_.Category, {
	              ref: 'category-' + i,
	              key: category.name,
	              name: category.name,
	              emojis: category.emojis,
	              perLine: perLine,
	              native: native,
	              hasStickyPosition: _this5.hasStickyPosition,
	              i18n: _this5.i18n,
	              custom: category.name == 'Recent' ? CUSTOM_CATEGORY.emojis : undefined,
	              emojiProps: {
	                native: native,
	                skin: skin,
	                size: emojiSize,
	                set: set,
	                sheetSize: sheetSize,
	                forceSize: native,
	                backgroundImageFn: backgroundImageFn,
	                onOver: _this5.handleEmojiOver.bind(_this5),
	                onLeave: _this5.handleEmojiLeave.bind(_this5),
	                onClick: _this5.handleEmojiClick.bind(_this5)
	              }
	            });
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-bar' },
	          _react2.default.createElement(_.Preview, {
	            ref: 'preview',
	            title: title,
	            emoji: emoji,
	            emojiProps: {
	              native: native,
	              size: 38,
	              skin: skin,
	              set: set,
	              sheetSize: sheetSize,
	              backgroundImageFn: backgroundImageFn
	            },
	            skinsProps: {
	              skin: skin,
	              onChange: this.handleSkinChange.bind(this)
	            },
	            enableSkins: enableSkins
	          })
	        )
	      );
	    }
	  }]);

	  return Picker;
	}(_react2.default.Component);

	exports.default = Picker;


	Picker.propTypes = {
	  onClick: _propTypes2.default.func,
	  perLine: _propTypes2.default.number,
	  emojiSize: _propTypes2.default.number,
	  i18n: _propTypes2.default.object,
	  style: _propTypes2.default.object,
	  title: _propTypes2.default.string,
	  emoji: _propTypes2.default.string,
	  color: _propTypes2.default.string,
	  set: _.Emoji.propTypes.set,
	  skin: _.Emoji.propTypes.skin,
	  native: _propTypes2.default.bool,
	  backgroundImageFn: _.Emoji.propTypes.backgroundImageFn,
	  sheetSize: _.Emoji.propTypes.sheetSize,
	  emojisToShowFilter: _propTypes2.default.func,
	  include: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  exclude: _propTypes2.default.arrayOf(_propTypes2.default.string),
	  autoFocus: _propTypes2.default.bool,
	  enableSkins: _propTypes2.default.bool,
	  custom: _propTypes2.default.arrayOf(_propTypes2.default.shape({
	    name: _propTypes2.default.string.isRequired,
	    short_names: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
	    emoticons: _propTypes2.default.arrayOf(_propTypes2.default.string),
	    keywords: _propTypes2.default.arrayOf(_propTypes2.default.string),
	    imageUrl: _propTypes2.default.string.isRequired
	  }))
	};

	Picker.defaultProps = {
	  onClick: function onClick() {},
	  emojiSize: 24,
	  perLine: 9,
	  i18n: {},
	  style: {},
	  title: 'Emoji Mart™',
	  emoji: 'department_store',
	  color: '#ae65c5',
	  set: _.Emoji.defaultProps.set,
	  skin: _.Emoji.defaultProps.skin,
	  native: _.Emoji.defaultProps.native,
	  sheetSize: _.Emoji.defaultProps.sheetSize,
	  backgroundImageFn: _.Emoji.defaultProps.backgroundImageFn,
	  emojisToShowFilter: null,
	  autoFocus: false,
	  enableSkins: true,
	  custom: []
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

	// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

	// MIT license

	var isWindowAvailable = typeof window !== 'undefined';

	isWindowAvailable && function () {
	  var lastTime = 0;
	  var vendors = ['ms', 'moz', 'webkit', 'o'];

	  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	  }

	  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
	    var currTime = new Date().getTime();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = window.setTimeout(function () {
	      callback(currTime + timeToCall);
	    }, timeToCall);

	    lastTime = currTime + timeToCall;
	    return id;
	  };

	  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
	    clearTimeout(id);
	  };
	}();

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var div = document.createElement('div');

	  div.style.width = '100px';
	  div.style.height = '100px';
	  div.style.overflow = 'scroll';
	  div.style.position = 'absolute';
	  div.style.top = '-9999px';

	  document.body.appendChild(div);

	  var scrollbarWidth = div.offsetWidth - div.clientWidth;

	  document.body.removeChild(div);

	  return scrollbarWidth;
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _ = __webpack_require__(1);

	var _utils = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Preview = function (_React$Component) {
	  _inherits(Preview, _React$Component);

	  function Preview(props) {
	    _classCallCheck(this, Preview);

	    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

	    _this.state = { emoji: null };
	    return _this;
	  }

	  _createClass(Preview, [{
	    key: 'render',
	    value: function render() {
	      var emoji = this.state.emoji;
	      var _props = this.props;
	      var emojiProps = _props.emojiProps;
	      var skinsProps = _props.skinsProps;
	      var title = _props.title;
	      var enableSkins = _props.enableSkins;
	      var idleEmoji = _props.emoji;


	      if (emoji) {
	        var emojiData = (0, _utils.getData)(emoji);
	        var emoticons = emojiData.emoticons;
	        var knownEmoticons = [];
	        var listedEmoticons = [];

	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = emoticons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var emoticon = _step.value;

	            if (knownEmoticons.indexOf(emoticon.toLowerCase()) == -1) {
	              knownEmoticons.push(emoticon.toLowerCase());
	              listedEmoticons.push(emoticon);
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-emoji' },
	            (0, _.Emoji)(_extends({
	              key: emoji.id,
	              emoji: emoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-data' },
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-name' },
	              emoji.name
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-shortnames' },
	              emojiData.short_names.map(function (short_name) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: short_name, className: 'emoji-mart-preview-shortname' },
	                  ':',
	                  short_name,
	                  ':'
	                );
	              })
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'emoji-mart-preview-emoticons' },
	              listedEmoticons.map(function (emoticon) {
	                return _react2.default.createElement(
	                  'span',
	                  { key: emoticon, className: 'emoji-mart-preview-emoticon' },
	                  emoticon
	                );
	              })
	            )
	          )
	        );
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-preview' },
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-emoji' },
	            idleEmoji && idleEmoji.length && (0, _.Emoji)(_extends({
	              emoji: idleEmoji
	            }, emojiProps))
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-data' },
	            _react2.default.createElement(
	              'span',
	              { className: 'emoji-mart-title-label' },
	              title
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'emoji-mart-preview-skins' },
	            enableSkins && _react2.default.createElement(_.Skins, skinsProps)
	          )
	        );
	      }
	    }
	  }]);

	  return Preview;
	}(_react2.default.Component);

	exports.default = Preview;


	Preview.propTypes = {
	  title: _propTypes2.default.string.isRequired,
	  emoji: _propTypes2.default.string.isRequired,
	  emojiProps: _propTypes2.default.object.isRequired,
	  skinsProps: _propTypes2.default.object.isRequired,
	  enableSkins: _propTypes2.default.bool.isRequired
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _emojiIndex = __webpack_require__(28);

	var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search = function (_React$Component) {
	  _inherits(Search, _React$Component);

	  function Search() {
	    _classCallCheck(this, Search);

	    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
	  }

	  _createClass(Search, [{
	    key: 'handleChange',
	    value: function handleChange() {
	      var input = this.refs.input;
	      var value = input.value;

	      this.props.onSearch(_emojiIndex2.default.search(value, {
	        emojisToShowFilter: this.props.emojisToShowFilter,
	        maxResults: this.props.maxResults,
	        include: this.props.include,
	        exclude: this.props.exclude,
	        custom: this.props.custom
	      }));
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.refs.input.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var i18n = _props.i18n;
	      var autoFocus = _props.autoFocus;


	      return _react2.default.createElement(
	        'div',
	        { className: 'emoji-mart-search' },
	        _react2.default.createElement('input', {
	          ref: 'input',
	          type: 'text',
	          onChange: this.handleChange.bind(this),
	          placeholder: i18n.search,
	          autoFocus: autoFocus
	        })
	      );
	    }
	  }]);

	  return Search;
	}(_react2.default.Component);

	exports.default = Search;


	Search.propTypes = {
	  onSearch: _propTypes2.default.func,
	  maxResults: _propTypes2.default.number,
	  emojisToShowFilter: _propTypes2.default.func,
	  autoFocus: _propTypes2.default.bool
	};

	Search.defaultProps = {
	  onSearch: function onSearch() {},
	  maxResults: 75,
	  emojisToShowFilter: null,
	  autoFocus: false
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _data = __webpack_require__(20);

	var _data2 = _interopRequireDefault(_data);

	var _ = __webpack_require__(21);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var extend = __webpack_require__(29)._extend;

	var index = {};
	var emojisList = {};
	var emoticonsList = {};
	var previousInclude = [];
	var previousExclude = [];

	for (var emoji in _data2.default.emojis) {
	  var emojiData = _data2.default.emojis[emoji];
	  var short_names = emojiData.short_names;
	  var emoticons = emojiData.emoticons;
	  var id = short_names[0];

	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = (emoticons || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var emoticon = _step.value;

	      if (!emoticonsList[emoticon]) {
	        emoticonsList[emoticon] = id;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  emojisList[id] = (0, _.getSanitizedData)(id);
	}

	function search(value) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  var emojisToShowFilter = _ref.emojisToShowFilter;
	  var maxResults = _ref.maxResults;
	  var include = _ref.include;
	  var exclude = _ref.exclude;
	  var _ref$custom = _ref.custom;
	  var custom = _ref$custom === undefined ? [] : _ref$custom;

	  maxResults || (maxResults = 75);
	  include || (include = []);
	  exclude || (exclude = []);

	  if (custom.length) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = custom[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var _emoji = _step2.value;

	        _data2.default.emojis[_emoji.id] = (0, _.getData)(_emoji);
	        emojisList[_emoji.id] = (0, _.getSanitizedData)(_emoji);
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }

	    _data2.default.categories.push({
	      name: 'Custom',
	      emojis: custom.map(function (emoji) {
	        return emoji.id;
	      })
	    });
	  }

	  var results = null,
	      pool = _data2.default.emojis;

	  if (value.length) {
	    if (value == '-' || value == '-1') {
	      return [emojisList['-1']];
	    }

	    var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
	        allResults = [];

	    if (values.length > 2) {
	      values = [values[0], values[1]];
	    }

	    if (include.length || exclude.length) {
	      pool = {};

	      if (previousInclude != include.sort().join(',') || previousExclude != exclude.sort().join(',')) {
	        previousInclude = include.sort().join(',');
	        previousExclude = exclude.sort().join(',');
	        index = {};
	      }

	      var _iteratorNormalCompletion3 = true;
	      var _didIteratorError3 = false;
	      var _iteratorError3 = undefined;

	      try {
	        for (var _iterator3 = _data2.default.categories[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	          var category = _step3.value;

	          var isIncluded = include && include.length ? include.indexOf(category.name.toLowerCase()) > -1 : true;
	          var isExcluded = exclude && exclude.length ? exclude.indexOf(category.name.toLowerCase()) > -1 : false;
	          if (!isIncluded || isExcluded) {
	            continue;
	          }

	          var _iteratorNormalCompletion4 = true;
	          var _didIteratorError4 = false;
	          var _iteratorError4 = undefined;

	          try {
	            for (var _iterator4 = category.emojis[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	              var emojiId = _step4.value;

	              pool[emojiId] = _data2.default.emojis[emojiId];
	            }
	          } catch (err) {
	            _didIteratorError4 = true;
	            _iteratorError4 = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                _iterator4.return();
	              }
	            } finally {
	              if (_didIteratorError4) {
	                throw _iteratorError4;
	              }
	            }
	          }
	        }
	      } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	          }
	        } finally {
	          if (_didIteratorError3) {
	            throw _iteratorError3;
	          }
	        }
	      }
	    } else if (previousInclude.length || previousExclude.length) {
	      index = {};
	    }

	    allResults = values.map(function (value) {
	      var aPool = pool,
	          aIndex = index,
	          length = 0;

	      var _iteratorNormalCompletion5 = true;
	      var _didIteratorError5 = false;
	      var _iteratorError5 = undefined;

	      try {
	        for (var _iterator5 = value.split('')[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	          var char = _step5.value;

	          length++;

	          aIndex[char] || (aIndex[char] = {});
	          aIndex = aIndex[char];

	          if (!aIndex.results) {
	            (function () {
	              var scores = {};

	              aIndex.results = [];
	              aIndex.pool = {};

	              for (var id in aPool) {
	                var _emoji2 = aPool[id];
	                var _search = _emoji2.search;
	                var sub = value.substr(0, length);
	                var subIndex = _search.indexOf(sub);

	                if (subIndex != -1) {
	                  var score = subIndex + 1;
	                  if (sub == id) score = 0;

	                  aIndex.results.push(emojisList[id]);
	                  aIndex.pool[id] = _emoji2;

	                  scores[id] = score;
	                }
	              }

	              aIndex.results.sort(function (a, b) {
	                var aScore = scores[a.id],
	                    bScore = scores[b.id];

	                return aScore - bScore;
	              });
	            })();
	          }

	          aPool = aIndex.pool;
	        }
	      } catch (err) {
	        _didIteratorError5 = true;
	        _iteratorError5 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion5 && _iterator5.return) {
	            _iterator5.return();
	          }
	        } finally {
	          if (_didIteratorError5) {
	            throw _iteratorError5;
	          }
	        }
	      }

	      return aIndex.results;
	    }).filter(function (a) {
	      return a;
	    });

	    if (allResults.length > 1) {
	      results = _.intersect.apply(undefined, _toConsumableArray(allResults));
	    } else if (allResults.length) {
	      results = allResults[0];
	    } else {
	      results = [];
	    }
	  }

	  if (results) {
	    if (emojisToShowFilter) {
	      results = results.filter(function (result) {
	        return emojisToShowFilter(_data2.default.emojis[result.id].unified);
	      });
	    }

	    if (results && results.length > maxResults) {
	      results = results.slice(0, maxResults);
	    }
	  }

	  return results;
	}

	exports.default = { search: search, emojis: emojisList, emoticons: emoticonsList };

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(31);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(32);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(30)))

/***/ },
/* 30 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Skins = function (_React$Component) {
	  _inherits(Skins, _React$Component);

	  function Skins(props) {
	    _classCallCheck(this, Skins);

	    var _this = _possibleConstructorReturn(this, (Skins.__proto__ || Object.getPrototypeOf(Skins)).call(this, props));

	    _this.state = {
	      opened: false
	    };
	    return _this;
	  }

	  _createClass(Skins, [{
	    key: 'handleClick',
	    value: function handleClick(skin) {
	      var onChange = this.props.onChange;


	      if (!this.state.opened) {
	        this.setState({ opened: true });
	      } else {
	        this.setState({ opened: false });
	        if (skin != this.props.skin) {
	          onChange(skin);
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var skin = this.props.skin;
	      var opened = this.state.opened;


	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'emoji-mart-skin-swatches ' + (opened ? 'emoji-mart-skin-swatches-opened' : '') },
	          [].concat(_toConsumableArray(Array(6))).map(function (_, i) {
	            var skinTone = i + 1,
	                selected = skinTone == skin;

	            return _react2.default.createElement(
	              'span',
	              { key: 'skin-tone-' + skinTone, className: 'emoji-mart-skin-swatch ' + (selected ? 'emoji-mart-skin-swatch-selected' : '') },
	              _react2.default.createElement('span', {
	                onClick: function onClick() {
	                  return _this2.handleClick(skinTone);
	                },
	                className: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone })
	            );
	          })
	        )
	      );
	    }
	  }]);

	  return Skins;
	}(_react2.default.Component);

	exports.default = Skins;


	Skins.propTypes = {
	  onChange: _propTypes2.default.func,
	  skin: _propTypes2.default.number.isRequired
	};

	Skins.defaultProps = {
	  onChange: function onChange() {}
	};

/***/ }
/******/ ])
});
;