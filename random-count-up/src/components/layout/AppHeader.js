import './AppHeader.css';
import { NavLink } from 'react-router-dom';
import { A11yHidden } from 'components';

/**
 * 실습 미션
 * - [x] 내비게이션 데이터 작성
 * - [x] 내비게이션 아이템 순환
 * - [x] 리스트 렌더링
 * - [x] SPA 애플리케이션 라우팅 (1 페이지 안에서 페이지 컴포넌틑 전환)
 * - [x] SPA 애플리케이션 내비게이션 링크의 활성 클래스(또는 스타) 적용
 */

export const AppHeader = () => {
  const navigationList = [
    { id: 'home', text: 'home', path: '/' },
    { id: 'products', text: 'products', path: '/products' },
    { id: 'jsx-in-action', text: 'JSX in Action', path: '/jsx-in-action' },
  ];

  return (
    <header className="App-header">
      <nav className="gnb">
        <A11yHidden as="h4" style={{ fontSize: 30 }}>
          Global Navigation Bar
        </A11yHidden>
        <ul>
          {navigationList.map(({ id, path, text }) => (
            <li key={id}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'activated' : null)}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
