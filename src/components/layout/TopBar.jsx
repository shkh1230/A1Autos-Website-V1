import { Clock, MapPin, Phone } from 'lucide-react';

const TopBar = () => {
  // Google Maps location URL
  const googleMapsUrl = "https://www.google.com/maps/place/3901+Broadway+Blvd,+Garland,+TX+75043";

  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 py-3 shadow-md">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="flex flex-wrap items-center space-x-6">
          <div className="flex items-center text-sm group">
            <Clock className="h-4 w-4 mr-2 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
            <span className="font-medium">Mon-Sat: 8:30AM-6PM</span>
          </div>
          <a 
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm group hover:text-red-300 transition-colors duration-300"
          >
            <MapPin className="h-4 w-4 mr-2 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
            <span className="font-medium border-b border-dashed border-transparent group-hover:border-red-300">
              3901 Broadway Blvd, Garland, TX 75043
            </span>
          </a>
        </div>
        <a 
          href="tel:+19722710009" 
          className="flex items-center text-sm group hover:text-red-300 transition-colors duration-300"
        >
          <Phone className="h-4 w-4 mr-2 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
          <span className="font-bold">Call Us: (972) 271-0009</span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;