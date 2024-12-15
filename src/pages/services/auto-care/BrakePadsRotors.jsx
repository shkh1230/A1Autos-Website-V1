import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const BrakePadsRotors = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Brake Pads & Rotors Services</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Brake Pads and Rotors Services</h1>
          <p className="text-xl text-gray-600">
            Expert brake service and repair to ensure your vehicle's safety and optimal stopping power. 
            We provide comprehensive brake system maintenance using high-quality parts and precise diagnostics.
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
              'Squealing or squeaking brakes',
              'Grinding noise when braking',
              'Vibration in brake pedal',
              'Soft or spongy brake pedal',
              'Brake warning light on',
              'Longer stopping distance',
              'Brake pedal pulsation',
              'Vehicle pulling when braking',
              'Burning smell while driving'
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
                name: 'Brake Pad Replacement',
                description: 'Professional installation of high-quality brake pads designed for your vehicle'
              },
              {
                name: 'Rotor Resurfacing',
                description: 'Precision machining of brake rotors to ensure smooth, even braking performance'
              },
              {
                name: 'Brake Rotor Replacement',
                description: 'Installation of new brake rotors when resurfacing isnt possible or recommended'
              },
              {
                name: 'Brake System Inspection',
                description: 'Comprehensive inspection of all brake components including lines, fluid, and hardware'
              },
              {
                name: 'Brake Fluid Service',
                description: 'Complete brake fluid flush and replacement to maintain system performance'
              },
              {
                name: 'Brake Caliper Service',
                description: 'Inspection, cleaning, and replacement of brake calipers when needed'
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
                title: 'Enhanced Safety',
                description: 'Properly maintained brakes ensure reliable stopping power and vehicle control'
              },
              {
                title: 'Longer Component Life',
                description: 'Regular maintenance helps extend the life of your brake system components'
              },
              {
                title: 'Better Performance',
                description: 'Quality parts and professional service ensure optimal braking performance'
              },
              {
                title: 'Peace of Mind',
                description: 'Know your vehicles brake system is functioning safely and effectively'
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
              <p className="text-gray-300">Lifetime warranty on brake pads and shoes with our premium brake service package</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Service?</h2>
          <p className="text-lg mb-6">Our expert technicians are here to help with all your brake service needs.</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            Schedule Service Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrakePadsRotors;