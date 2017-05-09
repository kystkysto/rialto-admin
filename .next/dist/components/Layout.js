'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Bar = require('./Bar');

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