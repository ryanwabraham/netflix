import React from 'react';
import Nav from 'Nav';
import Hero from 'Hero';
import Results from 'Results';
import Filters from 'Filters';

const MOVIE_DB_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '87dfa1c669eea853da609d4968d294be'; // borrowing this for now
const ADDITIONAL_CONFIG = '&sort_by=popularity.desc&language=en-US&original_language=en';
const DEFAULT_REQUEST = `${MOVIE_DB_URL}discover/movie?${ADDITIONAL_CONFIG}&api_key=${API_KEY}`;
const BASE_FILTER_REQUEST = `${MOVIE_DB_URL}discover/`;

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.initialRequest = true;
    this.state = {
      searchTerm: '',
      filters: false,
      type: 'movie',
      genres: [],
      duration: [],
      rating: '',
      certification: '',
      releaseDate: '',
      requestUrl: DEFAULT_REQUEST,
      data: '',
      typeIsSetByUser: false,
      typeIsVisible: false,
      genreIsVisible: false,
      durationIsVisible: false,
      ratingIsVisible: false,
      certificationIsVisible: false,
      releaseDateIsVisible: false,
      searchIsVisible: false
    };
  }

  getResults (requestUrl) {
    console.log(`requestUrl: '${requestUrl}`);

    fetch(requestUrl).then(response => response.json()).then((data) => {
      this.setState({
        data: data.results
      });
    }).catch((err) => {
      console.log(`There has been an error: ${err}`);
    });
  }

  buildRequest () {
    let { type, genres, duration, rating, certification, releaseDate, requestUrl } = this.state;

    if (genres.length > 0) {
      genres = `&with_genres=${genres.join(',')}`;
    } else {
      genres = '';
    }

    const newRequestUrl = `${BASE_FILTER_REQUEST}${type}?${genres}${duration}${rating}${certification}${releaseDate}${ADDITIONAL_CONFIG}&api_key=${API_KEY}`;

    this.setState({
      requestUrl: newRequestUrl
    }, () => {
      this.getResults(newRequestUrl);
    });
  }

  handleDropdowns (filter) {
    switch (filter) {
      case 'type':
        this.setState({
          typeIsVisible: !this.state.typeIsVisible,
          genreIsVisible: false,
          durationIsVisible: false,
          ratingIsVisible: false,
          certificationIsVisible: false,
          releaseDateIsVisible: false
        });
        break;
      case 'genre':
        this.setState({
          typeIsVisible: false,
          genreIsVisible: !this.state.genreIsVisible,
          durationIsVisible: false,
          ratingIsVisible: false,
          certificationIsVisible: false,
          releaseDateIsVisible: false
        });
        break;
      case 'duration':
        this.setState({
          typeIsVisible: false,
          genreIsVisible: false,
          durationIsVisible: !this.state.durationIsVisible,
          ratingIsVisible: false,
          certificationIsVisible: false,
          releaseDateIsVisible: false
        });
        break;
      case 'rating':
        this.setState({
          typeIsVisible: false,
          genreIsVisible: false,
          durationIsVisible: false,
          ratingIsVisible: !this.state.ratingIsVisible,
          certificationIsVisible: false,
          releaseDateIsVisible: false
        });
        break;
      case 'certification':
        this.setState({
          typeIsVisible: false,
          genreIsVisible: false,
          durationIsVisible: false,
          ratingIsVisible: false,
          certificationIsVisible: false,
          certificationIsVisible: !this.state.certificationIsVisible,
          releaseDateIsVisible: false
        });
        break;
      case 'releaseDate':
        this.setState({
          typeIsVisible: false,
          genreIsVisible: false,
          durationIsVisible: false,
          ratingIsVisible: false,
          certificationIsVisible: false,
          releaseDateIsVisible: !this.state.releaseDateIsVisible
        });
        break;
      default:
        this.setState({
          typeIsVisible: false,
          genreIsVisible: false,
          durationIsVisible: false,
          ratingIsVisible: false,
          certificationIsVisible: false,
          releaseDateIsVisible: false
        });
    }
  }

  handleFilter (e, filter) {
    let { type, genres, duration, rating, certification, releaseDate } = this.state;

    switch (filter) {
      case 'type':
        const type = e.target.value;
        this.setState({
          type: type,
          typeIsSetByUser: true
        }, () => {
          this.buildRequest();
        });
        break;
      case 'genre':
        if (e.target.checked) {
          genres.push(e.target.value);
        } else {
          let index = genres.indexOf(e.target.value);
          genres.splice(index, 1);
        }

        this.setState({
          genres: genres
        }, () => {
          this.buildRequest();
        });
        break;
      case 'duration':
        let duration = e;

        if (duration.length) {
          if (duration[0] === 0 && duration[1] === 240) {
            duration = '';
          } else {
            duration = '&with_runtime.gte=' + duration[0] + '&with_runtime.lte=' + duration[1];
          }
        }

        this.setState({
          duration: duration
        }, () => {
          this.buildRequest();
        });
        break;
      case 'rating':
        let rating = e;

        if (rating.length) {
          if (rating[0] === 0 && rating[1] === 10) {
            rating = '';
          } else {
            rating = '&vote_average.gte=' + rating[0] + '&vote_average.lte=' + rating[1];
          }
        }

        this.setState({
          rating: rating
        }, () => {
          this.buildRequest();
        });
        break;
      case 'certification':
        let certification = e.target.value;

        if (certification != '') {
          certification = '&certification_country=US&certification=' + certification;
        }

        this.setState({
          certification: certification
        }, () => {
          this.buildRequest();
        });
        break;
      case 'releaseDate':
        let releaseDate = e;

        if (releaseDate.length > 0) {
          if (releaseDate[0] === 1900 && releaseDate[1] === 2020) {
            releaseDate = '';
          } else if (this.state.type == 'tv') {
            releaseDate = '&first_air_date.gte=' + releaseDate[0] + '&first_air_date.lte=' + releaseDate[1];
          } else {
            releaseDate = '&primary_release_date.gte=' + releaseDate[0] + '&primary_release_date.lte=' + releaseDate[1];
          }
        }

        this.setState({
          releaseDate: releaseDate
        }, () => {
          this.buildRequest();
        });
      break;
      default:
        console.log('no changes to filters');
    }

    if (type.length > 0 || genres.length > 0 || duration.length > 0 || rating.length > 0 || certification.length > 0 || releaseDate.length > 0) {
      this.setState({
        filters: true
      });
    } else {
      this.setState({
        filters: false
      });
    }
  }

  handleSearch (searchTerm) {
    if (searchTerm.length > 0) {
      const request = encodeURIComponent(searchTerm);
      const requestUrl = `${MOVIE_DB_URL}search/multi?query=${request}&api_key=${API_KEY}${ADDITIONAL_CONFIG}`;
      this.setState({
        searchTerm: searchTerm,
        requestUrl: requestUrl
      }, () => {
        this.getResults(requestUrl);
      });
    } else {
      this.setState({
        searchTerm: searchTerm
      }, () => {
        this.buildRequest();
      });
    }
  }

  handleSearchTrigger () {
    this.setState({
      searchIsVisible: !this.state.searchIsVisible
    });
  }

  render () {
    let {
      searchTerm,
      filters,
      type,
      genres,
      duration,
      rating,
      certification,
      releaseDate,
      requestUrl,
      data,
      typeIsSetByUser,
      typeIsVisible,
      genreIsVisible,
      durationIsVisible,
      ratingIsVisible,
      certificationIsVisible,
      releaseDateIsVisible,
      searchIsVisible
    } = this.state;

    let dropdowns = [
      typeIsVisible,
      genreIsVisible,
      durationIsVisible,
      ratingIsVisible,
      certificationIsVisible,
      releaseDateIsVisible,
      searchIsVisible
    ];

    let dropdownIsOpen = dropdowns.includes(true) ? true : false;

    let displayResults = () => {
      if (data.length > 0) {
        return <Results resultData={data} dropdownIsOpen={dropdownIsOpen} />;
      } else {
        return <h3>No Results Found.</h3>;
      }
    }

    if (this.initialRequest === true && !filters && searchTerm.length === 0) {
      this.getResults(DEFAULT_REQUEST);
      this.initialRequest = false;
    }

    return (
      <main>
        <Nav />
        <section id="results">
          <Hero />
          <Filters
            onFilter={this.handleFilter}
            onSearch={this.handleSearch}
            onDropdown={this.handleDropdowns}
            onSearchTrigger={this.handleSearchTrigger}
            dropdowns={dropdowns}
            typeIsSetByUser={typeIsSetByUser}
            type={type}
            genres={genres}
            duration={duration}
            rating={rating}
            certification={certification}
            releaseDate={releaseDate}
          />
          {displayResults()}
        </section>
      </main>
    );
  }
}

module.exports = Main;
