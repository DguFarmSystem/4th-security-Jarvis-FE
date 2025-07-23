export const palette = {
  // Background Colors
  backgroundGradient: ['#5BA5FF', '#ABF1FF', '#BBFFE4'],
  background_blue: '#5BA5FF',
  background_sky: '#ABF1FF',
  background_mint: '#BBFFE4',

  // Base Grayscale
  white: '#FFFFFF',
  black: '#000000',

  // Gray Scale
  gray_100: '#656565',
  gray_200: '#8B9B9B',
  gray_300: '#737373',
  gray_400: '#D3D3D3',
  gray_500: '#CFCFCF',

  // Gray with opacity
  gray_100_op80: 'rgba(101, 101, 101, 0.8)', // #656565 - 80%
  gray_400_op40: 'rgba(211, 211, 211, 0.4)', // #D3D3D3 - 40%

  // Blue shades
  blue_primary: '#5BA5FF',
  blue_secondary: '#85BCFF',

  // Blue with opacity
  blue_primary_op40: 'rgba(91, 165, 255, 0.4)',

  // Dark tones
  dark_100: '#080808',

  // Selection Colors
  selectionColors: {
    white: '#FFFFFF',
    gray: '#656565',
    black: '#000000',
    blue: '#5BA5FF',
    grayLight: '#8B9B9B',
    dark: '#080808',
    blue_op40: 'rgba(91, 165, 255, 0.4)',
    grayDark: '#737373',
    gray_op40: 'rgba(211, 211, 211, 0.4)',
    gray_op80: 'rgba(101, 101, 101, 0.8)',
    blueLight: '#85BCFF',
    grayLightest: '#CFCFCF',
  },
} as const;