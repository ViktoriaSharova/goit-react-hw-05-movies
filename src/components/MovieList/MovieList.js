import { useLocation } from 'react-router-dom';
import { MoviesList, MoviesListItem, MoviesLink } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <MoviesList>
        {movies.map(({ id, original_title }) => (
          <MoviesListItem key={id}>
            <MoviesLink to={`/movies/${id}`} state={{ from: location }}>
              {original_title}
            </MoviesLink>
          </MoviesListItem>
        ))}
      </MoviesList>
    </>
  );
};