import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import GlobalStyle from './styles/global';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Home />
      </Provider>
    </>
  );
}

export default App;
