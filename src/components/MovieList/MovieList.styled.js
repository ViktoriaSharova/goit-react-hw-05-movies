import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MoviesList = styled.ul`
  padding: 10px;
`;

export const MoviesListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const MoviesLink = styled(Link)`
  color: black;
  text-decoration: none;
`;