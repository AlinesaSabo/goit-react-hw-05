import { Suspense, useRef } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMoviesId } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state ?? "/");

  const [movies] = useHttp(fetchMoviesId, movieId);

  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  if (!movies) return <h2>Loading...</h2>;
  return (
    <div>
      <Link to={goBack.current}>Go back</Link>
      <div className={s.wrapper}>
        <div>
          <img
            src={
              movies.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movies.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
        </div>
        <div>
          <h2>
            {movies.title} ({movies.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {movies.popularity}%</p>
          <h3>Overview</h3>
          <p>{movies.overview}</p>
          <h3>Genres</h3>
          <p>{movies.genres.map((genre) => genre.name).join(", ")}</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
