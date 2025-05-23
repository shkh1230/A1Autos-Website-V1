import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const ExhaustRepairs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Exhaust Repairs</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Exhaust Repair Services</h1>
          <p className="text-xl text-gray-600">
            Professional exhaust system diagnostics and repair services to ensure optimal performance 
            and emissions control. Our expert technicians handle everything from basic repairs to 
            complete exhaust system replacement.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Common Exhaust Issues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Loud exhaust noise',
              'Check engine light',
              'Failed emissions test',
              'Exhaust leaks',
              'Decreased fuel efficiency',
              'Vibration while driving',
              'Unusual smells',
              'Poor engine performance',
              'Rattling sounds'
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
                name: 'Exhaust Inspection',
                description: 'Complete system inspection including manifolds, pipes, catalytic converter, and muffler'
              },
              {
                name: 'Catalytic Converter Service',
                description: 'Diagnostics, repair, and replacement of catalytic converters'
              },
              {
                name: 'Muffler Repair',
                description: 'Professional muffler repair and replacement services'
              },
              {
                name: 'Exhaust Pipe Repair',
                description: 'Repair or replacement of damaged exhaust pipes and connections'
              },
              {
                name: 'Emissions Testing',
                description: 'Comprehensive emissions testing and diagnostics'
              },
              {
                name: 'Performance Upgrades',
                description: 'Custom exhaust solutions for improved performance'
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
                description: 'Proper exhaust flow for optimal engine performance'
              },
              {
                title: 'Better Fuel Economy',
                description: 'Efficient exhaust systems help optimize fuel consumption'
              },
              {
                title: 'Environmental Compliance',
                description: 'Meet emissions standards and reduce environmental impact'
              },
              {
                title: 'Enhanced Safety',
                description: 'Prevent dangerous exhaust leaks and fumes'
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
              <p className="text-gray-300">Lifetime warranty on select exhaust system components and workmanship</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Exhaust Service?</h2>
          <p className="text-lg mb-6">Contact us today for expert exhaust system diagnosis and repair.</p>
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

export default ExhaustRepairs;