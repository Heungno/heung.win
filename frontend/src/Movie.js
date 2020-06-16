import React from "react";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import "./Movie.css";

function Movie({ id, title, medium_cover_image, description_full, genres }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster medium_cover_image={medium_cover_image} title={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Gener">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={description_full}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  );
}

var MoviePoster = ({ medium_cover_image, title }) => {
  return (
    <img
      src={medium_cover_image}
      alt={title + " 이미지"}
      title={title}
      className="Movie__Poster"
    />
  );
};

var MovieGenre = ({ genre }) => {
  return <span className="Movie__Genre">{genre}</span>;
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  description_full: PropTypes.string,
  genres: PropTypes.array,
};

MoviePoster.propTypes = {
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
};

MovieGenre.propTypes = {
  genre: PropTypes.string,
};

export default Movie;
