import React from "react";
// import MovieCard from './MovieCard';
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="  bg-black">
        <div className=" mt-0 md:-mt-80 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
