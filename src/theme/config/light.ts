import shared from './shared';

const light = {
  title: 'light',
  ...shared,
  palette: {
    primary: {
      main: '#004D40',
      secondary: '#19A890',
    },
    typography: {
      main: '#11263C',
      secondary: '#616161',
      lighter: '#D0D1D2',
    },
    background: {
      main: '#ffffff',
      secondary: '#EEEEEE',
      contrast: '#233253',
    },
  },
  borders: {
    header: '1px solid #D0D1D2',
  },
};

export type ThemeType = typeof light;

export default light;
