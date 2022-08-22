import { ThemeOptions } from '@mui/material/styles';

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#22C9C3',
      '100': '#E5FFFE',
      '200': '#9EFAF6',
      '300': '',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '56px',
      lineHeight: '68.26px',
    },
    h2: {
      fontWeight: 700,
      fontSize: '48px',
      lineHeight: '58.51px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '40px',
      lineHeight: '49px',
    },
    h4: {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '39px',
    },
    h5: {
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '29.26px',
    },
    h6: {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '24px',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '19.5px',
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '19.5px',
    },
  },
};

export default theme;
