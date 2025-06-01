"use client"

import { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import emailjs from "emailjs-com"
import { Input } from "../ui/Input"
import { Select } from "../ui/Select"
import { Textarea } from "../ui/Textarea"
import { Calendar, Clock, Car, User, Mail, Phone, MessageSquare, CheckCircle2, PenToolIcon as Tool, AlertCircle, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { EMAILJS_CONFIG, DEMO_MODE } from "../../config/email"
import "react-datepicker/dist/react-datepicker.css"

const AppointmentForm = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: null,
    time: "",
    message: "",
    vehicle: "",
    privacyConsent: false,
    marketingConsent: false
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [validationErrors, setValidationErrors] = useState({})
  const [confirmationNumber, setConfirmationNumber] = useState("")

  // Initialize EmailJS
  useEffect(() => {
    if (!DEMO_MODE && EMAILJS_CONFIG.USER_ID) {
      emailjs.init(EMAILJS_CONFIG.USER_ID)
    }
  }, [])

  // Available time slots
  const timeSlots = [
    "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ]

  // Service options
  const serviceOptions = [
    { value: "", label: "Select a service" },
    { value: "oil-change", label: "Oil Change" },
    { value: "brake-service", label: "Brake Service" },
    { value: "tire-service", label: "Tire Service & Alignment" },
    { value: "state-inspection", label: "State Inspection" },
    { value: "engine-diagnostics", label: "Engine Diagnostics" },
    { value: "transmission-service", label: "Transmission Service" },
    { value: "ac-service", label: "AC Service & Repair" },
    { value: "battery-electrical", label: "Battery & Electrical" },
    { value: "cooling-system", label: "Cooling System" },
    { value: "scheduled-maintenance", label: "Scheduled Maintenance" },
    { value: "other", label: "Other (specify in message)" }
  ]

  // Form validation
  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email format is invalid"
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      errors.phone = "Phone number format is invalid"
    }

    if (!formData.vehicle.trim()) {
      errors.vehicle = "Vehicle information is required"
    }

    if (!formData.service) {
      errors.service = "Please select a service"
    }

    if (!formData.date) {
      errors.date = "Please select a date"
    }

    if (!formData.time) {
      errors.time = "Please select a time"
    }

    if (!formData.privacyConsent) {
      errors.privacyConsent = "Privacy policy consent is required"
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Generate confirmation number
  const generateConfirmationNumber = () => {
    const timestamp = Date.now().toString().slice(-6)
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `A1-${timestamp}-${random}`
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  // Handle date change
  const handleDateChange = (date) => {
    setFormData(prev => ({ ...prev, date }))
    if (validationErrors.date) {
      setValidationErrors(prev => ({ ...prev, date: "" }))
    }
  }

  // Format phone number as user types
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/[^\d]/g, '')
    const phoneNumberLength = phoneNumber.length
    if (phoneNumberLength < 4) return phoneNumber
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
  }

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value)
    setFormData(prev => ({ ...prev, phone: formattedPhone }))
    if (validationErrors.phone) {
      setValidationErrors(prev => ({ ...prev, phone: "" }))
    }
  }

  // Check if date is available (exclude Sundays and past dates)
  const isDateAvailable = (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date >= today && date.getDay() !== 0 // Exclude Sundays
  }

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!validateForm()) {
      setError("Please correct the errors above")
      return
    }

    setLoading(true)
    const confNumber = generateConfirmationNumber()
    setConfirmationNumber(confNumber)

    try {
      if (DEMO_MODE) {
        // Simulate email sending in demo mode
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log("Demo mode - Business notification data:", {
          ...formData,
          confirmation_number: confNumber,
          formatted_date: formData.date.toLocaleDateString(),
          formatted_time: timeSlots.find(slot => slot === formData.time),
          email_type: "business_notification"
        })
        console.log("Demo mode - Customer confirmation data:", {
          to_email: formData.email,
          from_name: formData.name,
          confirmation_number: confNumber,
          service: serviceOptions.find(opt => opt.value === formData.service)?.label,
          date: formData.date.toLocaleDateString(),
          time: formData.time,
          email_type: "customer_confirmation"
        })
      } else {
        // Send emails using EmailJS - both business notification and customer confirmation
        const baseTemplateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          vehicle: formData.vehicle,
          service: serviceOptions.find(opt => opt.value === formData.service)?.label || formData.service,
          date: formData.date.toLocaleDateString(),
          time: formData.time,
          message: formData.message || "No additional message",
          confirmation_number: confNumber
        }

        // Business notification template params (includes consent info)
        const businessTemplateParams = {
          ...baseTemplateParams,
          privacy_consent: formData.privacyConsent ? "Yes" : "No",
          marketing_consent: formData.marketingConsent ? "Yes" : "No"
        }

        // Customer confirmation template params (clean for customer)
        const customerTemplateParams = {
          ...baseTemplateParams,
          to_email: formData.email // Ensure it goes to customer
        }

        // Send business notification email
        const businessResult = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.BUSINESS_TEMPLATE_ID,
          businessTemplateParams
        )

        if (businessResult.status !== 200) {
          throw new Error("Failed to send business notification")
        }

        // Send customer confirmation email
        const customerResult = await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.CUSTOMER_TEMPLATE_ID,
          customerTemplateParams
        )

        if (customerResult.status !== 200) {
          throw new Error("Failed to send customer confirmation")
        }
      }

      setSuccess(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSuccess(false)
        setConfirmationNumber("")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: null,
          time: "",
          message: "",
          vehicle: "",
          privacyConsent: false,
          marketingConsent: false
        })
      }, 5000)

    } catch (err) {
      console.error("Form submission error:", err)
      setError("Failed to submit appointment. Please try again or call us directly at (972) 271-0009.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 hover:border-red-600 transition-all duration-300 ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black text-white">Schedule Your Service</h3>
            <p className="text-red-100 mt-1 font-medium">Book your appointment in just a few clicks</p>
          </div>
          <div className="bg-white/20 p-3 rounded-full">
            <Calendar className="h-6 w-6 text-white" />
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
            <p className="text-gray-600 mb-4">
              We'll contact you shortly to confirm your appointment details.
            </p>
            <div className="p-4 bg-red-50 rounded-lg border-2 border-red-200">
              <p className="font-medium text-gray-900">
                Confirmation #: <span className="text-red-600 font-bold text-lg">{confirmationNumber}</span>
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Please save this number for your records
              </p>
            </div>
            {DEMO_MODE && (
              <div className="mt-4 p-3 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 font-medium">
                  <strong>Demo Mode:</strong> This is a demonstration. No actual emails were sent to business or customer.
                </p>
              </div>
            )}
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            )}

            {/* Name Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center">
                <User className="w-4 h-4 mr-2 text-red-600" />
                Full Name *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium ${
                  validationErrors.name 
                    ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-gray-400'
                }`}
                required
              />
              {validationErrors.name && (
                <p className="text-red-600 text-sm font-medium flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {validationErrors.name}
                </p>
              )}
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-red-600" />
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium ${
                    validationErrors.email 
                      ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-gray-400'
                  }`}
                  required
                />
                {validationErrors.email && (
                  <p className="text-red-600 text-sm font-medium flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {validationErrors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-red-600" />
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="(123) 456-7890"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium ${
                    validationErrors.phone 
                      ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-gray-400'
                  }`}
                  maxLength="14"
                  required
                />
                {validationErrors.phone && (
                  <p className="text-red-600 text-sm font-medium flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {validationErrors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Vehicle Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center">
                <Car className="w-4 h-4 mr-2 text-red-600" />
                Vehicle Information *
              </label>
              <Input
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                placeholder="Year, Make, Model (e.g., 2019 Toyota Camry)"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium ${
                  validationErrors.vehicle 
                    ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-gray-400'
                }`}
                required
              />
              {validationErrors.vehicle && (
                <p className="text-red-600 text-sm font-medium flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {validationErrors.vehicle}
                </p>
              )}
            </div>

            {/* Service Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center">
                <Tool className="w-4 h-4 mr-2 text-red-600" />
                Service Needed *
              </label>
              <Select 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium bg-white ${
                  validationErrors.service 
                    ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-gray-400'
                }`}
                required
              >
                {serviceOptions.map(option => (
                  <option key={option.value} value={option.value} className="font-medium">
                    {option.label}
                  </option>
                ))}
              </Select>
              {validationErrors.service && (
                <p className="text-red-600 text-sm font-medium flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {validationErrors.service}
                </p>
              )}
            </div>

            {/* Date and Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-red-600" />
                  Preferred Date *
                </label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  filterDate={isDateAvailable}
                  minDate={new Date()}
                  maxDate={new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)} // 60 days from now
                  dateFormat="MMMM d, yyyy"
                  placeholderText="Select a date"
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium ${
                    validationErrors.date 
                      ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-gray-400'
                  }`}
                  required
                />
                {validationErrors.date && (
                  <p className="text-red-600 text-sm font-medium flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {validationErrors.date}
                  </p>
                )}
                <p className="text-xs text-gray-500 font-medium">
                  * We're closed on Sundays
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-red-600" />
                  Preferred Time *
                </label>
                <Select 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium bg-white ${
                    validationErrors.time 
                      ? 'border-red-500 bg-red-50 focus:ring-2 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-gray-400'
                  }`}
                  required
                >
                  <option value="" className="font-medium">Select a time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time} className="font-medium">
                      {new Date(`2000-01-01T${time}`).toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true
                      })}
                    </option>
                  ))}
                </Select>
                {validationErrors.time && (
                  <p className="text-red-600 text-sm font-medium flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {validationErrors.time}
                  </p>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2 text-red-600" />
                Additional Information
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Please provide any additional details about your service needs"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-gray-400 transition-all duration-200 font-medium h-24"
              />
            </div>

            {/* Privacy and Consent Section */}
            <div className="border-t-2 border-gray-200 pt-6 space-y-4">
              <h4 className="font-bold text-gray-900 flex items-center text-lg">
                <Shield className="w-5 h-5 mr-2 text-red-600" />
                Privacy & Consent
              </h4>
              
              <div className="space-y-4">
                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="mt-1 mr-3 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-600 focus:ring-2"
                    required
                  />
                  <span className="text-sm text-gray-700 font-medium">
                    I agree to the collection and use of my personal information for appointment scheduling purposes. *
                  </span>
                </label>
                {validationErrors.privacyConsent && (
                  <p className="text-red-600 text-sm font-medium flex items-center ml-8">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {validationErrors.privacyConsent}
                  </p>
                )}

                <label className="flex items-start cursor-pointer">
                  <input
                    type="checkbox"
                    name="marketingConsent"
                    checked={formData.marketingConsent}
                    onChange={handleChange}
                    className="mt-1 mr-3 w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-600 focus:ring-2"
                  />
                  <span className="text-sm text-gray-700 font-medium">
                    I would like to receive promotional offers and service reminders via email (optional)
                  </span>
                </label>
              </div>
            </div>

            {DEMO_MODE && (
              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  <strong>Demo Mode:</strong> This form is in demonstration mode. To enable real email sending 
                  (business notification + customer confirmation), configure EmailJS credentials in the config file.
                </p>
              </div>
            )}
          </form>
        )}
      </div>

      {!success && (
        <div className="bg-gray-50 p-6 border-t-2 border-gray-200">
          <button 
            type="submit" 
            className="w-full bg-red-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:bg-red-700 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-lg text-lg" 
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
          
          <p className="text-xs text-gray-600 text-center mt-3 font-medium">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </div>
      )}
    </div>
  )
}

export default AppointmentForm