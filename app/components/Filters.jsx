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
                            <h3 onClick={() => this.handleDropdown('type')} className={this.props.dropdowns[0] ? 'active' : ''}>Type</h3>
                            <div className={this.props.dropdowns[0] ? 'filters__dropdown visible' : 'filters__dropdown'}>
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
                            <h3 onClick={() => this.handleDropdown('genre')} className={this.props.dropdowns[1] ? 'active' : ''}>Genre</h3>
                            <div className={this.props.dropdowns[1] ? 'filters__dropdown genre-wrapper visible' : 'filters__dropdown genre-wrapper'}>
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
                        <form>
                            <h3 onClick={() => this.handleDropdown('duration')} className={this.props.dropdowns[2] ? 'active' : ''}>Duration</h3>
                            <div className={this.props.dropdowns[2] ? 'filters__dropdown slider-wrapper visible' : 'filters__dropdown slider-wrapper'}>
                                <div className={this.props.type === 'tv' ? 'distribution duration tv' : 'distribution duration'}></div>
                                <Range dots step={30} allowCross={false} defaultValue={[0, 240]} min={0} max={240} onAfterChange={(e) => this.handleFilter(e, 'duration')} />
                                <ul className={'slider-key'}>
                                    <li>0h</li>
                                    <li>1h</li>
                                    <li>2h</li>
                                    <li>3h</li>
                                    <li>4h</li>
                                </ul>
                            </div>
                        </form>
                    </section>

                    <section>
                        <form>
                            <h3 onClick={() => this.handleDropdown('rating')} className={this.props.dropdowns[3] ? 'active' : ''}>Rating</h3>
                            <div className={this.props.dropdowns[3] ? 'filters__dropdown slider-wrapper visible' : 'filters__dropdown slider-wrapper'}>
                                <div className={'distribution rating'}></div>
                                <Range dots step={2} allowCross={false} defaultValue={[0, 10]} min={0} max={10} onAfterChange={(e) => this.handleFilter(e, 'rating')} />
                                <ul className={'slider-key'}>
                                    <li>0/10</li>
                                    <li>2/10</li>
                                    <li>4/10</li>
                                    <li>6/10</li>
                                    <li>8/10</li>
                                    <li>10/10</li>
                                </ul>
                            </div>
                        </form>
                    </section>

                    <section>
                        <form onChange={(e) => this.handleFilter(e, 'certification')}>
                            <h3 onClick={() => this.handleDropdown('certification')} className={this.props.dropdowns[4] ? 'active' : ''}>Maturity Rating</h3>
                            <div className={this.props.dropdowns[4] ? 'filters__dropdown visible' : 'filters__dropdown'}>
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
                        <form>
                            <h3 onClick={() => this.handleDropdown('releaseDate')} className={this.props.dropdowns[5] ? 'active' : ''}>Release Date</h3>
                            <div className={this.props.dropdowns[5] ? 'filters__dropdown slider-wrapper visible' : 'filters__dropdown slider-wrapper'}>
                                <div className={'distribution releaseDate'}></div>
                                <Range dots step={20} allowCross={false} defaultValue={[1900, 2020]} min={1900} max={2020} onAfterChange={(e) => this.handleFilter(e, 'releaseDate')} />
                                <ul className={'slider-key'}>
                                    <li>1900</li>
                                    <li>1920</li>
                                    <li>1940</li>
                                    <li>1960</li>
                                    <li>1980</li>
                                    <li>2000</li>
                                    <li>Present</li>
                                </ul>
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
