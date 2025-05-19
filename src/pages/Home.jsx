"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import HeroSection from "../components/sections/HeroSection"
import ServicesSection from "../components/sections/ServicesSection"
import FeaturesSection from "../components/sections/FeaturesSection"
import TestimonialsSection from "../components/sections/TestimonialsSection"
import CTASection from "../components/sections/CTASection"
import ServiceFinder from "../components/common/ServiceFinder"
import AutoShopBG from "/src/assets/images/auto-shop-bg.jpeg"
import {motion} from "framer-motion";
import {MapPin} from "lucide-react";
import {Link} from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection backgroundImage={AutoShopBG} />

      {/* Services Section */}
      <ServicesSection />

      {/* Service Finder */}
      <ServiceFinder />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />

        {/* Location Section */}
        <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Visit Our Shop</h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Conveniently located in Garland, TX, we're here to serve all your automotive needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-300 hover:border-primary transition-all duration-300"
                    >
                        <div className="flex items-start mb-6">
                            <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                                <p className="text-gray-700">3901 Broadway Blvd, Garland, TX 75043</p>
                                <p className="text-gray-600 mt-2">
                                    Located at the intersection of Broadway Boulevard and Centerville Road, with easy access from
                                    Highway 635.
                                </p>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Hours of Operation</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span className="font-medium">8:30 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span className="font-medium">8:30 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span className="font-medium">Closed</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://www.google.com/maps/place/3901+Broadway+Blvd,+Garland,+TX+75043"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-auto-primary flex items-center justify-center"
                            >
                                <MapPin className="h-5 w-5 mr-2" />
                                Get Directions
                            </a>
                            <Link to="/contact" className="btn-auto-outline flex items-center justify-center">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-96 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2756247167653!2d-96.6394!3d32.8912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea7494f4c8af7%3A0x8f5d7c0e56f5e0a8!2s3901%20Broadway%20Blvd%2C%20Garland%2C%20TX%2075043!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="A-1 Autos Location"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomePage
