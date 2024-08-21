import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Feed from './screens/Feed/feed';

const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', 
      },
      secondary: {
        main: '#f50057', 
      },
      background: {
        default: '#90C3D8', 
      },
      text: {
        primary: '#333333', 
        secondary: '#666666', 
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h1: {
        fontSize: '2.5rem',
      },
      h2: {
        fontSize: '2rem',
      },
      body1: {
        fontSize: '1rem',
      },
    },
  });

function App() {
    return (
      <ThemeProvider theme={theme}>
          <div className="App">
            <Feed />
          </div>
      </ThemeProvider>
    );
  }
  
  export default App;