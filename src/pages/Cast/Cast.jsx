import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCredits } from "api/fetchMovies";

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(({ cast }) => setCasts(cast));
  }, [movieId]);

  return (
    <>
      {!!casts.length && (
        <ul>
          {casts.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              {profile_path && (<img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name}></img>)}
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}

    </>
  )
}
export default Cast
