import { useEffect, useState } from "react";
import { fitchMovies } from "../../services/api";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
      const data = await fitchMovies();
      setMovies(data);
    };
    getAllMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
