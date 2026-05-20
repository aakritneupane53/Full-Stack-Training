import type React from 'react';
import { useState, useMemo, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<string>('light');
    const value = useMemo(() => ({
        theme,
        toggle: () => setTheme(prevMode => prevMode === 'light' ? 'dark' : 'light')
    }), [theme]);
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};