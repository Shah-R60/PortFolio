import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  // Color palette
  const theme = {
    isDark,
    toggleTheme,
    // Backgrounds
    bgPrimary: isDark ? '#0f172a' : '#ffffff',
    bgSecondary: isDark ? '#1e293b' : '#f3f4f6',
    bgCard: isDark ? '#1e293b' : '#f3f4f6',
    bgInput: isDark ? '#1e293b' : '#374151',
    bgNavbar: isDark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.9)',
    bgFooter: isDark ? '#020617' : '#1f2937',
    // Text
    textPrimary: isDark ? '#f1f5f9' : '#1f2937',
    textSecondary: isDark ? '#94a3b8' : '#4b5563',
    textMuted: isDark ? '#64748b' : '#6b7280',
    // Borders
    border: isDark ? '#334155' : '#9ca3af',
    borderLight: isDark ? '#1e293b' : '#e5e7eb',
    // Accent stays blue
    accent: '#3b82f6',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
