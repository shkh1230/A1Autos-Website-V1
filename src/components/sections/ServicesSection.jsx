"use client"

import { motion } from "framer-motion"
import { Wrench, Car, Gauge, ThermometerSnowflake, Battery, Clipboard } from "lucide-react"
import ServiceCard from "../common/ServiceCard"

const ServicesSection = () => {
  const services = [
    {
      title: "Auto Care",
      description: "Complete auto care services including brake service, suspension repair, and more.",
      icon: Wrench,
      link: "/services",
      badge: "Essential",
    },
    {
      title: "Oil Changes",
      description: "Regular oil changes to keep your engine running smoothly and efficiently.",
      icon: Car,
      link: "/services/oil-changes",
      badge: "Popular",
    },
    {
      title: "Tire Services",
      description: "Tire rotation, balancing, and alignment services for optimal performance.",
      icon: Gauge,
      link: "/services/tires-and-alignment",
    },
    {
      title: "AC Service",
      description: "Complete AC system diagnosis and repair to keep you cool on the road.",
      icon: ThermometerSnowflake,
      link: "/services/auto-ac-repair",
    },
    {
      title: "Battery Service",
      description: "Battery testing, charging, and replacement services for reliable starting.",
      icon: Battery,
      link: "/services/car-battery-and-electrical",
    },
    {
      title: "Inspections",
      description: "Comprehensive vehicle inspections to ensure safety and reliability.",
      icon: Clipboard,
      link: "/services/state-inspections",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of automotive services to keep your vehicle running at its best.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                badge={service.badge}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
