"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { Wrench, PenToolIcon as Tool, CheckCircle } from "lucide-react"

const HeroSection = ({ backgroundImage, overlay = true }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = backgroundImage
    img.onload = () => setLoaded(true)
  }, [backgroundImage])

  return (
    <div className="relative bg-secondary text-white py-32 md:py-48 z-0 overflow-hidden">
      {/* Background image with fade-in effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-fixed ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {overlay && <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>}
      </div>

        {/* Dark overlay - changed to neutral dark */}
        <div className="absolute inset-0 bg-gray-900/60"></div>


      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
            <div className="text-4xl md:text-5xl font-bold mb-8">
                <TypeAnimation
                    sequence={[
                        "Expert Auto Repair You Can Trust",
                        1000,
                        "Professional Car Maintenance",
                        1000,
                        "Quality Service Guaranteed",
                        1000,
                        "Your Trusted Auto Care Partner",
                        1000,
                    ]}
                    wrapper="span"
                    className="w-full whitespace-nowrap"
                    speed={50}
                    //style={{ display: 'inline-block' }}
                    repeat={Infinity}
                />
            </div>
          <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
            Professional auto repair and maintenance services to keep your vehicle running at its best.
          </p>

          {/* Feature points */}
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span className="text-gray-200">ASE Certified Technicians</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span className="text-gray-200">Quality Parts & Service</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-accent mr-2" />
              <span className="text-gray-200">Satisfaction Guaranteed</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking">
              <button className="bg-red text-primary border-2 border-white font-bold py-4 px-8 text-xl rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center justify-center group">
                Schedule Service
              </button>
            </Link>
            <Link to="/services">
              <button className="bg-transparent border-2 border-primary text-primary font-bold py-4 px-8 text-xl rounded-md transition-all duration-300 hover:bg-primary hover:text-white w-full sm:w-auto hover:-translate-y-1">
                View Services
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection