import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Games from '../components/Games';
import Heroe from '../common/Heroe';
import GenreFilter from '../components/GenreFilter';
import ErrorServer from '../components/ErrorServer';
import { loadGames, filterGame } from '../actions';
import GameStyle from '../styles/GameList.module.css';

const GameList = ({
  errors,
  games,
  loadedGames,
  filteredGames,
  filteredGame,
}) => {
  useEffect(() => {
    loadedGames();
  }, []);
  const handleFilterChange = (event) => {
    filteredGames(event.target.value);
    event.target.blur();
  };

  const oneGenreGames = () => games.filter((game) => game.genre === filteredGame.filter);
  const filterByGenre = filteredGame.filter !== '' ? oneGenreGames() : games;
  const topGames = () => (errors ? games.filter((game) => game.rating > 97) : []);
  const arrayTop = topGames();
  if (errors.errorLoad && games.length === 0) {
    return <ErrorServer name={errors.errorLoad} />;
  }
  return (
    <>
      <Heroe image={arrayTop} />
      <div className={GameStyle.gameBack}>
        <div className={GameStyle.gameContainer}>
          <GenreFilter
            filter={filteredGame.filter}
            onGameChange={handleFilterChange}
          />
          <h1 className={GameStyle.gameTitle}>
            {filteredGame.filter === ''
              ? 'Popular Games'
              : `Popular Games:${filteredGame.filter}`}
          </h1>
          <div className={GameStyle.gameList}>
            {filterByGenre.map((game) => (
              <Games key={game.name} game={game} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  games: state.game,
  filteredGame: state.filter,
  errors: state.manageErr,
});

const mapDispatchToProps = (dispatch) => ({
  loadedGames: () => dispatch(loadGames()),
  filteredGames: (filter) => dispatch(filterGame(filter)),
});

GameList.propTypes = {
  errors: PropTypes.instanceOf(Object).isRequired,
  games: PropTypes.instanceOf(Array).isRequired,
  loadedGames: PropTypes.func.isRequired,
  filteredGames: PropTypes.func.isRequired,
  filteredGame: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
