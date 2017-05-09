
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

var _Layout = __webpack_require__(720);

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

var _link = __webpack_require__(588);

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = __webpack_require__(624);

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

var _link = __webpack_require__(588);

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = __webpack_require__(624);

var _GalleryItem = __webpack_require__(733);

var _GalleryItem2 = _interopRequireDefault(_GalleryItem);

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
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, this.state.materials.map(function (material) {
        return _react2.default.createElement(_GalleryItem2.default, (0, _extends3.default)({ key: Math.random() }, material, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }));
      })));
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

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(624);

var _link = __webpack_require__(588);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _Bar = __webpack_require__(718);

var _Bar2 = _interopRequireDefault(_Bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/vagrant/rialto-site/components/Layout.js';

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'Модератор' : _ref$title;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://bootswatch.com/darkly/bootstrap.min.css', __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  })), _react2.default.createElement(_reactBootstrap.Grid, { fluid: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar.Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement(_reactBootstrap.Navbar.Brand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, 'Rialto')))), _react2.default.createElement(_reactBootstrap.Col, { md: 2, __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement(_reactBootstrap.Nav, { bsStyle: 'pills', stacked: true, activeKey: 1, __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 1, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, '\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B')), _react2.default.createElement(_link2.default, { href: '/transactions', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 2, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, '\u0422\u0440\u0430\u043D\u0437\u0430\u043A\u0446\u0438\u0438')), _react2.default.createElement(_link2.default, { href: '/users', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_reactBootstrap.NavItem, { eventKey: 3, __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, '\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438')))), _react2.default.createElement(_reactBootstrap.Col, { md: 7, __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, children)));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vagrant/rialto-site/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vagrant/rialto-site/components/Layout.js"); } } })();

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(632);


/***/ }),

/***/ 733:
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

var _link = __webpack_require__(588);

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = __webpack_require__(624);

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

/***/ })

},[732]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz8zN2VkNzIxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQmFyLmpzPzM3ZWQ3MjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HYWxsZXJ5LmpzPzM3ZWQ3MjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanM/MzdlZDcyMSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbGxlcnlJdGVtLmpzPzM3ZWQ3MjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPOzs7O0FBQ0E7Ozs7QUFHUDs7Ozs7Ozs7a0JBQWU7eUJBQ1osa0NBQU8sT0FBTTtnQkFBZDtrQkFDRTtBQURGO0dBQUEsa0JBQ0c7O2dCQUFEO2tCQUFBO0FBQUE7QUFBQTtBQUZKLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTzs7OztBQUNBOzs7O0FBQ0U7Ozs7Ozs7QUFFVCxJQUFNLE1BQU07eUJBQ1A7O2dCQUFEO2tCQUNBO0FBREE7QUFBQSxxQkFDQyxjQUFELHVCQUFROztnQkFBUjtrQkFDRTtBQURGO0FBQUEscUJBQ0csY0FBRCx1QkFBUTs7Z0JBQVI7a0JBQ0U7QUFERjtBQUFBLHFCQUNHLGdDQUFLLE1BQUs7Z0JBQVg7a0JBQWU7QUFBZjtxQkFBZTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBO0FBTXZCOztrQkFBZSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEM7Ozs7QUFDVDs7OztBQUNZOztBQUNaOzs7Ozs7Ozs7O2tDQUlKOztrQkFBWSxPQUFPO3dDQUFBOztzSUFHaEI7O1VBQUs7O2FBSUM7Y0FDQTtjQUFNO0FBRk4sT0FGTzthQVFQO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47YUFNQTtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47YUFNQTtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47YUFNQTtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47QUF6REo7V0ErREo7Ozs7OzZCQUdFOzZCQUNFOztvQkFBQTtzQkFFRTtBQUZGO0FBQUEseUJBRUc7O29CQUFEO3NCQUFPO0FBQVA7QUFBQSxjQUFZLE1BQU0sVUFBVSxJQUFJLG9CQUM1QjsrQkFBUSw4REFBWSxLQUFLLEtBQUssWUFBYzs7c0JBQXJDO3dCQUNSO0FBRFE7QUFBQTtBQUtqQjs7Ozs7QUFqRnlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFU7O0FBQ2hDOzs7O0FBQ0E7Ozs7QUFHUDs7Ozs7Ozs7a0JBQWU7TUFBRzt3QkFBVTtNQUFBLG1DQUFRLGNBQXJCO3lCQUNiOztnQkFBQTtrQkFDRTtBQURGO0FBQUEscUJBQ0c7O2dCQUFEO2tCQUNFO0FBREY7QUFBQSxxQkFDRTs7Z0JBQUE7a0JBQVM7QUFBVDtBQUFBLEtBQ0EsZ0RBQU0sU0FBUTtnQkFBZDtrQkFDQTtBQURBOzhDQUNNLE1BQUssWUFBVyxTQUFRO2dCQUE5QjtrQkFFQTtBQUZBOzhDQUVNLEtBQUksY0FBYSxNQUFLO2dCQUE1QjtrQkFFQTtBQUZBOzhDQUVNLEtBQUksY0FBYSxNQUFLO2dCQUE1QjtrQkFFRjtBQUZFO3VCQUVELHNDQUFLLE9BQU47Z0JBQUE7a0JBQ0U7QUFERjtxQkFDRzs7Z0JBQUQ7a0JBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQsdUJBQVE7O2dCQUFSO2tCQUNFO0FBREY7QUFBQSxxQkFDRyxjQUFELHVCQUFROztnQkFBUjtrQkFDRTtBQURGO0FBQUEscUJBQ0csZ0NBQUssTUFBSztnQkFBWDtrQkFBQTtBQUFBO0tBTU4sOEJBQUMscUNBQUksSUFBSTtnQkFBVDtrQkFDRTtBQURGO3FCQUNHLHFDQUFJLFNBQVEsU0FBUSxTQUFyQixNQUE2QixXQUFXO2dCQUF4QztrQkFDRTtBQURGO3FCQUNHLGdDQUFLLE1BQUs7Z0JBQVg7a0JBQ0U7QUFERjtxQkFDRyx5Q0FBUSxVQUFVO2dCQUFuQjtrQkFBQTtBQUFBO0tBRUYsNEVBQUMsZ0NBQUssTUFBSztnQkFBWDtrQkFDRTtBQURGO3FCQUNHLHlDQUFRLFVBQVU7Z0JBQW5CO2tCQUFBO0FBQUE7S0FFRixrRkFBQyxnQ0FBSyxNQUFLO2dCQUFYO2tCQUNFO0FBREY7cUJBQ0cseUNBQVEsVUFBVTtnQkFBbkI7a0JBQUE7QUFBQTtLQUlOLGdHQUFDLHFDQUFJLElBQUk7Z0JBQVQ7a0JBQ0U7QUFERjtLQUFBO0FBbENOLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGdCOzs7O0FBQ1Q7Ozs7QUFDa0I7Ozs7Ozs7QUFFekIsSUFBTTs7WUFHSjtZQUNBO09BQ0E7UUFDQTthQUFXO0FBSlg7OztrQ0FTQTs7a0JBQVksT0FBTzt3Q0FBQTs7aUlBR2xCOzs7Ozs2QkFHQzs2QkFDRyxxQ0FBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEtBQUssS0FBSztvQkFBN0I7c0JBQ0U7QUFERjtPQUFBLGtCQUNHLDJDQUFVLEtBQUssWUFBWSxLQUFLLE1BQU07b0JBQXZDO3NCQUNFO0FBREY7eUJBQ0csMkNBQVUsT0FBTyxPQUFPLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTTtvQkFBckQ7c0JBQ0M7QUFERDtlQUNNLE1BSWI7Ozs7eUJBRUksT0FFSDs7VUFFQTs7Y0FDRTthQUNFO2lCQUNBO0FBQ0Y7YUFDRTtpQkFDQTtBQUNGO2FBQ0U7aUJBQ0E7QUFHSjs7O2FBQ0Q7Ozs7O0FBbkMwQiIsImZpbGUiOiJidW5kbGVzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IEdhbGxlcnkgZnJvbSAnLi4vY29tcG9uZW50cy9HYWxsZXJ5JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0IHRpdGxlPSfQndC+0LLRi9C1INC80LDRgtC10YDQuNCw0LvRiyc+XG4gICAgPEdhbGxlcnkvPlxuICA8L0xheW91dD5cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgQmFyID0gKCkgPT4gKFxuICAgIDxOYXZiYXI+XG4gICAgPE5hdmJhci5IZWFkZXI+XG4gICAgICA8TmF2YmFyLkJyYW5kPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPtCc0L7QtNC10YDQsNGC0L7RgDwvYT48L0xpbms+XG4gICAgICA8L05hdmJhci5CcmFuZD5cbiAgICA8L05hdmJhci5IZWFkZXI+XG4gIDwvTmF2YmFyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQmFyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgQ29sLCBSb3csIFBhZ2VIZWFkZXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcbmltcG9ydCBHYWxsZXJ5SXRlbSBmcm9tICcuL0dhbGxlcnlJdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIG1hdGVyaWFsczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzEuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTg6MDMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICcyLmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE3OjU5J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnMy5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxNzo1MSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzQuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDMsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTY6MjAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICc1LmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE1OjM5J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnNi5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxNDoyMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzcuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDMsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTQ6MDgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICc4LmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDEyOjUwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnOS5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxMTowNCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzEwLmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDExOjAyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnMTEuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTA6NTknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICcxMi5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxMDo0NSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgIH1cbiAgXG4gICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgPFJvdz57IHRoaXMuc3RhdGUubWF0ZXJpYWxzLm1hcChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8R2FsbGVyeUl0ZW0ga2V5PXtNYXRoLnJhbmRvbSgpfSB7Li4ubWF0ZXJpYWx9IC8+XG4gICAgICAgICAgICB9KSB9XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0dhbGxlcnkuanMiLCJpbXBvcnQgeyBHcmlkLCBDb2wsIE5hdiwgTmF2SXRlbSwgUm93LCBOYXZiYXJ9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQmFyIGZyb20gJy4vQmFyJ1xuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgdGl0bGUgPSAn0JzQvtC00LXRgNCw0YLQvtGAJyB9KSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+eyB0aXRsZSB9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvbGF0ZXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS9kYXJrbHkvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8R3JpZCBmbHVpZD5cbiAgICAgIDxOYXZiYXI+XG4gICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlJpYWx0bzwvTGluaz5cbiAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICBcbiAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICBcbiAgICAgIDwvTmF2YmFyPlxuICAgICAgPENvbCBtZD17Mn0+XG4gICAgICAgIDxOYXYgYnNTdHlsZT1cInBpbGxzXCIgc3RhY2tlZCBhY3RpdmVLZXk9ezF9ID5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezF9PtCc0LDRgtC10YDQuNCw0LvRizwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi90cmFuc2FjdGlvbnNcIj5cbiAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PXsyfT7QotGA0LDQvdC30LDQutGG0LjQuDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxuICAgICAgICAgICAgPE5hdkl0ZW0gZXZlbnRLZXk9ezN9PtCf0L7Qu9GM0LfQvtCy0LDRgtC10LvQuDwvTmF2SXRlbT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvTmF2PlxuICAgICAgPC9Db2w+XG4gICAgICA8Q29sIG1kPXs3fT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9Db2w+XG4gICAgPC9HcmlkPlxuICA8L2Rpdj5cbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xheW91dC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBDb2wsIEdseXBoaWNvbiwgVGh1bWJuYWlsfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5jb25zdCBzdHlsZSA9IHtcblxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgZm9udFNpemU6ICc0dncnLFxuICB0b3A6ICc0MCUnLFxuICBsZWZ0OiAnNTAlJyxcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcblxuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29sIHhzPXs2fSBtZD17NH0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgICAgPFRodW1ibmFpbCBzcmM9eydzdGF0aWMvJyArIHRoaXMucHJvcHMuaW1nfT5cbiAgICAgICAgICA8R2x5cGhpY29uIHN0eWxlPXtzdHlsZX0gZ2x5cGg9e3RoaXMudHlwZSh0aGlzLnByb3BzLnR5cGUpfSAvPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGV9XG4gICAgICAgIDwvVGh1bWJuYWlsPlxuICAgICAgPC9Db2w+XG4gICAgKTtcbiAgfVxuXG4gIHR5cGUodHlwZSkge1xuXG4gICAgdmFyIGNsYXo7XG5cbiAgICBzd2l0Y2godHlwZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBjbGF6ID0gJ2ZhY2V0aW1lLXZpZGVvJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGNsYXogPSAnY2FtZXJhJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGNsYXogPSAncGxheS1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gY2xhejtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvR2FsbGVyeUl0ZW0uanMiXSwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        