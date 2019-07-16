import React, { lazy, Suspense } from 'react';
import Hero from 'Hero';
import Nav from 'Nav';

const Filters = React.lazy(() => import(/* webpackChunkName: "filters" */ 'Filters'));
const Results = React.lazy(() => import(/* webpackChunkName: "results" */ 'Results'));
const MOVIE_DB_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '87dfa1c669eea853da609d4968d294be'; // borrowing this for now
const ADDITIONAL_CONFIG = '&sort_by=popularity.desc&language=en-US&original_language=en';
const DEFAULT_REQUEST = `${MOVIE_DB_URL}discover/movie?${ADDITIONAL_CONFIG}&api_key=${API_KEY}`;
const BASE_FILTER_REQUEST = `${MOVIE_DB_URL}discover/`;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.initialRequest = true;
    this.state = {
      searchTerm: '',
      filters: false,
      type: 'movie',
      genres: [],
      duration: '',
      rating: '',
      certification: '',
      releaseDate: '',
      data: '',
      typeIsSetByUser: false,
      typeIsVisible: false,
      genreIsVisible: false,
      durationIsVisible: false,
      ratingIsVisible: false,
      certificationIsVisible: false,
      releaseDateIsVisible: false,
      searchIsVisible: false,
    };
  }

  getResults = (requestUrl) => {
    fetch(requestUrl).then(response => response.json()).then((data) => {
      this.setState({
        data: data.results,
      });
    });
  }

  buildRequest = () => {
    const {
      type,
      duration,
      rating,
      certification,
      releaseDate,
    } = this.state;
    let { genres } = this.state;
    genres = genres.length > 0 ? `&with_genres=${genres.join(',')}` : '';
    const newRequestUrl = `${BASE_FILTER_REQUEST}${type}?${genres}${duration}${rating}${certification}${releaseDate}${ADDITIONAL_CONFIG}&api_key=${API_KEY}`;
    this.getResults(newRequestUrl);
  }

  handleDropdowns = (filter) => {
    let {
      typeIsVisible,
      genreIsVisible,
      durationIsVisible,
      ratingIsVisible,
      certificationIsVisible,
      releaseDateIsVisible,
    } = this.state;

    switch (filter) {
      case 'type':
        typeIsVisible = !typeIsVisible;
        genreIsVisible = false;
        durationIsVisible = false;
        ratingIsVisible = false;
        certificationIsVisible = false;
        releaseDateIsVisible = false;
        break;
      case 'genre':
        typeIsVisible = false;
        genreIsVisible = !genreIsVisible;
        durationIsVisible = false;
        ratingIsVisible = false;
        certificationIsVisible = false;
        releaseDateIsVisible = false;
        break;
      case 'duration':
        typeIsVisible = false;
        genreIsVisible = false;
        durationIsVisible = !durationIsVisible;
        ratingIsVisible = false;
        certificationIsVisible = false;
        releaseDateIsVisible = false;
        break;
      case 'rating':
        typeIsVisible = false;
        genreIsVisible = false;
        durationIsVisible = false;
        ratingIsVisible = !ratingIsVisible;
        certificationIsVisible = false;
        releaseDateIsVisible = false;
        break;
      case 'certification':
        typeIsVisible = false;
        genreIsVisible = false;
        durationIsVisible = false;
        ratingIsVisible = false;
        certificationIsVisible = !certificationIsVisible;
        releaseDateIsVisible = false;
        break;
      case 'releaseDate':
        typeIsVisible = false;
        genreIsVisible = false;
        durationIsVisible = false;
        ratingIsVisible = false;
        certificationIsVisible = false;
        releaseDateIsVisible = !releaseDateIsVisible;
        break;
      default:
        typeIsVisible = false;
        genreIsVisible = false;
        durationIsVisible = false;
        ratingIsVisible = false;
        certificationIsVisible = false;
        releaseDateIsVisible = false;
    }

    this.setState({
      typeIsVisible: typeIsVisible,
      genreIsVisible: genreIsVisible,
      durationIsVisible: durationIsVisible,
      ratingIsVisible: ratingIsVisible,
      certificationIsVisible: certificationIsVisible,
      releaseDateIsVisible: releaseDateIsVisible,
    });
  }

  handleFilter = (e, filter) => {
    let filtersSet = true;
    let {
      type,
      typeIsSetByUser,
      duration,
      rating,
      certification,
      releaseDate,
    } = this.state;
    const { genres } = this.state;
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
        break;
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
      filters: filtersSet,
    }, () => {
      this.buildRequest();
    });
  }

  handleSearch = (searchTerm) => {
    if (searchTerm.length > 0) {
      const request = encodeURIComponent(searchTerm);
      const requestUrl = `${MOVIE_DB_URL}search/multi?query=${request}&api_key=${API_KEY}${ADDITIONAL_CONFIG}`;
      this.setState({
        searchTerm: searchTerm,
      }, () => {
        this.getResults(requestUrl);
      });
    } else {
      this.setState({
        searchTerm: searchTerm,
      }, () => {
        this.buildRequest();
      });
    }
  }

  handleSearchTrigger = () => {
    const { searchIsVisible } = this.state;
    this.setState({
      searchIsVisible: !searchIsVisible,
    });
  }

  render() {
    const {
      searchTerm,
      filters,
      type,
      genres,
      duration,
      rating,
      certification,
      releaseDate,
      data,
      typeIsSetByUser,
      typeIsVisible,
      genreIsVisible,
      durationIsVisible,
      ratingIsVisible,
      certificationIsVisible,
      releaseDateIsVisible,
      searchIsVisible,
    } = this.state;

    const dropdowns = [
      typeIsVisible,
      genreIsVisible,
      durationIsVisible,
      ratingIsVisible,
      certificationIsVisible,
      releaseDateIsVisible,
      searchIsVisible,
    ];

    const dropdownIsOpen = dropdowns.includes(true);

    const displayResults = () => {
      let response = '';
      if (this.initialRequest) {
        response = '';
      } else if (!data.length) {
        response = (
          <h3 id="no-results">
            No Results Found.
          </h3>
        );
      } else {
        response = <Suspense fallback={<h3 id="no-results"></h3>}><Results resultData={data} dropdownIsOpen={dropdownIsOpen} /></Suspense>;
      }
      return response;
    };

    if (this.initialRequest === true && !filters && searchTerm.length === 0) {
      const sendInitialRequest = new Promise((resolve) => {
        this.getResults(DEFAULT_REQUEST);
        resolve();
      });

      sendInitialRequest.then(() => {
        displayResults();
        this.initialRequest = false;
      });
    }

    return (
      <main>
        <Nav />
        <section id="results">
          <div id="mobile-disclaimer">
            Sorry, this demo is currently only available for desktop devices.
          </div>
          <Hero />
          <Suspense fallback={<aside><div id="filters"></div></aside>}>
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
          </Suspense>
          {displayResults()}
        </section>
      </main>
    );
  }
}

export default Main;
