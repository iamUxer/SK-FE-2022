"use strict";

var getRandom = function getRandom(n) {
  return Math.round(Math.random() * n);
};

var truncateText = function truncateText(text, limit) {
  if (limit === void 0) {
    limit = getRandom(100);
  }

  console.log(limit);
  return text.slice(0, limit).trim() + "...";
};

var result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
console.log(result);