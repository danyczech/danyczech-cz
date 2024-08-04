import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      base: ['1rem', '1.5rem'], // 16px, 24px
      xxs: ['0.625rem', '1rem'], // 10px, 16px
      xs: ['0.75rem', '1.125rem'], // 12px, 18px
      sm: ['0.875rem', '1.25rem'], // 14px, 20px
      lg: ['1.125rem', '1.625rem'], // 18px, 26px
      xl: ['1.5rem', '1.75rem'], // 24px, 28px
      xxl: ['1.875rem', '2.25rem'], // 30px, 36px
      big: ['2.625rem', '4rem'], // 42px, 64px
      max: ['3rem', '3.625rem'], // 48px, 58px
    },
    maxWidth: {
      layoutTablet: '616px',
      modal: '832px',
      page: '1136px',
      screenDynamic: '100dvw',
    },
    borderRadius: {
      sm: '0.25rem', // 4px,
      md: '0.375rem', // 6px,
      lg: '0.5rem', // 8px,
      xl: '0.75rem', // 12px,
      full: '9999px',
    },
    boxShadow: {
      around: '0px 0px 8px rgba(0, 91, 191, 0.25)',
      sm: '0px 1px 2px rgba(0, 91, 191, 0.25)',
      smTop: '0 -1px 2px rgba(0, 91, 191, 0.25)',
      lg: '0px 3px 4px rgba(0, 91, 191, 0.25)',
      none: 'none',
    },
    colors: {
      current: 'currentColor',
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#01172F',
      white: '#FFF',
      gray: '#8A8A8A',
      primary: {
        DEFAULT: '#99BC24',
        'dark-1': '#1B2400',
        'dark-2': '#617D06',
        'light-1': '#C6E75A',
        'light-2': '#E4FA9C',
      },
      secondary: {
        DEFAULT: '#E98453',
        'dark-1': '#AA491A',
        'dark-2': '#D26632',
        'light-1': '#FFA57A',
        'light-2': '#FFBE9F',
      },
    },
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },
      screens: {
        'max-xxs': { 'max': '390px' },
        'max-xs': { 'max': '479px' },
        xs: '480px',
        sm: '576px',
        md: '768px',
        lg: '1024px',
        mobile: '288px',
        desktop: '1224px',
        wide: '1600px',
      },
      transitionDuration: {
        'default': '300ms',
      }
    },
  },
  plugins: [],
};

export default config;
