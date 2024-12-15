import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const ScheduledMaintenance = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Scheduled Maintenance</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scheduled Maintenance Services</h1>
          <p className="text-xl text-gray-600">
            Keep your vehicle running at its best with our comprehensive scheduled maintenance services. 
            We follow manufacturer-recommended maintenance schedules and use quality parts to ensure 
            optimal performance and reliability.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Importance of Regular Maintenance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Prevent major repairs',
              'Maintain warranty coverage',
              'Preserve vehicle value',
              'Ensure safe operation',
              'Optimize performance',
              'Improve fuel efficiency',
              'Extend vehicle life',
              'Avoid breakdowns',
              'Regular inspections'
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
            Maintenance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: '30,000 Mile Service',
                description: 'Comprehensive maintenance including fluid changes, filters, and major system inspections'
              },
              {
                name: '60,000 Mile Service',
                description: 'Extended service with timing belt inspection, brake service, and transmission maintenance'
              },
              {
                name: '90,000 Mile Service',
                description: 'Major service including spark plugs, cooling system, and complete vehicle inspection'
              },
              {
                name: 'Manufacturer Schedule',
                description: 'Services following your vehicles specific maintenance schedule requirements'
              },
              {
                name: 'Multi-Point Inspection',
                description: 'Thorough inspection of all major vehicle systems and components'
              },
              {
                name: 'Preventive Maintenance',
                description: 'Regular services to prevent unexpected repairs and breakdowns'
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
                title: 'Maintain Value',
                description: 'Regular maintenance helps preserve your vehicles resale value'
              },
              {
                title: 'Prevent Problems',
                description: 'Catch potential issues before they become major repairs'
              },
              {
                title: 'Warranty Protection',
                description: 'Keep your manufacturer warranty valid with documented maintenance'
              },
              {
                title: 'Peace of Mind',
                description: 'Know your vehicle is properly maintained and safe to drive'
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
              <p className="text-gray-300">All scheduled maintenance services backed by our satisfaction guarantee</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay on Schedule</h2>
          <p className="text-lg mb-6">Keep your vehicle running at its best with regular maintenance.</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            Schedule Service Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduledMaintenance;