import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.add(theme);

    // 클린업 함수
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    // value = 하위 개체들에게 prop으로 공유할 값
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// useState 값에 ThemeContext를 할당하는 함수 (위에서 공유한 value)
export function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext 안에서 써야 합니다");
  }

  return themeContext;
}
