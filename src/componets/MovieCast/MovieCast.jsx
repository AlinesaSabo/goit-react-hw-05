import { useHttp } from "../../hooks/useHttp";
import { fetchMoviesIdCast } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();

  const [credits] = useHttp(fetchMoviesIdCast, movieId);

  const defaultImg =
    "https://dummyimage.com/200x300/cdcdcd/000.jpg&text=No+photo";

  return (
    <div>
      <ul>
        {credits?.map((credit) => (
          <li key={credit.id}>
            <img
              src={
                credit.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${credit.profile_path}`
                  : defaultImg
              }
              alt={credit.name}
              width={100}
            />
            <p>{credit.name}</p>
            <p>Character: {credit.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
