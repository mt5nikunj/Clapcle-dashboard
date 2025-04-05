import React from 'react';
import ReactDOM from 'react-dom/client';``
import {
  createBrowserRouter,
} from 'react-router-dom';
import App from '../../../../App';
import AdminProtectedRoutes from '../adminProtectedRoutes/adminProtectedRoutes';




export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        // element: <User />,
        children: [
          {
            path: '',
            // element: <Navigate to={PftRoutes.DASHBOARD} />,
          },
         
        ],
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminProtectedRoutes />,
    children: [
      {
        path: '',
        // element: <Navigate to={PftRoutes.PENDING_REQUESTS} />,
      },
     
    ],
  },
//   {
//     path: '/sign-up',
//     element: <SignUp />,
//   },
//   {
//     path: '/callback',
//     element: <AuthCallback />,
//   },
//   {
//     path: '/unauthorize',
//     element: <PageNotFound type="unauthorize" />,
//   },
//   {
//     path: '*',
//     element: <PageNotFound />,
//   },
]);

