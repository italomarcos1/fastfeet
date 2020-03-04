import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import Routes from './routes';
import history from '~/services/history';
import store from '~/store';

import GlobalStyle from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes history={history} />
      </Router>
    </Provider>
  );
}

export default App;
