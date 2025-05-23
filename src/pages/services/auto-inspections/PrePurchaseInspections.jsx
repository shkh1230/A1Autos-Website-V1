import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const PrePurchaseInspections = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Pre Purchase Inspections</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pre Purchase Inspections</h1>
          <p className="text-xl text-gray-600">
            Professional pre-purchase vehicle inspections to help you make informed buying decisions. 
            Our comprehensive inspection service reveals the true condition of any vehicle you're 
            considering purchasing.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            What We Inspect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Engine condition',
              'Transmission health',
              'Frame integrity',
              'Electrical systems',
              'Previous repairs',
              'Hidden damage',
              'Safety features',
              'Maintenance history',
              'Vehicle history'
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
                name: 'Visual Inspection',
                description: 'Thorough visual inspection of all vehicle components and systems'
              },
              {
                name: 'Mechanical Testing',
                description: 'Comprehensive testing of mechanical components and performance'
              },
              {
                name: 'Diagnostic Scan',
                description: 'Computer diagnostic scan to check for stored trouble codes'
              },
              {
                name: 'Road Test',
                description: 'Test drive to evaluate vehicle performance and handling'
              },
              {
                name: 'Documentation Review',
                description: 'Review of available service records and vehicle history'
              },
              {
                name: 'Detailed Report',
                description: 'Complete inspection report with findings and recommendations'
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
                title: 'Informed Decision',
                description: "Know exactly what you're buying before making a purchase"
              },
              {
                title: 'Negotiating Power',
                description: 'Use inspection findings to negotiate a fair price'
              },
              {
                title: 'Avoid Problems',
                description: 'Identify potential issues before they become your problem'
              },
              {
                title: 'Peace of Mind',
                description: 'Confidence in your vehicle purchase decision'
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
              <h2 className="text-2xl font-bold mb-2">Professional Service</h2>
              <p className="text-gray-300">Thorough inspections by certified technicians with detailed reporting</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Buy with Confidence</h2>
          <p className="text-lg mb-6">Schedule a pre-purchase inspection before your next vehicle purchase.</p>
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

export default PrePurchaseInspections;