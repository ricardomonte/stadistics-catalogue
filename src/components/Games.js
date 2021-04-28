import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Games = ({ game }) => (
  <Link to={`/game/${game.slug}`}>
    <img alt="something" src={`https:${game.cover}`} />
    <div>
      <h4>{game.name}</h4>
      <p>{game.summary}</p>
      <p />
    </div>
  </Link>
);

Games.propTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
};

export default Games;
