import { Clock, MapPin, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2" />
            <span>Mon-Fri: 7:30AM-6PM</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>123 Auto Drive, Dallas TX</span>
          </div>
        </div>
        <div className="flex items-center text-sm">
          <Phone className="h-4 w-4 mr-2" />
          <span className="font-bold">Call Us: (555) 123-4567</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;