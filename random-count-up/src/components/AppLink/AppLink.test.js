import { render, screen } from '@testing-library/react';
import { AppLink } from './AppLink';

test('http:// 또는 https:// 경로 값을 가진 경우, 외부 링크로 작동해야 한다.', () => {
  render(<AppLink href="https://euid.dev" external />);
  const linkElement = screen.getByTestId('AppLink');
  expect(linkElement).toHaveAttribute('rel');
  expect(linkElement).toHaveAttribute('target');
  expect(linkElement.getAttribute('target')).toBe('_blank');
  expect(linkElement.getAttribute('rel')).toBe('noopener noreferrer');
});
