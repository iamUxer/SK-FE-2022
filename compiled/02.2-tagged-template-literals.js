"use strict";

var _templateObject;

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var node = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: {
    cssText: ''
  }
};

var styled = function styled(styleRules, vNode) {
  vNode.style.cssText = styleRules.reduce(function (rules, currentRule) {
    return (rules + currentRule).trim();
  }, '');
};

styled(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  ", "\n  color: #f90;\n  background: #310;\n"])), node);

var $styled = function $styled(vNode) {
  return function (styleRules) {
    vNode.style.cssText = styleRules.reduce(function (rules, currentRule) {
      return (rules + currentRule).trim();
    }, '');
  };
};

var $$styled = function $$styled(vNode) {
  return function (styleRules) {
    vNode.style.cssText = styleRules.reduce(function (rules, currentRule) {
      return (rules + currentRule).trim();
    }, '');
  };
};