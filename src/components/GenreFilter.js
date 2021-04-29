import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <p>Filter:</p>
      <select id="genres" name="genres" value={filter} onChange={onGameChange}>
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
  onGameChange: PropTypes.string.isRequired,
};
export default GenreFilter;
