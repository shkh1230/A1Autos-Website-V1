"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Phone, Calendar } from "lucide-react"

const CTASection = () => {
  return (
    <section className="bg-auto-gradient-1 text-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready for Expert Auto Service?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Schedule your appointment today and experience the difference of professional auto care.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking">
              <button className="bg-red text-primary border-2 border-white font-bold py-4 px-8 text-xl rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center justify-center group">
                <Calendar className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                Schedule Service Now
              </button>
            </Link>
            <Link to="tel:+19722710009">
              <button className="bg-red text-primary border-2 border-white font-bold py-4 px-8 text-xl rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center justify-center group">
                <Phone className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                Call Us Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection