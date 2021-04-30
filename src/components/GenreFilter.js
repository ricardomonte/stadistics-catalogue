import React from 'react';
import PropTypes from 'prop-types';
import GameStyle from '../styles/Filter.module.css';

const GenreFilter = ({ filter, onGameChange }) => {
  const genresArray = [
    'ALL',
    'Racing',
    'Fighting',
    'Shooter',
    'Puzzle',
    'Role-playing (RPG)',
    'Simulator',
    'Platform',
    'Adventure',
    'Quiz/Trivia',
    'Sport',
  ];

  return (
    <div className={GameStyle.filter}>
      <p className={GameStyle.filterText}>Filter:</p>
      <select
        id="genres"
        name="genres"
        value={filter}
        onChange={onGameChange}
        className={GameStyle.selection}
      >
        <option value="" disabled>
          Genres...
        </option>
        {genresArray.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

GenreFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onGameChange: PropTypes.func.isRequired,
};
export default GenreFilter;
