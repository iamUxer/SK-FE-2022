/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// primitives vs. object
// JavaScript 함수는 '값'
// immutable  vs. mutable

const PI = 3.141592; // static

// 함수 선언

function getRandom(n) {
  return Math.round(Math.random() * n);
}

// 일반 함수 식
const fibonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// 화살표 함수 식
// - 매개변수의 갯수가 1개인 경우 괄호 () 를 생략할 수 있다.
// - 값을 바로 반환할 경우 블록과 return을 생략할 수 있다.
// - 함수 내부에서 더 이상 arguments 객체를 사용할 수 없다.
const fibonacciArrow = (n) =>
  n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

const numberWithComma = (n) =>
  n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

let price = numberWithComma(98300);

console.log(price);
