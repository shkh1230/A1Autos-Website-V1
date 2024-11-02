// src/routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Services from './pages/services';
import AutoCare from './pages/services/auto-care';
import Maintenance from './pages/services/maintenance';
import Inspections from './pages/services/inspections';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'booking', element: <Booking /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
      { 
        path: 'services',
        element: <Services />,
        children: [
          {
            path: 'auto-care',
            element: <AutoCare />
          },
          {
            path: 'maintenance',
            element: <Maintenance />
          },
          {
            path: 'inspections',
            element: <Inspections />
          }
        ]
      }
    ]
  }
]);

export default router;