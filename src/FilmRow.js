import React, {Component} from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log(`🦮 fetching details for ${film}`)
  }
  render = () => {
    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film.title)}>
        <FilmPoster poster={this.props.film.poster_path} alt={`${this.props.film.title} poster`}/>
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date}</p>
        </div>
        <Fave/>
      </div>
    )
  }
}

export default FilmRow;