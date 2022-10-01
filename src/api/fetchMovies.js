const URL = 'https://api.themoviedb.org/3';
const KEY = 'f72ccb0427a42697e4de02bf8efae0dc';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchMovies(`${URL}/trending/movie/day?api_key=${KEY}`);
}


export function fetchMovieInfo(movieId) {
  return fetchMovies(`${URL}/movie/${movieId}?api_key=${KEY}`);
}

export function fetchMovieCredits(movieId) {
  return fetchMovies(
    `${URL}/movie/${movieId}/credits?api_key=${KEY}`
  );
}

export function fetchMovieReviews(movieId) {
  return fetchMovies(
    `${URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );
}

export function fetchWithQueryMovies(searchQuery) {
  return fetchMovies(
    `${URL}/search/movie?api_key=${KEY}&query=${searchQuery}`
  );
}
