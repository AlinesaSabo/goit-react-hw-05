import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navigation from "./componets/Navigation/Navigation";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFound from "./pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieReviews from "./componets/MovieReviews/MovieReviews";
import MovieCast from "./componets/MovieCast/MovieCast";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
