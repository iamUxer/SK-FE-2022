"use strict";

var multiplyCount = function multiplyCount(first) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  return rest.reduce(function (result, currentValue, index) {
    return index === 0 ? result += currentValue : result *= currentValue;
  }, first);
};

var result = multiplyCount(100, 20, -10, -101, 99);
console.log(result);