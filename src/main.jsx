import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home.jsx';
import Book from './Components/Pages/Book.jsx';
import Contact from './Components/Pages/Contact.jsx';
import Gallery from './Components/Pages/Gallery.jsx';
import Packages from './Components/Pages/Packages.jsx';
import About from './Components/Pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Book",
    element: <Book/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/Gallery",
    element: <Gallery/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Packages",
    element: <Packages/>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
