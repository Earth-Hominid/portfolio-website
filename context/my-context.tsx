import { useState, createContext, useMemo } from 'react';
import { DarkModeContextType } from '@/types/index';

type darkModeType = boolean;

type ThemeProps = { children: React.ReactNode };

// const initialState: DarkModeContextType = {
//   handleToggleThemeClick: Function,
//   toggleTheme: Function,
// };

const darkModeContext = createContext<DarkModeContextType | null>(null);

const DarkModeThemeProvider = ({ children }: ThemeProps) => {
  const [darkMode, setDarkMode] = useState<darkModeType | null>(null);

  const toggleTheme = () => {
    if (darkMode !== null) {
      setDarkMode((prevValue) => !prevValue);
    }
  };

  const handleToggleThemeClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    toggleTheme();
  };

  const darkModeValue = useMemo(() => {
    return [darkMode, setDarkMode];
  }, [darkMode, setDarkMode]);

  return (
    <darkModeContext.Provider
      value={{
        darkMode,
        handleToggleThemeClick,
      }}
    >
      {children}
    </darkModeContext.Provider>
  );
};

export default DarkModeThemeProvider;
