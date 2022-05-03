import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GreetingsContainer from './GreetingsContainer';
import store from '../redux/configureStore';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GreetingsContainer />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
