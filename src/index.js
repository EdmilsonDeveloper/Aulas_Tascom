import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,

  },
  {
    path: '/about/:id',
    element: <About />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />);

