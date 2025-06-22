import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './src/pages/Home';
import About from './src/pages/About';
import RootLayout from './src/layout/RootLayout';
import ErrorPage from './src/layout/ErrorPage';
import Headphones from './src/pages/Headphones';
import Headphone from './src/pages/Headphone';
import Checkout from './src/pages/Checkout';
import Speakers from './src/pages/speakers/Speakers';
import Speaker from './src/pages/speakers/Speaker';
import Earphones from './src/pages/earphones/Earphones';
import Earphone from './src/pages/earphones/Earphone';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'headphones', element: <Headphones /> },
      { path: 'speakers', element: <Speakers /> },
      { path: 'earphones', element: <Earphones /> },
      { path: 'checkout', element: <Checkout /> },
      { path: 'headphone/product/:id', element: <Headphone /> },
      { path: 'speaker/product/:id', element: <Speaker /> },
      { path: 'earphone/product/:id', element: <Earphone /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

export default router;