import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const AppList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  height: 40px;
  border: 1px solid black;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;

  &.active {
    color: red;
  }
`;