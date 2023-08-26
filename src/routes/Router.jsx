import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../RootPage';
import Home from '../components/Outlates/home/Home';
import About from '../components/Outlates/about/About';
import Projects from '../components/Outlates/projects/Projects';
import Skills from '../components/Outlates/skill/Skills';
import Blog from '../components/Outlates/blog/Blog';
import Contact from '../components/Outlates/contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage></RootPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/projects',
        element: <Projects></Projects>,
      },
      {
        path: '/skills',
        element: <Skills></Skills>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
