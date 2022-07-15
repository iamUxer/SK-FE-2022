import './TiltCard.css';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { useTheme } from 'contexts/theme';

// Vanilla Tilt 옵션
const tiltOptions = {
  'max': 8,
  'speed': 10,
  'perspective': 1000,
  'scale': 1.01,
  'glare': true,
  'max-glare': 1,
};

export function TiltCard({ options, children, ...restProps }) {
  const { theme } = useTheme();
  const cardRef = useRef(null);

  // useEffect Hook 3 points
  // 1. effect callback
  // 2. dependency list
  // 3. effect callback => cleanup
  useEffect(() => {
    // 구독
    const { current: domNode } = cardRef;
    VanillaTilt.init(domNode, options);

    // 정리(취소)
    return () => {
      domNode.vanillaTilt.destroy();
    };
  }, [options]);

  return (
    <div
      ref={cardRef}
      className="tiltCard"
      style={{
        background: theme.bg,
        color: theme.fg,
        border: '3px solid red',
      }}
      {...restProps}
    >
      {children}
    </div>
  );
}

TiltCard.defaultProps = {
  options: tiltOptions,
};
