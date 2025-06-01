import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const DriveTrainRepairs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Drive Train Repairs</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Drive Train Repair Services</h1>
          <p className="text-xl text-gray-600">
            Expert diagnosis and repair of all drive train components. Our certified technicians 
            specialize in maintaining and repairing the critical systems that transfer power from 
            your engine to your wheels.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Signs You Need Drive Train Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Vibration while driving',
              'Clicking or clunking sounds',
              'Shuddering on acceleration',
              'Difficulty turning',
              'Grinding noises',
              'Delayed power delivery',
              'Fluid leaks',
              'wheel binding',
              'Uneven tire wear'
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
                name: 'CV Joint Service',
                description: 'Inspection and replacement of CV joints and boots to ensure smooth power transfer'
              },
              {
                name: 'Differential Service',
                description: 'Maintenance and repair of front and rear differentials including fluid service'
              },
              {
                name: 'Transfer Case Service',
                description: 'Diagnosis and repair of transfer cases in 4WD and AWD vehicles'
              },
              {
                name: 'Driveshaft Repair',
                description: 'Inspection and repair of driveshafts, U-joints, and center bearings'
              },
              {
                name: 'Axle Repair',
                description: 'Complete axle service including bearing replacement and seal repair'
              },
              {
                name: 'Clutch Service',
                description: 'Diagnosis and repair of clutch systems in manual transmission vehicles'
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
                description: 'Ensure optimal power transfer from engine to wheels for better performance'
              },
              {
                title: 'Enhanced Safety',
                description: 'Well-maintained drive train components provide safer vehicle operation'
              },
              {
                title: 'Extended Component Life',
                description: 'Regular maintenance helps prevent costly major repairs'
              },
              {
                title: 'Smoother Operation',
                description: 'Properly functioning drive train ensures smooth power delivery'
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
              <p className="text-gray-300">12-month/12,000-mile warranty on all drive train repairs and services</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Schedule Your Service?</h2>
          <p className="text-lg mb-6">Our expert technicians are here to help with all your drive train needs.</p>
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

export default DriveTrainRepairs;