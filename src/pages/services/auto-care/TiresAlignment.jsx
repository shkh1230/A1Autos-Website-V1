import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const TiresAlignment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Tires & Alignment Services</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tires & Alignment Services</h1>
          <p className="text-xl text-gray-600">
            Professional tire services and wheel alignment expertise to maximize your vehicle's performance, 
            handling, and tire life. We provide comprehensive tire care and precision alignment services.
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
              'Steering wheel vibration',
              'Squealing tires',
              'Poor handling',
              'Reduced fuel efficiency',
              'Tire pressure warning light',
              'Visible tire damage',
              'Alignment warning signs'
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
                name: 'Wheel Alignment',
                description: 'Precision computerized alignment to ensure proper wheel angles for optimal handling and tire wear'
              },
              {
                name: 'Tire Rotation',
                description: 'Regular rotation service to ensure even tire wear and extended tire life'
              },
              {
                name: 'Tire Balancing',
                description: 'Dynamic balancing to eliminate vibration and ensure smooth operation'
              },
              {
                name: 'New Tire Installation',
                description: 'Professional mounting and balancing of new tires with a wide selection of brands'
              },
              {
                name: 'Tire Repair',
                description: 'Expert repair of tire damage, including punctures and patches when safe'
              },
              {
                name: 'Tire Pressure Monitoring',
                description: 'TPMS diagnosis and service to ensure proper tire pressure monitoring'
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
                title: 'Extended Tire Life',
                description: 'Proper alignment and maintenance significantly extends the life of your tires'
              },
              {
                title: 'Improved Fuel Efficiency',
                description: 'Correctly aligned wheels and proper tire maintenance improve fuel economy'
              },
              {
                title: 'Better Handling',
                description: 'Precise alignment and balanced tires ensure optimal vehicle handling'
              },
              {
                title: 'Enhanced Safety',
                description: 'Well-maintained tires and proper alignment provide better traction and control'
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
              <p className="text-gray-300">Lifetime alignment warranty with our alignment service package</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Service?</h2>
          <p className="text-lg mb-6">Our expert technicians are here to help with all your tire and alignment needs.</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            Schedule Service Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TiresAlignment;