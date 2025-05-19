"use client"

import { motion } from "framer-motion"
import { Wrench, Calendar, Clock, Car, CheckCircle2 } from "lucide-react"
import AppointmentForm from "../components/common/AppointmentForm"

const Booking = () => {
  const steps = [
    {
      title: "Choose Your Service",
      description: "Select the service you need for your vehicle",
      icon: Wrench,
    },
    {
      title: "Pick a Date",
      description: "Select your preferred appointment date",
      icon: Calendar,
    },
    {
      title: "Select a Time",
      description: "Choose a convenient time slot",
      icon: Clock,
    },
    {
      title: "Provide Details",
      description: "Tell us about your vehicle and service needs",
      icon: Car,
    },
    {
      title: "Confirmation",
      description: "Receive your appointment confirmation",
      icon: CheckCircle2,
    },
  ]

  return (
    <div className="bg-auto-pattern py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display"
          >
            Schedule Your Service Appointment
          </motion.h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Book your appointment online in just a few easy steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">How It Works</h2>
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 font-display">Appointment Policies</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p>Please arrive 10 minutes before your scheduled appointment time.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p>If you need to cancel or reschedule, please give us at least 24 hours notice.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p>For major repairs, we may need to keep your vehicle for multiple days.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p>A diagnostic fee may apply for complex issues requiring extensive testing.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p>All estimates will be provided before any work is performed.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AppointmentForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking
