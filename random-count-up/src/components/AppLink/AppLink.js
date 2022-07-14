/* eslint-disable react/jsx-no-target-blank */
import './AppLink.css';

//  조건부 렌더링(conditional rendering)
//  - 서버에서 보내는 HTML 문서에 마크업이 포함되지 않은 것처럼 화면에 렌더링
//  - 잦은 토글(toggle)에서는 사용하지 않는 것이 좋습니다.

//  조건부 표시(conditional display)
//  - 서버에서 보낸 HTML 문서에 마크업은 포함되어 있지만, 화면에는 표시되지 않음
//  - HTML <div hidden></div> / CSS display: none
//  - 잦은 토글(toggle)에서 사용하는 것이 좋다.
export const AppLink = ({ href, external, children }) => {
  // 연산자, 식, 함수는 값을 반환한다
  // 문은 값을 반환하지 않는다
  return (
    <a
      href={href}
      data-testid="AppLink"
      className="App-link"
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : null}
    >
      {children}
    </a>
  );
};

AppLink.defaultProps = {
  external: false,
  children: '링크 텍스트를 입력해주세요.',
};
