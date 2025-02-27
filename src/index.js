import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Restaurant from './component/Restaurent/Restaurant'
import ErrorPage from "./error-page";
import ContactUs from "./component/Contact/ContactUs";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Restaurant />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contact",
    element: <ContactUs />,
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
