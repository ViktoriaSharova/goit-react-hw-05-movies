import { getMovieActors } from '../../components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const fetchedCast = await getMovieActors(movieId);
        setCast(fetchedCast);
      } catch (error) {}
    }

    getMovieCast();
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(({ id, character, name, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={name}
            />
            <h3>{name}</h3>
            <h1>{character}</h1>
          </li>
        ))}
      </ul>
    </>
  );
};