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
        <Games key={game.name} game={game} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  games: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  loadedGames: () => dispatch(loadGames()),
});

GameList.propTypes = {
  games: PropTypes.instanceOf(Array).isRequired,
  loadedGames: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
