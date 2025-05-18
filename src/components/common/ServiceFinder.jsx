"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Search, ArrowRight, PenToolIcon as Tool, Car, ThermometerSnowflake, Battery, Clipboard } from "lucide-react"
import { Input } from "../ui/Input"
import { motion, AnimatePresence } from "framer-motion"

const services = [
  { name: "Oil Change", path: "/services/oil-changes", category: "maintenance", icon: Tool },
  { name: "Brake Service", path: "/services/brake-pads-and-rotors", category: "care", icon: Tool },
  { name: "Tire Service", path: "/services/tires-and-alignment", category: "care", icon: Car },
  { name: "Engine Repair", path: "/services/engines-and-transmissions", category: "care", icon: Tool },
  { name: "AC Repair", path: "/services/auto-ac-repair", category: "care", icon: ThermometerSnowflake },
  { name: "State Inspection", path: "/services/state-inspections", category: "inspections", icon: Clipboard },
  { name: "Check Engine Light", path: "/services/check-engine-lights", category: "maintenance", icon: Car },
  { name: "Fluid Exchange", path: "/services/fluid-exchanges", category: "maintenance", icon: Tool },
  { name: "Battery Service", path: "/services/car-battery-and-electrical", category: "maintenance", icon: Battery },
  { name: "Suspension Repair", path: "/services/steering-and-suspension", category: "care", icon: Tool },
]

const ServiceFinder = () => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    const searchQuery = e.target.value
    setQuery(searchQuery)

    if (searchQuery.length > 1) {
      setIsSearching(true)
      const filteredServices = services.filter((service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()),
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
    navigate(path)
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5">
          <Search className="h-5 w-5" />
        </div>
        <Input
          type="text"
          placeholder="Find a service..."
          className="pl-10 pr-4 py-3 w-full shadow-md focus:shadow-lg transition-shadow"
          value={query}
          onChange={handleSearch}
          onFocus={() => query.length > 1 && setIsSearching(true)}
          onBlur={() => setTimeout(() => setIsSearching(false), 200)}
        />
      </div>

      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg border border-gray-200 max-h-60 overflow-y-auto"
          >
            {results.length > 0 ? (
              <ul className="py-1">
                {results.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <button
                      className="w-full text-left px-4 py-3 hover:bg-red-50 flex items-center justify-between group"
                      onClick={() => handleServiceSelect(service.path)}
                    >
                      <div className="flex items-center">
                        <div className="icon-container icon-container-primary p-2 rounded-full mr-3">
                          <service.icon className="h-4 w-4" />
                        </div>
                        <span>{service.name}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </button>
                  </motion.li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500">No services found. Try a different search term.</div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ServiceFinder