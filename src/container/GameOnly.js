import React from 'react';
import PropTypes from 'prop-types';

const GameOnly = ({ match }) => <h1>{match.params.slug}</h1>;

GameOnly.propTypes = {
  match: PropTypes.string.isRequired,
};
export default GameOnly;
