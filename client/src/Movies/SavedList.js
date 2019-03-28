import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


// <span className="saved-movie">{movie.title}</span>

export default class SavedList extends Component {
  constructor(props) {
    console.log('SavedList props ', props);
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            key = {movie.id}
            to = {`/movies/${movie.id}`}
            className = 'saved-movie'
            activeClassName = 'saved-active'
         >  {movie.title}
          </NavLink>

        ))}
        <NavLink to = "/">
          <div className="home-button">Home</div>
        </NavLink>
      </div>
    );
  }
}
