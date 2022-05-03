import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage, getMessage } from '../redux/greeting';
const Greeting = () => {
  const { message } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <p>{message}</p>
      <button onClick={() => dispatch(fetchMessage())}>change</button>
    </React.Fragment>
  );
};

export default Greeting;
