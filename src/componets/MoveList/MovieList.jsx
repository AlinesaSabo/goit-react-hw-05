import { fetchMovies } from "../../services/api";
import { Link, useLocation } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";

const MovieList = () => {
  const location = useLocation();

  const [movies] = useHttp(fetchMovies);

  console.log(movies);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies?.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
