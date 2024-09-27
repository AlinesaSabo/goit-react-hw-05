import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYmJkYzJlNjJmY2ViYWU0ZjA4M2U4MGEwMGEzNzM4ZCIsIm5iZiI6MTcyNzM4NjE0Ny40NTA2NDIsInN1YiI6IjY2ZjU4MmVmNGEwMWQyYmE4YTc0MDlhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.npW_mmPwybpdXXBfRbvosGiy3FpxXlZ174yj9mux9x4";

export const fitchMovies = async () => {
  const response = await axios.get("/trending/movie/day");
  return response.data.results;
};

export const fitchMoviesId = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};
