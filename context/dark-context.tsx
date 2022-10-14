import { createContext, useState, useEffect } from 'react';

interface DarkModeContextType {
  darkMode: boolean | null;
  handleToggleThemeClick: Function;
}

type DarkModeType = boolean;

type ThemeProps = { children: React.ReactNode };

const theme = {
  darkMode: true || false,
};

export const DarkContext = createContext<DarkModeContextType | null>(null);

export const DarkProvider = ({ children }: ThemeProps) => {
  const [darkMode, setDarkMode] = useState<DarkModeType | null>(false);

  // check and reset theme when `darkMode` changes
  useEffect(() => {
    return () => checkDarkMode();
  }, [darkMode]);

  // check theme on component mount
  useEffect(() => {
    return () => checkDarkMode();
  }, []);

  // check and reset theme
  const checkDarkMode = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  };

  const toggleTheme = () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  const handleToggleThemeClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    toggleTheme();
  };

  return (
    <DarkContext.Provider value={{ darkMode, handleToggleThemeClick }}>
      {children}
    </DarkContext.Provider>
  );
};
