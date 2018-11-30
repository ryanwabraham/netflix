import React from 'react';
import ResultItem from 'ResultItem';

class Results extends React.Component {
    render() {
        let results = '';

        if (this.props.resultData) {
            results = this.props.resultData.map(function(result) {
                if (result.media_type == 'person') {
                    console.log('this is a person');
                } else {
                    let title = !result.name ? result.original_title : result.name,
                        key = result.id,
                        genres = result.genre_ids,
                        rating = result.vote_average;

                    if (result.poster_path !== null) {
                        var poster = 'http://image.tmdb.org/t/p/w500' + result.poster_path;
                        return (
                            <ResultItem key={key} title={title} genres={genres} rating={rating} poster={poster} />
                        );
                    }
                }
            });
        }

        return (
            <ul className={this.props.dropdownIsOpen ? 'items dropdown-open' : 'items'}>
                {results}
            </ul>
        );
    }
};

module.exports = Results;
