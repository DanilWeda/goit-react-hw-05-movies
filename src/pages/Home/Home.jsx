import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'api/fetchMovies';


function Home() {

  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrending()
      .then(({ results }) => setMovies(results));
  }, []);



  return (
    <>
      <h2>Trending today</h2>
      {!!movies.length && movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
        </li>
      ))
      }
    </>
  )
};

export default Home;
