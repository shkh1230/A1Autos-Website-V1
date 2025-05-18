"use client"

import { useEffect, useState, useRef } from "react"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import GoogleAvatar from "../../assets/images/avatar_circle_blue_512dp.png"
import GoogleIcon from "../../assets/images/GoogleIcon.png"
import Verified from "../../assets/images/checkmark.png"
import GoogleLogo from "../../assets/images/GoogleLogo.png"
import Azmat from "../../assets/images/Azmat.png"
import Lawrence from "../../assets/images/Lawrence.png"
import Moody from "../../assets/images/Moody.png"
import Red from "../../assets/images/Red.png"
import Penoral from "../../assets/images/Penoral.png"
import R from "../../assets/images/R.png"
import Pervaiz from "../../assets/images/Pervaiz.png"

const TestimonialsSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef(null)
  const intervalRef = useRef(null)

  const reviews = [
    {
      name: "Lawrence Coleman",
      date: "12 weeks ago",
      formattedDate: "Aug 14, 2024",
      rating: 5,
      content:
        "Thanks for the hard work at A-1 auto David don't give up on what needs to get done and does a great job with a great attitude. Thanks A-1 auto I highly recommend.",
      image: Lawrence,
      verified: true,
    },
    {
      name: "Moody Show",
      date: "14 weeks ago",
      formattedDate: "Aug 1, 2024",
      rating: 5,
      content: "Good owner.",
      image: Moody,
      verified: true,
    },
    {
      name: "Azmat Kahlun",
      date: "17 weeks ago",
      formattedDate: "July 10, 2024",
      rating: 5,
      content:
        "A very nice repair shop fully equipped, trained mechanical tires, and electrical AC all types of machines to work...",
      image: Azmat,
      verified: true,
    },
    {
      name: "Red",
      date: "04/05/2024",
      rating: 5,
      content:
        "Always very helpful in explaining the problem and the process and makes sure everything is taken care of.",
      image: Red,
      verified: true,
    },
    {
      name: "PENORAL Stinnett",
      date: "Mar 20, 2021",
      formattedDate: "Mar 20, 2021",
      rating: 5,
      content: "Amazing service! Always reliable and trustworthy.",
      image: Penoral,
      verified: true,
    },
    {
      name: "Hamza Syed",
      date: "July 24, 2024",
      rating: 5,
      content: "Great place, wonderful services.",
      image: GoogleAvatar,
      verified: true,
    },
    {
      name: "Roomana Bano",
      date: "December 25, 2023",
      rating: 5,
      content: "Honest person Kamran. I'm satisfied.",
      image: R,
      verified: true,
    },
    {
      name: "Timothy Smith",
      date: "Feb 20, 2024",
      rating: 5,
      content:
        "Kamran does a great job with my cars. I had a car that broke down at my home and he sent a tow and fixed it at a reasonable price! I got off work and picked it up, all in one day. Thanks A-1 auto!",
      image: GoogleAvatar,
      verified: true,
    },
    {
      name: "Pervaiz Manzoor",
      date: "May 9, 2024",
      rating: 5,
      content: "Awesome place. Friendly and experienced. Very economical.",
      image: Pervaiz,
      verified: true,
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovered && scrollRef.current) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length)
        }
      }, 4000)
    }

    startAutoScroll()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isHovered, reviews.length])

  // Scroll to active testimonial
  useEffect(() => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current
      const cardWidth = scrollContainer.querySelector("div").offsetWidth + 24 // card width + gap
      scrollContainer.scrollTo({
        left: activeIndex * cardWidth,
        behavior: "smooth",
      })
    }
  }, [activeIndex])

  return (
    <div className="bg-gray-50 py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">WHAT OUR CUSTOMERS SAY</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={GoogleLogo || "/placeholder.svg"} alt="Google Reviews" className="h-10" />
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg font-semibold mt-2">4.5 out of 5 based on 100+ reviews</p>
            </div>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex-shrink-0 w-full md:w-96 snap-center"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col border-2 border-gray-300 hover:border-primary transition-colors duration-300 hover:bg-red-50">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-primary/10"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold">{review.name}</h3>
                        {review.verified && (
                          <img src={Verified || "/placeholder.svg"} alt="Verified Google Review" className="w-5 h-5" />
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">{review.formattedDate || review.date}</p>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Quote className="w-8 h-8 text-primary/20 mb-2" />
                    <p className="text-gray-700">{review.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? "bg-primary" : "bg-gray-300 hover:bg-primary/50"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="https://g.co/kgs/bJvJnuW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 shadow-md border-2 border-gray-300 hover:border-primary"
          >
            <img src={GoogleIcon || "/placeholder.svg"} alt="Google icon" className="w-6 h-6" />
            View All Google Reviews
          </a>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSection