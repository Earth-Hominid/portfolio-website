import { createContext, useState, useMemo } from 'react';
import {
  DarkMode,
  DarkModeValue,
  ThemeContextType,
  HandleChangeTheme,
} from '../@types/theme';

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<DarkMode>(false);

  const toggleTheme = () => {
    setDarkMode((prevValue: DarkMode) => !prevValue);
  };

  const handleToggleThemeClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    toggleTheme();
  };

  const darkModeValue = useMemo<DarkModeValue>(() => {
    return [darkMode, setDarkMode];
  }, [darkMode, setDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        handleToggleThemeClick,
        darkModeValue,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
