// React Hooks
// - state (React.useState)
//   - loading
//   - error
//   - data
// - side effcts (React.useEffect ← class life cycles)
//   - fetch data

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HomePage() {
  // state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gatewayItems, setGatewayItems] = useState([]);

  // side effects
  // react component update(re-render)
  // 1. new props
  // 2. new state (infinity loop)
  // 3. force update
  useEffect(
    // componentDidMound 라이프 사이클 메서드 처럼
    () => {
      axios
        .get('/api/sk')
        .then(({ data: { gateway } }) => {
          setGatewayItems(gateway);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    },
    /* 종속성 배열 (조건 제어) */
    []
  );

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">오류 발생</div>;
  }

  console.table({ loading, error, gatewayItems });

  return (
    <div className="container">
      <h1 style={{ fontSize: 24, textAlign: 'center' }}>
        SK GATEWAY 실습을 진행합니다.
      </h1>
    </div>
  );
}
