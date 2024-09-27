import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fitchMoviesId } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data = await fitchMoviesId(movieId);
      setMovies(data);
    };
    getData();
  }, [movieId]);

  const goBack = () => {
    navigate(location.state?.from ?? "/movies");
  };
  if (!movies) return <h2>Loading...</h2>;
  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <div>
        <img src={movies.poster_path} />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
