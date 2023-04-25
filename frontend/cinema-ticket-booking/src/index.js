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
import LoginPage from './account/Auth';
import LoginComponent from './account/Login';
import RegisterComponent from './account/Register';
import Home from './pages/Home';
import AddEditMovie from './admin/AddEditMovie';
import Movie from './pages/Movie';
import Auth from './account/Auth';
import Account from './account/Account';

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
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "login",
            element: <LoginComponent />
          },
          {
            path: "register",
            element: <RegisterComponent />
          }
        ]
      },
      {
        path: "admin",
        element: <AddEditMovie/>
      },
      {
        path: "movie",
        element: <Movie/>
      },
      {
        path: "account",
        element: <Account />
      }

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
