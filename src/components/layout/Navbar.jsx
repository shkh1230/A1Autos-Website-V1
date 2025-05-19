import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const serviceCategories = {
  'AUTO CARE': [
    'Steering and Suspension',
    'Tires and Alignment',
    'Brake Pads and Rotors',
    'Engines and Transmissions',
    'Fleet Services',
    'Air Filters',
    'Drive Train Repairs',
    'Auto Glass',
    'Hail Damage Repairs',
    'Extended Warranties',
    'Exhaust Repairs',
    'Auto AC Repair'
  ],
  'AUTO MAINTENANCE': [
    'Oil Changes',
    'Scheduled Maintenance',
    'Fluid Exchanges',
    'Check Engine Lights',
    'Car Battery and Electrical',
    'Fuel System Cleaning',
    'Engine Cooling System'
  ],
  'AUTO INSPECTIONS': [
    'State Inspections',
    'Digital Vehicle Inspections',
    'Pre Purchase Inspections'
  ]
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const formatServiceUrl = (service) => {
    // This will convert "Steering & Suspension" to "steering-and-suspension"
    return service.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');
  };

  return (
      <nav className="bg-white shadow-lg relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo section */}
            <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="flex items-center font-extrabold tracking-tighter">
              <span className="text-4xl md:text-5xl">
                <span className="text-red-600 font-black">A</span>
                <span className="text-red-600 relative">1</span>
              </span>
              <span className="text-2xl md:text-3xl ml-1 text-gray-800 font-black tracking-wider uppercase">
                Autos
              </span>
              <span className="hidden md:block ml-2 text-sm text-gray-500 font-normal italic">
                Excellence in Auto Care
              </span>
            </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link hover:text-red-600 transition-colors duration-200">
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                  className="group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="flex items-center nav-link hover:text-red-600 transition-colors duration-200">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg border border-gray-200 shadow-lg transition-all duration-200 z-[60] ${
                        isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                  <div className="grid grid-cols-3 gap-6 p-6">
                    {Object.entries(serviceCategories).map(([category, services]) => (
                        <div key={category} className="space-y-4">
                          <h3 className="font-bold text-gray-900 text-lg border-b-2 border-red-600 pb-2">
                            {category}
                          </h3>
                          <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service}>
                                  <Link
                                      to={`/services/${formatServiceUrl(service)}`}
                                      className="text-gray-600 hover:text-red-600 hover:bg-red-50 block px-3 py-2 rounded transition-colors duration-200"
                                  >
                                    {service}
                                  </Link>
                                </li>
                            ))}
                          </ul>
                        </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/about" className="nav-link hover:text-red-600 transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="nav-link hover:text-red-600 transition-colors duration-200">
                Contact
              </Link>
              <Link to="/careers" className="nav-link hover:text-red-600 transition-colors duration-200">
                Careers
              </Link>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors duration-300">
                <Link to="/booking" className="block w-full h-full">
                  Schedule Service
                </Link>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
              <div className="md:hidden py-4">
                <Link to="/" className="block py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">
                  Home
                </Link>
                <Link to="/services" className="block py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">
                  Services
                </Link>
                <Link to="/about" className="block py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">
                  About
                </Link>
                <Link to="/contact" className="block py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">
                  Contact
                </Link>
                <Link to="/careers" className="block py-2 text-gray-700 hover:text-red-600 transition-colors duration-200">
                  Careers
                </Link>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors duration-300 w-full mt-4">
                  <Link to="/booking" className="block w-full h-full">
                    Schedule Service
                  </Link>
                </button>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navbar;