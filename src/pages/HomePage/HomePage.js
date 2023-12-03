import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../components/API/API';
import { MovieList } from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const fetchedMovies = await getTrendingMovies();
        setmovies(fetchedMovies);
      } catch (error) {}
    }
    getMovies();
  }, []);

  return (
    <>
      <h1>Trending Films</h1>
      <MovieList movies={movies} />
    </>
  );
}