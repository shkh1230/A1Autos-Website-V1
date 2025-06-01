import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const EnginesTransmissions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Engines and Transmissions Services</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Engines and Transmissions Services</h1>
          <p className="text-xl text-gray-600">
            Expert diagnostics and repair services for your vehicle's engine and transmission systems. 
            Our certified technicians provide comprehensive solutions for all powertrain issues.
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
              'Check Engine Light On',
              'Transmission Slipping',
              'Rough Idle or Stalling',
              'Unusual Engine Noises',
              'Delayed Gear Engagement',
              'Loss of Power',
              'Transmission Fluid Leaks',
              'Engine Overheating',
              'Poor Fuel Economy'
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
                name: 'Engine Diagnostics',
                description: 'Advanced computer diagnostics to identify engine issues and performance problems'
              },
              {
                name: 'Engine Repair',
                description: 'Complete engine repair services including timing belts, gaskets, and major components'
              },
              {
                name: 'Transmission Service',
                description: 'Routine maintenance including fluid changes and filter replacements'
              },
              {
                name: 'Transmission Repair',
                description: 'Expert repair of automatic and manual transmission systems'
              },
              {
                name: 'Engine Tune-Up',
                description: 'Comprehensive tune-up service to restore performance and efficiency'
              },
              {
                name: 'Clutch Service',
                description: 'Inspection and repair of clutch components for manual transmissions'
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
                title: 'Improved Performance',
                description: 'Restore your vehicles power and efficiency with expert engine services'
              },
              {
                title: 'Extended Vehicle Life',
                description: 'Regular maintenance helps prevent major repairs and extends vehicle longevity'
              },
              {
                title: 'Better Fuel Economy',
                description: 'Properly maintained engines and transmissions optimize fuel consumption'
              },
              {
                title: 'Reliable Operation',
                description: 'Ensure smooth and dependable vehicle operation for years to come'
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
              <p className="text-gray-300">12-month/12,000-mile warranty on all engine and transmission repairs</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Service?</h2>
          <p className="text-lg mb-6">Our expert technicians are here to help with all your engine and transmission needs.</p>
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

export default EnginesTransmissions;