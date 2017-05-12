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


var style = {
  overflow: {
    'overflow-y': 'scroll',
    height: '800px'
  },
  full: {
    width: '100%',
    background: 'transparent',
    color: '#fff',
    'font-size': '2vw'
  },
  div: {
    width: '100%',
    background: '#353232',
    height: '4vw',
    padding: '10px',
    'border-radius': '5px'
  }
};

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      materials: [{
        img: '1.jpg',
        type: 1,
        date: 'Сегодня в 18:03',
        title: 'Тестовый тайтл'
      }, {
        img: '2.jpg',
        type: 2,
        date: 'Сегодня в 17:59',
        title: 'Тестовый тайтл'
      }, {
        img: '3.jpg',
        type: 2,
        date: 'Сегодня в 17:51',
        title: 'Тестовый тайтл'
      }, {
        img: '4.jpg',
        type: 3,
        date: 'Сегодня в 16:20',
        title: 'Тестовый тайтл'
      }, {
        img: '5.jpg',
        type: 2,
        date: 'Сегодня в 15:39',
        title: 'Тестовый тайтл'
      }, {
        img: '6.jpg',
        type: 2,
        date: 'Сегодня в 14:20',
        title: 'Тестовый тайтл'
      }, {
        img: '7.jpg',
        type: 3,
        date: 'Сегодня в 14:08',
        title: 'Тестовый тайтл'
      }, {
        img: '8.jpg',
        type: 2,
        date: 'Сегодня в 12:50',
        title: 'Тестовый тайтл'
      }, {
        img: '9.jpg',
        type: 2,
        date: 'Сегодня в 11:04',
        title: 'Тестовый тайтл'
      }, {
        img: '10.jpg',
        type: 2,
        date: 'Сегодня в 11:02',
        title: 'Тестовый тайтл'
      }, {
        img: '11.jpg',
        type: 2,
        date: 'Сегодня в 10:59',
        title: 'Тестовый тайтл'
      }, {
        img: '12.jpg',
        type: 2,
        date: 'Сегодня в 10:45',
        title: 'Тестовый тайтл'
      }],
      tags: ['авария', 'кошмар'],
      current: {
        img: '12.jpg',
        type: 2,
        date: 'Сегодня в 10:45',
        title: 'Тестовый тайтл'
      }
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'handleChange',
    value: function handleChange(tags) {
      this.setState({ tags: tags });
    }
  }, {
    key: 'setCurrent',
    value: function setCurrent(current) {
      this.setState({ current: current });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), _react2.default.createElement(_reactBootstrap.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { md: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement('div', { style: style.overflow, __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, this.state.materials.map(function (material) {
        return _react2.default.createElement(_GalleryItem2.default, (0, _extends3.default)({ key: Math.random() }, material, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 134
          }
        }));
      }))), _react2.default.createElement(_reactBootstrap.Col, { md: 5, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement('input', { type: 'text', value: this.state.current.title, style: style.full, __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }), _react2.default.createElement(_reactTagsinput2.default, { value: this.state.tags, onChange: this.handleChange.bind(this), __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), _react2.default.createElement(_reactBootstrap.Image, { src: 'static/' + this.state.current.img, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }), this.props.date, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'success', __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, '\u041E\u0434\u043E\u0431\u0440\u0438\u0442\u044C'), '\xA0', _react2.default.createElement(_reactBootstrap.Button, { pullRight: true, bsStyle: 'danger', __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, '\u041E\u0442\u043A\u0437\u0430\u0442\u044C'))), _react2.default.createElement(_reactBootstrap.Col, { md: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement('div', { style: style.div, __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react2.default.createElement(_reactBootstrap.Col, { md: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement(_reactBootstrap.Image, { src: '/static/default-userpic.png', circle: true, style: style.full, __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      })), _react2.default.createElement(_reactBootstrap.Col, { md: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement(_reactBootstrap.Image, { src: '/static/default-userpic.png', circle: true, style: style.full, __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      })), _react2.default.createElement(_reactBootstrap.Col, { md: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement(_reactBootstrap.Image, { src: '/static/default-userpic.png', circle: true, style: style.full, __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      })), _react2.default.createElement(_reactBootstrap.Col, { md: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_reactBootstrap.Image, { src: '/static/default-userpic.png', circle: true, style: style.full, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      })))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/vagrant/rialto-site/components/Gallery.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/vagrant/rialto-site/components/Gallery.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dhbGxlcnkuanM/NDY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0I7Ozs7QUFDVDs7OztBQUN1Qzs7QUFDdkM7Ozs7QUFDQTs7Ozs7Ozs7O0FBRVAsSUFBTTs7a0JBR0Y7WUFFRjtBQUhFOztXQUtBO2dCQUNBO1dBQ0E7aUJBRUY7QUFMRTs7V0FPQTtnQkFDQTtZQUNBO2FBQ0E7cUJBQWlCO0FBSmI7QUFYTjs7O2tDQXFCQTs7a0JBQVksT0FBTzt3Q0FBQTs7c0lBR2Y7O1VBQUs7O2FBSUM7Y0FDQTtjQUNBO2VBQU87QUFIUCxPQUZPO2FBU1A7Y0FDQTtjQUNBO2VBQU87QUFIUDthQU9BO2NBQ0E7Y0FDQTtlQUFPO0FBSFA7YUFPQTtjQUNBO2NBQ0E7ZUFBTztBQUhQO2FBT0E7Y0FDQTtjQUNBO2VBQU87QUFIUDthQU9BO2NBQ0E7Y0FDQTtlQUFPO0FBSFA7YUFPQTtjQUNBO2NBQ0E7ZUFBTztBQUhQO2FBT0E7Y0FDQTtjQUNBO2VBQU87QUFIUDthQU9BO2NBQ0E7Y0FDQTtlQUFPO0FBSFA7YUFPQTtjQUNBO2NBQ0E7ZUFBTztBQUhQO2FBT0E7Y0FDQTtjQUNBO2VBQU87QUFIUDthQU9BO2NBQ0E7Y0FDQTtlQUdKO0FBTkk7WUFNRSxDQUFDLFVBQ1A7O2FBRUk7Y0FDQTtjQUNBO2VBQU87QUFIUDtBQTVFSjtXQWtGTDs7Ozs7aUNBRVksTUFDWDtXQUFLLFNBQVMsRUFBQyxNQUNoQjs7OzsrQkFFVSxTQUNUO1dBQUssU0FBUyxFQUFDLFNBQ2hCOzs7OzZCQUdDOzZCQUNFOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0c7O29CQUFEO3NCQUVBO0FBRkE7QUFBQSwwQkFFQzs7b0JBQUQ7c0JBQ0U7QUFERjtBQUFBLHlCQUNHLHFDQUFJLElBQUk7b0JBQVQ7c0JBQ0U7QUFERjt5QkFDRSx1QkFBSyxPQUFPLE1BQU07b0JBQWxCO3NCQUNJO0FBREo7Y0FDUyxNQUFNLFVBQVUsSUFBSSxvQkFDekI7K0JBQVEsOERBQVksS0FBSyxLQUFLLFlBQWM7O3NCQUFyQzt3QkFDUjtBQURRO0FBQUE7QUFJYiw0QkFBQyxxQ0FBSSxJQUFJO29CQUFUO3NCQUNBO0FBREE7a0RBQ08sTUFBSyxRQUFPLE9BQU8sS0FBSyxNQUFNLFFBQVEsT0FBTyxPQUFPLE1BQU07b0JBQWpFO3NCQUNBO0FBREE7MEJBQ0MsMENBQVUsT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssYUFBYSxLQUFLO29CQUFwRTtzQkFDQTtBQURBOzBCQUNDLHVDQUFNLEtBQUssWUFBYSxLQUFLLE1BQU0sUUFBUTtvQkFBNUM7c0JBQ0M7QUFERDtlQUNNLE1BQ047O29CQUFBO3NCQUNFO0FBREY7QUFBQSx5QkFDRyx3Q0FBTyxTQUFRO29CQUFoQjtzQkFBQTtBQUFBO1NBQUEscURBQ0Esd0JBQUMsd0NBQU8sV0FBUixNQUFrQixTQUFRO29CQUExQjtzQkFBQTtBQUFBO1NBR0YsaUVBQUMscUNBQUksSUFBSTtvQkFBVDtzQkFDRTtBQURGO3lCQUNFOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0UsdUJBQUssT0FBTyxNQUFNO29CQUFsQjtzQkFDRTtBQURGO3lCQUNHLHFDQUFJLElBQUk7b0JBQVQ7c0JBQ0U7QUFERjt5QkFDRyx1Q0FBTSxLQUFJLCtCQUE4QixRQUF6QyxNQUFnRCxPQUFPLE1BQU07b0JBQTdEO3NCQUVGO0FBRkU7MkJBRUQscUNBQUksSUFBSTtvQkFBVDtzQkFDRTtBQURGO3lCQUNHLHVDQUFNLEtBQUksK0JBQThCLFFBQXpDLE1BQWdELE9BQU8sTUFBTTtvQkFBN0Q7c0JBRUY7QUFGRTsyQkFFRCxxQ0FBSSxJQUFJO29CQUFUO3NCQUNFO0FBREY7eUJBQ0csdUNBQU0sS0FBSSwrQkFBOEIsUUFBekMsTUFBZ0QsT0FBTyxNQUFNO29CQUE3RDtzQkFFRjtBQUZFOzJCQUVELHFDQUFJLElBQUk7b0JBQVQ7c0JBQ0U7QUFERjt5QkFDRyx1Q0FBTSxLQUFJLCtCQUE4QixRQUF6QyxNQUFnRCxPQUFPLE1BQU07b0JBQTdEO3NCQVFmO0FBUmU7Ozs7OztBQXRJVyIsImZpbGUiOiI1Ljc1NWIzYTk3YTIxNzQyMmRmZjJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBDb2wsIFJvdywgUGFnZUhlYWRlciwgSW1hZ2UsIEJ1dHRvbiwgV2VsbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuaW1wb3J0IEdhbGxlcnlJdGVtIGZyb20gJy4vR2FsbGVyeUl0ZW0nXG5pbXBvcnQgVGFnc0lucHV0IGZyb20gJ3JlYWN0LXRhZ3NpbnB1dCdcblxuY29uc3Qgc3R5bGUgPSB7XG4gIG92ZXJmbG93OiB7XG4gICAgJ292ZXJmbG93LXknOiAnc2Nyb2xsJyxcbiAgICBoZWlnaHQ6ICc4MDBweCdcbiAgfSxcbiAgZnVsbDoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgICdmb250LXNpemUnOiAnMnZ3J1xuICB9LFxuICBkaXY6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICBiYWNrZ3JvdW5kOiAnIzM1MzIzMicsXG4gICAgaGVpZ2h0OiAnNHZ3JyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgJ2JvcmRlci1yYWRpdXMnOiAnNXB4J1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICBtYXRlcmlhbHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICcxLmpwZycsXG4gICAgICAgICAgICB0eXBlOiAxLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE4OjAzJyxcbiAgICAgICAgICAgIHRpdGxlOiAn0KLQtdGB0YLQvtCy0YvQuSDRgtCw0LnRgtC7J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnMi5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxNzo1OScsXG4gICAgICAgICAgICB0aXRsZTogJ9Ci0LXRgdGC0L7QstGL0Lkg0YLQsNC50YLQuydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzMuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTc6NTEnLFxuICAgICAgICAgICAgdGl0bGU6ICfQotC10YHRgtC+0LLRi9C5INGC0LDQudGC0LsnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICc0LmpwZycsXG4gICAgICAgICAgICB0eXBlOiAzLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE2OjIwJyxcbiAgICAgICAgICAgIHRpdGxlOiAn0KLQtdGB0YLQvtCy0YvQuSDRgtCw0LnRgtC7J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnNS5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxNTozOScsXG4gICAgICAgICAgICB0aXRsZTogJ9Ci0LXRgdGC0L7QstGL0Lkg0YLQsNC50YLQuydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzYuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTQ6MjAnLFxuICAgICAgICAgICAgdGl0bGU6ICfQotC10YHRgtC+0LLRi9C5INGC0LDQudGC0LsnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICc3LmpwZycsXG4gICAgICAgICAgICB0eXBlOiAzLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDE0OjA4JyxcbiAgICAgICAgICAgIHRpdGxlOiAn0KLQtdGB0YLQvtCy0YvQuSDRgtCw0LnRgtC7J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnOC5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxMjo1MCcsXG4gICAgICAgICAgICB0aXRsZTogJ9Ci0LXRgdGC0L7QstGL0Lkg0YLQsNC50YLQuydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzkuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTE6MDQnLFxuICAgICAgICAgICAgdGl0bGU6ICfQotC10YHRgtC+0LLRi9C5INGC0LDQudGC0LsnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpbWc6ICcxMC5qcGcnLFxuICAgICAgICAgICAgdHlwZTogMixcbiAgICAgICAgICAgIGRhdGU6ICfQodC10LPQvtC00L3RjyDQsiAxMTowMicsXG4gICAgICAgICAgICB0aXRsZTogJ9Ci0LXRgdGC0L7QstGL0Lkg0YLQsNC50YLQuydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGltZzogJzExLmpwZycsXG4gICAgICAgICAgICB0eXBlOiAyLFxuICAgICAgICAgICAgZGF0ZTogJ9Ch0LXQs9C+0LTQvdGPINCyIDEwOjU5JyxcbiAgICAgICAgICAgIHRpdGxlOiAn0KLQtdGB0YLQvtCy0YvQuSDRgtCw0LnRgtC7J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgaW1nOiAnMTIuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTA6NDUnLFxuICAgICAgICAgICAgdGl0bGU6ICfQotC10YHRgtC+0LLRi9C5INGC0LDQudGC0LsnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICB0YWdzOiBbJ9Cw0LLQsNGA0LjRjycsICfQutC+0YjQvNCw0YAnXSxcbiAgICAgICAgY3VycmVudDoge1xuICAgICAgICAgICAgaW1nOiAnMTIuanBnJyxcbiAgICAgICAgICAgIHR5cGU6IDIsXG4gICAgICAgICAgICBkYXRlOiAn0KHQtdCz0L7QtNC90Y8g0LIgMTA6NDUnLFxuICAgICAgICAgICAgdGl0bGU6ICfQotC10YHRgtC+0LLRi9C5INGC0LDQudGC0LsnXG4gICAgICAgICAgfVxuICAgICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHRhZ3MpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0YWdzfSlcbiAgfVxuXG4gIHNldEN1cnJlbnQoY3VycmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnR9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Um93PlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIG1kPXs0fSA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5vdmVyZmxvd30+XG4gICAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5tYXRlcmlhbHMubWFwKG1hdGVyaWFsID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEdhbGxlcnlJdGVtIGtleT17TWF0aC5yYW5kb20oKX0gey4uLm1hdGVyaWFsfSAvPlxuICAgICAgICAgICAgICB9KSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIG1kPXs1fT5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jdXJyZW50LnRpdGxlfSBzdHlsZT17c3R5bGUuZnVsbH0+PC9pbnB1dD5cbiAgICAgICAgICA8VGFnc0lucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnRhZ3N9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgIDxJbWFnZSBzcmM9eydzdGF0aWMvJyArICB0aGlzLnN0YXRlLmN1cnJlbnQuaW1nfT48L0ltYWdlPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGV9XG4gICAgICAgICAgPGRpdj4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJzdWNjZXNzXCI+0J7QtNC+0LHRgNC40YLRjDwvQnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgPEJ1dHRvbiBwdWxsUmlnaHQgYnNTdHlsZT1cImRhbmdlclwiPtCe0YLQutC30LDRgtGMPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgPENvbCBtZD17M30+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5kaXZ9PlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezN9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9zdGF0aWMvZGVmYXVsdC11c2VycGljLnBuZ1wiIGNpcmNsZSBzdHlsZT17c3R5bGUuZnVsbH0vPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezN9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9zdGF0aWMvZGVmYXVsdC11c2VycGljLnBuZ1wiIGNpcmNsZSBzdHlsZT17c3R5bGUuZnVsbH0vPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezN9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9zdGF0aWMvZGVmYXVsdC11c2VycGljLnBuZ1wiIGNpcmNsZSBzdHlsZT17c3R5bGUuZnVsbH0vPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezN9PlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9zdGF0aWMvZGVmYXVsdC11c2VycGljLnBuZ1wiIGNpcmNsZSBzdHlsZT17c3R5bGUuZnVsbH0vPlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0dhbGxlcnkuanMiXSwic291cmNlUm9vdCI6IiJ9