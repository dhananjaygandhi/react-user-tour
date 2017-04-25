"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _arrowStyles = require("./helpers/arrow-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arrow = function Arrow(_ref) {
	var position = _ref.position;
	var width = _ref.width;
	var height = _ref.height;
	var size = _ref.size;
	var color = _ref.color;

	var arrowStyle = undefined;
	switch (position) {
		case "left":
			arrowStyle = (0, _arrowStyles.arrowRight)({ size: size, color: color });
			arrowStyle.left = width;
			break;
		case "right":
			arrowStyle = (0, _arrowStyles.arrowLeft)({ size: size, color: color });
			break;
		case "top":
			arrowStyle = (0, _arrowStyles.arrowDown)({ size: size, color: color });
			arrowStyle.top = height;
			break;
		case "topLeft":
			arrowStyle = (0, _arrowStyles.arrowDown)({ size: size, color: color });
			arrowStyle.top = height;
			arrowStyle.left = width - size * 2;
			break;
		case "bottom":
			arrowStyle = (0, _arrowStyles.arrowUp)({ size: size, color: color });
			break;
		case "bottomLeft":
			arrowStyle = (0, _arrowStyles.arrowUp)({ size: size, color: color });
			arrowStyle.left = width - size * 2;
			break;
		default:
			arrowStyle = {};
	}
	return _react2.default.createElement("div", { className: "react-user-tour-arrow", style: arrowStyle });
};

exports.default = Arrow;