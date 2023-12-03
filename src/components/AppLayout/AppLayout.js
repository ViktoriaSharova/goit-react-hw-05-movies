import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppList, StyledLink } from './AppLayout.styled';
export const AppLayout = () => {
  return (
    <>
      <header>
        <nav>
          <AppList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </AppList>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {/* <GlobalStyle /> */}
    </>
  );
};