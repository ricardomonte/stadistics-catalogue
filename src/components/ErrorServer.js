import React from 'react';
import PropTypes from 'prop-types';
import GameStyle from '../styles/ErrorsStyle.module.css';

const ErrorServer = ({ name }) => (
  <div className={GameStyle.containerError}>
    <h1 className={GameStyle.error}>
      Oops something went wrong:
      {` ${name}`}
    </h1>
    <img
      src="https://i.imgur.com/Zv7EsLn.png"
      alt="error"
      className={GameStyle.image}
    />
    <h2>We are working on it</h2>
  </div>
);

ErrorServer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ErrorServer;
