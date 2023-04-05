import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">İzlenecek Filmler</h1>
        </div>
        {watchlist.length > 0 && (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.title} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
