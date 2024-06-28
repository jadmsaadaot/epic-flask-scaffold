import { createTheme } from "@mui/material";
import '@bcgov/bc-sans/css/BC_Sans.css';
// import BCSansRegular from '@/assets/fonts/BCSans-Regular.woff';
// import BCSansLight from '@/assets/fonts/BCSans-Light.woff';
// import BCSansBold from '@/assets/fonts/BCSans-Bold.woff';
// import BCSansRegular2 from '@/assets/fonts/BCSans-Regular.woff2';
// import BCSansLight2 from '@/assets/fonts/BCSans-Light.woff2';
// import BCSansBold2 from '@/assets/fonts/BCSans-Bold.woff2';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: '#4f6690',
      main: '#234075',
      dark: '#182c51',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e8b955',
      main: '#e3a82b',
      dark: '#9e751e',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: 'BC Sans',
  },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       @font-face {
  //         font-family: 'BCSans';
  //         font-style: normal;
  //         font-weight: 400;
  //         src: 
  //           url(${BCSansRegular2}) format('woff2'),
  //           url(${BCSansLight2}) format('woff2');
  //       }
  //     `,
  //   },
  // }
});

export default theme;
