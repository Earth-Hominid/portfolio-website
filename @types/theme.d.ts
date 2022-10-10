export type DarkMode = true | false;
export type HandleChangeTheme = Function;

export type ThemeContextType = {
  darkMode: DarkMode;
  changeTheme: (darkMode: Theme) => void;
  handleToggleThemeClick: HandleChangeTheme;
  darkModeValue: boolean;
};
