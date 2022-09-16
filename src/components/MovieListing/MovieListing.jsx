import React from "react";
import Slider from "react-slick";

import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./movie-listing.scss";
import { Settings } from "../../common/settings";

const MovieListing = () => {

 
  const movies = useSelector(getAllMovies);

  const shows = useSelector(getAllShows);
  // console.log(shows);
  // console.log(movies);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );

  // console.log(shows.Response);
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}> {renderMovies}</Slider>
        </div>
      </div>
      <div className="movie-list">
        <h2>Shows</h2>
        <Slider {...Settings}> {renderShows}</Slider>

      </div>
    </div>
  );
};

export default MovieListing;
