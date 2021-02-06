import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  state = {
    filter: 'all',
    faves: []
  }
  handleFilterClick = (filter) => {
    this.setState({filter: filter})
    console.log(`setting filter to ${filter}`)
  }
  handleFaveToggle = (film) => {
    let newFaves = [...this.state.faves];
    if (this.state.faves.indexOf(film) === -1) {
      console.log(`Adding ${film.title} to faves`)
      newFaves.push(film)
    } else {
      console.log(`Removing ${film.title} from faves`)
      newFaves.splice(this.state.faves.indexOf(film), 1)
    }
    this.setState({faves: newFaves});
  }

  render = () => {
    const filmsToDisplay = this.state.filter === 'all' ? this.props.films : this.state.faves
    
    let allFilms = filmsToDisplay.map((film, idx) => {
      return (
        <FilmRow 
        film={film} 
        key={`filmRow-${idx}`} 
        handleFaveToggle={this.handleFaveToggle}
        isFave={this.state.faves.includes(film)}
        handleDetailsClick={this.props.handleDetailsClick}
        />
      )
    })
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{this.state.faves.length}</span>
          </div>
        </div>
        
        {allFilms}
      </div>
    )
  }
}

export default FilmListing;