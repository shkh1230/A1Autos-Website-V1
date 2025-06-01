import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const DigitalVehicleInspections = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Digital Vehicle Inspections</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Digital Vehicle Inspections</h1>
          <p className="text-xl text-gray-600">
            Advanced digital inspection services with detailed photo documentation and comprehensive 
            reporting. Our technicians use state-of-the-art digital tools to provide you with clear, 
            detailed information about your vehicle's condition.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Inspection Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Engine performance',
              'Brake system health',
              'Suspension condition',
              'Electrical systems',
              'Fluid levels/condition',
              'Tire wear patterns',
              'Safety systems',
              'Component wear',
              'Maintenance needs'
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
                name: 'Digital Inspection',
                description: 'Comprehensive vehicle inspection with photo documentation'
              },
              {
                name: 'Condition Report',
                description: 'Detailed digital report showing vehicle condition and needs'
              },
              {
                name: 'Maintenance Planning',
                description: 'Prioritized maintenance recommendations with timeline'
              },
              {
                name: 'Photo Documentation',
                description: 'Clear photos of vehicle condition and any issues found'
              },
              {
                name: 'System Analysis',
                description: 'Thorough analysis of all major vehicle systems'
              },
              {
                name: 'Digital Records',
                description: 'Secure digital storage of inspection history'
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
                title: 'Clear Communication',
                description: 'Visual documentation helps you understand vehicle needs'
              },
              {
                title: 'Informed Decisions',
                description: 'Detailed reports help prioritize repairs and maintenance'
              },
              {
                title: 'Service Tracking',
                description: 'Digital records of all inspections and services'
              },
              {
                title: 'Preventive Care',
                description: 'Early detection of potential issues saves money'
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
              <p className="text-gray-300">Comprehensive digital inspections with detailed reporting</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Know Your Vehicle's Condition</h2>
          <p className="text-lg mb-6">Schedule your digital vehicle inspection today.</p>
          <Link to="/booking">
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            Schedule Inspection
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DigitalVehicleInspections;