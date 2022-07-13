/* eslint-disable testing-library/no-debugging-utils */
import App from './App';
import { render, screen } from '@testing-library/react';

test('"learn react" 텍스트를 포함하는 요소가 문서에 렌더링 되었는가?', () => {
  render(<App />);
  const learnLink = screen.getByText(/learn react/i);
  expect(learnLink).toBeInTheDocument();
});
