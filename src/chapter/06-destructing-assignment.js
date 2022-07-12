/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

const state = Object.freeze({
  loading: false,
  error: null,
  data: [
    { id: 'kwdvj2ke1', title: 'euid' },
    { id: 'zwecr8kip', title: 'react' },
    { id: 'jdw1vkke1', title: 'gitbook' },
  ],
});

{
  var isGlobal = true;
  // 객체 속성과 일치하는 변수 선언 후, 속성 값 할당
  // const loading = state.loading;
  // const error = state.error;
  // const data = state.data;

  // 구조 분해 할당
  // 분해 할당된 변수(상수 포함)의 별칭(alias) 설정
  let { loading, error, data: resources } = state;

  // console.log(Array.isArray(resources));

  // 배열의 첫번째 아이템, 나머지 집합 추출
  // const firstData = resources[0];
  // const restData = resources.slice(1);

  const [first, ...rest] = resources;

  console.log(first);
  console.log(rest);
}
