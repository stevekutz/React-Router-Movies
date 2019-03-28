import React, { Component } from 'react';
import {Link} from 'react-router-dom';


// <span className="saved-movie">{movie.title}</span>

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <Link
            key = {movie.id}
            to = {`/movies/${movie.id}`}
            className = 'saved-movie'
            activeClassName = 'saved-active'
         >  {movie.title}
          </Link>

        ))}
        <Link to = "/">
          <div className="home-button">Home</div>
        </Link>
      </div>
    );
  }
}
