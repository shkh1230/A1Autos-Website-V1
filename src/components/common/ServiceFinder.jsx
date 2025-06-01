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
      case 'maintenance': return 'bg-red-50 text-red-700 border-red-200'
      case 'care': return 'bg-gray-100 text-gray-700 border-gray-300'
      case 'inspections': return 'bg-blue-50 text-blue-700 border-blue-200'
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
      <div className="relative w-full max-w-3xl mx-auto">
        <motion.div
            className="relative"
            animate={{ scale: isFocused ? 1.01 : 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-colors duration-200 z-10">
            <Search className={`h-5 w-5 ${isFocused ? 'text-red-600' : 'text-gray-500'}`} />
          </div>
          <Input
              type="text"
              placeholder="Search services (e.g., oil change, brake repair...)"
              className={`pl-12 pr-12 py-4 w-full text-base md:text-lg bg-white rounded-xl border-2 transition-all duration-300 shadow-lg hover:shadow-xl ${
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
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors z-10"
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
                  className="absolute z-50 w-full mt-3 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-80 overflow-hidden"
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
                                  className="w-full text-left p-3 md:p-4 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-red-50 flex items-center justify-between group transition-all duration-200 border border-transparent hover:border-red-100"
                                  onClick={() => handleServiceSelect(service.path)}
                              >
                                <div className="flex items-center space-x-3 md:space-x-4">
                                  <div className={`p-2 md:p-3 rounded-lg ${service.color} shadow-lg group-hover:shadow-xl transition-shadow duration-200 flex-shrink-0`}>
                                    <service.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                                  </div>
                                  <div className="flex flex-col min-w-0">
                                    <span className="font-semibold text-gray-900 group-hover:text-red-700 transition-colors duration-200 text-sm md:text-base truncate">
                                      {service.name}
                                    </span>
                                    <div className="mt-1">
                                      <CategoryBadge category={service.category} />
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2 flex-shrink-0">
                                  <span className="text-xs md:text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
                                    View Details
                                  </span>
                                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-200" />
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
                          <p className="text-sm text-gray-500 mt-1">Try "oil", "brake", or "inspection"</p>
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
  const popularServices = [
    { name: "Oil Change", search: "oil change" },
    { name: "Brake Service", search: "brake service" },
    { name: "State Inspection", search: "state inspection" },
    { name: "Engine Diagnostics", search: "engine diagnostics" }
  ]

  const handlePopularServiceClick = (searchTerm) => {
    const searchInput = document.querySelector('input[placeholder*="Search services"]')
    if (searchInput) {
      searchInput.value = searchTerm
      searchInput.focus()
      searchInput.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

  return (
      <div className="bg-gray-50 py-24 md:py-20 relative overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 md:p-4 bg-gradient-to-r from-red-600 to-black rounded-xl shadow-xl">
                <Wrench className="h-8 w-8 md:h-10 md:w-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-display mb-4">
              <span className="bg-gradient-to-r from-black via-red-800 to-red-600 bg-clip-text text-transparent">
                Find Your Auto Service
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
              Expert automotive care at your fingertips. Search our comprehensive range of professional services.
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
              className="mt-8 md:mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <p className="text-sm text-gray-600 mb-4 md:mb-6 font-medium uppercase tracking-wide">Popular Services</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-2xl mx-auto">
              {popularServices.map((service) => (
                  <button
                      key={service.name}
                      className="px-4 py-2 md:px-6 md:py-3 bg-white text-gray-700 rounded-lg border-2 border-gray-200 hover:border-red-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 text-sm md:text-base font-semibold shadow-sm hover:shadow-md group"
                      onClick={() => handlePopularServiceClick(service.search)}
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200 inline-block">
                      {service.name}
                    </span>
                  </button>
              ))}
            </div>
          </motion.div>

          {/* Trust indicators - Mobile Responsive */}
          <motion.div
              className="mt-12 md:mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                <span className="text-sm md:text-base font-medium">Certified Technicians</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className="text-sm md:text-base font-medium">Quality Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-sm md:text-base font-medium">Fast & Reliable</span>
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