import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Games from '../components/Games';
import { loadGames } from '../actions';

const GameList = ({ games, loadedGames }) => {
  useEffect(() => {
    loadedGames().catch((error) => {
      alert(`loading games failed ${error}`);
    });
  }, []);

  return (
    <div>
      <h1>List of games</h1>
      {games.map((game) => (
        <Games key={game.title} game={game} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    games: state.game,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadedGames: () => dispatch(loadGames()),
  };
};

GameList.protoTypes = {
  games: PropTypes.instanceOf(Array).isRequired,
  loadGames: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
