import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';

const FleetServices = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-red-600">Home</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/services" className="hover:text-red-600">Services</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Fleet Services</span>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fleet Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive fleet maintenance and repair services designed to keep your business moving. 
            We provide tailored solutions for fleets of all sizes with priority scheduling and customized maintenance programs.
          </p>
        </div>

        {/* Common Issues Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
            Fleet Management Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Vehicle Downtime',
              'Maintenance Scheduling',
              'Cost Control',
              'DOT Compliance',
              'Driver Safety',
              'Fuel Efficiency',
              'Regular Inspections',
              'Emergency Repairs',
              'Warranty Management'
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
            Our Fleet Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Preventive Maintenance',
                description: 'Customized maintenance schedules to prevent breakdowns and extend vehicle life'
              },
              {
                name: 'DOT Inspections',
                description: 'Comprehensive DOT compliance inspections and documentation'
              },
              {
                name: 'Fleet Management',
                description: 'Complete fleet tracking and maintenance scheduling solutions'
              },
              {
                name: 'Emergency Services',
                description: 'Priority response for emergency repairs and breakdowns'
              },
              {
                name: 'Cost Analysis',
                description: 'Detailed reporting and cost analysis for fleet operations'
              },
              {
                name: 'Safety Programs',
                description: 'Implementation of fleet safety programs and driver training'
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
                title: 'Reduced Downtime',
                description: 'Minimize vehicle downtime with preventive maintenance and quick repairs'
              },
              {
                title: 'Cost Efficiency',
                description: 'Optimize maintenance costs and improve fleet operating efficiency'
              },
              {
                title: 'Compliance Assurance',
                description: 'Stay compliant with all DOT regulations and safety requirements'
              },
              {
                title: 'Enhanced Safety',
                description: 'Improve fleet safety through regular maintenance and inspections'
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
              <p className="text-gray-300">Customized warranty programs available for fleet vehicles with nationwide coverage</p>
            </div>
            <ShieldCheck className="h-16 w-16 text-red-600" />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-red-600 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Optimize Your Fleet?</h2>
          <p className="text-lg mb-6">Contact us to discuss a customized fleet maintenance program for your business.</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default FleetServices;