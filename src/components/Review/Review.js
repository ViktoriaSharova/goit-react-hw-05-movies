import { getMovieReviews } from '../API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Review = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReview() {
      try {
        const fetchedCast = await getMovieReviews(movieId);
        setReview(fetchedCast);
      } catch (error) {}
    }

    getMovieReview();
  }, [movieId]);

  return review.length === 0 ? (
    <h2>There is no reviews!</h2>
  ) : (
    <>
      <ul>
        {review.map(({ id, author, content }) => (
          <li key={id}>
            <h2>Author: {author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};