import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-6">
              Expert Auto Repair You Can Trust
            </h1>
            <p className="text-xl mb-8">
              Professional auto repair and maintenance services to keep your vehicle running at its best.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors duration-300">
                Schedule Service
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-gray-900 transition-colors duration-300">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Auto Care', 'Maintenance', 'Inspections'].map((service, index) => (
              <div 
                key={service} 
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-4">{service}</h3>
                <p className="text-gray-600 mb-4">
                  Professional {service.toLowerCase()} services for all makes and models.
                </p>
                <a 
                  href={`/services/${service.toLowerCase()}`} 
                  className="text-red-600 flex items-center hover:text-red-700 transition-colors duration-300"
                >
                  Learn More <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" data-aos="fade-up">Why Choose Us</h2>
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
            ].map((feature, index) => (
              <div 
                key={feature.title} 
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">Ready for Expert Auto Service?</h2>
          <p className="text-xl mb-8">Schedule your appointment today and experience the difference.</p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
            Schedule Service Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;