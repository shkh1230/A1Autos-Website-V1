"use client"

import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const ServiceCard = ({ title, description, icon: Icon, link, badge, className }) => {
  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden transition-all duration-300 border-2 border-gray-300 hover:border-primary hover:shadow-lg h-full ${className}`}
    >
      <div className="flex flex-row items-center justify-between p-4 pb-2 bg-gray-100 border-b border-gray-300">
        <h3 className="text-xl font-bold">{title}</h3>
        {Icon && (
          <div className="relative bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
      </div>
      <div className="p-6">
        {badge && (
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-3">
            {badge}
          </span>
        )}
        <p className="text-gray-600">{description}</p>
        
        <div className="mt-4 pt-2">
          <Link
            to={link}
            className="text-primary font-medium flex items-center hover:text-primary-dark transition-colors duration-300 hover:translate-x-1"
          >
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard