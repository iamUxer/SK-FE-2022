import axios from 'axios';
import { useState, useEffect } from 'react';
import { SkSpinner } from 'components';

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gatewayItems, setGatewayItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { gateway } } = await axios.get('/api/sk');
        setGatewayItems(gateway);
      } catch (error) {
        setError(error);
      }
  
      setLoading(false);
    }
    setTimeout(() => fetchData(), 3000);
  }, []);

  if (loading) {
    return <SkSpinner />
  }

  if (error) {
    return <div role="alert">오류 발생</div>;
  }

  return (
    <div className="container">
      <h1 style={{ fontSize: 24, textAlign: 'center' }}>
        SK GATEWAY 실습을 진행합니다.
      </h1>
    </div>
  );
}
