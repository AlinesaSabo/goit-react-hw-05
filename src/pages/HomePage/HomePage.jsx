import MovieList from "../../componets/MovieList/MovieList";
import { useHttp } from "../../hooks/useHttp";
import { fetchMovies } from "../../services/api";

const HomePage = () => {
  const [movies] = useHttp(fetchMovies);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
