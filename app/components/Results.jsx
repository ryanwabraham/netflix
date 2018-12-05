import React from 'react';
import ResultItem from 'ResultItem';
import PropTypes from 'prop-types';

const Results = ({ resultData, dropdownIsOpen }) => {
  let results = '';
  if (resultData) {
    results = resultData.map((result) => {
      if (result.media_type !== 'person') {
        const title = !result.name ? result.original_title : result.name;
        const key = result.id;
        const genres = result.genre_ids;
        const rating = result.vote_average;

        if (result.poster_path !== null) {
          const poster = `https://image.tmdb.org/t/p/w500${result.poster_path}`;
          return (
            <ResultItem key={key} title={title} genres={genres} rating={rating} poster={poster} />
          );
        }
      }
      return '';
    });
  }

  return (
    <ul className={dropdownIsOpen ? 'items dropdown-open' : 'items'}>
      {results}
    </ul>
  );
};

module.exports = Results;

Results.propTypes = {
  resultData: PropTypes.arrayOf(PropTypes.object).isRequired,
  dropdownIsOpen: PropTypes.bool.isRequired
};
