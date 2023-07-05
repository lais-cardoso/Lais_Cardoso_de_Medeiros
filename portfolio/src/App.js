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
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
