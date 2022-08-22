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
    alert: {
      '100': '#FFF8E5',
      '200': '#FFE7A8',
      '300': '#FFDA7A',
      '500': '#EDBE4F',
      '700': '#AD771F',
      '800': '#704810',
      main: '#EDBE4F',
    },
    error: {
      '100': '#FBEAED',
      '200': '#EDABB6',
      '300': '#E4677C',
      '500': '#C3223D',
      '700': '#9C162D',
      '800': '#6C1322',
      main: '#C3223D',
    },
    grey: {
      '100': '#F7F7F7',
      '200': '#CACECD',
      '300': '#959D9D',
      '500': '#616B6A',
      '700': '#3B4443',
      '800': '#1F2B2A',
    },
    primary: {
      '100': '#E5FFFE',
      '200': '#9EFAF6',
      '300': '#22C9C3',
      '500': '#009992',
      '700': '#00726D',
      '800': '#004C49',
      main: '#22C9C3',
    },
    success: {
      '100': '#EDF9EC',
      '200': '#A5DF9F',
      '300': '#4CA145',
      '500': '#107906',
      '700': '#115C0A',
      '800': '#053D00',
      main: '#107906',
    },
  },

  typography: {
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '19.5px',
    },
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      fontSize: '56px',
      fontWeight: 700,
      lineHeight: '68.26px',
    },
    h2: {
      fontSize: '48px',
      fontWeight: 700,
      lineHeight: '58.51px',
    },
    h3: {
      fontSize: '40px',
      fontWeight: 700,
      lineHeight: '49px',
    },
    h4: {
      fontSize: '32px',
      fontWeight: 500,
      lineHeight: '39px',
    },
    h5: {
      fontSize: '24px',
      fontWeight: 500,
      lineHeight: '29.26px',
    },
    h6: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '24px',
    },
    subtitle1: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '19.5px',
    },
  },
};

export default theme;
