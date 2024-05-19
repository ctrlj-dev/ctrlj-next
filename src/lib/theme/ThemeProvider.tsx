// theme/ThemeProvider.tsx
'use client'

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme, alternativeTheme, Theme } from './theme';
import React, { useState, ReactNode, createContext, useContext } from 'react';

type ThemeContextProps = {
    toggleTheme: (themeName: 'light' | 'dark' | 'alternative') => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

type ThemeProviderProps = {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(lightTheme);

    const toggleTheme = (themeName: 'light' | 'dark' | 'alternative') => {
        switch (themeName) {
            case 'dark':
                setTheme(darkTheme);
                break;
            case 'alternative':
                setTheme(alternativeTheme);
                break;
            default:
                setTheme(lightTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            <StyledThemeProvider theme={theme}>
                <GlobalStyles theme={theme} />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
