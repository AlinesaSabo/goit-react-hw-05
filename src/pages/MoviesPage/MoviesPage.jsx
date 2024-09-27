import { useMemo, useState } from "react";
import MovieList from "../../componets/MoveList/MovieList";
import { useSearchParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? " ";

  const initialValues = {
    query: "",
  };

  const heandleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const filterData = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCasa().includes(query.toLowerCase())
      ),
    [movies, query]
  );

  return (
    <div>
      <Formik
        initialValues={initialValues}
        heandleChangeQuery={heandleChangeQuery}
      >
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {movies.length > 0 && <MovieList movies={filterData} />}
    </div>
  );
};

export default MoviesPage;
