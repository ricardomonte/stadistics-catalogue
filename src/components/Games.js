import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GameStyle from '../styles/Game.module.css';

const Games = ({ game }) => {
  const [hover, setHover] = useState(true);
  const onHover = () => {
    setHover(true);
  };
  const offHover = () => {
    setHover(false);
  };

  return (
    <div
      className={GameStyle.game}
      onMouseEnter={offHover}
      onMouseLeave={onHover}
    >
      <Link to={`/game/${game.id}`} className={GameStyle.gameLink}>
        <img
          alt="something"
          src={`https:${game.cover}`}
          className={GameStyle.gameImage}
        />
        <div className={hover ? GameStyle.gameContainer : GameStyle.invisible}>
          <h3 className={GameStyle.gameTitle}>{game.name}</h3>
        </div>
      </Link>
    </div>
  );
};

Games.propTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
};

export default Games;
