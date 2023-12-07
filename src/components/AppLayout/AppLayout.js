import React from 'react';
import { Layout,
  headerStyle,
  liStyle,
  linkStyle,
  mainStyle,
  ulStyle } from './AppLayout.styled';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react'; 
import { GlobalStyle } from '../Global.styled';

export const AppLayout = () => {
  return (
    <Layout>
      <header style={headerStyle}>
        <nav>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <NavLink to="/" style={linkStyle}>Home</NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/movies" style={linkStyle}>Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main style={mainStyle}>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </Layout>
  );
};