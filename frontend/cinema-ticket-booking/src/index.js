import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Repertoire from './pages/Repertoire';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Account from './pages/Account';
import Home from './pages/Home';
import AddEditMovie from './admin/AddEditMovie';
import Movie from './pages/Movie';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "repertoire",
        element: <Repertoire />
      }, 
      {
        path: "account",
        element: <Account />
      },
      {
        path: "admin",
        element: <AddEditMovie/>
      },
      {
        path: "movie",
        element: <Movie/>
      },

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
