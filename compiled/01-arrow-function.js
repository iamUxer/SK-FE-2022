"use strict";

var PI = 3.141592;

function getRandom(n) {
  return Math.round(Math.random() * n);
}

var fibonacci = function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

var fibonacciArrow = function fibonacciArrow(n) {
  return n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

var numberWithComma = function numberWithComma(n) {
  return n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

var price = numberWithComma(98300);
console.log(price);