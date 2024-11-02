const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">A-1 Autos</h3>
            <p className="text-gray-400">Professional auto repair services you can trust.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="/booking" className="text-gray-400 hover:text-white">Book Appointment</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/auto-care" className="text-gray-400 hover:text-white">Auto Care</a></li>
              <li><a href="/services/maintenance" className="text-gray-400 hover:text-white">Maintenance</a></li>
              <li><a href="/services/inspections" className="text-gray-400 hover:text-white">Inspections</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="text-gray-400 not-italic">
              <p>123 Auto Drive</p>
              <p>Your City, ST 12345</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@a1autos.com</p>
            </address>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} A-1 Autos. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;