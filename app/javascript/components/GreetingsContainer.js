import React from 'react';
import PropTypes from 'prop-types';
import Greeting from './Greeting';
import { useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/greeting';
const GreetingsContainer = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Greeting />
      <button onClick={() => dispatch(fetchMessage())}>change</button>
    </React.Fragment>
  );
};

export default GreetingsContainer;
