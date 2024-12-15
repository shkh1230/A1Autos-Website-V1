import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const CarBatteryElectrical = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Car Battery and Electrical Services</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Battery and Electrical Services</h1>
          <p className="text-xl text-gray-600">
            Complete electrical system diagnostics and repair services. From battery testing 
            and replacement to complex electrical system repairs, our technicians use advanced 
            diagnostic equipment to keep your vehicle's electrical systems running properly.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Common Electrical Issues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Slow engine start',
              'Battery warning light',
              'Dim headlights',
              'Power window issues',
              'Electrical shorts',
              'Alternator problems',
              'Dead battery',
              'Corroded terminals',
              'Faulty starters'
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
                name: 'Battery Testing',
                description: 'Complete battery and charging system diagnostics'
              },
              {
                name: 'Battery Replacement',
                description: 'Professional battery installation with warranty coverage'
              },
              {
                name: 'Alternator Service',
                description: 'Alternator testing, repair, and replacement'
              },
              {
                name: 'Starter Repair',
                description: 'Starter motor diagnosis and replacement'
              },
              {
                name: 'Electrical Diagnostics',
                description: 'Advanced electrical system testing and troubleshooting'
              },
              {
                name: 'Wiring Repair',
                description: 'Electrical wiring and connection repair services'
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
                title: 'Reliable Starting',
                description: 'Ensure your vehicle starts reliably in all conditions'
              },
              {
                title: 'System Protection',
                description: 'Protect sensitive electronic components from damage'
              },
              {
                title: 'Performance',
                description: 'Maintain optimal electrical system performance'
              },
              {
                title: 'Peace of Mind',
                description: 'Prevent unexpected electrical system failures'
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
              <p className="text-gray-300">Free battery testing and nationwide warranty on new batteries</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Having Electrical Issues?</h2>
          <p className="text-lg mb-6">Schedule your electrical system check today.</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            Schedule Service Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarBatteryElectrical;