const Navbar = () => {
    return (
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-red-600">A-1 Autos</div>
            <div className="hidden md:flex space-x-4">
              <a href="/" className="text-gray-700 hover:text-red-600">Home</a>
              <a href="/services" className="text-gray-700 hover:text-red-600">Services</a>
              <a href="/booking" className="text-gray-700 hover:text-red-600">Book Now</a>
              <a href="/about" className="text-gray-700 hover:text-red-600">About</a>
              <a href="/contact" className="text-gray-700 hover:text-red-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;