'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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