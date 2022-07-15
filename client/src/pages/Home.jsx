import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components';

export default function HomePage() {
  const buttonRef = useRef(null); // { current: null }

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gatewayItems, setGatewayItems] = useState([]);

  useEffect(() => {
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
  }, []);

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">오류 발생</div>;
  }

  // console.table({ loading, error, gatewayItems });

  return (
    <div className="container">
      <h1 style={{ fontSize: 24, textAlign: 'center' }}>
        SK GATEWAY 실습을 진행합니다.
      </h1>
      <button
        type="button"
        onClick={() => {
          const buttonNode = buttonRef.current;
          buttonNode.focus();
          buttonNode.style.cssText = 'outline: 3px solid currentColor';
        }}
      >
        하단 버튼에 초점을 이동시켜봅시다.
      </button>
      <Button ref={buttonRef}>focus me</Button>
    </div>
  );
}
