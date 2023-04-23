import {DefaultTheme} from 'react-native-paper';

const COLOURS = {
  ...DefaultTheme.colors,
  // primaryFontColor: '#1D1C1C',
  primaryFontColor: '#343235',
  primaryColor: '#DB3B26',
  secondaryFontColor: '#A5A5A5',
  buttonColor: '#4789F5',
};

const FONTS = {
  ...DefaultTheme.fonts,
  fontFamily: 'OpenSans',
};

const THEME = {
  ...DefaultTheme,
  dark: false,
  colors: COLOURS,
  fonts: FONTS,
};

export {COLOURS, FONTS};
export default THEME;
