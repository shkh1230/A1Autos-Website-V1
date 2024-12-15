import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Services from './pages/services';

// Auto Care Services
import SteeringSuspension from './pages/services/auto-care/SteeringSuspension';
import TiresAlignment from './pages/services/auto-care/TiresAlignment';

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
        children: [
          { index: true, element: <Services /> },
          { path: 'steering-and-suspension', element: <SteeringSuspension /> },
          { path: 'tires-and-alignment', element: <TiresAlignment /> }
        ]
      }
    ]
  }
]);

export default router;