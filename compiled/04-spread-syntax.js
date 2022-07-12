"use strict";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var integers = [-1, 0, 32, -101, 24];
var maxInt = Math.max.apply(Math, [302, 1, 2, 30, -101].concat(integers));

var extend = function extend() {
  var _mixinObject = arguments[0];

  var _restObjects = [].slice.call(arguments, 1);

  var _mixin = function _mixin(o1, o2) {
    for (var key in o2) {
      if ({}.hasOwnProperty.call(o2, key)) {
        var value = o2[key];

        if (value && typeof value === 'object' && value.length) {
          o1[key] = (o1[key] || []).concat(value);
        } else if (value && typeof value === 'object' && !value.length) {
          o1[key] = _mixin(o1[key] || {}, value);
        } else {
          o1[key] = value;
        }
      }
    }

    return o1;
  };

  for (var i = 0, l = _restObjects.length; i < l; ++i) {
    _mixin(_mixinObject, _restObjects[i]);
  }

  return _mixinObject;
};

var setState = function setState(newState) {
  return _extends({}, state, newState, {
    data: [].concat(state.data, newState.data)
  });
};

var state = Object.freeze({
  loading: false,
  error: null,
  data: [{
    id: 101,
    title: '초기 데이터'
  }]
});
var updatedState = setState({
  loading: true,
  data: [{
    id: 201,
    title: '데이터 업데이트'
  }]
});
console.log('before: ', state);
console.log('after: ', updatedState);