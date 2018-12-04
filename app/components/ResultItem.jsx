import React from 'react';
import GenreData from 'genreData';
import PropTypes from 'prop-types';

const ResultItem = ({ title, genres, rating, poster }) => {
  let genreList = '';
  genres.forEach((genre, genreCount) => {
    GenreData.genres.forEach((item, index) => {
      if (genreCount < 3 && item.id === genre) {
        genreList += `${item.name}, `;
      }
    });
  });
  // remove the last comma
  genreList = genreList.replace(/,\s*$/, '');

  return (
    <li className="item animated zoomIn">
      <img src={poster} alt={title} />
      <div className="info">
        <div className="title animated quick fadeInUp">
          {title}
        </div>
        <div className="genres animated quick fadeInUp">
          {genreList}
        </div>
        <div className="rating animated quick fadeInUp">
          {rating}
          &nbsp;/ 10
        </div>
      </div>
    </li>
  );
};

module.exports = ResultItem;

ResultItem.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.number).isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired
};
