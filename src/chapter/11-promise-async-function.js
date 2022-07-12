import { fetchBooks } from '../utils/fetchBooks.js';

/* utils 모듈에서 fetchBooks를 추출해 비동기 처리 코드를 작성하세요. --- */

fetchBooks({
  timeout: 2400,
  // shouldReject: true,
}).then((bookData) => {
  console.table(bookData);
});
