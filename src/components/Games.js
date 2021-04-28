import React from 'react';
import PropTypes from 'prop-types';

const Games = ({ game }) => (
  <div>
    <img alt="something" />
    <div>
      <h4>{game.title}</h4>
      <p>some text</p>
      <p />
    </div>
  </div>
);

Games.protoTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
};

export default Games;
