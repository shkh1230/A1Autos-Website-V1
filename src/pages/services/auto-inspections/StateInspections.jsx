import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const StateInspections = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">State Inspections</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">State Vehicle Inspections</h1>
          <p className="text-xl text-gray-600">
            Official state vehicle inspection services to ensure your vehicle meets all safety 
            and emissions requirements. Our certified inspectors provide thorough inspections 
            and helpful guidance for any necessary repairs.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Common Inspection Points
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Brake system',
              'Steering components',
              'Tire condition',
              'Light operation',
              'Windshield condition',
              'Exhaust system',
              'Horn operation',
              'Wipers and washers',
              'Safety equipment'
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
                name: 'Safety Inspection',
                description: 'Complete vehicle safety inspection following state requirements'
              },
              {
                name: 'Emissions Testing',
                description: 'State-certified emissions testing and diagnostics'
              },
              {
                name: 'Pre-Inspection Check',
                description: 'Preliminary inspection to identify potential issues'
              },
              {
                name: 'Documentation',
                description: 'Complete inspection documentation and certification'
              },
              {
                name: 'Repair Services',
                description: 'Professional repairs for any inspection failures'
              },
              {
                name: 'Re-Inspection',
                description: 'Follow-up inspection after repairs are completed'
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
                title: 'Legal Compliance',
                description: 'Ensure your vehicle meets all state requirements'
              },
              {
                title: 'Safety Assurance',
                description: 'Verify all safety systems are functioning properly'
              },
              {
                title: 'Environmental Protection',
                description: 'Confirm your vehicle meets emissions standards'
              },
              {
                title: 'Peace of Mind',
                description: 'Know your vehicle is safe and legally compliant'
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
              <h2 className="text-2xl font-bold mb-2">Official Certification</h2>
              <p className="text-gray-300">State-certified inspection station with licensed inspectors</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need an Inspection?</h2>
          <p className="text-lg mb-6">Schedule your state inspection today.</p>
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

export default StateInspections;