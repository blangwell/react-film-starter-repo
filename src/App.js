import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';

class App extends Component {
  state = {
    films: TMDB.films,
    current: {}
  }
  handleDetailsClick = (film) => {
    console.log(`🦮 fetching details for ${film.title}`);
    this.setState({current: film})
  }
  render() {
    return (
      <div className="film-library">
        <FilmListing handleDetailsClick={this.handleDetailsClick} films={this.state.films}/>
        <FilmDetails film={this.state.current}/>
      </div>
    );
  }
}

export default App;