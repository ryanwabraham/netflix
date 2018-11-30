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
    this.getResults = this.getResults.bind(this);
    this.buildRequest = this.buildRequest.bind(this);
    this.handleDropdowns = this.handleDropdowns.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchTrigger = this.handleSearchTrigger.bind(this);
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
    const {
      type,
      duration,
      rating,
      certification,
      releaseDate
    } = this.state;

    let { genres } = this.state;

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
    const {
      typeIsVisible,
      genreIsVisible,
      durationIsVisible,
      ratingIsVisible,
      certificationIsVisible,
      releaseDateIsVisible
    } = this.state;

    switch (filter) {
      case 'type':
        this.setState({
          typeIsVisible: !typeIsVisible,
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
          genreIsVisible: !genreIsVisible,
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
          durationIsVisible: !durationIsVisible,
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
          ratingIsVisible: !ratingIsVisible,
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
          certificationIsVisible: !certificationIsVisible,
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
          releaseDateIsVisible: !releaseDateIsVisible
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
    let {
      type,
      typeIsSetByUser,
      genres,
      duration,
      rating,
      certification,
      releaseDate
    } = this.state;

    let filtersSet = true;
    const filterList = [type, genres, duration, rating, certification, releaseDate];

    switch (filter) {
      case 'type':
        type = e.target.value;
        typeIsSetByUser = true;
        break;
      case 'genre':
        if (e.target.checked) {
          genres.push(e.target.value);
        } else {
          genres.splice(genres.indexOf(e.target.value), 1);
        }
        break;
      case 'duration':
        if (e.length) {
          if (e[0] === 0 && e[1] === 240) {
            duration = '';
          } else {
            duration = `&with_runtime.gte=${e[0]}&with_runtime.lte=${e[1]}`;
          }
        }
        break;
      case 'rating':
        if (e.length) {
          if (e[0] === 0 && e[1] === 10) {
            rating = '';
          } else {
            rating = `&vote_average.gte=${e[0]}&vote_average.lte=${e[1]}`;
          }
        }
        break;
      case 'certification':
        if (e.target.value !== '') {
          certification = `&certification_country=US&certification=${e.target.value}`;
        }
        break;
      case 'releaseDate':
        if (e.length > 0) {
          if (e[0] === 1900 && e[1] === 2020) {
            releaseDate = '';
          } else if (type === 'tv') {
            releaseDate = `&first_air_date.gte=${e[0]}&first_air_date.lte=${e[1]}`;
          } else {
            releaseDate = `&primary_release_date.gte=${e[0]}&primary_release_date.lte=${e[1]}`;
          }
        }
        break;
      default:
        console.log('no changes to filters');
    }

    for (let i = 0; i < filterList.length; i += 1) {
      if (!filterList[i].length) {
        filtersSet = false;
      }
    }

    this.setState({
      type: type,
      typeIsSetByUser: typeIsSetByUser,
      genres: genres,
      duration: duration,
      rating: rating,
      certification: certification,
      releaseDate: releaseDate,
      filters: filtersSet
    }, () => {
      this.buildRequest();
    });
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
