// src/pages/Home.jsx
import { ChevronRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Expert Auto Repair You Can Trust
            </h1>
            <p className="text-xl mb-8">
              Professional auto repair and maintenance services to keep your vehicle running at its best.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn btn-primary">
                Schedule Service
              </button>
              <button className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Auto Care', 'Maintenance', 'Inspections'].map((service) => (
              <div key={service} className="service-card">
                <h3 className="text-xl font-bold mb-4">{service}</h3>
                <p className="text-gray-600 mb-4">
                  Professional {service.toLowerCase()} services for all makes and models.
                </p>
                <a href={`/services/${service.toLowerCase()}`} className="text-red-600 flex items-center hover:text-red-700">
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Technicians',
                description: 'ASE-certified mechanics with years of experience.',
              },
              {
                title: 'Quality Service',
                description: 'Using only high-quality parts and advanced diagnostic tools.',
              },
              {
                title: 'Fair Pricing',
                description: 'Transparent pricing with no hidden fees.',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;