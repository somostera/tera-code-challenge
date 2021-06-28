import React from 'react';

import { Routes } from './routes';

import { GlobalContextProvider } from './contexts/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Routes />
      </GlobalContextProvider>
    </div>
  );
}

export default App;
