import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/globals';

import AppProvider from './hooks/index';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Router>
          <Routes />
        </Router>
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
