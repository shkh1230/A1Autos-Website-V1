"use client"

import { useState } from "react"
import { Input } from "../ui/Input"
import { Select } from "../ui/Select"
import { Textarea } from "../ui/Textarea"
import { Calendar, Clock, Car, User, Mail, Phone, MessageSquare, CheckCircle2, PenToolIcon as Tool } from "lucide-react"
import { motion } from "framer-motion"

const AppointmentForm = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
    vehicle: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setLoading(false)
      setSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setSuccess(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
          vehicle: "",
        })
      }, 3000)
    }, 1500)
  }

  const inputStyles = "w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"

  return (
    <div className={`bg-white rounded-lg overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl border-2 border-gray-300 hover:border-primary ${className}`}>
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl text-red-600 font-display font-bold">Schedule Your Service</h3>
            <p className="text-gray-600 mt-1">Book your appointment in just a few clicks</p>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            <Calendar className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="p-6">
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Appointment Scheduled!</h3>
            <p className="text-gray-600 mb-4">We'll contact you shortly to confirm your appointment details.</p>
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-900">
                Confirmation #:{" "}
                {Math.floor(Math.random() * 10000)
                  .toString()
                  .padStart(4, "0")}
              </p>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <User className="w-4 h-4 mr-2 text-primary" />
                Full Name
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={inputStyles}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputStyles}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className={inputStyles}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Car className="w-4 h-4 mr-2 text-primary" />
                Vehicle Information
              </label>
              <Input
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                placeholder="Year, Make, Model (e.g., 2019 Toyota Camry)"
                className={inputStyles}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <Tool className="w-4 h-4 mr-2 text-primary" />
                Service Needed
              </label>
              <Select 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                className={inputStyles}
                required
              >
                <option value="">Select a service</option>
                <option value="oil-change">Oil Change</option>
                <option value="brake-service">Brake Service</option>
                <option value="tire-service">Tire Service</option>
                <option value="inspection">Vehicle Inspection</option>
                <option value="engine-repair">Engine Repair</option>
                <option value="transmission">Transmission Service</option>
                <option value="ac-service">AC Service</option>
                <option value="other">Other</option>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  Preferred Date
                </label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className={inputStyles}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  Preferred Time
                </label>
                <Select 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  className={inputStyles}
                  required
                >
                  <option value="">Select a time</option>
                  <option value="08:30">8:30 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="09:30">9:30 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="10:30">10:30 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="13:30">1:30 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="14:30">2:30 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="15:30">3:30 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="16:30">4:30 PM</option>
                  <option value="17:00">5:00 PM</option>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                Additional Information
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please provide any additional details about your service needs"
                className={`${inputStyles} h-24`}
              />
            </div>
          </form>
        )}
      </div>
      {!success && (
        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <button 
            type="submit" 
            className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-primary-dark shadow-md hover:shadow-lg hover:-translate-y-1" 
            onClick={handleSubmit} 
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Schedule Appointment"
            )}
          </button>
        </div>
      )}
    </div>
  )
}

export default AppointmentForm