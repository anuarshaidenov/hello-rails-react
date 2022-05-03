import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { fetchMessage, getMessage } from '../redux/greeting';
const Greeting = () => {
  const { message } = useSelector((state) => state.greetings);

  return (
    <React.Fragment>
      <p>{message}</p>
    </React.Fragment>
  );
};

export default Greeting;
