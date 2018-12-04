import React from 'react';
import ReactDOM from 'react-dom';
import DebounceInput from 'react-debounce-input';
import Slider from 'rc-slider';
import PropTypes from 'prop-types';
import 'rc-slider/assets/index.css';

class Filters extends React.Component {
  componentWillMount = () => {
    document.addEventListener('click', this.handleClick, false);
  }

  componentDidUpdate = () => {
    const { dropdowns } = this.props;
    if (dropdowns[6] === true) {
      document.getElementById('search-input').focus();
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = (e) => {
    if (!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.handleDropdown();
    }
  }

  handleDropdown = (filter) => {
    const { onDropdown } = this.props;
    onDropdown(filter);
  }

  handleFilter = (e, filter) => {
    const { onFilter } = this.props;
    onFilter(e, filter);
  }

  handleSearch = (e) => {
    const { onSearch } = this.props;
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  }

  handleSearchTrigger = (e) => {
    const { onSearchTrigger } = this.props;
    onSearchTrigger();
  }

  render () {
    const {
      dropdowns,
      typeIsSetByUser,
      type,
      genres,
      duration,
      rating,
      certification,
      releaseDate
    } = this.props;
    const { Range } = Slider;

    return (
      <aside>
        <div id="filters">
          <section>
            <form onChange={e => this.handleFilter(e, 'type')}>
              <h3 onClick={() => this.handleDropdown('type')} className={`${(dropdowns[0] ? 'active' : '')} ${(typeIsSetByUser ? 'applied' : '')}`}>
                Type
              </h3>
              <div className={dropdowns[0] ? 'filters__dropdown type-wrapper visible' : 'filters__dropdown type-wrapper'}>
                <label htmlFor="type--movie">
                  <input type="radio" id="type--movie" name="type" value="movie" />
                  Movie
                </label>

                <label htmlFor="type--tv">
                  <input type="radio" id="type--tv" name="type" value="tv" />
                  TV
                </label>
              </div>
            </form>
          </section>

          <section>
            <form>
              <h3 onClick={() => this.handleDropdown('genre')} className={`${(dropdowns[1] ? 'active' : '')} ${(genres.length > 0 ? 'applied' : '')}`}>
                Genre
              </h3>
              <div className={dropdowns[1] ? 'filters__dropdown genre-wrapper visible' : 'filters__dropdown genre-wrapper'}>
                <label htmlFor="genre--action">
                  <input type="checkbox" id="genre--action" name="genre" value="28" onChange={e => this.handleFilter(e, 'genre')} />
                  Action
                </label>

                <label htmlFor="genre--adventure">
                  <input type="checkbox" id="genre--adventure" name="genre" value="12" onChange={e => this.handleFilter(e, 'genre')} />
                  Adventure
                </label>

                <label htmlFor="genre--animation">
                  <input type="checkbox" id="genre--animation" name="genre" value="16" onChange={e => this.handleFilter(e, 'genre')} />
                  Animation
                </label>

                <label htmlFor="genre--comedy">
                  <input type="checkbox" id="genre--comedy" name="genre" value="35" onChange={e => this.handleFilter(e, 'genre')} />
                  Comedy
                </label>

                <label htmlFor="genre--crime">
                  <input type="checkbox" id="genre--crime" name="genre" value="80" onChange={e => this.handleFilter(e, 'genre')} />
                  Crime
                </label>

                <label htmlFor="genre--documentary">
                  <input type="checkbox" id="genre--documentary" name="genre" value="99" onChange={e => this.handleFilter(e, 'genre')} />
                  Documentary
                </label>

                <label htmlFor="genre--drama">
                  <input type="checkbox" id="genre--drama" name="genre" value="18" onChange={e => this.handleFilter(e, 'genre')} />
                  Drama
                </label>

                <label htmlFor="genre--family">
                  <input type="checkbox" id="genre--family" name="genre" value="10751" onChange={e => this.handleFilter(e, 'genre')} />
                  Family
                </label>

                <label htmlFor="genre--fantasy">
                  <input type="checkbox" id="genre--fantasy" name="genre" value="14" onChange={e => this.handleFilter(e, 'genre')} />
                  Fantasy
                </label>

                <label htmlFor="genre--history">
                  <input type="checkbox" id="genre--history" name="genre" value="36" onChange={e => this.handleFilter(e, 'genre')} />
                  History
                </label>

                <label htmlFor="genre--horror">
                  <input type="checkbox" id="genre--horror" name="genre" value="27" onChange={e => this.handleFilter(e, 'genre')} />
                  Horror
                </label>

                <label htmlFor="genre--musical">
                  <input type="checkbox" id="genre--musical" name="genre" value="10402" onChange={e => this.handleFilter(e, 'genre')} />
                  Musical
                </label>

                <label htmlFor="genre--mystery">
                  <input type="checkbox" id="genre--mystery" name="genre" value="9648" onChange={e => this.handleFilter(e, 'genre')} />
                  Mystery
                </label>

                <label htmlFor="genre--romance">
                  <input type="checkbox" id="genre--romance" name="genre" value="10749" onChange={e => this.handleFilter(e, 'genre')} />
                  Romance
                </label>

                <label htmlFor="genre--sci-fi">
                  <input type="checkbox" id="genre--sci-fi" name="genre" value="878" onChange={e => this.handleFilter(e, 'genre')} />
                  Science Fiction
                </label>

                <label htmlFor="genre--thriller">
                  <input type="checkbox" id="genre--thriller" name="genre" value="53" onChange={e => this.handleFilter(e, 'genre')} />
                  Thriller
                </label>

                <label htmlFor="genre--war">
                  <input type="checkbox" id="genre--war" name="genre" value="10752" onChange={e => this.handleFilter(e, 'genre')} />
                  War
                </label>

                <label htmlFor="genre--western">
                  <input type="checkbox" id="genre--western" name="genre" value="37" onChange={e => this.handleFilter(e, 'genre')} />
                  Western
                </label>
              </div>
            </form>
          </section>

          <section>
            <form>
              <h3 onClick={() => this.handleDropdown('duration')} className={`${(dropdowns[2] ? 'active' : '')} ${(duration.length > 0 ? 'applied' : '')}`}>
                Duration
              </h3>
              <div className={dropdowns[2] ? 'filters__dropdown slider-wrapper visible' : 'filters__dropdown slider-wrapper'}>
                <div className={type === 'tv' ? 'distribution duration tv' : 'distribution duration'} />
                <Range
                  dots
                  step={30}
                  allowCross={false}
                  defaultValue={[0, 240]}
                  min={0}
                  max={240}
                  onAfterChange={e => this.handleFilter(e, 'duration')}
                />
                <ul className="slider-key">
                  <li>
                    0h
                  </li>
                  <li>
                    1h
                  </li>
                  <li>
                    2h
                  </li>
                  <li>
                    3h
                  </li>
                  <li>
                    4h
                  </li>
                </ul>
              </div>
            </form>
          </section>

          <section>
            <form>
              <h3 onClick={() => this.handleDropdown('rating')} className={`${(dropdowns[3] ? 'active' : '')} ${(rating.length > 0 ? 'applied' : '')}`}>
                Rating
              </h3>
              <div className={dropdowns[3] ? 'filters__dropdown slider-wrapper visible' : 'filters__dropdown slider-wrapper'}>
                <div className="distribution rating" />
                <Range dots step={2} allowCross={false} defaultValue={[0, 10]} min={0} max={10} onAfterChange={e => this.handleFilter(e, 'rating')} />
                <ul className="slider-key">
                  <li>
                    0/10
                  </li>
                  <li>
                    2/10
                  </li>
                  <li>
                    4/10
                  </li>
                  <li>
                    6/10
                  </li>
                  <li>
                    8/10
                  </li>
                  <li>
                    10/10
                  </li>
                </ul>
              </div>
            </form>
          </section>

          <section>
            <form onChange={e => this.handleFilter(e, 'certification')}>
              <h3 onClick={() => this.handleDropdown('certification')} className={`${(dropdowns[4] ? 'active' : '')} ${(certification.length > 0 ? 'applied' : '')}`}>
                Maturity Rating
              </h3>
              <div className={dropdowns[4] ? 'filters__dropdown certification-wrapper visible' : 'filters__dropdown certification-wrapper'}>
                <label htmlFor="certification--any">
                  <input type="radio" id="certification--any" name="certification" value="" />
                  Any
                </label>
                <label htmlFor="certification--g">
                  <input type="radio" id="certification--g" name="certification" value="G" />
                  G
                </label>

                <label htmlFor="certification--pg">
                  <input type="radio" id="certification--pg" name="certification" value="PG" />
                  PG
                </label>

                <label htmlFor="certification--pg-13">
                  <input type="radio" id="certification--pg-13" name="certification" value="PG-13" />
                  PG-13
                </label>

                <label htmlFor="certification--r">
                  <input type="radio" id="certification--r" name="certification" value="R" />
                  R
                </label>
              </div>
            </form>
          </section>

          <section>
            <form>
              <h3 onClick={() => this.handleDropdown('releaseDate')} className={`${(dropdowns[5] ? 'active' : '')} ${(releaseDate.length > 0 ? 'applied' : '')}`}>
                Release Date
              </h3>
              <div className={dropdowns[5] ? 'filters__dropdown slider-wrapper visible' : 'filters__dropdown slider-wrapper'}>
                <div className="distribution releaseDate" />
                <Range
                  dots
                  step={20}
                  allowCross={false}
                  defaultValue={[1900, 2020]}
                  min={1900}
                  max={2020}
                  onAfterChange={e => this.handleFilter(e, 'releaseDate')}
                />
                <ul className="slider-key">
                  <li>
                    1900
                  </li>
                  <li>
                    1920
                  </li>
                  <li>
                    1940
                  </li>
                  <li>
                    1960
                  </li>
                  <li>
                    1980
                  </li>
                  <li>
                    2000
                  </li>
                  <li>
                    Present
                  </li>
                </ul>
              </div>
            </form>
          </section>
        </div>

        <form id="search" onClick={() => this.handleSearchTrigger()}>
          <h3 className={dropdowns[6] ? 'active' : ''} id="search__placeholder">
            {dropdowns[6] ? 'Close' : 'Search Titles'}
          </h3>
          <DebounceInput
            id="search-input"
            className={dropdowns[6] ? 'active' : ''}
            type="search"
            minLength={2}
            debounceTimeout={300}
            onChange={this.handleSearch}
            placeholder="Search Titles"
            autoFocus
          />
        </form>
      </aside>
    );
  }
}

module.exports = Filters;

Filters.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onDropdown: PropTypes.func.isRequired,
  onSearchTrigger: PropTypes.func.isRequired,
  dropdowns: PropTypes.arrayOf(PropTypes.bool).isRequired,
  typeIsSetByUser: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  duration: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  certification: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired
};
