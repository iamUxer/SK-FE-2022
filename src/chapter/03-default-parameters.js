/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

const getRandom = (n) => Math.round(Math.random() * n);

const truncateText = (text, limit = getRandom(100)) => {
  console.log(limit);
  return `${text.slice(0, limit).trim()}...`;
};

let result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');
result = truncateText('ECMAScript NEXT를 사용해 함수를 작성합니다.');

console.log(result);
