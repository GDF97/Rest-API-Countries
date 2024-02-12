import { createContext } from "react";

type ThemeContextType = {
  theme: string;
  changeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(null!);
