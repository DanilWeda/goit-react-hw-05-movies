import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchWithQueryMovies } from 'api/fetchMovies';
import Searchbar from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();


  const handleSearch = (query) => {
    setSearchParams({ query: query });
    setMovies([]);
  };

  useEffect(() => {
    if (!searchParams.get('query')) return;

    fetchWithQueryMovies(searchParams.get('query'))
      .then(({ results }) => setMovies(results));
  }, [searchParams.get('query')]);

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      {!!movies.length && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
export default Movies
