import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const SteeringSuspension = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Steering & Suspension Services</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Steering and Suspension Services</h1>
          <p className="text-xl text-gray-600">
            Expert steering and suspension repair services to ensure your vehicle handles safely and comfortably on the road. 
            We diagnose and fix all steering and suspension issues using state-of-the-art equipment.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Common Signs You Need Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Uneven tire wear',
              'Vehicle pulling to one side',
              'Vibrating steering wheel',
              'Bouncy or rough ride',
              'Squealing during turns',
              'Difficulty steering'
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
                name: 'Power Steering Service',
                description: 'Complete inspection and repair of power steering components, fluid exchange, and system testing'
              },
              {
                name: 'Shock Absorber Replacement',
                description: 'Professional replacement of worn shock absorbers to restore ride comfort and handling'
              },
              {
                name: 'Strut Assembly Service',
                description: 'Comprehensive strut replacement including mounts and bearings'
              },
              {
                name: 'Ball Joint Replacement',
                description: 'Precision replacement of worn ball joints to improve steering control'
              },
              {
                name: 'Control Arm Service',
                description: 'Inspection and replacement of control arms and bushings'
              },
              {
                name: 'Tie Rod Replacement',
                description: 'Expert replacement of inner and outer tie rods for improved steering response'
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
                title: 'Enhanced Safety',
                description: 'Properly functioning steering and suspension systems are crucial for vehicle control'
              },
              {
                title: 'Improved Comfort',
                description: 'Smoother ride and better handling on all road surfaces'
              },
              {
                title: 'Extended Tire Life',
                description: 'Prevent premature tire wear from misalignment and suspension issues'
              },
              {
                title: 'Better Performance',
                description: 'Responsive steering and optimal road handling capabilities'
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
              <h2 className="text-2xl font-bold mb-2">Warranty Information</h2>
              <p className="text-gray-300">24-month/24,000-mile warranty on all steering and suspension repairs</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Service?</h2>
          <p className="text-lg mb-6">Our expert technicians are here to help with your steering and suspension needs.</p>
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

export default SteeringSuspension;