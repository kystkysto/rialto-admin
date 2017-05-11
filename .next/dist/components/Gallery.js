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