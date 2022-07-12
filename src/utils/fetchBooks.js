// src/api/books.json 모듈을 불러와 booksApi 이름으로 사용합니다.
// import booksApi from '../api/books.json';

// console.log('booksApi', booksApi);

const books = [
  {
    id: 'ISBN-9791191209563',
    title: '나의 친구 레베카',
    author: '케이트 더글러스 위긴',
    price: 13500,
  },
  {
    id: 'ISBN-9788943310141',
    title: '레베카의 작은 극장',
    author: '레베카 도트르메르',
    price: 54000,
  },
  {
    id: 'ISBN-9791158888367',
    title: '연애의 행방',
    author: '히가시노 게이고',
    price: 13320,
  },
  {
    id: 'ISBN-9788937434051',
    title: '파랑의 역사',
    author: '미셸 파스투로',
    price: 15120,
  },
  {
    id: 'ISBN-9791166113239',
    title: '산책과 연애',
    author: '유진목',
    price: 13500,
  },
  {
    id: 'ISBN-9791158888367',
    title: '불온한 파랑',
    author: '정이담',
    price: 12420,
  },
  {
    id: 'ISBN-9788983451170',
    title: '천 개의 파랑',
    author: '천선란',
    price: 12600,
  },
];

export const fetchBooks = ({ timeout = 1000, shouldReject = false } = {}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject({ message: '알 수 없는 오류가 발생했습니다.' });
      } else {
        resolve(books);
      }
    }, timeout);
  });
};

// export const fetchBooks = (timeout = 1000, shouldReject = false) => {
//   return fetch('/api/books.json') // Promise
//     .then((response) => response.json())
//     .then(({ books }) => books)
//     .catch((error) => console.error(error.message));
// };
