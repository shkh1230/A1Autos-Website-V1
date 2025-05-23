import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const AirFilters = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Air Filters</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Air Filter Services</h1>
          <p className="text-xl text-gray-600">
            Maintain your vehicle's performance and air quality with our professional air filter services. 
            We service both engine air filters and cabin air filters to ensure clean air for your engine and passengers.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Signs You Need Air Filter Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Reduced fuel efficiency',
              'Decreased engine performance',
              'Black exhaust smoke',
              'Musty air from vents',
              'Check engine light',
              'Dirty or clogged filter',
              'Unusual engine sounds',
              'Poor acceleration',
              'Allergies acting up while driving'
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
                name: 'Engine Air Filter Service',
                description: 'Inspection and replacement of engine air filters to ensure optimal engine performance'
              },
              {
                name: 'Cabin Air Filter Service',
                description: 'Replacement of cabin air filters to maintain clean air inside your vehicle'
              },
              {
                name: 'Air Filter Inspection',
                description: 'Thorough inspection of all air filtration systems in your vehicle'
              },
              {
                name: 'Air Intake Cleaning',
                description: 'Professional cleaning of the air intake system for improved airflow'
              },
              {
                name: 'Performance Air Filters',
                description: 'Installation of high-performance air filters for enhanced engine breathing'
              },
              {
                name: 'Filter System Diagnosis',
                description: 'Complete diagnostic testing of air filtration systems'
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
                title: 'Better Engine Performance',
                description: 'Clean air filters ensure optimal engine breathing and performance'
              },
              {
                title: 'Improved Air Quality',
                description: 'Fresh cabin air filters provide cleaner air for you and your passengers'
              },
              {
                title: 'Increased Fuel Efficiency',
                description: 'Clean air filters help maintain optimal fuel consumption'
              },
              {
                title: 'Extended Engine Life',
                description: 'Proper filtration helps protect engine components from harmful debris'
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
              <p className="text-gray-300">All air filter replacements come with our standard parts and labor warranty</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Breathe Better?</h2>
          <p className="text-lg mb-6">Schedule your air filter service today for better performance and air quality.</p>
          <Link to="/booking">
          <Link to="/booking">
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            Schedule Service Now
          </button>
          </Link>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AirFilters;