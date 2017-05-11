webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbGxlcnkuanM/NDY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0I7Ozs7QUFDVDs7OztBQUMrQjs7QUFDL0I7Ozs7QUFDQTs7Ozs7Ozs7OztrQ0FJSjs7a0JBQVksT0FBTzt3Q0FBQTs7c0lBR2hCOztVQUFLOzthQUlDO2NBQ0E7Y0FBTTtBQUZOLE9BRk87YUFRUDtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47YUFNQTtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47YUFNQTtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47YUFNQTtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FHSjtBQUxJO1lBS0UsQ0FBQyxVQUFVO0FBOURqQjtXQWdFSjs7Ozs7aUNBR1csTUFDWDtXQUFLLFNBQVMsRUFBQyxNQUNoQjs7Ozs2QkFHQzs2QkFDRTs7b0JBQUE7c0JBRUU7QUFGRjtBQUFBLHlCQUVHOztvQkFBRDtzQkFDRTtBQURGO0FBQUEseUJBQ0cscUNBQUksSUFBSTtvQkFBVDtzQkFDSTtBQURKO2NBQ1MsTUFBTSxVQUFVLElBQUksb0JBQ3pCOytCQUFRLDhEQUFZLEtBQUssS0FBSyxZQUFjOztzQkFBckM7d0JBQ1I7QUFEUTtBQUFBO0FBR1gsMkJBQUMscUNBQUksSUFBSTtvQkFBVDtzQkFDRTtBQURGO3lCQUNHLHFDQUFJLElBQUk7b0JBQVQ7c0JBQUE7QUFBQTtTQUVFLHVKQUFDLDBDQUFVLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLGFBQWEsS0FBSztvQkFBcEU7c0JBQ0E7QUFEQTswQkFDQyx1Q0FBTSxLQUFLLFlBQWM7b0JBQTFCO3NCQUNDO0FBREQ7ZUFDTSxNQUNOOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0csd0NBQU8sU0FBUTtvQkFBaEI7c0JBQUE7QUFBQTtTQUFBLHFEQUNBLHdCQUFDLHdDQUFPLFNBQVE7b0JBQWhCO3NCQUFBO0FBQUE7U0FPYjs7Ozs7QUF0RzBCIiwiZmlsZSI6IjUuNmQzNmYwMWQ4MmE4YjAzOWZmZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IENvbCwgUm93LCBQYWdlSGVhZGVyLCBJbWFnZSwgQnV0dG9ufSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgR2FsbGVyeUl0ZW0gZnJvbSAnLi9HYWxsZXJ5SXRlbSdcbmltcG9ydCBUYWdzSW5wdXQgZnJvbSAncmVhY3QtdGFnc2lucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIG1hdGVyaWFsczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzEuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDEsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTg6MDMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICcyLmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE3OjU5J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnMy5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxNzo1MSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzQuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDMsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTY6MjAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICc1LmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE1OjM5J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnNi5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxNDoyMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzcuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDMsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTQ6MDgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICc4LmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDEyOjUwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnOS5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxMTowNCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzEwLmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDExOjAyJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnMTEuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTA6NTknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICcxMi5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxMDo0NSdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHRhZ3M6IFsn0LDQstCw0YDQuNGPJywgJ9C60L7RiNC80LDRgCddXG4gICAgICB9XG4gICB9XG4gIFxuXG4gIGhhbmRsZUNoYW5nZSh0YWdzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGFnc30pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5tYXRlcmlhbHMubWFwKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxHYWxsZXJ5SXRlbSBrZXk9e01hdGgucmFuZG9tKCl9IHsuLi5tYXRlcmlhbH0gLz5cbiAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSA+XG4gICAgICAgICAgICAgINCi0LDQutC+0LUg0YLQviDQstC40LTQtdC+INCx0LvQsCDQsdC70LAg0LHQu9CwXG4gICAgICAgICAgICAgIDxUYWdzSW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudGFnc30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9eydzdGF0aWMvJyArICAgJzEyLmpwZyd9PjwvSW1hZ2U+XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGV9XG4gICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIj7QntC00L7QsdGA0LjRgtGMPC9CdXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwiZGFuZ2VyXCI+0J7RgtC60LfQsNGC0Yw8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9HYWxsZXJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==