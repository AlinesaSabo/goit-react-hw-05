import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmJkYzJlNjJmY2ViYWU0ZjA4M2U4MGEwMGEzNzM4ZCIsIm5iZiI6MTcyNzQ3Mjc2NS43OTg0MzEsInN1YiI6IjY2ZjU4MmVmNGEwMWQyYmE4YTc0MDlhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vBp-9C_UkIA3NXEEQAAKdKth3J8lLazgoJc6D9au3bM";

export const fetchMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");

  return data.results;
};

export const fetchMoviesId = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const fetchMoviesIdCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const fetchMoviesIdReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const fetchMoviesSearch = async () => {
  const { data } = await axios.get(`/search/movie`);
  return data;
};
