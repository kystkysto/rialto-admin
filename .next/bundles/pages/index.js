
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(721);

var _Layout2 = _interopRequireDefault(_Layout);

var _Gallery = __webpack_require__(719);

var _Gallery2 = _interopRequireDefault(_Gallery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vagrant/rialto-site/pages/index.js?entry';

exports.default = function () {
  return _react2.default.createElement(_Layout2.default, { title: '\u041D\u043E\u0432\u044B\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B', __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_Gallery2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vagrant/rialto-site/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vagrant/rialto-site/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 718:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(573);

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = __webpack_require__(575);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vagrant/rialto-site/components/Bar.js';


var Bar = function Bar() {
  return _react2.default.createElement(_reactBootstrap.Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, '\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440')))));
};

exports.default = Bar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vagrant/rialto-site/components/Bar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vagrant/rialto-site/components/Bar.js"); } } })();

/***/ }),

/***/ 719:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(573);

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = __webpack_require__(575);

var _GalleryItem = __webpack_require__(720);

var _GalleryItem2 = _interopRequireDefault(_GalleryItem);

var _reactTagsinput = __webpack_require__(732);

var _reactTagsinput2 = _interopRequireDefault(_reactTagsinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vagrant/rialto-site/components/Gallery.js';


var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      materials: [{
        img: '1.jpg',
        type: 1,
        date: 'Сегодня в 18:03'
      }, {
        img: '2.jpg',
        type: 2,
        date: 'Сегодня в 17:59'
      }, {
        img: '3.jpg',
        type: 2,
        date: 'Сегодня в 17:51'
      }, {
        img: '4.jpg',
        type: 3,
        date: 'Сегодня в 16:20'
      }, {
        img: '5.jpg',
        type: 2,
        date: 'Сегодня в 15:39'
      }, {
        img: '6.jpg',
        type: 2,
        date: 'Сегодня в 14:20'
      }, {
        img: '7.jpg',
        type: 3,
        date: 'Сегодня в 14:08'
      }, {
        img: '8.jpg',
        type: 2,
        date: 'Сегодня в 12:50'
      }, {
        img: '9.jpg',
        type: 2,
        date: 'Сегодня в 11:04'
      }, {
        img: '10.jpg',
        type: 2,
        date: 'Сегодня в 11:02'
      }, {
        img: '11.jpg',
        type: 2,
        date: 'Сегодня в 10:59'
      }, {
        img: '12.jpg',
        type: 2,
        date: 'Сегодня в 10:45'
      }],
      tags: ['авария', 'кошмар']
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleChange',
    value: function handleChange(tags) {
      this.setState({ tags: tags });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { md: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, this.state.materials.map(function (material) {
        return _react2.default.createElement(_GalleryItem2.default, (0, _extends3.default)({ key: Math.random() }, material, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }));
      })), _react2.default.createElement(_reactBootstrap.Col, { md: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { md: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, '\u0422\u0430\u043A\u043E\u0435 \u0442\u043E \u0432\u0438\u0434\u0435\u043E \u0431\u043B\u0430 \u0431\u043B\u0430 \u0431\u043B\u0430', _react2.default.createElement(_reactTagsinput2.default, { value: this.state.tags, onChange: this.handleChange.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), _react2.default.createElement(_reactBootstrap.Image, { src: 'static/' + '12.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), this.props.date, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'success', __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, '\u041E\u0434\u043E\u0431\u0440\u0438\u0442\u044C'), '\xA0', _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'danger', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, '\u041E\u0442\u043A\u0437\u0430\u0442\u044C'))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vagrant/rialto-site/components/Gallery.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vagrant/rialto-site/components/Gallery.js"); } } })();

/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(573);

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = __webpack_require__(575);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vagrant/rialto-site/components/GalleryItem.js';


var style = {

  position: 'absolute',
  fontSize: '4vw',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactBootstrap.Col, { xs: 6, md: 4, key: Math.random(), __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_reactBootstrap.Thumbnail, { src: 'static/' + this.props.img, __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_reactBootstrap.Glyphicon, { style: style, glyph: this.type(this.props.type), __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), this.props.date));
    }
  }, {
    key: 'type',
    value: function type(_type) {

      var claz;

      switch (_type) {
        case 1:
          claz = 'facetime-video';
          break;
        case 2:
          claz = 'camera';
          break;
        case 3:
          claz = 'play-circle';
          break;
      }

      return claz;
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vagrant/rialto-site/components/GalleryItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vagrant/rialto-site/components/GalleryItem.js"); } } })();

/***/ }),

/***/ 721:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(575);

var _link = __webpack_require__(573);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _Bar = __webpack_require__(718);

var _Bar2 = _interopRequireDefault(_Bar);

var _Menu = __webpack_require__(722);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vagrant/rialto-site/components/Layout.js';

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'Модератор' : _ref$title;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://bootswatch.com/darkly/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/react-tagsinput.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })), _react2.default.createElement(_reactBootstrap.Grid, { fluid: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, 'Rialto')))), _react2.default.createElement(_Menu2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement(_reactBootstrap.Col, { md: 10, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, children)));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vagrant/rialto-site/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vagrant/rialto-site/components/Layout.js"); } } })();

/***/ }),

/***/ 722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(45);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(573);

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = __webpack_require__(575);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vagrant/rialto-site/components/Menu.js';


var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { md: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_reactBootstrap.Nav, { bsStyle: 'pills', stacked: true, activeKey: 1, __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_link2.default, { href: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 1, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, '\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B')), _react2.default.createElement(_link2.default, { href: '/transactions', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, '\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438')), _react2.default.createElement(_link2.default, { href: '/users', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438')))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vagrant/rialto-site/components/Menu.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vagrant/rialto-site/components/Menu.js"); } } })();

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(632);


/***/ })

},[735]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz80Zjg4MmZiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFyLmpzPzRmODgyZmIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYWxsZXJ5LmpzPzVlMTFmOGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYWxsZXJ5SXRlbS5qcz81ZTExZjhmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzPzVlMTFmOGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51LmpzPzVlMTFmOGYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7QUFHUDs7Ozs7Ozs7a0JBQWU7eUJBQ1osa0NBQU8sT0FBTTtnQkFBZDtrQkFDRTtBQURGO0dBQUEsa0JBQ0c7O2dCQUFEO2tCQUFBO0FBQUE7QUFBQTtBQUZKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTzs7OztBQUNBOzs7O0FBQ0U7Ozs7Ozs7QUFFVCxJQUFNLE1BQU07eUJBQ1A7O2dCQUFEO2tCQUNBO0FBREE7QUFBQSxxQkFDQyxjQUFELHVCQUFROztnQkFBUjtrQkFDRTtBQURGO0FBQUEscUJBQ0csY0FBRCx1QkFBUTs7Z0JBQVI7a0JBQ0U7QUFERjtBQUFBLHFCQUNHLGdDQUFLLE1BQUs7Z0JBQVg7a0JBQWU7QUFBZjtxQkFBZTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBO0FBTXZCOztrQkFBZSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEM7Ozs7QUFDVDs7OztBQUMrQjs7QUFDL0I7Ozs7QUFDQTs7Ozs7Ozs7OztrQ0FJSjs7a0JBQVksT0FBTzt3Q0FBQTs7c0lBR2hCOztVQUFLOzthQUlDO2NBQ0E7Y0FBTTtBQUZOLE9BRk87YUFRUDtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47YUFN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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZ0I7Ozs7QUFDVDs7OztBQUNZOzs7Ozs7OztrQ0FJakI7O2tCQUFZLE9BQU87d0NBQUE7O2lJQUdsQjs7Ozs7NkJBSUM7OzZCQUNFOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0cscUNBQUksSUFBSTtvQkFBVDtzQkFDRTtBQURGO3lCQUNHLHFDQUFJLFNBQVEsU0FBUSxTQUFyQixNQUE2QixXQUFXO29CQUF4QztzQkFDRTtBQURGO3lCQUNHLGdDQUFLLE1BQUs7b0JBQVg7c0JBQ0U7QUFERjt5QkFDRyx5Q0FBUSxVQUFVO29CQUFuQjtzQkFBQTtBQUFBO1NBRUYsNEVBQUMsZ0NBQUssTUFBSztvQkFBWDtzQkFDRTtBQURGO3lCQUNHLHlDQUFRLFVBQVU7b0JBQW5CO3NCQUFBO0FBQUE7U0FFRixrRkFBQyxnQ0FBSyxNQUFLO29CQUFYO3NCQUNFO0FBREY7eUJBQ0cseUNBQVEsVUFBVTtvQkFBbkI7c0JBQUE7QUFBQTtTQU1YOzs7OztBQTFCMEIiLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4uL2NvbXBvbmVudHMvR2FsbGVyeSc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPExheW91dCB0aXRsZT0n0J3QvtCy0YvQtSDQvNCw0YLQtdGA0LjQsNC70YsnPlxuICAgIDxHYWxsZXJ5Lz5cbiAgPC9MYXlvdXQ+XG4pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IEJhciA9ICgpID0+IChcbiAgICA8TmF2YmFyPlxuICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT7QnNC+0LTQtdGA0LDRgtC+0YA8L2E+PC9MaW5rPlxuICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgPC9OYXZiYXIuSGVhZGVyPlxuICA8L05hdmJhcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEJhcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Jhci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IENvbCwgUm93LCBQYWdlSGVhZGVyLCBJbWFnZSwgQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgR2FsbGVyeUl0ZW0gZnJvbSAnLi9HYWxsZXJ5SXRlbSdcbmltcG9ydCBUYWdzSW5wdXQgZnJvbSAncmVhY3QtdGFnc2lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIG1hdGVyaWFsczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzEuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTg6MDMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICcyLmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE3OjU5J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnMy5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxNzo1MSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzQuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDMsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTY6MjAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICc1LmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE1OjM5J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnNi5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxNDoyMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzcuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDMsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTQ6MDgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICc4LmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDEyOjUwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnOS5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxMTowNCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzEwLmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDExOjAyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnMTEuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTA6NTknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICcxMi5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxMDo0NSdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHRhZ3M6IFsn0LDQstCw0YDQuNGPJywgJ9C60L7RiNC80LDRgCddXG4gICAgICB9XG4gICB9XG4gIFxuXG4gIGhhbmRsZUNoYW5nZSh0YWdzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGFnc30pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5tYXRlcmlhbHMubWFwKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxHYWxsZXJ5SXRlbSBrZXk9e01hdGgucmFuZG9tKCl9IHsuLi5tYXRlcmlhbH0gLz5cbiAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSA+XG4gICAgICAgICAgICAgINCi0LDQutC+0LUg0YLQviDQstC40LTQtdC+INCx0LvQsCDQsdC70LAg0LHQu9CwXG4gICAgICAgICAgICAgIDxUYWdzSW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudGFnc30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9eydzdGF0aWMvJyArICAgJzEyLmpwZyd9PjwvSW1hZ2U+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGV9XG4gICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIj7QntC00L7QsdGA0LjRgtGMPC9CdXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCI+0J7RgtC60LfQsNGC0Yw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9HYWxsZXJ5LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IENvbCwgR2x5cGhpY29uLCBUaHVtYm5haWx9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IHN0eWxlID0ge1xuXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBmb250U2l6ZTogJzR2dycsXG4gIHRvcDogJzQwJScsXG4gIGxlZnQ6ICc1MCUnLFxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2wgeHM9ezZ9IG1kPXs0fSBrZXk9e01hdGgucmFuZG9tKCl9PlxuICAgICAgICA8VGh1bWJuYWlsIHNyYz17J3N0YXRpYy8nICsgdGhpcy5wcm9wcy5pbWd9PlxuICAgICAgICAgIDxHbHlwaGljb24gc3R5bGU9e3N0eWxlfSBnbHlwaD17dGhpcy50eXBlKHRoaXMucHJvcHMudHlwZSl9IC8+XG4gICAgICAgICAge3RoaXMucHJvcHMuZGF0ZX1cbiAgICAgICAgPC9UaHVtYm5haWw+XG4gICAgICA8L0NvbD5cbiAgICApO1xuICB9XG5cbiAgdHlwZSh0eXBlKSB7XG5cbiAgICB2YXIgY2xhejtcblxuICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGNsYXogPSAnZmFjZXRpbWUtdmlkZW8nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgY2xheiA9ICdjYW1lcmEnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgY2xheiA9ICdwbGF5LWNpcmNsZSc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBjbGF6O1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9HYWxsZXJ5SXRlbS5qcyIsImltcG9ydCB7IEdyaWQsIENvbCwgTmF2LCBOYXZJdGVtLCBSb3csIE5hdmJhcn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBCYXIgZnJvbSAnLi9CYXInXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICfQnNC+0LTQtdGA0LDRgtC+0YAnIH0pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57IHRpdGxlIH08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0naW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aCcgLz5cblxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC9sYXRlc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cblxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tL2RhcmtseS9ib290c3RyYXAubWluLmNzc1wiIC8+XG5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9yZWFjdC10YWdzaW5wdXQuY3NzXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPEdyaWQgZmx1aWQ+XG4gICAgICA8TmF2YmFyPlxuICAgICAgICA8TmF2YmFyLkhlYWRlcj5cbiAgICAgICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5SaWFsdG88L0xpbms+XG4gICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgIDwvTmF2YmFyLkhlYWRlcj5cbiAgICAgIDwvTmF2YmFyPlxuXG4gICAgICA8TWVudSAvPlxuICAgICAgXG4gICAgICA8Q29sIG1kPXsxMH0+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9Db2w+XG4gICAgPC9HcmlkPlxuICA8L2Rpdj5cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IENvbCwgTmF2LCBOYXZJdGVtfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q29sIG1kPXsyfT5cbiAgICAgICAgICA8TmF2IGJzU3R5bGU9XCJwaWxsc1wiIHN0YWNrZWQgYWN0aXZlS2V5PXsxfSA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17MX0+0JzQsNGC0LXRgNC40LDQu9GLPC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90cmFuc2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezJ9PtCi0YDQsNC90LfQsNC60YbQuNC4PC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxuICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT17M30+0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4PC9OYXZJdGVtPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTWVudS5qcyJdLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        