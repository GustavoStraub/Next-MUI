import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    alert: Palette['primary'];
  }

  interface PaletteOptions {
    alert?: PaletteOptions['primary'];
  }
}

const theme: ThemeOptions = {
  palette: {
    primary: {
      main: '#22C9C3',
      '100': '#E5FFFE',
      '200': '#9EFAF6',
      '300': '#22C9C3',
      '500': '#009992',
      '700': '#00726D',
      '800': '#004C49',
    },
    grey: {
      '100': '#F7F7F7',
      '200': '#CACECD',
      '300': '#959D9D',
      '500': '#616B6A',
      '700': '#3B4443',
      '800': '#1F2B2A',
    },
    error: {
      main: '#C3223D',
      '100': '#FBEAED',
      '200': '#EDABB6',
      '300': '#E4677C',
      '500': '#C3223D',
      '700': '#9C162D',
      '800': '#6C1322',
    },
    success: {
      main: '#107906',
      '100': '#EDF9EC',
      '200': '#A5DF9F',
      '300': '#4CA145',
      '500': '#107906',
      '700': '#115C0A',
      '800': '#053D00',
    },
    alert: {
      main: '#EDBE4F',
      '100': '#FFF8E5',
      '200': '#FFE7A8',
      '300': '#FFDA7A',
      '500': '#EDBE4F',
      '700': '#AD771F',
      '800': '#704810',
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
