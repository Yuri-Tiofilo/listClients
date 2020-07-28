import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppProvider from './hooks';

import Routes from './routes';
import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <ToastContainer autoClose={3000} />
        <Routes />
      </AppProvider>
      <GlobalStyles />
    </Router>
  );
};

export default App;
