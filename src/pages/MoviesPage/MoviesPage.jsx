import { useMemo } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useHttp } from "../../hooks/useHttp";
import { fetchMoviesSearch } from "../../services/api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [movies] = useHttp(fetchMoviesSearch, query);

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const filterData = useMemo(
    () =>
      movies?.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      ) || [],
    [movies, query]
  );

  const handleSubmit = (values, { resetForm }) => {
    handleChangeQuery(values.query);
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      {Array.isArray(movies) && movies.length > 0 && (
        <MovieList movies={filterData} />
      )}
    </div>
  );
};

export default MoviesPage;
