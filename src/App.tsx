import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

import SignIn from './pages/Signin';
import GlobalStyle from './styles/globals';

import AppProvider from './hooks/index';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
