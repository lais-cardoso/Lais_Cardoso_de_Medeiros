import logo from './logo.svg';
import './App.css';
import Home from './home/index';
import {createTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  const theme = createTheme({
    typhography:{
      fontFamily: [
        'Roboto',
        'Oswald',
        '"sans-serif"',
        'Liu Jian Mao Cao',
        'Fasthand',
        'Cedarville Cursive', 
        '"cursive"',
        'EB Garamond',
        '"serif"'
      ].join(','),
    }, 
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      third: {
        light: '#5fba7d',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
