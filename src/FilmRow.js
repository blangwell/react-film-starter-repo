import React, {Component} from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

class FilmRow extends Component {
  render = () => {
    return (
      <div className="film-row" onClick={() => this.props.handleDetailsClick(this.props.film)}>
        <FilmPoster poster={this.props.film.poster_path} alt={`${this.props.film.title} poster`}/>
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{this.props.film.release_date}</p>
        </div>
        <Fave isFave={this.props.isFave} handleFaveToggle={() => this.props.handleFaveToggle(this.props.film)}/>
      </div>
    )
  }
}

export default FilmRow;