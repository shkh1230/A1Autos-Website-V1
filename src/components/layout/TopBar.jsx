import { Clock, MapPin, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2" />
            <span>Mon-Sat: 8:30AM-6PM</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span> 3901 Broadway Blvd, Garland, TX 75043</span>
          </div>
        </div>
        <div className="flex items-center text-sm">
          <Phone className="h-4 w-4 mr-2" />
          <span className="font-bold">Call Us: (972) 271-0009</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;