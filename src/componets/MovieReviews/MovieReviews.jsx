import { useParams } from "react-router-dom";
import { fetchMoviesIdReviews } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews] = useHttp(fetchMoviesIdReviews, movieId);

  if (!reviews) return <h2>Loading...</h2>;

  if (!reviews?.length) {
    return <h2>No reviews!</h2>;
  }

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
