import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const ExtendedWarranties = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Extended Warranties</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Extended Warranty Services</h1>
          <p className="text-xl text-gray-600">
            Protect your vehicle investment with our comprehensive extended warranty options. 
            We offer flexible coverage plans to suit your needs and budget, providing peace of 
            mind beyond your manufacturer's warranty.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Why Choose Extended Coverage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Expired factory warranty',
              'High repair costs',
              'Older vehicle protection',
              'Complex electronics',
              'Peace of mind',
              'Transfer value',
              'Flexible coverage options',
              'Nationwide protection',
              'Inflation protection'
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
            Coverage Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Comprehensive Coverage',
                description: 'Complete protection for all major vehicle systems and components'
              },
              {
                name: 'Powertrain Plus',
                description: 'Extended coverage for engine, transmission, and drive systems'
              },
              {
                name: 'Electronic Systems',
                description: 'Protection for advanced electronic and computer components'
              },
              {
                name: 'Basic Coverage',
                description: 'Essential coverage for most common repair needs'
              },
              {
                name: 'Maintenance Plans',
                description: 'Scheduled maintenance coverage options'
              },
              {
                name: 'Custom Plans',
                description: 'Tailored coverage based on your specific needs'
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
                title: 'Financial Protection',
                description: 'Guard against unexpected repair costs and mechanical failures'
              },
              {
                title: 'Transferable Coverage',
                description: 'Increase resale value with transferable warranty options'
              },
              {
                title: 'Nationwide Service',
                description: 'Coverage honored at certified repair facilities nationwide'
              },
              {
                title: 'Flexible Terms',
                description: 'Choose coverage terms that fit your needs and budget'
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

        {/* Coverage Info */}
        <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Coverage Options</h2>
              <p className="text-gray-300">Multiple coverage levels available with terms up to 7 years/100,000 miles</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Protect Your Investment</h2>
          <p className="text-lg mb-6">Speak with our warranty specialists about the best coverage options for your vehicle.</p>
          <Link to="/booking">
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            Get Coverage Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExtendedWarranties;