import { useReducer, createContext } from 'react';

import { DarkModeContextType } from '../types/index';
import darkModeContext from './darkModeContext';

const initialState: DarkModeContextType = {
  darkMode: false,
};

const themes = {
  light: true || false || undefined || '',
  dark: true || false || undefined,
};

export const ThemeContext = createContext(themes);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={themes}>{children}</ThemeContext.Provider>
  );
};

export const DarkModeContext = createContext<DarkModeContextType>(
  initialState as DarkModeContextType
);

export const DarkModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, {
    darkMode: false,
  });

  return (
    <DarkModeContext.Provider
      value={{
        ...darkModeContext,
        dispatch,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
