import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, PenToolIcon as Tool, ArrowRight } from "lucide-react"
import Logo from "./Logo"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-gray-300 relative">
      {/* Decorative gear pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-10 -left-10 text-white">
          <Tool className="w-40 h-40" />
        </div>
        <div className="absolute top-1/4 right-1/4 text-white">
          <Tool className="w-24 h-24" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-white">
          <Tool className="w-32 h-32" />
        </div>
      </div>

      {/* Footer content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Logo className="mb-6" variant="light" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional auto repair and maintenance services to keep your vehicle running at its best. Trusted by
              thousands of customers in the Garland area.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full text-white transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full text-white transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary p-2 rounded-full text-white transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 pb-2 border-b border-gray-700">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/oil-changes"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  Oil Changes
                </Link>
              </li>
              <li>
                <Link
                  to="/services/brake-pads-and-rotors"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  Brake Service
                </Link>
              </li>
              <li>
                <Link
                  to="/services/tires-and-alignment"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  Tire Service
                </Link>
              </li>
              <li>
                <Link
                  to="/services/engines-and-transmissions"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  Engine Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/services/state-inspections"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  State Inspections
                </Link>
              </li>
              <li>
                <Link
                  to="/services/auto-ac-repair"
                  className="text-gray-400 hover:text-white hover:translate-x-1 flex items-center transition-all duration-200"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  AC Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 pb-2 border-b border-gray-700">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="leading-tight">3901 Broadway Blvd, Garland, TX 75043</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <a href="tel:+19722710009" className="hover:text-white transition-colors duration-200">
                  (972) 271-0009
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:info@a1autos.com" className="hover:text-white transition-colors duration-200">
                  info@a1autos.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p>Monday-Saturday: 8:30AM-6PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} A-1 Autos. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
