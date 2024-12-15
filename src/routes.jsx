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
import BrakePadsRotors from './pages/services/auto-care/BrakePadsRotors';
import EnginesTransmissions from './pages/services/auto-care/EnginesTransmissions';
import FleetServices from './pages/services/auto-care/FleetServices';
import AirFilters from './pages/services/auto-care/AirFilters';
import DriveTrainRepairs from './pages/services/auto-care/DriveTrainRepairs';
import AutoGlass from './pages/services/auto-care/AutoGlass';
import HailDamageRepairs from './pages/services/auto-care/HailDamageRepairs';

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
          { path: 'tires-and-alignment', element: <TiresAlignment /> },
          { path: 'brake-pads-and-rotors', element: <BrakePadsRotors /> },
          { path: 'engines-and-transmissions', element: <EnginesTransmissions /> },
          { path: 'fleet-services', element: <FleetServices /> },
          { path: 'air-filters', element: <AirFilters /> },
          { path: 'drive-train-repairs', element: <DriveTrainRepairs /> },
          { path: 'auto-glass', element: <AutoGlass /> },
          { path: 'hail-damage-repairs', element: <HailDamageRepairs /> }
        ]
      }
    ]
  }
]);

export default router;