webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(0);\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(97);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Profilecard = function (_Component) {\n  _inherits(Profilecard, _Component);\n\n  function Profilecard(props) {\n    _classCallCheck(this, Profilecard);\n\n    var _this = _possibleConstructorReturn(this, (Profilecard.__proto__ || Object.getPrototypeOf(Profilecard)).call(this, props));\n\n    _this.state = {\n      name: null,\n      tagline: '',\n      taglineshow: _this.props.hasOwnProperty('tag') ? _this.props.tag : ''\n\n    };\n\n    return _this;\n  }\n\n  _createClass(Profilecard, [{\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      var _this2 = this;\n\n      if (!this.props.hasOwnProperty('servicecall')) {\n        var id = window.localStorage.getItem('userid');\n        fetch(\"/api/getuserdetail/\" + id, { method: 'get', headers: { 'Content-Type': 'application/json' } }).then(function (res) {\n          return res.json();\n        }).then(function (json) {\n          console.log(json);\n          if (json.hasOwnProperty('list')) {\n            var obj = { 'name': json.list[0].firstName + \" \" + json.list[0].lastName };\n            if (json.list[0].hasOwnProperty('userDetail')) {\n              obj.tagline = json.list[0].userDetail.hasOwnProperty('aboutme') ? json.list[0].userDetail.aboutme.tagline : '';\n            }\n            console.log(json.list[0].professional);\n            if (json.list[0].hasOwnProperty('professional')) {\n              obj.professional = json.list[0].professional;\n            }\n            _this2.setState(obj);\n          }\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log(this.state);\n      return _react2.default.createElement(\n        \"div\",\n        { className: \"card\" },\n        _react2.default.createElement(\"div\", { className: \"cardheader\" }),\n        _react2.default.createElement(\n          \"h4\",\n          { className: \"text-capitalize\" },\n          this.state.name\n        ),\n        function () {\n          if (_this3.state.hasOwnProperty('professional')) {\n            _this3.state.professional.hasOwnProperty('');\n            return _react2.default.createElement(\n              \"p\",\n              { className: \"title\" },\n              \"CEO & Founder, Example\"\n            );\n          }\n        }(),\n        _react2.default.createElement(\n          \"p\",\n          null,\n          this.state.tagline\n        )\n      );\n    }\n  }]);\n\n  return Profilecard;\n}(_react.Component);\n\nexports.default = Profilecard;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlY2FyZC5qcz81YzI1Il0sIm5hbWVzIjpbIlByb2ZpbGVjYXJkIiwicHJvcHMiLCJzdGF0ZSIsIm5hbWUiLCJ0YWdsaW5lIiwidGFnbGluZXNob3ciLCJoYXNPd25Qcm9wZXJ0eSIsInRhZyIsImlkIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm9iaiIsImxpc3QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJEZXRhaWwiLCJhYm91dG1lIiwicHJvZmVzc2lvbmFsIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxXOzs7QUFFSix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBIQUNWQSxLQURVOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxJQURLO0FBRVhDLGVBQVMsRUFGRTtBQUdYQyxtQkFBYSxNQUFLSixLQUFMLENBQVdLLGNBQVgsQ0FBMkIsS0FBM0IsSUFBb0MsTUFBS0wsS0FBTCxDQUFXTSxHQUEvQyxHQUFxRDs7QUFIdkQsS0FBYjs7QUFGaUI7QUFTbEI7Ozs7eUNBRW9CO0FBQUE7O0FBRW5CLFVBQUksQ0FBQyxLQUFLTixLQUFMLENBQVdLLGNBQVgsQ0FBMkIsYUFBM0IsQ0FBTCxFQUFnRDtBQUM5QyxZQUFJRSxLQUFLQyxPQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE2QixRQUE3QixDQUFUO0FBQ0FDLHNDQUE2QkosRUFBN0IsRUFBbUMsRUFBQ0ssUUFBUSxLQUFULEVBQWdCQyxTQUFTLEVBQUMsZ0JBQWdCLGtCQUFqQixFQUF6QixFQUFuQyxFQUNFQyxJQURGLENBQ1E7QUFBQSxpQkFBT0MsSUFBSUMsSUFBSixFQUFQO0FBQUEsU0FEUixFQUVFRixJQUZGLENBRVEsZ0JBQVE7QUFDZEcsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLGNBQUlBLEtBQUtYLGNBQUwsQ0FBcUIsTUFBckIsQ0FBSixFQUFrQztBQUNoQyxnQkFBSWMsTUFBTSxFQUFDLFFBQVFILEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFDLFNBQWIsR0FBeUIsR0FBekIsR0FBK0JMLEtBQUtJLElBQUwsQ0FBVSxDQUFWLEVBQWFFLFFBQXJELEVBQVY7QUFDQSxnQkFBSU4sS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYWYsY0FBYixDQUE2QixZQUE3QixDQUFKLEVBQWdEO0FBQzlDYyxrQkFBSWhCLE9BQUosR0FBY2EsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUcsVUFBYixDQUF3QmxCLGNBQXhCLENBQXdDLFNBQXhDLElBQXFEVyxLQUFLSSxJQUFMLENBQVUsQ0FBVixFQUFhRyxVQUFiLENBQXdCQyxPQUF4QixDQUFnQ3JCLE9BQXJGLEdBQStGLEVBQTdHO0FBQ0Q7QUFDRGMsb0JBQVFDLEdBQVIsQ0FBWUYsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUssWUFBekI7QUFDQSxnQkFBSVQsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYWYsY0FBYixDQUE2QixjQUE3QixDQUFKLEVBQWtEO0FBQ2hEYyxrQkFBSU0sWUFBSixHQUFtQlQsS0FBS0ksSUFBTCxDQUFVLENBQVYsRUFBYUssWUFBaEM7QUFDRDtBQUNELG1CQUFLQyxRQUFMLENBQWVQLEdBQWY7QUFDRDtBQUNGLFNBZkQ7QUFnQkQ7QUFDRjs7OzZCQUVRO0FBQUE7O0FBQ1hGLGNBQVFDLEdBQVIsQ0FBWSxLQUFLakIsS0FBakI7QUFDRSxhQUNNO0FBQUE7QUFBQSxVQUFLLFdBQVUsTUFBZjtBQUNFLCtDQUFLLFdBQVUsWUFBZixHQURGO0FBRUU7QUFBQTtBQUFBLFlBQUksV0FBVSxpQkFBZDtBQUFpQyxlQUFLQSxLQUFMLENBQVdDO0FBQTVDLFNBRkY7QUFJSyxvQkFBSTtBQUNGLGNBQUksT0FBS0QsS0FBTCxDQUFXSSxjQUFYLENBQTBCLGNBQTFCLENBQUosRUFBK0M7QUFDNUMsbUJBQUtKLEtBQUwsQ0FBV3dCLFlBQVgsQ0FBd0JwQixjQUF4QixDQUF3QyxFQUF4QztBQUNLLG1CQUFRO0FBQUE7QUFBQSxnQkFBRyxXQUFVLE9BQWI7QUFBQTtBQUFBLGFBQVI7QUFDQTtBQUNULFNBTEYsRUFKSjtBQWFFO0FBQUE7QUFBQTtBQUFJLGVBQUtKLEtBQUwsQ0FBV0U7QUFBZjtBQWJGLE9BRE47QUFrQkM7Ozs7OztrQkFJWUosVyIsImZpbGUiOiI5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uL3N0eWxlL2Nzcy9wcm9maWxlY2FyZC5zY3NzXCI7XG5cbmNsYXNzIFByb2ZpbGVjYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyIChwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IG51bGwsXG4gICAgICB0YWdsaW5lOiAnJyxcbiAgICAgIHRhZ2xpbmVzaG93OiB0aGlzLnByb3BzLmhhc093blByb3BlcnR5ICgndGFnJykgPyB0aGlzLnByb3BzLnRhZyA6ICcnXG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkgKCdzZXJ2aWNlY2FsbCcpKSB7XG4gICAgICB2YXIgaWQgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0gKCd1c2VyaWQnKTtcbiAgICAgIGZldGNoIChgL2FwaS9nZXR1c2VyZGV0YWlsLyR7aWR9YCwge21ldGhvZDogJ2dldCcsIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfX1cbiAgICAgICkudGhlbiAocmVzID0+IHJlcy5qc29uICgpXG4gICAgICApLnRoZW4gKGpzb24gPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhqc29uKVxuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eSAoJ2xpc3QnKSkge1xuICAgICAgICAgIHZhciBvYmogPSB7J25hbWUnOiBqc29uLmxpc3RbMF0uZmlyc3ROYW1lICsgXCIgXCIgKyBqc29uLmxpc3RbMF0ubGFzdE5hbWV9XG4gICAgICAgICAgaWYgKGpzb24ubGlzdFswXS5oYXNPd25Qcm9wZXJ0eSAoJ3VzZXJEZXRhaWwnKSkge1xuICAgICAgICAgICAgb2JqLnRhZ2xpbmUgPSBqc29uLmxpc3RbMF0udXNlckRldGFpbC5oYXNPd25Qcm9wZXJ0eSAoJ2Fib3V0bWUnKSA/IGpzb24ubGlzdFswXS51c2VyRGV0YWlsLmFib3V0bWUudGFnbGluZSA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUubG9nKGpzb24ubGlzdFswXS5wcm9mZXNzaW9uYWwpXG4gICAgICAgICAgaWYgKGpzb24ubGlzdFswXS5oYXNPd25Qcm9wZXJ0eSAoJ3Byb2Zlc3Npb25hbCcpKSB7XG4gICAgICAgICAgICBvYmoucHJvZmVzc2lvbmFsID0ganNvbi5saXN0WzBdLnByb2Zlc3Npb25hbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSAob2JqKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZGhlYWRlclwiPjwvZGl2PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj57dGhpcy5zdGF0ZS5uYW1lfTwvaDQ+XG4gICAgICAgICBcbiAgICAgICAgICAgeygoKT0+e1xuICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaGFzT3duUHJvcGVydHkoJ3Byb2Zlc3Npb25hbCcpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByb2Zlc3Npb25hbC5oYXNPd25Qcm9wZXJ0eSAoJycpO1xuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+Q0VPICYgRm91bmRlciwgRXhhbXBsZTwvcD4pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pKCl9IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLnRhZ2xpbmV9PC9wPlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgfVxuICA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVjYXJkO1xuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50L3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZWNhcmQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})