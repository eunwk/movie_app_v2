import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css";


function Movie({ id, year, title, summary, poster, genres}) {
  return (
    <div className="movie">
    <img src={poster} alt={title} title={title} />
    <div className="movie_data">
      <p className="movie_title" >{title}</p>
      <p className="movie_year">{year}</p>
      <ul className="genres">
         {
           genres.map( (genre, index) => <li key={index} className="genres_genre">{genre}</li>)
         }
      </ul>        
      <p className="movie_summary" style={{backgroundColor: "red", color: "orange"}}>{summary.slice(0,140)}</p>                       
    </div>
  </div>
  )
}

Movie.propTypes = {
  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
