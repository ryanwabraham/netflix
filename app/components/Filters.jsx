import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Filters extends React.Component {
    handleDropdown = (filter) => {
        this.props.onDropdown(filter);
    }
    handleFilter = (e, filter) => {
        this.props.onFilter(e, filter);
    }
    handleSearch = (e) => {
        var searchTerm = e.target.value;
        this.props.onSearch(searchTerm);
    }
    render() {
        const Range = Slider.Range;

        return (
            <aside>
                <div id="filters">
                    <section>
                        <form onChange={(e) => this.handleFilter(e, 'type')}>
                            <h3 onClick={() => this.handleDropdown('type')} className={this.props.dropdowns[0] ? 'active': ''}>Type</h3>
                            <div className={this.props.dropdowns[0] ? 'filters__dropdown visible animated quick fadeInUp': 'filters__dropdown'}>
                                <label htmlFor="type--movie">
                                    <input type="radio" id="type--movie" name="type" value="movie"></input>
                                    Movie
                                </label>

                                <label htmlFor="type--tv">
                                    <input type="radio" id="type--tv" name="type" value="tv"></input>
                                    TV
                                </label>
                            </div>
                        </form>
                    </section>

                    <section>
                        <form>
                            <h3 onClick={() => this.handleDropdown('genre')} className={this.props.dropdowns[1] ? 'active': ''}>Genre</h3>
                            <div className={this.props.dropdowns[1] ? 'filters__dropdown visible animated quick fadeInUp': 'filters__dropdown'}>
                                <label htmlFor="genre--action">
                                    <input type="checkbox" id="genre--action" name="genre" value="28" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Action
                                </label>

                                <label htmlFor="genre--adventure">
                                    <input type="checkbox" id="genre--adventure" name="genre" value="12" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Adventure
                                </label>

                                <label htmlFor="genre--animation">
                                    <input type="checkbox" id="genre--animation" name="genre" value="16" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Animation
                                </label>

                                <label htmlFor="genre--comedy">
                                    <input type="checkbox" id="genre--comedy" name="genre" value="35" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Comedy
                                </label>

                                <label htmlFor="genre--crime">
                                    <input type="checkbox" id="genre--crime" name="genre" value="80" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Crime
                                </label>

                                <label htmlFor="genre--documentary">
                                    <input type="checkbox" id="genre--documentary" name="genre" value="99" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Documentary
                                </label>

                                <label htmlFor="genre--drama">
                                    <input type="checkbox" id="genre--drama" name="genre" value="18" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Drama
                                </label>

                                <label htmlFor="genre--family">
                                    <input type="checkbox" id="genre--family" name="genre" value="10751" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Family
                                </label>

                                <label htmlFor="genre--fantasy">
                                    <input type="checkbox" id="genre--fantasy" name="genre" value="14" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Fantasy
                                </label>

                                <label htmlFor="genre--history">
                                    <input type="checkbox" id="genre--history" name="genre" value="36" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    History
                                </label>

                                <label htmlFor="genre--horror">
                                    <input type="checkbox" id="genre--horror" name="genre" value="27" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Horror
                                </label>

                                <label htmlFor="genre--musical">
                                    <input type="checkbox" id="genre--musical" name="genre" value="10402" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Musical
                                </label>

                                <label htmlFor="genre--mystery">
                                    <input type="checkbox" id="genre--mystery" name="genre" value="9648" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Mystery
                                </label>

                                <label htmlFor="genre--romance">
                                    <input type="checkbox" id="genre--romance" name="genre" value="10749" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Romance
                                </label>

                                <label htmlFor="genre--sci-fi">
                                    <input type="checkbox" id="genre--sci-fi" name="genre" value="878" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Science Fiction
                                </label>

                                <label htmlFor="genre--thriller">
                                    <input type="checkbox" id="genre--thriller" name="genre" value="53" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Thriller
                                </label>

                                <label htmlFor="genre--war">
                                    <input type="checkbox" id="genre--war" name="genre" value="10752" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    War
                                </label>

                                <label htmlFor="genre--western">
                                    <input type="checkbox" id="genre--western" name="genre" value="37" onChange={(e) => this.handleFilter(e, 'genre')}></input>
                                    Western
                                </label>
                            </div>
                        </form>
                    </section>

                    <section>
                        <form onChange={(e) => this.handleFilter(e, 'duration')}>
                            <h3 onClick={() => this.handleDropdown('duration')} className={this.props.dropdowns[2] ? 'active': ''}>Duration</h3>
                            <div className={this.props.dropdowns[2] ? 'filters__dropdown visible animated quick fadeInUp': 'filters__dropdown'}>
                                <Range dots step={30} allowCross={false} defaultValue={[0, 240]} min={0} max={240} onAfterChange={(e) => this.handleFilter(e, 'duration')} />
                                {/*<label htmlFor="duration--any">
                                    <input type="radio" id="duration--any" name="duration" value=""></input>
                                    Any Duration
                                </label>

                                <label htmlFor="duration--half-hour">
                                    <input type="radio" id="duration--half-hour" name="duration" value="30"></input>
                                    Half-Hour or Less
                                </label>

                                <label htmlFor="duration--one-hour">
                                    <input type="radio" id="duration--one-hour" name="duration" value="60"></input>
                                    One Hour or Less
                                </label>

                                <label htmlFor="duration--two-hours">
                                    <input type="radio" id="duration--two-hours" name="duration" value="120"></input>
                                    Two Hours or Less
                                </label>

                                <label htmlFor="duration--two-plus-hours">
                                    <input type="radio" id="duration--two-plus-hours" name="duration" value="121"></input>
                                    2+ Hours
                                </label>*/}
                            </div>
                        </form>
                    </section>

                    <section>
                        <form onChange={(e) => this.handleFilter(e, 'rating')}>
                            <h3 onClick={() => this.handleDropdown('rating')} className={this.props.dropdowns[3] ? 'active': ''}>Rating</h3>
                            <div className={this.props.dropdowns[3] ? 'filters__dropdown visible animated quick fadeInUp': 'filters__dropdown'}>
                                <label htmlFor="rating--any">
                                    <input type="radio" id="rating--any" name="rating" value=""></input>
                                    Any Rating
                                </label>

                                <label htmlFor="rating--two-stars">
                                    <input type="radio" id="rating--two-stars" name="rating" value="2"></input>
                                    2/10 +
                                </label>

                                <label htmlFor="rating--four-stars">
                                    <input type="radio" id="rating--four-stars" name="rating" value="4"></input>
                                    4/10 +
                                </label>

                                <label htmlFor="rating--six-stars">
                                    <input type="radio" id="rating--six-stars" name="rating" value="6"></input>
                                    6/10 +
                                </label>

                                <label htmlFor="rating--eight-stars">
                                    <input type="radio" id="rating--eight-stars" name="rating" value="8"></input>
                                    8/10 +
                                </label>
                            </div>
                        </form>
                    </section>

                    <section>
                        <form onChange={(e) => this.handleFilter(e, 'certification')}>
                            <h3 onClick={() => this.handleDropdown('certification')} className={this.props.dropdowns[4] ? 'active': ''}>Maturity Rating</h3>
                            <div className={this.props.dropdowns[4] ? 'filters__dropdown visible animated quick fadeInUp': 'filters__dropdown'}>
                                <label htmlFor="certification--any">
                                    <input type="radio" id="certification--any" name="certification" value=""></input>
                                    Any
                                </label>
                                <label htmlFor="certification--g">
                                    <input type="radio" id="certification--g" name="certification" value="G"></input>
                                    G
                                </label>

                                <label htmlFor="certification--pg">
                                    <input type="radio" id="certification--pg" name="certification" value="PG"></input>
                                    PG
                                </label>

                                <label htmlFor="certification--pg-13">
                                    <input type="radio" id="certification--pg-13" name="certification" value="PG-13"></input>
                                    PG-13
                                </label>

                                <label htmlFor="certification--r">
                                    <input type="radio" id="certification--r" name="certification" value="R"></input>
                                    R
                                </label>
                            </div>
                        </form>
                    </section>

                    <section>
                        <form onChange={(e) => this.handleFilter(e, 'releaseDate')}>
                            <h3 onClick={() => this.handleDropdown('releaseDate')} className={this.props.dropdowns[5] ? 'active': ''}>Release Date</h3>
                            <div className={this.props.dropdowns[5] ? 'filters__dropdown visible animated quick fadeInUp': 'filters__dropdown'}>
                                <label htmlFor="release-date--any">
                                    <input type="radio" id="release-date--any" name="release-date" value=""></input>
                                    Any
                                </label>
                                <label htmlFor="release-date--1950">
                                    <input type="radio" id="release-date--1950" name="release-date" value="1950"></input>
                                    Before 1950
                                </label>
                                <label htmlFor="release-date--1960">
                                    <input type="radio" id="release-date--1960" name="release-date" value="1960,1970"></input>
                                    1960s
                                </label>
                                <label htmlFor="release-date--1970">
                                    <input type="radio" id="release-date--1970" name="release-date" value="1970,1980"></input>
                                    1970s
                                </label>
                                <label htmlFor="release-date--1980">
                                    <input type="radio" id="release-date--1980" name="release-date" value="1980,1990"></input>
                                    1980s
                                </label>

                                <label htmlFor="release-date--1990">
                                    <input type="radio" id="release-date--1990" name="release-date" value="1990,2000"></input>
                                    1990s
                                </label>

                                <label htmlFor="release-date--2000">
                                    <input type="radio" id="release-date--2000" name="release-date" value="2000,2010"></input>
                                    2000s
                                </label>

                                <label htmlFor="release-date--2010">
                                    <input type="radio" id="release-date--2010" name="release-date" value="2010,2020"></input>
                                    2010 - Present
                                </label>
                            </div>
                        </form>
                    </section>
                </div>

                <form id="search">
                    <DebounceInput
                        ref="searchInput"
                        type="search" placeholder="Search Titles, Actors"
                        autoFocus
                        minLength={2}
                        debounceTimeout={300}
                        onChange={this.handleSearch}
                        />
                </form>
            </aside>
        )
    }
};

module.exports = Filters;
