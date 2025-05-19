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
import ExtendedWarranties from './pages/services/auto-care/ExtendedWarranties';
import ExhaustRepairs from './pages/services/auto-care/ExhaustRepairs';
import AutoACRepair from './pages/services/auto-care/AutoACRepair';

// Auto Maintenance Services
import OilChanges from './pages/services/auto-maintenance/OilChanges';
import ScheduledMaintenance from './pages/services/auto-maintenance/ScheduledMaintenance';
import FluidExchanges from './pages/services/auto-maintenance/FluidExchanges';
import CheckEngineLights from './pages/services/auto-maintenance/CheckEngineLights';
import CarBatteryElectrical from './pages/services/auto-maintenance/CarBatteryElectrical';
import FuelSystemCleaning from './pages/services/auto-maintenance/FuelSystemCleaning';
import EngineCoolingSystem from './pages/services/auto-maintenance/EngineCoolingSystem';

// Auto Inspection Services
import StateInspections from './pages/services/auto-inspections/StateInspections';
import DigitalVehicleInspections from './pages/services/auto-inspections/DigitalVehicleInspections';
import PrePurchaseInspections from './pages/services/auto-inspections/PrePurchaseInspections';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'booking', element: <Booking /> },
      { path: 'services', element: <Services /> },
      { path: 'careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
      { 
        path: 'services',
        children: [
          { index: true, element: <Services /> },
          // Auto Care Routes
          { path: 'steering-and-suspension', element: <SteeringSuspension /> },
          { path: 'tires-and-alignment', element: <TiresAlignment /> },
          { path: 'brake-pads-and-rotors', element: <BrakePadsRotors /> },
          { path: 'engines-and-transmissions', element: <EnginesTransmissions /> },
          { path: 'fleet-services', element: <FleetServices /> },
          { path: 'air-filters', element: <AirFilters /> },
          { path: 'drive-train-repairs', element: <DriveTrainRepairs /> },
          { path: 'auto-glass', element: <AutoGlass /> },
          { path: 'hail-damage-repairs', element: <HailDamageRepairs /> },
          { path: 'extended-warranties', element: <ExtendedWarranties /> },
          { path: 'exhaust-repairs', element: <ExhaustRepairs /> },
          { path: 'auto-ac-repair', element: <AutoACRepair /> },


          // Auto Maintenance Routes
          { path: 'oil-changes', element: <OilChanges /> },
          { path: 'scheduled-maintenance', element: <ScheduledMaintenance /> },
          { path: 'fluid-exchanges', element: <FluidExchanges /> },
          { path: 'check-engine-lights', element: <CheckEngineLights /> },
          { path: 'car-battery-and-electrical', element: <CarBatteryElectrical /> },
          { path: 'fuel-system-cleaning', element: <FuelSystemCleaning /> },
          { path: 'engine-cooling-system', element: <EngineCoolingSystem /> },

          // Auto Inspection Routes
          { path: 'state-inspections', element: <StateInspections /> },
          { path: 'digital-vehicle-inspections', element: <DigitalVehicleInspections /> },
          { path: 'pre-purchase-inspections', element: <PrePurchaseInspections /> }
        ]
      }
    ]
  }
]);

export default router;