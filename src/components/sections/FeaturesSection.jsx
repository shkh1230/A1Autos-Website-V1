"use client"

import { motion } from "framer-motion"
import { Shield, Clock, DollarSign, Award, PenToolIcon as Tool, ThumbsUp } from "lucide-react"

const FeaturesSection = () => {
  const features = [
    {
      title: "Expert Technicians",
      description: "ASE-certified mechanics with years of experience in all makes and models.",
      icon: Tool,
    },
    {
      title: "Quality Service",
      description: "Using only high-quality parts and advanced diagnostic tools for reliable repairs.",
      icon: Award,
    },
    {
      title: "Fair Pricing",
      description: "Transparent pricing with no hidden fees and detailed estimates before work begins.",
      icon: DollarSign,
    },
    {
      title: "Fast Turnaround",
      description: "Efficient service to get you back on the road as quickly as possible.",
      icon: Clock,
    },
    {
      title: "Warranty Protection",
      description: "Service warranties on repairs to ensure your peace of mind.",
      icon: Shield,
    },
    {
      title: "Customer Satisfaction",
      description: "Dedicated to providing exceptional customer service with every visit.",
      icon: ThumbsUp,
    },
  ]

  return (
    <section className="bg-gray-50 py-24 relative">
      {/* Diagonal top edge */}

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing exceptional auto care with honest service and quality workmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full border-2 border-gray-300 hover:border-primary group hover:bg-red-50 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection