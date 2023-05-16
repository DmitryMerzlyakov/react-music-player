import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './provaider/Theme';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>  
    </BrowserRouter>
  </React.StrictMode>
);

