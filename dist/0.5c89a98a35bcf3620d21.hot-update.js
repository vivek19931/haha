webpackHotUpdate(0,{

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _header = __webpack_require__(77);\n\nvar _header2 = _interopRequireDefault(_header);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Landing = function (_Component) {\n  _inherits(Landing, _Component);\n\n  function Landing(props) {\n    _classCallCheck(this, Landing);\n\n    var _this = _possibleConstructorReturn(this, (Landing.__proto__ || Object.getPrototypeOf(Landing)).call(this, props));\n\n    _this.state = {\n      currentuser: window.localStorage.getItem('userid')\n    };\n    return _this;\n  }\n\n  _createClass(Landing, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'row content' },\n          function () {\n            if (_this2.state.currentuser) {\n              return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                  'div',\n                  { className: 'col-md-3 col-sm-6' },\n                  _react2.default.createElement(_header2.default, null)\n                ),\n                _react2.default.createElement('div', { className: 'col-md-6 col-sm-6' }),\n                _react2.default.createElement('div', { className: 'col-md-3 col-sm-6' })\n              );\n            } else {\n              return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                  'div',\n                  { className: 'col-md-8 col-sm-8' },\n                  '2'\n                ),\n                _react2.default.createElement('div', { className: 'col-md-4 col-sm-4' })\n              );\n            }\n          }()\n        )\n      );\n    }\n  }]);\n\n  return Landing;\n}(_react.Component);\n\n;\n\nexports.default = Landing;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvbGFuZGluZy5qcz9kOGEyIl0sIm5hbWVzIjpbIkxhbmRpbmciLCJwcm9wcyIsInN0YXRlIiwiY3VycmVudHVzZXIiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBRUE7Ozs7Ozs7Ozs7OztJQUNNQSxPOzs7QUFFSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWFDLE9BQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTZCLFFBQTdCO0FBREYsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxhQUFmO0FBR0ssc0JBQU07QUFDTCxnQkFBSSxPQUFLSixLQUFMLENBQVdDLFdBQWYsRUFBNEI7QUFDeEIscUJBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsbUJBQWY7QUFDRTtBQURGLGlCQURGO0FBSUUsdURBQUssV0FBVSxtQkFBZixHQUpGO0FBT0UsdURBQUssV0FBVSxtQkFBZjtBQVBGLGVBREY7QUFhUCxhQWRHLE1BY0M7QUFDSyxxQkFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxtQkFBZjtBQUFBO0FBQUEsaUJBREY7QUFJRSx1REFBSyxXQUFVLG1CQUFmO0FBSkYsZUFERjtBQVVUO0FBRUEsV0E1QkM7QUFISjtBQURGLE9BREY7QUE0Q0Q7Ozs7OztBQUVIOztrQkFFZUgsTyIsImZpbGUiOiI5NC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyJztcbmNsYXNzIExhbmRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIgKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudHVzZXI6IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSAoJ3VzZXJpZCcpXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgY29udGVudFwiPlxuICAgICAgXG4gICAgICAgICAge1xuICAgICAgICAgICAgKCgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wtc20tNlwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04IGNvbC1zbS04XCI+XG4gICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTRcIj4gXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgXG4gICAgICAgICAgfSkoKVxuICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgXG4gICAgICBcbiAgICAgIFxuICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgICAgICApO1xuICB9XG59XG47XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL0NvbnRhaW5lcnMvbGFuZGluZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///94\n");

/***/ })

})