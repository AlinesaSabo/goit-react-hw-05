import { useParams } from "react-router-dom";
import { fetchMoviesIdReviews } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews] = useHttp(fetchMoviesIdReviews, movieId);

  return (
    <div>
      <ul>
        {reviews?.map((review) => (
          <li key={review.id}>
            <h2>Author: {review.author}</h2>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
