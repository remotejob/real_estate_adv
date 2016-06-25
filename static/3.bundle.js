webpackJsonp([3],{

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_Header__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_List_List__ = __webpack_require__(245);




var listItems = [{ title: 'Expand me', content: 'Thank you' }, { title: 'Click me', content: 'Saved me' }, { title: 'Tap me', content: 'Hey, watch it!' }, { title: 'Open me', content: 'I am free' }];

/* harmony default export */ exports["default"] = function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'article',
    { className: 'home' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_components_Header__["a" /* default */], { title: 'About', className: 'header-blue' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_components_List_List__["a" /* default */], { items: listItems, collapsible: true })
  );
};

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_scss__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_scss___default = __WEBPACK_IMPORTED_MODULE_1__header_scss__ && __WEBPACK_IMPORTED_MODULE_1__header_scss__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1__header_scss__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1__header_scss__; };
/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_1__header_scss___default, 'a', __WEBPACK_IMPORTED_MODULE_1__header_scss___default);



var string = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string;


var Header = function Header(_ref) {
  var title = _ref.title;
  var className = _ref.className;

  var styles = 'header-container ' + className;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'header',
    { className: styles },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      { className: 'header-title' },
      title
    )
  );
};

Header.propTypes = {
  className: string,
  title: string
};

/* harmony default export */ exports["a"] = Header;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListItem__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_scss__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_scss___default = __WEBPACK_IMPORTED_MODULE_2__list_scss__ && __WEBPACK_IMPORTED_MODULE_2__list_scss__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2__list_scss__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2__list_scss__; };
/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_2__list_scss___default, 'a', __WEBPACK_IMPORTED_MODULE_2__list_scss___default);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var number = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number;
var node = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node;
var array = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].array;
var bool = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool;
var string = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string;

var List = function (_Component) {
  _inherits(List, _Component);

  function List(props) {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

    _this.state = { expanded: [] };
    return _this;
  }

  _createClass(List, [{
    key: 'onSelectItem',
    value: function onSelectItem(index) {
      var _props = this.props;
      var collapsible = _props.collapsible;
      var singleExpand = _props.singleExpand;


      if (!collapsible) {
        return false;
      }

      var expanded = this.state.expanded;

      var expandedIndex = expanded.indexOf(index);

      if (expandedIndex > -1) {
        // collapse expanded item
        expanded = [].concat(_toConsumableArray(expanded.slice(0, expandedIndex)), _toConsumableArray(expanded.slice(expandedIndex + 1)));
      } else if (singleExpand) {
        expanded = [index];
      } else {
        expanded = [].concat(_toConsumableArray(expanded), [index]);
      }

      this.setState({ expanded: expanded });
    }
  }, {
    key: 'showListItems',
    value: function showListItems() {
      var me = this;
      var _me$props = me.props;
      var items = _me$props.items;
      var collapsible = _me$props.collapsible;
      var expanded = me.state.expanded;

      var onSelectItem = me.onSelectItem.bind(me);

      return items.map(function (item, idx) {
        var itemExpanded = !!(expanded.indexOf(idx) > -1);
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__ListItem__["a" /* default */], _extends({}, item, {
          onSelectItem: onSelectItem,
          collapsible: collapsible,
          expanded: itemExpanded,
          key: idx,
          index: idx
        }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var columns = _props2.columns;
      var children = _props2.children;
      var className = _props2.className;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'list columns-' + columns + ' ' + className },
        this.showListItems(),
        children
      );
    }
  }]);

  return List;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

List.propTypes = {
  columns: number,
  children: node,
  items: array,
  collapsible: bool,
  className: string,
  singleExpand: bool
};

List.defaultProps = {
  columns: 1,
  className: '',
  items: [],
  collapsible: false,
  singleExpand: true
};

/* harmony default export */ exports["a"] = List;

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __WEBPACK_IMPORTED_MODULE_0_react__ && __WEBPACK_IMPORTED_MODULE_0_react__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_react__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_react__; };
/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_react___default, 'a', __WEBPACK_IMPORTED_MODULE_0_react___default);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var string = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string;
var any = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].any;
var bool = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].bool;
var func = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func;
var number = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number;
var node = __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node;

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem(props) {
    _classCallCheck(this, ListItem);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).call(this, props));

    _this.state = { expanded: false };
    return _this;
  }

  _createClass(ListItem, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({
        expanded: props.expanded
      });
    }
  }, {
    key: 'toggleContent',
    value: function toggleContent() {
      var expanded = this.state.expanded;
      var _props = this.props;
      var onSelectItem = _props.onSelectItem;
      var index = _props.index;
      var onExpanded = _props.onExpanded;

      this.setState({
        expanded: !expanded
      });

      if (onSelectItem) {
        onSelectItem(index);
      }

      if (!expanded && onExpanded) {
        onExpanded(index);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var expanded = this.state.expanded;
      var _props2 = this.props;
      var iconUrl = _props2.iconUrl;
      var title = _props2.title;
      var collapsible = _props2.collapsible;
      var showArrow = _props2.showArrow;
      var content = _props2.content;
      var iconClassName = _props2.iconClassName;
      var children = _props2.children;


      var iconStyle = iconUrl ? { backgroundImage: 'url(\'' + iconUrl + '\')' } : {};
      var commonClassNames = 'arrow show-' + showArrow;
      var collapsibleClassNames = commonClassNames + ' collapsible expanded-' + expanded;
      var contentStyle = { maxHeight: expanded ? '50px' : '0px' };
      var toggleExpand = this.toggleContent.bind(this);
      var arrow = collapsible ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: collapsibleClassNames },
        '>'
      ) : undefined;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'list-item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'title', onClick: toggleExpand },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'icon ' + iconClassName, style: iconStyle }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'label' },
            title || children
          ),
          arrow
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'content', style: contentStyle },
          content
        )
      );
    }
  }]);

  return ListItem;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ListItem.propTypes = {
  iconClassName: string,
  iconUrl: string,
  title: string,
  route: string,
  showArrow: bool,
  children: any,
  collapsible: bool,
  content: node,
  onSelectItem: func,
  onExpanded: func,
  index: number,
  expanded: bool
};

ListItem.defaultProps = {
  iconClassName: '',
  showArrow: true,
  collapsible: false,
  expanded: false
};

/* harmony default export */ exports["a"] = ListItem;

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)();
// imports


// module
exports.push([module.i, ".header-container {\n  background-color: #7d7d7d;\n  padding: 10px;\n  user-select: none;\n  -webkit-user-select: none; }\n  .header-container .header-title {\n    color: #ffffff;\n    margin: 0;\n    font-size: 1.4em; }\n  .header-container.header-white {\n    background-color: #ffffff; }\n    .header-container.header-white .header-title {\n      color: #4d4d4d; }\n  .header-container.header-red {\n    background-color: #ec3d2b; }\n  .header-container.header-dark {\n    background-color: #4d4d4d; }\n  .header-container.header-grey {\n    background-color: #7d7d7d; }\n  .header-container.header-blue {\n    background-color: #113d92; }\n", ""]);

// exports


/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(70)();
// imports


// module
exports.push([module.i, ".list {\n  width: 100%;\n  -webkit-user-select: none;\n  user-select: none;\n  cursor: default; }\n  .list a {\n    text-decoration: none;\n    color: inherit; }\n  .list .list-item .title {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    min-height: 4em;\n    padding: 0.5em 1em;\n    border-right: 1px solid #e6e6e6; }\n    .list .list-item .title .icon, .list .list-item .title .label, .list .list-item .title .arrow {\n      display: inline-block;\n      margin: auto 0; }\n    .list .list-item .title .icon {\n      float: left; }\n    .list .list-item .title:last-child {\n      border-bottom: none; }\n    .list .list-item .title .label {\n      -webkit-box-flex: 1;\n      -webkit-flex: 1;\n      flex: 1;\n      padding: 0 0.5em; }\n    .list .list-item .title .arrow {\n      font-family: Helvetica;\n      float: right;\n      color: #7d7d7d;\n      -moz-transition: all 0.3s ease;\n      -webkit-transition: all 0.3s ease;\n      -o-transition: all 0.3s ease;\n      transition: all 0.3s ease; }\n      .list .list-item .title .arrow.show-false {\n        display: none; }\n      .list .list-item .title .arrow.collapsible {\n        font-size: 0.9rem; }\n      .list .list-item .title .arrow.expanded-true {\n        -moz-transform: rotate(90deg);\n        -webkit-transform: rotate(90deg);\n        -o-transform: rotate(90deg);\n        transform: rotate(90deg); }\n  .list .list-item .content {\n    overflow: hidden;\n    transition: max-height 0.5s ease;\n    border-bottom: 1px solid #e6e6e6;\n    padding-left: 1.5em; }\n  .list.columns-2 {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-flex-wrap: wrap;\n    flex-wrap: wrap; }\n    .list.columns-2 .list-item {\n      width: 50%; }\n", ""]);

// exports


/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(247);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(71)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./header.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./header.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(248);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(71)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./list.scss", function() {
			var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./list.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }

});