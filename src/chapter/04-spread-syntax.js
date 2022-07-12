/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

/* 배열 전개 ------------------------------------------------------------------- */

// ES6+
const integers = [-1, 0, 32, -101, 24];
// let maxInt = Math.max.apply(Math, [302, 1, 2, 30, -101].concat(integers));
let maxInt = Math.max(...[302, 1, 2, 30, -101, ...integers]); // Array<number>

// this 참조 유연(메서드 다른 객체가 빌려서 사용할 수 있는)
// this가 무엇을 참조하는 지 확인하는 과정
// Math.max(2, 3, -9, 22, 122);

// 값의 집합
// 속성:값 구성된 쌍의 집합

/* 객체 전개 ------------------------------------------------------------------- */

// 상속 (확장)
// 합성 (확장)

// 객체 합성 유틸리티 함수
var extend = function () {
  var _mixinObject = arguments[0];
  var _restObjects = [].slice.call(arguments, 1);

  var _mixin = function (o1, o2) {
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

// 상태 업데이트 유틸리티 함수
// const setState = (newState) => extend({}, state, newState)

// ES6 새로운 전개 구문 활용
const setState = (newState) => {
  return {
    ...state,
    ...newState,
    data: [...state.data, ...newState.data],
  };
};

// 상태 객체 (불변 데이터 화)
// React = 선언형 프로그래밍 패러다임
// 불변(immutable) 데이터 관리
const state = Object.freeze({
  loading: false,
  error: null,
  data: [{ id: 101, title: '초기 데이터' }],
});

const updatedState = setState(
  /* new state */ {
    loading: true,
    data: [{ id: 201, title: '데이터 업데이트' }],
  }
);

console.log('before: ', state);
console.log('after: ', updatedState);
