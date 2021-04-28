import React from 'react';
import { connect } from 'react-redux';
import Games from '../components/Games';
import { loadGames } from '../actions';

const GameList = ({ games, loadedGames }) => (
  <div>
    <h1>List of games</h1>
    <Games />
  </div>
);

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

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
