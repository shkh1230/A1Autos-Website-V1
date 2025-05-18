"use client"

import { Clock, MapPin, Phone, PenToolIcon as Tool } from "lucide-react"
import { formatPhoneNumber } from "../../utils/helpers"
import { motion } from "framer-motion"

const TopBar = () => {
  // Google Maps location URL
  const googleMapsUrl = "https://www.google.com/maps/place/3901+Broadway+Blvd,+Garland,+TX+75043"
  const phoneNumber = "9722710009"
  const formattedPhone = formatPhoneNumber(phoneNumber)

  return (
    <div className="bg-auto-gradient-2 text-gray-100 py-3 shadow-md relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-8 h-8">
          <Tool className="w-8 h-8" />
        </div>
        <div className="absolute bottom-0 right-1/4 w-6 h-6">
          <Tool className="w-6 h-6" />
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center relative z-10">
        <div className="flex flex-wrap items-center space-x-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center text-sm group"
          >
            <Clock className="h-4 w-4 mr-2 text-accent group-hover:text-accent/80 transition-colors duration-300" />
            <span className="font-medium">Mon-Sat: 8:30AM-6PM</span>
          </motion.div>
          <motion.a
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm group hover:text-accent/80 transition-colors duration-300"
          >
            <MapPin className="h-4 w-4 mr-2 text-accent group-hover:text-accent/80 transition-colors duration-300" />
            <span className="font-medium border-b border-dashed border-transparent group-hover:border-accent/80">
              3901 Broadway Blvd, Garland, TX 75043
            </span>
          </motion.a>
        </div>
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href={`tel:+1${phoneNumber}`}
          className="flex items-center text-sm group hover:text-accent/80 transition-colors duration-300"
        >
          <Phone className="h-4 w-4 mr-2 text-accent group-hover:text-accent/80 transition-colors duration-300" />
          <span className="font-bold">Call Us: {formattedPhone}</span>
        </motion.a>
      </div>
    </div>
  )
}

export default TopBar
