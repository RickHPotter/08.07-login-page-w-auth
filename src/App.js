import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes'

const theme = createTheme ({
  palette: { 
    primary: { 
      main: '#389899',
    }, 
    secondary: {
      main: '#389900',
    }
  }
})


function App() {
  return (
    <div className = "d-flex align-items-center justify-content-center">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routes/>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
