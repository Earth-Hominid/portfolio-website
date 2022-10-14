// export interface DarkModeTheme {
//   darkMode: boolean | undefined;
//   handleToggleThemeClick: Function;
// }

// export interface DarkModeContextType {
//   darkMode: boolean;
// }

export type darkModeType = boolean;

export interface DarkModeContextType {
  handleToggleThemeClick: Function;
  toggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
// export type DarkMode = true | false;
// export type HandleChangeTheme = Function;

// export type ThemeContextType = {
//   darkMode?: DarkMode | null;
//   changeTheme?: (darkMode: DarkMode) => void;
//   handleToggleThemeClick?: HandleChangeTheme | null;
// };
