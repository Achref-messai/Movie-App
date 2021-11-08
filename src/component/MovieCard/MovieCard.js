import React from "react";
import "./MovieCard.css";
import Rating from "../Rating";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ el }) => {
  return (
    <div>
      <div className="movie_card">
        <div className="info_section">
          <img className="image" src={el.image} alt="" />
          <div className="movie_header">
            <img className="img" src={el.image} alt="" />
            <span className="tile">{el.name}</span>

            <h4>{el.date}</h4>
          </div>
          <div className="movie_desc">
            <p className="text">{el.description}</p>
          </div>

          <div className="rating">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={el.rating}
              className="starSearch"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
