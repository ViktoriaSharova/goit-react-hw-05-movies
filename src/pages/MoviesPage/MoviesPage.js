import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from '../../components/API/API';
import { MovieList } from '../../components/MovieList/MovieList';
import { Form } from '../../components/Form/Form';

export default function MoviesPage() {
  const [movies, setmovies] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) {
      return;
    }
    async function getMovies() {
      try {
        const fetchedMovies = await getMovieByQuery(currentQuery);
        setmovies(fetchedMovies);
      } catch (error) {}
    }
    getMovies();
  }, [searchParams]);

  return (
    <>
      <Form setsearchParams={setsearchParams} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}