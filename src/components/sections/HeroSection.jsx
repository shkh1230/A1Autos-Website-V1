"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import { Wrench, PenToolIcon as Tool, CheckCircle } from "lucide-react"

const HeroSection = ({ backgroundImage, backgroundVideo, overlay = true }) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        if (backgroundVideo) {
            // For video, we'll set loaded to true immediately and let the video handle its own loading
            setLoaded(true)
        } else if (backgroundImage) {
            const img = new Image()
            img.src = backgroundImage
            img.onload = () => setLoaded(true)
        }
    }, [backgroundImage, backgroundVideo])

    return (
        <div className="relative bg-secondary text-white py-20 md:py-32 lg:py-48 z-0 overflow-hidden">
            {/* Background video or image */}
            {backgroundVideo ? (
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            loaded ? "opacity-100" : "opacity-0"
                        }`}
                        onLoadedData={() => setLoaded(true)}
                    >
                        <source src={backgroundVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {overlay && <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>}
                </div>
            ) : backgroundImage ? (
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
                        loaded ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    {overlay && <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/70"></div>}
                    {/* Dark overlay - changed to neutral dark */}
                    <div className="absolute inset-0 bg-gray-900/60"></div>
                </div>
            ) : null}

            {/* Dark overlay - for better text readability */}
            <div className="absolute inset-0 bg-gray-900/60"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
                        <TypeAnimation
                            sequence={[
                                "Expert Auto Repair You Can Trust",
                                1000,
                                "Professional Car Maintenance",
                                1000,
                                "Quality Service Guaranteed",
                                1000,
                                "Your Trusted Auto Care Partner",
                                1000,
                            ]}
                            wrapper="span"
                            className="w-full leading-tight"
                            speed={50}
                            repeat={Infinity}
                        />
                    </div>
                    <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-200 leading-relaxed px-4">
                        Professional auto repair and maintenance services to keep your vehicle running at its best.
                    </p>

                    {/* Feature points */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-10 px-4">
                        <div className="flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent mr-2 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-200">ASE Certified Technicians</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent mr-2 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-200">Quality Parts & Service</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-accent mr-2 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-200">Satisfaction Guaranteed</span>
                        </div>
                    </div>

                    {/* CTA Buttons - Optimized for Mobile */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 max-w-lg mx-auto">
                        <Link to="/booking" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-red-600 text-white border-2 border-red-600 font-bold py-3 md:py-4 px-6 md:px-8 text-lg md:text-xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-red-700 hover:border-red-700 hover:-translate-y-1 min-h-[3rem] md:min-h-[3.5rem]">
                                Schedule Service
                            </button>
                        </Link>
                        <Link to="/services" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-red-600 text-white border-2 border-red-600 font-bold py-3 md:py-4 px-6 md:px-8 text-lg md:text-xl rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-red-700 hover:border-red-700 hover:-translate-y-1 min-h-[3rem] md:min-h-[3.5rem]">
                                View Services
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default HeroSection