export const theme = {
  colors: {
    black: '#1D1D1B',
    white: '#EEEDEA',
    whitePure: '#FFFFFF',

    gray: {
      100: '#DCD8D5',
      200: '#C4C0BD',
      300: '#999999',
      400: '#777777',
      500: '#666666',
      600: '#4A4A4A',
      700: '#353535',
    },

    primary: {
      light: '#F7CC5E',
      main: '#F4B41F',
      dark: '#D99E15',
      darker: '#B8860F',
      warm: '#FF8F2C',
      warmer: '#FF7A1A',
      cool: '#E6C84F',
      cooler: '#D4D04A',
    },

    secondary: {
      light: '#0A6DA8',
      main: '#024A7A',
      dark: '#1F3646',
      darker: '#162836',
      warm: '#0D5E90',
      cool: '#035B8E',
    },
  },

  gradients: {
    primary: 'linear-gradient(90deg, #F4B41F 0%, #FF8F2C 50%, #F4B41F 100%)',
  },

  fonts: {
    primary: 'var(--font-instrument-sans)',
    secondary: 'var(--font-lora)',
    accent: 'var(--font-chakra-petch)',
  },

  letterSpacing: {
    min: '-0.02em',
    default: '-0.04em',
    secondary: '-0.06em',
  },
} as const;

export type Theme = typeof theme;
