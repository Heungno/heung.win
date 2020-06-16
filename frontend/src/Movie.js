import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ title, poster, contents }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} title={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Contents">
          {contents}
        </div>
      </div>
    </div>
  );
}

function MoviePoster({ poster, title }) {
  return <img src={poster} alt={title + " 이미지"} title={title} className="Movie__Poster" />;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  contents: PropTypes.string,
};

MoviePoster.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
