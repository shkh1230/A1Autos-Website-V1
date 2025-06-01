"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    MessageSquare,
    User,
    CheckCircle2,
    ArrowRight
} from "lucide-react"
import { Link } from "react-router-dom"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
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

        // Simulate form submission
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
                    subject: "",
                    message: ""
                })
            }, 3000)
        }, 1500)
    }

    const contactMethods = [
        {
            icon: Phone,
            title: "Call Us",
            description: "(972) 271-0009",
            action: "tel:+19722710009",
            actionText: "Make a Call"
        },
        {
            icon: Mail,
            title: "Email Us",
            description: "a1autosgarland@gmail.com",
            action: "mailto:a1autosgarland@gmail.com",
            actionText: "Send Email"
        },
        {
            icon: MapPin,
            title: "Visit Us",
            description: "3901 Broadway Blvd, Garland, TX 75043",
            action: "https://maps.google.com/?q=3901+Broadway+Blvd,+Garland,+TX+75043",
            actionText: "Get Directions"
        },
        {
            icon: Clock,
            title: "Business Hours",
            description: "Mon-Sat: 8:30AM-6PM",
            secondaryDesc: "Sunday: Closed",
            action: "/booking",
            actionText: "Book Appointment"
        }
    ]

    const inputStyles = "w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-24 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Contact Us</h1>
                        <p className="text-xl text-gray-100 md:text-2xl">
                            We&#39;re here to help with all your automotive needs. Get in touch with our expert team.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-16">
                <div className="container mx-auto px-4 mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-lg overflow-hidden transition-all duration-300 border-2 border-gray-300 hover:border-primary hover:shadow-lg h-full flex flex-col"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex flex-row items-center justify-between p-4 pb-2 bg-gray-100 border-b border-gray-300">
                                        <h3 className="text-xl font-bold">{method.title}</h3>
                                        {method.icon && (
                                            <div className="relative bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                                <method.icon className="h-6 w-6 text-primary" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6 flex-grow">
                                        <p className="text-gray-600 font-medium mb-1">{method.description}</p>
                                        {method.secondaryDesc && (
                                            <p className="text-gray-500 mb-4">{method.secondaryDesc}</p>
                                        )}

                                        <div className="mt-4 pt-2">
                                            <a
                                                href={method.action}
                                                target={method.action.startsWith("http") ? "_blank" : "_self"}
                                                rel="noopener noreferrer"
                                                className="text-primary font-medium flex items-center hover:text-primary-dark transition-colors duration-300 hover:translate-x-1"
                                            >
                                                {method.actionText} <ArrowRight className="ml-1 h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form and Map */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg shadow-xl border-2 border-gray-100 overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex items-center mb-6">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary">
                                        <MessageSquare className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-2xl font-bold text-gray-900">Send Us a Message</h3>
                                        <p className="text-gray-600">We&#39;ll get back to you as soon as possible</p>
                                    </div>
                                </div>

                                {success ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                                            <CheckCircle2 className="h-10 w-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                                        <p className="text-gray-600 mb-6">
                                            Thank you for reaching out. We&#39;ll be in touch with you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center">
                                                    <User className="w-4 h-4 mr-2 text-primary" />
                                                    Full Name*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className={inputStyles}
                                                    required
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center">
                                                    <Mail className="w-4 h-4 mr-2 text-primary" />
                                                    Email Address*
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your@email.com"
                                                    className={inputStyles}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center">
                                                    <Phone className="w-4 h-4 mr-2 text-primary" />
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="(123) 456-7890"
                                                    className={inputStyles}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium flex items-center">
                                                    <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                                                    Subject*
                                                </label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    placeholder="How can we help you?"
                                                    className={inputStyles}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-medium flex items-center">
                                                <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                                                Message*
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Please provide details about your inquiry..."
                                                className={`${inputStyles} h-32`}
                                                required
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-primary-dark text-white font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-primary-dark shadow-md hover:shadow-lg hover:bg-red-700 hover:-translate-y-1 flex items-center justify-center"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <svg
                                                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <circle
                                                            className="opacity-25"
                                                            cx="12"
                                                            cy="12"
                                                            r="10"
                                                            stroke="currentColor"
                                                            strokeWidth="4"
                                                        ></circle>
                                                        <path
                                                            className="opacity-75"
                                                            fill="currentColor"
                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                        ></path>
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="mr-2 h-5 w-5" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white rounded-lg shadow-xl border-2 border-gray-100 overflow-hidden h-full">
                                <div className="p-8">
                                    <div className="flex items-center mb-6">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
                                            <p className="text-gray-600">Centrally located in Garland, TX</p>
                                        </div>
                                    </div>

                                    <div className="h-80 rounded-lg overflow-hidden mb-6">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2756247167653!2d-96.6394!3d32.8912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea7494f4c8af7%3A0x8f5d7c0e56f5e0a8!2s3901%20Broadway%20Blvd%2C%20Garland%2C%20TX%2075043!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            title="A-1 Autos Location"
                                        ></iframe>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-bold text-gray-900 mb-2">Directions</h4>
                                        <p className="text-gray-600 mb-4">
                                            Located at the intersection of Broadway Boulevard and Centerville Road, with easy access from Highway 635.
                                        </p>
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a
                                                href="https://www.google.com/maps/dir//3901+Broadway+Blvd,+Garland,+TX+75043"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center bg-primary-dark text-white px-4 py-2 rounded-md font-bold hover:bg-red-700 transition-colors duration-300 "
                                            >
                                                <MapPin className="h-4 w-4 mr-2" />
                                                Get Directions
                                            </a>
                                            <Link
                                                to="/booking"
                                                className="inline-flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-md font-bold hover:bg-gray-700 transition-colors duration-300"
                                            >
                                                <Clock className="h-4 w-4 mr-2" />
                                                Book Appointment
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Frequently Asked Questions</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Find answers to the most common questions about our services
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                {
                                    question: "Do I need an appointment for service?",
                                    answer: "While we do accept walk-ins, we recommend scheduling an appointment to ensure prompt service. You can easily book online or give us a call."
                                },
                                {
                                    question: "How often should I have my oil changed?",
                                    answer: "For conventional oil, we recommend every 3,000-5,000 miles. For synthetic oil, every 7,500-10,000 miles. However, this can vary based on your vehicle and driving conditions."
                                },
                                {
                                    question: "Do you offer free estimates?",
                                    answer: "Yes, we provide free estimates for all services. Our technicians will thoroughly inspect your vehicle and provide a detailed estimate before any work begins."
                                },
                                {
                                    question: "Do you offer any warranties on repairs?",
                                    answer: "Yes, we offer a 12-month/12,000-mile warranty on parts and labor for most repairs. Specific warranty information will be provided with your service."
                                },
                                {
                                    question: "Do you work on all vehicle makes and models?",
                                    answer: "Yes, our certified technicians are experienced with both domestic and foreign vehicles of all makes and models."
                                }
                            ].map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                                    <p className="text-gray-600">{faq.answer}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-auto-gradient-1 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 font-display">Ready to Get Started?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Schedule your appointment today and experience the A-1 Autos difference.
                        </p>
                        <Link to="/booking">
                            <button className="bg-red text-primary border-2 border-white font-bold py-4 px-8 text-xl rounded-md transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 flex items-center justify-center mx-auto">
                                Schedule Service
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Contact