import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Button, ModalDialog } from '@/components';
import { ReactComponent as CheckMark } from '@/assets/icons/check-mark.svg';

export default function HomePage() {
  const buttonRef = useRef(null); // { current: null }

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [gatewayItems, setGatewayItems] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

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

  const handleFocusingButton = () => {
    const buttonNode = buttonRef.current;
    buttonNode.focus();
    buttonNode.style.cssText = 'outline: 3px solid currentColor';
  };

  const handleOpenModalDialog = () => {
    setIsShowModal(true);
  };

  const handleCloseModalDialog = () => {
    setIsShowModal(false);
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: 24, textAlign: 'center' }}>
        <CheckMark width={24} height={24} />
        SK GATEWAY 실습을 진행합니다.
      </h1>
      <button type="button">하단 버튼에 초점을 이동시켜봅시다.</button>
      <Button ref={buttonRef} onOpen={handleOpenModalDialog}>
        open modal dialog
      </Button>
      {isShowModal && <ModalDialog onClose={handleCloseModalDialog} />}
    </div>
  );
}
