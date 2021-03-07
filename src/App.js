import React from 'react';
import Header from './components/Header';

import Home from './pages/Home';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Home />
    </React.Fragment>
  );
}

export default App;
