import { createContext, useState, useMemo } from 'react';
import { DarkMode, ThemeContextType } from '../types';

interface Props {
  children: React.ReactNode;
}

const darkModeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<DarkMode>();

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

export default darkModeContext;
