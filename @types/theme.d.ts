export type DarkMode = true | false | null;
export type DarkModeValue = true | false | null;
export type HandleChangeTheme = Function;

export type ThemeContextType = {
  darkMode?: DarkMode;
  darkModeValue?: DarkModeValue;
  changeTheme?: (darkMode: DarkMode) => void;
  handleToggleThemeClick?: HandleChangeTheme;
};
