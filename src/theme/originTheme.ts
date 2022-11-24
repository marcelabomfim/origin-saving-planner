// import { DefaultTheme } from 'styled-components';

export type OriginTheme = {
  borderRadius: {
    xs: string;
    md: string;
    lg: string;
  };

  colors: Record<string, string>;
};

export const originTheme: OriginTheme = {
  borderRadius: {
    xs: '0.25rem',
    md: '0.5rem',
    lg: '2rem',
  },

  colors: {
    //background
    backgroundPrimary: '#F4F8FA',
    backgroundSecondary: '#fff',

    //brand
    brandPrimary: '#1B31A8',
    brandSecondary: '#0079FF',

    //text
    textPrimary: '#1E2A32', // or #1C1E1F ?
    textSecondary: '#708797',
    textTertiary: '#4D6475',

    // others
    icons: '#CBD5DC',
    borders: '#E9EEF2',
  },
};
