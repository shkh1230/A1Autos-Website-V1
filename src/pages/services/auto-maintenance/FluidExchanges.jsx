import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const FluidExchanges = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Fluid Exchanges</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fluid Exchange Services</h1>
          <p className="text-xl text-gray-600">
            Complete fluid exchange services to maintain your vehicle's critical systems. 
            We provide professional fluid exchanges for transmission, coolant, power steering, 
            brake, and differential systems using quality fluids that meet manufacturer specifications.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Signs You Need Fluid Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Dirty or dark fluids',
              'Fluid leaks',
              'Strange noises',
              'Rough shifting',
              'Poor performance',
              'Warning lights',
              'Overheating',
              'Recommended intervals',
              'System problems'
            ].map((issue, index) => (
              <div key={index} className="flex items-center bg-gray-50 p-4 rounded-lg">
                <ChevronRight className="h-5 w-5 text-red-600 mr-2" />
                <span className="text-gray-700">{issue}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Wrench className="h-6 w-6 text-red-600 mr-2" />
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Transmission Fluid Exchange',
                description: 'Complete transmission fluid exchange to remove contaminants and restore performance'
              },
              {
                name: 'Coolant Exchange',
                description: 'Cooling system flush and refill with fresh antifreeze/coolant'
              },
              {
                name: 'Power Steering Fluid',
                description: 'Power steering system flush and fluid replacement'
              },
              {
                name: 'Brake Fluid Exchange',
                description: 'Complete brake fluid exchange to maintain system performance'
              },
              {
                name: 'Differential Fluid',
                description: 'Differential fluid exchange for optimal gear protection'
              },
              {
                name: 'System Inspection',
                description: 'Comprehensive inspection of all fluid systems for leaks and condition'
              }
            ].map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-red-600 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ShieldCheck className="h-6 w-6 text-red-600 mr-2" />
            Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Extended Component Life',
                description: 'Fresh fluids help extend the life of critical system components'
              },
              {
                title: 'Improved Performance',
                description: 'Clean fluids ensure optimal system performance'
              },
              {
                title: 'Preventive Maintenance',
                description: 'Regular fluid exchanges help prevent system failures'
              },
              {
                title: 'System Protection',
                description: 'Quality fluids provide better protection against wear'
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start">
                <ChevronRight className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warranty Info */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Service Guarantee</h2>
              <p className="text-gray-300">All fluid exchange services backed by our service warranty</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Fluid Services?</h2>
          <p className="text-lg mb-6">Schedule your fluid exchange service today for better system protection.</p>
          <Link to="/booking">
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            Schedule Service Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FluidExchanges;