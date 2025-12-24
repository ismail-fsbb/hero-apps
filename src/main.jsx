import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import AllApps from './pages/AllApps.jsx';
import Installation from './pages/Installation.jsx';
import MainLayout from './components/MainLayout.jsx';
import AppDetails from './pages/AppDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("/data.json").then((res) => res.json()),
      },
      {
        path: "/all-apps",
        element: <AllApps />,
        loader: () => fetch("/data.json").then((res) => res.json()),
      },
      {
        path: "/app-details/:id",
        element: <AppDetails />,
        loader: () => fetch("/data.json").then((res) => res.json()),
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
