import React from 'react';
import PropTypes from 'prop-types';

const Games = ({ game }) => (
  <div>
    <img alt="something" src={`https:${game.cover}`} />
    <div>
      <h4>{game.name}</h4>
      <p>{game.summary}</p>
      <p />
    </div>
  </div>
);

Games.propTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
};

export default Games;
