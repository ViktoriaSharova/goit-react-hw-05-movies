import { getAllMovieInfo } from '../../components/API/API';
import { useState, useEffect, useRef } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location);

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const fetchedMovie = await getAllMovieInfo(movieId);
        setMovieInfo(fetchedMovie);
      } catch (error) {}
    }

    getMovieInfo();
  }, [movieId]);

  return (
    <>
      {movieInfo && (
        <div>
          <button>
            <Link to={backLinkRef.current.state?.from ?? '/movies'}>
              Go back
            </Link>
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
            alt={movieInfo.original_title}
          />
          <h1>{movieInfo.original_title}</h1>
          <p>User Score {Math.round(movieInfo.vote_average)}</p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movieInfo.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}