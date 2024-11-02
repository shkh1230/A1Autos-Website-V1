import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Clock, ChevronRight } from 'lucide-react';

const TopBar = () => (
  <div className="bg-gray-900 text-white py-2">
    <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-sm">
          <Clock className="h-4 w-4 mr-2" />
          <span>Mon-Fri: 7:30AM-6PM</span>
        </div>
        <div className="flex items-center text-sm">
          <MapPin className="h-4 w-4 mr-2" />
          <span>123 Auto Drive, Dallas TX</span>
        </div>
      </div>
      <div className="flex items-center text-sm">
        <Phone className="h-4 w-4 mr-2" />
        <span className="font-bold">Call Us: (555) 123-4567</span>
      </div>
    </div>
  </div>
);

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
            <a href="/careers" className="nav-link">Careers</a>
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
            <a href="/careers" className="block py-2 text-gray-700">Careers</a>
            <button className="btn btn-primary w-full mt-4">
              Schedule Service
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Expert Auto Repair You Can Trust
            </h1>
            <p className="text-xl mb-8">
              Professional auto repair and maintenance services to keep your vehicle running at its best.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">
                Schedule Service
              </button>
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Auto Care', 'Maintenance', 'Inspections'].map((service) => (
              <div key={service} className="service-card">
                <h3 className="text-xl font-bold mb-4">{service}</h3>
                <p className="text-gray-600 mb-4">
                  Professional {service.toLowerCase()} services for all makes and models.
                </p>
                <a href={`/services/${service.toLowerCase()}`} className="text-red-600 flex items-center hover:text-red-700">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Technicians',
                description: 'ASE-certified mechanics with years of experience.',
              },
              {
                title: 'Quality Service',
                description: 'Using only high-quality parts and advanced diagnostic tools.',
              },
              {
                title: 'Fair Pricing',
                description: 'Transparent pricing with no hidden fees.',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;