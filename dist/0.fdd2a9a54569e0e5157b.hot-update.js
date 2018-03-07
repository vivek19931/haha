webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(97);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : ''\n\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          console.log(json);\n          if (json.hasOwnProperty('list')) {\n            var obj = { 'name': json.list[0].firstName + \" \" + json.list[0].lastName };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n            }\n            if (json.list[0].hasOwnProperty('professional')) {\n              obj.professional = json.list[0].professional;\n            }\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log(this.state);\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"div\", { className: \"cardheader\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"text-capitalize\" },\n          this.state.name\n        ),\n        function () {\n          if (_this3.state.hasOwnProperty('professional')) {\n            return _this3.state.userDetail.userDetail.professional.occupation;\n          }\n        }(),\n        _react2.default.createElement(\n          \"p\",\n          { className: \"title\" },\n          \"CEO & Founder, Example\"\n        ),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          this.state.tagline\n        )\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9iaiIsImxpc3QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJEZXRhaWwiLCJhYm91dG1lIiwicHJvZmVzc2lvbmFsIiwic2V0U3RhdGUiLCJvY2N1cGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBRUosdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDVkEsS0FEVTs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sSUFESztBQUVYQyxlQUFTLEVBRkU7QUFHWEMsbUJBQWEsTUFBS0osS0FBTCxDQUFXSyxjQUFYLENBQTJCLEtBQTNCLElBQW9DLE1BQUtMLEtBQUwsQ0FBV00sR0FBL0MsR0FBcUQ7O0FBSHZELEtBQWI7O0FBRmlCO0FBU2xCOzs7O3lDQUVvQjtBQUFBOztBQUVuQixVQUFJLENBQUMsS0FBS04sS0FBTCxDQUFXSyxjQUFYLENBQTJCLGFBQTNCLENBQUwsRUFBZ0Q7QUFDOUMsWUFBSUUsS0FBS0MsT0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNkIsUUFBN0IsQ0FBVDtBQUNBQyxzQ0FBNkJKLEVBQTdCLEVBQW1DLEVBQUNLLFFBQVEsS0FBVCxFQUFnQkMsU0FBUyxFQUFDLGdCQUFnQixrQkFBakIsRUFBekIsRUFBbkMsRUFDRUMsSUFERixDQUNRO0FBQUEsaUJBQU9DLElBQUlDLElBQUosRUFBUDtBQUFBLFNBRFIsRUFFRUYsSUFGRixDQUVRLGdCQUFRO0FBQ2RHLGtCQUFRQyxHQUFSLENBQVlGLElBQVo7QUFDQSxjQUFJQSxLQUFLWCxjQUFMLENBQXFCLE1BQXJCLENBQUosRUFBa0M7QUFDaEMsZ0JBQUljLE1BQU0sRUFBQyxRQUFRSCxLQUFLSSxJQUFMLENBQVUsQ0FBVixFQUFhQyxTQUFiLEdBQXlCLEdBQXpCLEdBQStCTCxLQUFLSSxJQUFMLENBQVUsQ0FBVixFQUFhRSxRQUFyRCxFQUFWO0FBQ0EsZ0JBQUlOLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFmLGNBQWIsQ0FBNkIsWUFBN0IsQ0FBSixFQUFnRDtBQUM5Q2Msa0JBQUloQixPQUFKLEdBQWNhLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFHLFVBQWIsQ0FBd0JsQixjQUF4QixDQUF3QyxTQUF4QyxJQUFxRFcsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUcsVUFBYixDQUF3QkMsT0FBeEIsQ0FBZ0NyQixPQUFyRixHQUErRixFQUE3RztBQUNEO0FBQ0QsZ0JBQUlhLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFmLGNBQWIsQ0FBNkIsY0FBN0IsQ0FBSixFQUFrRDtBQUNoRGMsa0JBQUlNLFlBQUosR0FBbUJULEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFLLFlBQWhDO0FBQ0Q7QUFDRCxtQkFBS0MsUUFBTCxDQUFlUCxHQUFmO0FBQ0Q7QUFDRixTQWREO0FBZUQ7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1hGLGNBQVFDLEdBQVIsQ0FBWSxLQUFLakIsS0FBakI7QUFDRSxhQUNNO0FBQUE7QUFBQSxVQUFLLFdBQVUsTUFBZjtBQUNFLCtDQUFLLFdBQVUsWUFBZixHQURGO0FBRUU7QUFBQTtBQUFBLFlBQUksV0FBVSxpQkFBZDtBQUFpQyxlQUFLQSxLQUFMLENBQVdDO0FBQTVDLFNBRkY7QUFJSyxvQkFBSTtBQUNGLGNBQUksT0FBS0QsS0FBTCxDQUFXSSxjQUFYLENBQTBCLGNBQTFCLENBQUosRUFBK0M7QUFDakMsbUJBQVEsT0FBS0osS0FBTCxDQUFXc0IsVUFBWCxDQUFzQkEsVUFBdEIsQ0FBaUNFLFlBQWpDLENBQThDRSxVQUF0RDtBQUNOO0FBQ1QsU0FKRixFQUpKO0FBV0U7QUFBQTtBQUFBLFlBQUcsV0FBVSxPQUFiO0FBQUE7QUFBQSxTQVhGO0FBWUU7QUFBQTtBQUFBO0FBQUksZUFBSzFCLEtBQUwsQ0FBV0U7QUFBZjtBQVpGLE9BRE47QUFpQkM7Ozs7OztrQkFJWUosVyIsImZpbGUiOiI5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uL3N0eWxlL2Nzcy9wcm9maWxlY2FyZC5zY3NzXCI7XG5cbmNsYXNzIFByb2ZpbGVjYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IG51bGwsXG4gICAgICB0YWdsaW5lOiAnJyxcbiAgICAgIHRhZ2xpbmVzaG93OiB0aGlzLnByb3BzLmhhc093blByb3BlcnR5ICgndGFnJykgPyB0aGlzLnByb3BzLnRhZyA6ICcnXG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkgKCdzZXJ2aWNlY2FsbCcpKSB7XG4gICAgICB2YXIgaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKTtcbiAgICAgIGZldGNoIChgL2FwaS9nZXR1c2VyZGV0YWlsLyR7aWR9YCwge21ldGhvZDogJ2dldCcsIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX1cbiAgICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpXG4gICAgICApLnRoZW4gKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eSAoJ2xpc3QnKSkge1xuICAgICAgICAgIHZhciBvYmogPSB7J25hbWUnOiBqc29uLmxpc3RbMF0uZmlyc3ROYW1lICsgXCIgXCIgKyBqc29uLmxpc3RbMF0ubGFzdE5hbWV9XG4gICAgICAgICAgaWYgKGpzb24ubGlzdFswXS5oYXNPd25Qcm9wZXJ0eSAoJ3VzZXJEZXRhaWwnKSkge1xuICAgICAgICAgICAgb2JqLnRhZ2xpbmUgPSBqc29uLmxpc3RbMF0udXNlckRldGFpbC5oYXNPd25Qcm9wZXJ0eSAoJ2Fib3V0bWUnKSA/IGpzb24ubGlzdFswXS51c2VyRGV0YWlsLmFib3V0bWUudGFnbGluZSA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChqc29uLmxpc3RbMF0uaGFzT3duUHJvcGVydHkgKCdwcm9mZXNzaW9uYWwnKSkge1xuICAgICAgICAgICAgb2JqLnByb2Zlc3Npb25hbCA9IGpzb24ubGlzdFswXS5wcm9mZXNzaW9uYWw7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUgKG9iaik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbmNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRoZWFkZXJcIj48L2Rpdj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCI+e3RoaXMuc3RhdGUubmFtZX08L2g0PlxuICAgICAgICAgXG4gICAgICAgICAgIHsoKCk9PntcbiAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KCdwcm9mZXNzaW9uYWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIHRoaXMuc3RhdGUudXNlckRldGFpbC51c2VyRGV0YWlsLnByb2Zlc3Npb25hbC5vY2N1cGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9KSgpfSBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPkNFTyAmIEZvdW5kZXIsIEV4YW1wbGU8L3A+XG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUudGFnbGluZX08L3A+XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICB9XG4gIDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZWNhcmQ7XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})