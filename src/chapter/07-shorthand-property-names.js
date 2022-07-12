'use strict';

/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 함수 선언
function show() {
  return `${this.name} 보다.`;
}

// 일반 함수 식 참조
const look = function () {
  return `${this.name} 지켜보다.`;
};

// 화살표 함수 식 참조
// 화살표 함수 식 내부의 this는 일반 함수의 this와 가리키는 대상이 다릅니다.
const watch = () => {
  console.log('this :', this);
  console.log('this.name :', this.name);
  return `${this.name} 관찰하다.`;
};

/* 아래 ES5 코드를 ES6 코드로 변경합니다. ------------------------------------------ */

let calcPropName = 'nickname';

var euid = {
  [calcPropName]: '이듬',
  [`get_${calcPropName}`]() {
    return this.name;
  },
  show,
  look,
  watch() {
    console.log('this :', this);
    console.log('this.name :', this.name);
    return `${this.name} 관찰하다.`;
  },
};

// 객체의 메서드로 화살표 함수를 사용하면 어떤 문제가 발생할까?
// 화살표 함수 내부의 this는 참조하는 대상이 일반 함수 식과 함수 선언과 다르게 작동합니다.
// 이 점을 유의하여야 하며, 잘못 사용할 경우 this 참조가 생각과 다르게 작동해 문제를 유발할 수 있습니다.
// 화살표 함수 내부의 this 참조는 메서드(화살표 함수)를 소유하는 객체를 가리키는 것이 아니라,
// 상위 스코프의 this를 참조하기 때문

const result = euid.watch();

console.log(result);
