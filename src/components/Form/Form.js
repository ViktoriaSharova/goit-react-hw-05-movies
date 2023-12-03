import { useState } from 'react';

export const Form = ({ setsearchParams }) => {
  const [query, setQuery] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    setsearchParams({ query });
    event.currentTarget.reset();
  };

  const getSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        onChange={getSearchParams}
        placeholder="Search movies"
      />
      <button type="submit" disabled={!query}>
        Search
      </button>
    </form>
  );
};