import React from 'react';

import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
    </>
  );
}

export default App;
