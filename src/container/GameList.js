import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Games from '../components/Games';
import GenreFilter from '../components/GenreFilter';
import { loadGames, filterGame } from '../actions';

const GameList = ({
  games, loadedGames, filteredGames, filteredGame,
}) => {
  useEffect(() => {
    loadedGames().catch((error) => {
      alert(`loading games failed ${error}`);
    });
  }, []);
  const handleFilterChange = (event) => {
    filteredGames(event.target.value);
  };

  const oneGenreGames = () => games.filter((game) => game.genre === filteredGame.filter);
  const filterByGenre = filteredGame.filter !== '' ? oneGenreGames() : games;

  return (
    <div>
      <GenreFilter
        filter={filteredGame.filter}
        onGameChange={handleFilterChange}
      />
      <h1>List of games</h1>
      {filterByGenre.map((game) => (
        <Games key={game.name} game={game} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  games: state.game,
  filteredGame: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  loadedGames: () => dispatch(loadGames()),
  filteredGames: (filter) => dispatch(filterGame(filter)),
});

GameList.propTypes = {
  games: PropTypes.instanceOf(Array).isRequired,
  loadedGames: PropTypes.func.isRequired,
  filteredGames: PropTypes.func.isRequired,
  filteredGame: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
