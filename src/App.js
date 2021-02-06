import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import axios from 'axios';

const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;

class App extends Component {
  state = {
    films: TMDB.films,
    current: {}
  }
  componentDidMount = () => {
    console.log('component mounted')
    axios.get(popularFilmsUrl)
    .then(response => {
      this.setState({films: response.data.results})
      console.log(response.data.results)
    })
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