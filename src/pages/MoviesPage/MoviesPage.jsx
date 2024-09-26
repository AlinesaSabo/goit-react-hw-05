import { useState } from "react";
import MovieList from "../../componets/MoveList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const { movies, setMovies } = useState([]);

  return (
    <div>
      <form>
        <input type="text" placeholder="Поиск фильмов" required />
        <button type="submit">Поиск</button>
      </form>
      {/* {movies.length > 0 && <MovieList movies={movies} />} */}
    </div>
  );
};

export default MoviesPage;
