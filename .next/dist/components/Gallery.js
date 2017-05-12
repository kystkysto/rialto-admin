'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _reactBootstrap = require('react-bootstrap');

var _GalleryItem = require('./GalleryItem');

var _GalleryItem2 = _interopRequireDefault(_GalleryItem);

var _reactTagsinput = require('react-tagsinput');

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