import React, {Component} from 'react';

class FilmPoster extends Component {
  render() {
    return(
      <img src={`https://image.tmdb.org/t/p/w500${this.props.poster}`} alt={this.props.alt} />
    )
  }
}

export default FilmPoster;