import { fetchBooks } from '../utils/fetchBooks.js';

// console.log(typeof fetchBooks);

/* eslint-disable jest/no-commented-out-tests */
/* eslint-disable jest/expect-expect */
/* utils 모듈에서 fetchBooks를 추출해 비동기 처리 코드를 작성하세요. -------------------------------- */

fetchBooks({
  timeout: 2400,
  // shouldReject: true,
}).then((bookData) => {
  console.table(bookData);
});

// 데이터 패치 성공 시뮬레이션 코드 예시
// test('fetchBooks Promise 테스트', () => {});

// 데이터 패치 실패 시뮬레이션 코드 예시
// test('fetchBooks Async 함수 테스트', () => {});
