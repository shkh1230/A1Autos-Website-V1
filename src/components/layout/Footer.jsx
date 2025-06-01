import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, PenToolIcon as Tool, ArrowRight, Wrench } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
      <footer className="bg-gray-900 text-gray-300 relative">

        {/* Footer content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
              <span className="flex items-center font-extrabold tracking-tighter">
                <span className="text-4xl md:text-5xl">
                  <span className="text-red-600 font-black">A</span>
                  <span className="text-red-600 relative">1</span>
                </span>
                <span className="text-2xl md:text-3xl ml-1 text-white font-black tracking-wider uppercase">
                  Autos
                </span>
              </span>
                <span className="block mt-1 text-sm text-gray-400 font-normal italic">
                Excellence in Auto Care
              </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional auto repair and maintenance services to keep your vehicle running at its best. Trusted by
                thousands of customers in the Garland area.
              </p>
              <div className="flex space-x-4">
                <a
                    href="#"
                    className="bg-gray-800 hover:bg-red-600 p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
                    aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                    href="#"
                    className="bg-gray-800 hover:bg-red-600 p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
                    aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                    href="#"
                    className="bg-gray-800 hover:bg-red-600 p-3 rounded-full text-white transition-all duration-300 hover:scale-110"
                    aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-xl font-black mb-6 pb-2 border-b-2 border-red-600">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                      to="/"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    Home
                  </span>
                  </Link>
                </li>
                <li>
                  <Link
                      to="/about"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    About Us
                  </span>
                  </Link>
                </li>
                <li>
                  <Link
                      to="/services"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    Services
                  </span>
                  </Link>
                </li>
                <li>
                  <Link
                      to="/booking"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    Book Appointment
                  </span>
                  </Link>
                </li>
                <li>
                  <Link
                      to="/contact"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    Contact Us
                  </span>
                  </Link>
                </li>
                <li>
                  <Link
                      to="/careers"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    Careers
                  </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white text-xl font-black mb-6 pb-2 border-b-2 border-red-600">Our Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                      to="/services/oil-changes"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    Oil Changes
                  </span>
                  </Link>
                </li>
                <li>
                  <Link
                      to="/services/brake-pads-and-rotors"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    Brake Service
                  </span>
                  </Link>
                </li>
                <li>
                  <Link
                      to="/services/tires-and-alignment"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    Tire Service
                  </span>
                  </Link>
                </li>
                <li>
                  <Link
                      to="/services/engines-and-transmissions"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    Engine Repair
                  </span>
                  </Link>
                </li>
                <li>
                  <Link
                      to="/services/state-inspections"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    State Inspections
                  </span>
                  </Link>
                </li>
                <li>
                  <Link
                      to="/services/auto-ac-repair"
                      className="text-gray-400 hover:text-white hover:translate-x-2 flex items-center transition-all duration-300 group"
                  >
                    <ArrowRight className="h-4 w-4 mr-3 text-red-600 group-hover:text-white transition-colors duration-300" />
                    <span className="border-b border-transparent group-hover:border-red-600 transition-all duration-300">
                    AC Service
                  </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white text-xl font-black mb-6 pb-2 border-b-2 border-red-600">Contact Us</h3>
              <ul className="space-y-5">
                <li className="flex items-start group">
                  <MapPin className="h-5 w-5 text-red-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="leading-tight text-gray-400 group-hover:text-white transition-colors duration-300">
                  3901 Broadway Blvd, Garland, TX 75043
                </span>
                </li>
                <li className="flex items-center group">
                  <Phone className="h-5 w-5 text-red-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <a
                      href="tel:+19722710009"
                      className="text-gray-400 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-red-600"
                  >
                    (972) 271-0009
                  </a>
                </li>
                <li className="flex items-center group">
                  <Mail className="h-5 w-5 text-red-600 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <a
                      href="mailto:a1autosgarland@gmail.com"
                      className="text-gray-400 hover:text-white transition-colors duration-300 border-b border-transparent hover:border-red-600"
                  >
                    a1autosgarland@gmail.com
                  </a>
                </li>
                <li className="flex items-start group">
                  <Clock className="h-5 w-5 text-red-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    <p className="font-semibold">Monday-Saturday: 8:30AM-6PM</p>
                    <p className="text-gray-500 group-hover:text-gray-300">Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="text-center mb-8">
              <h3 className="text-white text-xl font-black mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Get the latest automotive tips, service reminders, and special offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition-all duration-300"
                />
                <button className="w-full sm:w-auto bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p className="mb-4">© {currentYear} A-1 Autos. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="flex space-x-6">
                <Link
                    to="/privacy"
                    className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-red-600"
                >
                  Privacy Policy
                </Link>
                <Link
                    to="/terms"
                    className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-red-600"
                >
                  Terms of Service
                </Link>
                <Link
                    to="/sitemap"
                    className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-red-600"
                >
                  Sitemap
                </Link>
              </div>
              <div className="text-gray-600">
                <span className="text-red-600 font-semibold">Made with ❤️</span> for automotive excellence
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer