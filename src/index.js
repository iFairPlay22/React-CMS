// Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './theme.scss';

// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages components
import ErrorPage from './pages/error/ErrorPage'
import HomePage from './pages/home/HomePage';

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
]);

// Page generation
ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );