import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-bold">
              <span className="text-red-600">A-1</span>
              <span className="text-gray-800">AUTOS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="nav-link">Home</a>
            <a href="/services" className="nav-link">Services</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/contact" className="nav-link">Contact</a>
            <button className="btn btn-primary">
              Schedule Service
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <a href="/" className="block py-2 text-gray-700">Home</a>
            <a href="/services" className="block py-2 text-gray-700">Services</a>
            <a href="/about" className="block py-2 text-gray-700">About</a>
            <a href="/contact" className="block py-2 text-gray-700">Contact</a>
            <button className="btn btn-primary w-full mt-4">
              Schedule Service
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;