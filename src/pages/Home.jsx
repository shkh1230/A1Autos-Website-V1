import { useEffect, useState} from 'react';
import { ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import AutoShopBG from '/src/assets/images/auto-shop-bg.jpeg';
import { TypeAnimation } from 'react-type-animation';

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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-48 z-0">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${AutoShopBG})` }}
        >
          {/* Dark overlay - changed to neutral dark */}
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <div className="text-4xl md:text-5xl font-bold mb-8">
              <TypeAnimation
                sequence={[
                  'Expert Auto Repair You Can Trust',
                  1000,
                  'Professional Car Maintenance',
                  1000,
                  'Quality Service Guaranteed',
                  1000,
                  'Your Trusted Auto Care Partner',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Professional auto repair and maintenance services to keep your vehicle running at its best.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-red-800 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all duration-300">
                Schedule Service
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-red-800 transition-all duration-300">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-red-800" data-aos="fade-up">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Auto Care', 'Maintenance', 'Inspections'].map((service, index) => (
              <div 
                key={service} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-bold mb-4 text-red-800">{service}</h3>
                <p className="text-gray-700 mb-6">
                  Professional {service.toLowerCase()} services for all makes and models.
                </p>
                <a 
                  href={`/services/${service.toLowerCase()}`} 
                  className="text-red-800 flex items-center hover:text-red-600 transition-colors duration-300"
                >
                  Learn More <ChevronRight className="h-5 w-5 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-red-800" data-aos="fade-up">Why Choose Us</h2>
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
                className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-2xl font-bold mb-4 text-red-800">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <div className="bg-red-800 text-white py-24">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-8">Ready for Expert Auto Service?</h2>
          <p className="text-xl mb-10">Schedule your appointment today and experience the difference.</p>
          <button className="bg-white text-red-800 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300">
            Schedule Service Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;