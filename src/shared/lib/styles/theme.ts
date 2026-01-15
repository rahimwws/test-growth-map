export const lightTheme = {
  colors: {
    typography: '#1E1E1E',
    background: '#ffffff',
    softGreen: '#F0F5C9',
    green: '#12BB44',
    gray: '#F9F9F9',
    tertiary: '#F1F1F1',
    buttonShadow: '#D0D0D0',
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;

export const darkTheme = {
  colors: {
    typography: '#ffffff',
    background: '#1E1E1E',
    softGreen: '#F0F5C9',
    green: '#12BB44',
    gray: '#262626',
    tertiary: '#303030',
    buttonShadow: '#202020',
  },
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
} as const;
