/* eslint-disable jest/expect-expect */
/* eslint-disable no-unused-vars */

// React JSX 식 (JS extenstions like XML)
// 값을 반환하는 것: 식, 연산자, 함수 등등
// 값을 반환하지 않는 것: if, while, for, switch 문 ...

// 연산자
// 피연산자
// 단항
// 이항
// 삼항

/* 3항 연산 식(터너리, ternary), nullish 병합 연산자, 옵셔널 체이닝을 활용해 코드를 작성합니다. ---------------- */

// ----------------------------------------------------------------------------------
// Nullish coalescing operator
// ----------------------------------------------------------------------------------

const defaultArg = (value, initialValue) => {
  // return (value === null || value === undefined) ? initialValue : value;

  // Nullish coalescing operator
  // null 병합 연산자를 사용한 식으로 변경합니다.
  // 0, '', NaN
  return value ?? initialValue;
};

const ellipsisText = (text, limit = 100) => {
  // 기본 매개변수를 활용해 코드를 변경합니다.
  // limit = defaultArg(limit, 100);
  return `${text.slice(0, limit).trim()}...`;
};

let desc = `
  JavaScript는 문 보다, 식을 사용해 조건 처리하는 경우가 잦습니다. 
  자주 사용되는 조건 식에 대해 정리합니다.
`.trim();

// ----------------------------------------------------------------------------------
// Optional chaning
// ----------------------------------------------------------------------------------

const company = Object.freeze({
  name: 'EUID',
  location: {
    lat: 321,
    lng: -39,
  },
  getLocation() {
    const [lat, lng] = Object.values(company.location); // [321, -39]
    return { lat, lng };
  },
});

let companyName, companyLat; // undefined

// if ('companyName' in company) {
//   companyName = company.companyName;
// }

companyName = company?.companyName;

console.log('companyName = ', companyName); // undefined

// if ('location' in company) {
//   if ('lat' in company.location) companyLat = company.location.lat; // 321
// }

companyLat = company.location?.lat;

console.log('companyLat = ', companyLat);

// if ('getFoundingDate' in company) {
//   if (typeof company.getFoundingDate === 'function') company.getFoundingDate();
// }

company.getFoundingDate?.(); // ERROR

// if ('getLocation' in company) {
//   if (typeof company.getLocation === 'function') company.getLocation();
// }

console.log(company.getLocation?.());
