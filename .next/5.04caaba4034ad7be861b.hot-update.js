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

__webpack_require__(736);

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
          lineNumber: 87
        }
      }, _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { md: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, this.state.materials.map(function (material) {
        return _react2.default.createElement(_GalleryItem2.default, (0, _extends3.default)({ key: Math.random() }, material, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }));
      })), _react2.default.createElement(_reactBootstrap.Col, { md: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { md: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, '\u0422\u0430\u043A\u043E\u0435 \u0442\u043E \u0432\u0438\u0434\u0435\u043E \u0431\u043B\u0430 \u0431\u043B\u0430 \u0431\u043B\u0430', _react2.default.createElement(_reactTagsinput2.default, { value: this.state.tags, onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement(_reactBootstrap.Image, { src: 'static/' + '12.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), this.props.date, _react2.default.createElement('div', { pullRight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'success', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, '\u041E\u0434\u043E\u0431\u0440\u0438\u0442\u044C'), '\xA0', _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'danger', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbGxlcnkuanM/NDY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0I7Ozs7QUFDVDs7OztBQUMrQjs7QUFDL0I7Ozs7QUFDQTs7OztBQUNQOzs7Ozs7OztrQ0FJRzs7a0JBQVksT0FBTzt3Q0FBQTs7c0lBR2hCOztVQUFLOzthQUlDO2NBQ0E7Y0FBTTtBQUZOLE9BRk87YUFRUDtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47YUFNQTtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47YUFNQTtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FBTTtBQUZOO2FBTUE7Y0FDQTtjQUFNO0FBRk47YUFNQTtjQUNBO2NBQU07QUFGTjthQU1BO2NBQ0E7Y0FHSjtBQUxJO1lBS0UsQ0FBQyxVQUFVO0FBOURqQjtXQWdFSjs7Ozs7aUNBR1csTUFDWDtXQUFLLFNBQVMsRUFBQyxNQUNoQjs7Ozs2QkFHRzs2QkFDRTs7b0JBQUE7c0JBRUU7QUFGRjtBQUFBLHlCQUVHOztvQkFBRDtzQkFDRTtBQURGO0FBQUEseUJBQ0cscUNBQUksSUFBSTtvQkFBVDtzQkFDSTtBQURKO2NBQ1MsTUFBTSxVQUFVLElBQUksb0JBQ3pCOytCQUFRLDhEQUFZLEtBQUssS0FBSyxZQUFjOztzQkFBckM7d0JBQ1I7QUFEUTtBQUFBO0FBR1gsMkJBQUMscUNBQUksSUFBSTtvQkFBVDtzQkFDRTtBQURGO3lCQUNHLHFDQUFJLElBQUk7b0JBQVQ7c0JBQUE7QUFBQTtTQUVFLHVKQUFDLDBDQUFVLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLO29CQUFsRDtzQkFDQTtBQURBOzBCQUNDLHVDQUFNLEtBQUssWUFBYztvQkFBMUI7c0JBQ0M7QUFERDtlQUNNLE1BQ04sNkNBQUssV0FBTDtvQkFBQTtzQkFDRTtBQURGO3lCQUNHLHdDQUFPLFNBQVE7b0JBQWhCO3NCQUFBO0FBQUE7U0FBQSxxREFDQSx3QkFBQyx3Q0FBTyxTQUFRO29CQUFoQjtzQkFBQTtBQUFBO1NBT2Q7Ozs7O0FBdEd5QiIsImZpbGUiOiI1LjA0Y2FhYmE0MDM0YWQ3YmU4NjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBDb2wsIFJvdywgUGFnZUhlYWRlciwgSW1hZ2UsIEJ1dHRvbn0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IEdhbGxlcnlJdGVtIGZyb20gJy4vR2FsbGVyeUl0ZW0nXG5pbXBvcnQgVGFnc0lucHV0IGZyb20gJ3JlYWN0LXRhZ3NpbnB1dCdcbmltcG9ydCAncmVhY3QtdGFnc2lucHV0L3JlYWN0LXRhZ3NpbnB1dC5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgXG4gICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgIFxuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgbWF0ZXJpYWxzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnMS5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxODowMydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzIuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTc6NTknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICczLmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE3OjUxJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnNC5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMyxcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxNjoyMCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzUuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTU6MzknXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICc2LmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE0OjIwJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnNy5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMyxcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxNDowOCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzguanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTI6NTAnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICc5LmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDExOjA0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnMTAuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTE6MDInXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICcxMS5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxMDo1OSdcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzEyLmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDEwOjQ1J1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgdGFnczogWyfQsNCy0LDRgNC40Y8nLCAn0LrQvtGI0LzQsNGAJ11cbiAgICAgIH1cbiAgIH1cbiAgXG5cbiAgaGFuZGxlQ2hhbmdlKHRhZ3MpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0YWdzfSlcbiAgfVxuXG4gICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezZ9PlxuICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUubWF0ZXJpYWxzLm1hcChtYXRlcmlhbCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxHYWxsZXJ5SXRlbSBrZXk9e01hdGgucmFuZG9tKCl9IHsuLi5tYXRlcmlhbH0gLz5cbiAgICAgICAgICAgICAgfSkgfVxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIG1kPXs2fT5cbiAgICAgICAgICAgICAgPENvbCBtZD17MTJ9ID5cbiAgICAgICAgICAgICAgICDQotCw0LrQvtC1INGC0L4g0LLQuNC00LXQviDQsdC70LAg0LHQu9CwINCx0LvQsFxuICAgICAgICAgICAgICAgIDxUYWdzSW5wdXQgdmFsdWU9e3RoaXMuc3RhdGUudGFnc30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9eydzdGF0aWMvJyArICAgJzEyLmpwZyd9PjwvSW1hZ2U+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0ZX1cbiAgICAgICAgICAgICAgICA8ZGl2IHB1bGxSaWdodD5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInN1Y2Nlc3NcIj7QntC00L7QsdGA0LjRgtGMPC9CdXR0b24+Jm5ic3A7XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJkYW5nZXJcIj7QntGC0LrQt9Cw0YLRjDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9HYWxsZXJ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==