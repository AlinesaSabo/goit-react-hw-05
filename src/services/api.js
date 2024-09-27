import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmJkYzJlNjJmY2ViYWU0ZjA4M2U4MGEwMGEzNzM4ZCIsIm5iZiI6MTcyNzM4NjE0Ny40NTA2NDIsInN1YiI6IjY2ZjU4MmVmNGEwMWQyYmE4YTc0MDlhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.npW_mmPwybpdXXBfRbvosGiy3FpxXlZ174yj9mux9x4";

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
  console.log("Cast data:", data);
  return data;
};

export const fetchMoviesIdReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data;
};

export const fetchMoviesSearch = async () => {
  const { data } = await axios.get(`/search/movie`);
  return data;
};
