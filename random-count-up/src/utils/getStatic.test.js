import { getStatic, getAsset } from './getStatic';

const { PUBLIC_URL } = process.env;

describe('getStatic() 유틸리티 함수', () => {
  test('public/assets 디렉토리 자산을 정상적으로 가져옴', () => {
    expect(getStatic('assets/logo512.png')).toBe(
      `${PUBLIC_URL}/assets/logo512.png`
    );
    expect(getStatic('assets/logo192.png')).toBe(
      `${PUBLIC_URL}/assets/logo192.png`
    );
    expect(getStatic('assets/favicon.ico')).toBe(
      `${PUBLIC_URL}/assets/favicon.ico`
    );
  });
});

describe('getAsset() 유틸리티 함수', () => {
  test('public/assets 디렉토리 자산을 정상적으로 가져옴', () => {
    expect(getAsset('logo512.png')).toBe(`${PUBLIC_URL}/assets/logo512.png`);
    expect(getAsset('logo192.png')).toBe(`${PUBLIC_URL}/assets/logo192.png`);
    expect(getAsset('favicon.ico')).toBe(`${PUBLIC_URL}/assets/favicon.ico`);
  });
});
