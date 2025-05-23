"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users, Heart, PenToolIcon as Tool, MapPin, Wrench, CheckCircle2 } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/Button"

// Import team member images
import OwnerImage from "../assets/images/GoogleIcon.png" // This is a placeholder, replace with actual image
import TechnicianImage from "../assets/images/GoogleIcon.png" // This is a placeholder, replace with actual image

const AboutPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  // Team members data
  const teamMembers = [
    {
      name: "Kamran Ahmed",
      role: "Owner & Master Technician",
      image: OwnerImage,
      description:
        "With over 20 years of experience in the automotive industry, Kamran founded A-1 Autos with a vision to provide honest, reliable service to the Garland community. ASE Certified Master Technician with expertise in both domestic and foreign vehicles.",
      certifications: ["ASE Master Technician", "Toyota Factory Trained", "Hybrid Vehicle Specialist"],
    },
    {
      name: "David Rodriguez",
      role: "Lead Technician",
      image: TechnicianImage,
      description:
        "David brings 15 years of experience to our team. His attention to detail and commitment to quality have earned him a reputation for solving even the most challenging automotive issues. Specializes in electrical diagnostics and engine performance.",
      certifications: ["ASE Certified", "Electrical Systems Specialist", "Engine Performance Expert"],
    },
    // Add more team members as needed
  ]

  // Core values data
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We believe in honest assessments, transparent pricing, and doing what's right for our customers.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every repair, using quality parts and meticulous workmanship.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our customers are our priority. We listen to your concerns and tailor our service to your needs.",
    },
    {
      icon: Heart,
      title: "Community",
      description: "We're proud to be part of the Garland community and committed to giving back.",
    },
  ]

  // Certifications and affiliations
  const certifications = [
    "ASE Certified",
    "AAA Approved Auto Repair",
    "NAPA AutoCare Center",
    "Better Business Bureau Accredited",
    "ACDelco Professional Service Center",
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/5 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">About A-1 Autos</h1>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Your trusted partner in automotive care since 2005. We combine technical expertise with a commitment to
              customer satisfaction to keep your vehicle running at its best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Our Story</h2>
              <div className="w-20 h-1 bg-primary mb-6 rounded-full"></div>
              <div className="space-y-4 text-gray-700">
                <p>
                  A-1 Autos was founded in 2005 by Kamran Ahmed, a master technician with a passion for cars and a
                  vision for a different kind of auto repair experience. After years of working in dealerships and
                  repair shops, Kamran saw an opportunity to create a business built on honesty, technical excellence,
                  and customer service.
                </p>
                <p>
                  Starting with a small garage and just two employees, A-1 Autos quickly earned a reputation for quality
                  work and fair pricing. Word spread throughout the Garland community, and our client base grew steadily
                  through referrals from satisfied customers.
                </p>
                <p>
                  In 2012, we expanded to our current location on Broadway Boulevard, allowing us to serve more
                  customers and offer a wider range of services. Today, our team includes ASE-certified technicians with
                  expertise in all makes and models, from domestic to foreign vehicles.
                </p>
                <p>
                  While we&#39;ve grown over the years, our core values remain the same. We treat every vehicle as if it
                  were our own, and every customer as part of the A-1 Autos family.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-white p-2 shadow-xl rounded-lg rotate-3 transform hover:rotate-0 transition-transform duration-300 border-2 border-primary/20">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="A-1 Autos Shop"
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary-dark text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">Serving Garland since 2005</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-display">Our Core Values</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do at A-1 Autos, from how we treat our customers to how we approach
              each repair.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreValues.map((value, ) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-700 hover:border-primary text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-display">Meet Our Team</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our experienced team of certified technicians is dedicated to providing exceptional service and quality
              repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-primary transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0 md:w-1/3">
                    <img
                      className="h-full w-full object-cover md:h-full md:w-full"
                      src={member.image || "/placeholder.svg?height=300&width=300"}
                      alt={member.name}
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="uppercase tracking-wide text-sm text-primary font-semibold">{member.role}</div>
                    <h3 className="mt-1 text-2xl font-semibold leading-tight text-white">{member.name}</h3>
                    <p className="mt-4 text-gray-300">{member.description}</p>
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-200">Certifications:</h4>
                      <ul className="mt-2 space-y-1">
                        {member.certifications.map((cert, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-300">
                            <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 font-display">Our Facility</h2>
              <div className="w-20 h-1 bg-primary mb-6 rounded-full"></div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our modern 5,000 square foot facility is equipped with the latest diagnostic equipment and tools to
                  handle all your automotive needs. We&#39;ve invested in technology that allows us to accurately diagnose
                  and repair today&#39;s complex vehicles.
                </p>
                <p>
                  Our shop features 6 service bays, a comfortable customer waiting area with complimentary Wi-Fi and
                  refreshments, and a dedicated space for our service advisors to discuss your vehicle&#39;s needs in
                  detail.
                </p>
                <p>
                  We maintain a clean, organized environment that reflects our commitment to professionalism and
                  attention to detail. Our facility is regularly updated to accommodate new vehicle technologies and
                  service requirements.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-primary/20 shadow-md">
                  <div className="flex items-center mb-2">
                    <Tool className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold text-gray-900">Advanced Diagnostics</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    State-of-the-art diagnostic equipment for accurate problem identification
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-primary/20 shadow-md">
                  <div className="flex items-center mb-2">
                    <Wrench className="h-5 w-5 text-primary mr-2" />
                    <h3 className="font-semibold text-gray-900">Specialized Tools</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Manufacturer-specific tools for both domestic and foreign vehicles
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2 grid grid-cols-2 gap-4"
            >
              <div className="col-span-2">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="A-1 Autos Facility"
                  className="rounded-lg shadow-md w-full h-auto border-2 border-primary/20"
                />
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Service Bay"
                  className="rounded-lg shadow-md w-full h-auto border-2 border-primary/20"
                />
              </div>
              <div>
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Diagnostic Equipment"
                  className="rounded-lg shadow-md w-full h-auto border-2 border-primary/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Our Certifications</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest standards through ongoing training and industry certifications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white px-6 py-4 rounded-lg shadow-md border-2 border-gray-300 hover:border-primary flex items-center hover:shadow-lg transition-all duration-300"
              >
                <Award className="h-6 w-6 text-primary mr-3" />
                <span className="text-gray-800 font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Community Event"
                className="rounded-lg shadow-xl w-full h-auto border-2 border-primary/30"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white font-display">Community Involvement</h2>
              <div className="w-20 h-1 bg-primary mb-6 rounded-full"></div>
              <div className="space-y-4 text-gray-300">
                <p>
                  At A-1 Autos, we believe in giving back to the community that has supported us. We&#39;re proud to be
                  active participants in local initiatives and organizations that make Garland a better place to live
                  and work.
                </p>
                <p>
                  Our team regularly participates in local charity events, sponsors youth sports teams, and provides
                  educational workshops on basic vehicle maintenance for community members.
                </p>
                <p>
                  We also partner with local schools to offer internship opportunities for students interested in
                  automotive careers, helping to develop the next generation of skilled technicians.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-gray-200 mb-3">Our Community Partners:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    <span>Garland Food Bank</span>
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    <span>Garland Youth Sports Association</span>
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    <span>Garland Technical Institute</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Visit Our Shop</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located in Garland, TX, we&#39;re here to serve all your automotive needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-300 hover:border-primary transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-700">3901 Broadway Blvd, Garland, TX 75043</p>
                  <p className="text-gray-600 mt-2">
                    Located at the intersection of Broadway Boulevard and Centerville Road, with easy access from
                    Highway 635.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Hours of Operation</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">8:30 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">8:30 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.google.com/maps/place/3901+Broadway+Blvd,+Garland,+TX+75043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-auto-primary flex items-center justify-center"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Get Directions
                </a>
                <Link to="/contact" className="btn-auto-outline flex items-center justify-center">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-96 rounded-lg overflow-hidden shadow-lg border-2 border-gray-300"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.2756247167653!2d-96.6394!3d32.8912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea7494f4c8af7%3A0x8f5d7c0e56f5e0a8!2s3901%20Broadway%20Blvd%2C%20Garland%2C%20TX%2075043!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="A-1 Autos Location"
              ></iframe>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-6 font-display">Ready to Experience the A-1 Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule your appointment today and see why our customers trust us with their vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/booking">
                <Button variant="default" size="lg">
                  Schedule Service
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="default"
                  size="lg"
                  className="border-white text-white hover:text-primary"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
