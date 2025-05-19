"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, ArrowRight, PenToolIcon as Tool, Car, ThermometerSnowflake, Battery, Clipboard, Wrench } from "lucide-react"
import { Input } from "../ui/Input"
import { motion, AnimatePresence } from "framer-motion"
import PropTypes from "prop-types"

const services = [
  { name: "Oil Change", path: "/services/oil-changes", category: "maintenance", icon: Tool, color: "bg-red-600" },
  { name: "Brake Service", path: "/services/brake-pads-and-rotors", category: "care", icon: Tool, color: "bg-red-700" },
  { name: "Tire Service", path: "/services/tires-and-alignment", category: "care", icon: Car, color: "bg-gray-800" },
  { name: "Engine Repair", path: "/services/engines-and-transmissions", category: "care", icon: Tool, color: "bg-black" },
  { name: "AC Repair", path: "/services/auto-ac-repair", category: "care", icon: ThermometerSnowflake, color: "bg-red-800" },
  { name: "State Inspection", path: "/services/state-inspections", category: "inspections", icon: Clipboard, color: "bg-gray-700" },
  { name: "Check Engine Light", path: "/services/check-engine-lights", category: "maintenance", icon: Car, color: "bg-red-600" },
  { name: "Fluid Exchange", path: "/services/fluid-exchanges", category: "maintenance", icon: Tool, color: "bg-gray-900" },
  { name: "Battery Service", path: "/services/car-battery-and-electrical", category: "maintenance", icon: Battery, color: "bg-red-700" },
  { name: "Suspension Repair", path: "/services/steering-and-suspension", category: "care", icon: Tool, color: "bg-black" },
]

const CategoryBadge = ({ category }) => {
  const getBadgeColor = (cat) => {
    switch (cat) {
      case 'maintenance': return 'bg-red-50 text-red-800 border-red-200'
      case 'care': return 'bg-gray-100 text-gray-800 border-gray-300'
      case 'inspections': return 'bg-black bg-opacity-10 text-black border-gray-400'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getBadgeColor(category)} capitalize`}>
      {category}
    </span>
  )
}

CategoryBadge.propTypes = {
  category: PropTypes.string.isRequired
}

const ServiceFinderSearch = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    const searchQuery = e.target.value
    setQuery(searchQuery)

    if (searchQuery.length > 1) {
      setIsSearching(true)
      const filteredServices = services.filter((service) =>
          service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setResults(filteredServices)
    } else {
      setIsSearching(false)
      setResults([])
    }
  }

  const handleServiceSelect = (path) => {
    setQuery("")
    setResults([])
    setIsSearching(false)
    setIsFocused(false)
    navigate(path)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsSearching(false)
      setIsFocused(false)
    }
  }

  return (
      <div className="relative w-full max-w-2xl mx-auto">
        <motion.div
            className="relative"
            animate={{ scale: isFocused ? 1.02 : 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-colors duration-200">
            <Search className={`h-5 w-5 ${isFocused ? 'text-red-600' : 'text-gray-500'}`} />
          </div>
          <Input
              type="text"
              placeholder="Search automotive services (e.g., oil change, brake repair, inspection...)"
              className={`pl-12 pr-6 py-4 w-full text-lg bg-white rounded-lg border-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isFocused
                      ? 'border-red-600 ring-4 ring-red-100 shadow-xl'
                      : 'border-gray-300 hover:border-gray-400'
              }`}
              value={query}
              onChange={handleSearch}
              onFocus={() => {
                setIsFocused(true)
                if (query.length > 1) setIsSearching(true)
              }}
              onBlur={() => {
                setTimeout(() => {
                  setIsSearching(false)
                  setIsFocused(false)
                }, 200)
              }}
              onKeyDown={handleKeyDown}
          />
          {query && (
              <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                  onClick={() => {
                    setQuery("")
                    setResults([])
                    setIsSearching(false)
                  }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
          )}
        </motion.div>

        <AnimatePresence>
          {isSearching && (
              <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute z-50 w-full mt-3 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-80 overflow-hidden"
              >
                {results.length > 0 ? (
                    <div className="overflow-y-auto max-h-80 custom-scrollbar">
                      <div className="p-2">
                        {results.map((service, index) => (
                            <motion.div
                                key={service.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                              <button
                                  className="w-full text-left p-4 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-red-50 flex items-center justify-between group transition-all duration-200 border border-transparent hover:border-red-100"
                                  onClick={() => handleServiceSelect(service.path)}
                              >
                                <div className="flex items-center space-x-4">
                                  <div className={`p-3 rounded-lg ${service.color} shadow-lg group-hover:shadow-xl transition-shadow duration-200`}>
                                    <service.icon className="h-5 w-5 text-white" />
                                  </div>
                                  <div className="flex flex-col">
                            <span className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors duration-200">
                              {service.name}
                            </span>
                                    <CategoryBadge category={service.category} />
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            View Details
                          </span>
                                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-200" />
                                </div>
                              </button>
                            </motion.div>
                        ))}
                      </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="p-6 text-center"
                    >
                      <div className="flex flex-col items-center space-y-3">
                        <div className="p-3 bg-gray-100 rounded-full">
                          <Search className="h-6 w-6 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-medium">No services found</p>
                          <p className="text-sm text-gray-500 mt-1">Try searching for &ldquo;oil&rdquo;, &ldquo;brake&rdquo;, or &ldquo;inspection&rdquo;</p>
                        </div>
                      </div>
                    </motion.div>
                )}
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  )
}

const ServiceFinder = () => {
  return (
      <div className="bg-gray-50 py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-black bg-opacity-5 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-red-600 to-black rounded-lg shadow-xl">
                <Wrench className="h-10 w-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-4">
            <span className="bg-gradient-to-r from-black via-red-800 to-red-600 bg-clip-text text-transparent">
              Find Your Auto Service
            </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
              Expert automotive care at your fingertips. Search our comprehensive range of professional services for your vehicle.
            </p>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <ServiceFinderSearch />
          </motion.div>

          {/* Popular services quick access */}
          <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-sm text-gray-600 mb-6 font-medium uppercase tracking-wide">Most Requested Services</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Oil Change', 'Brake Service', 'State Inspection', 'Engine Diagnostics'].map((service) => (
                  <button
                      key={service}
                      className="px-6 py-3 bg-white text-gray-700 rounded-lg border-2 border-gray-200 hover:border-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 text-sm font-semibold shadow-sm hover:shadow-md group"
                      onClick={() => {
                        // This would trigger a search for the service
                        const searchInput = document.querySelector('input[placeholder*="Search automotive services"]')
                        if (searchInput) {
                          searchInput.focus()
                        }
                      }}
                  >
                <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">
                  {service}
                </span>
                  </button>
              ))}
            </div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex justify-center items-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span className="text-sm font-medium">Certified Technicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-sm font-medium">Fast & Reliable</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Custom styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f8fafc;
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #dc2626;
            border-radius: 3px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #b91c1c;
          }
        `
        }} />
      </div>
  )
}

export default ServiceFinder