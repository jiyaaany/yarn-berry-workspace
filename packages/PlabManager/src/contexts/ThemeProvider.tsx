import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeContextState } from '@types/theme';

export const ThemeContext = React.createContext<ThemeContextState>({});

const ThemeProvider: React.FC = ({ children }) => {
  const [themeState] = React.useState<ThemeContextState>({});

  return (
    <ThemeContext.Provider value={themeState}>
      <EmotionThemeProvider theme={themeState.colors}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextState {
  return React.useContext<ThemeContextState>(ThemeContext);
}

export default ThemeProvider;
