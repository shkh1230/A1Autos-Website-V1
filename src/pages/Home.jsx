"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import HeroSection from "../components/sections/HeroSection"
import ServicesSection from "../components/sections/ServicesSection"
import FeaturesSection from "../components/sections/FeaturesSection"
import TestimonialsSection from "../components/sections/TestimonialsSection"
import CTASection from "../components/sections/CTASection"
import ServiceFinder from "../components/common/ServiceFinder"
import AutoShopBG from "/src/assets/images/auto-shop-bg.jpeg"

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection backgroundImage={AutoShopBG} />

      {/* Service Finder */}
      <div className="bg-gray-200 py-10 shadow-md relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-display">Find the Service You Need</h2>
            <p className="text-gray-600 mt-2">Search for any automotive service</p>
          </div>
          <ServiceFinder />
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}

export default HomePage
