import React from 'react';

const ThemeContext = React.createContext();

const colors = {
  black: '#000',
  white: '#fff',
};

const lightTheme = {
  bg: colors.white,
  fg: colors.black,
};

const darkTheme = {
  fg: colors.white,
  bg: colors.black,
};

// 복잡한 데이터 관리 (like Redux : store, state, reducer, dispatch, subscribe(unsubscribe))
// useReducer 훅
// 값을 메모(기억)할 때
// useMemo 훅
// 함수 값을 기억할 때
// useCallback 훅
export const ThemeProvider = (props) => {
  const [themeValue, setThemeValue] = React.useState('dark');
  const value = React.useMemo(
    () => ({
      currentTheme: themeValue,
      setTheme: setThemeValue,
      theme: themeValue.includes('light') ? lightTheme : darkTheme,
    }),
    [themeValue]
  );

  return <ThemeContext.Provider value={value} {...props} />;
};

// useContext 훅을 사용해서 컨텍스트에 포함된 어떤 컴포넌트에서든 상태를 가져올 수 있게 구성
// 커스텀 훅
export const useTheme = () => {
  const themeValue = React.useContext(ThemeContext);
  if (!themeValue)
    throw new Error('useTheme 훅은 ThemeContext 안에서만 사용 가능합니다.');
  return themeValue;
};
