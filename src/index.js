import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './style/body.css';

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import ProjectSub from './pages/ProjectSub';

import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path: '/Projecten',
    element: <Project />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/Projecten/:ProjectID',
    element: <ProjectSub/>,
    errorElement: <Error></Error>
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);