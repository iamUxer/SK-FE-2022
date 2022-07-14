import { render, screen } from '@testing-library/react';
import App from './App';

test('"React 학습하기" 텍스트를 포함하는 요소가 문서에 렌더링 되었는가?', () => {
  render(<App />);
  const learnLink = screen.getByText(/react 학습하기/i);
  expect(learnLink).toBeInTheDocument();
});

test('React 로고 이미지의 대체 텍스트는 "React" 이다.', () => {
  render(<App />);
  const logoImage = screen.getByRole('img');
  expect(logoImage).toHaveAttribute('alt');
  expect(logoImage.getAttribute('alt')).toBe('React');
});
