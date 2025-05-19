"use client"

import { motion } from "framer-motion"

const CarLogos = () => {
  // Car manufacturers we service - using actual logo images
  const carBrands = [
    { name: "Acura", logo: "/src/assets/images/car_logos/acura.png" },
    { name: "Audi", logo: "/src/assets/images/car_logos/audi.png" },
    { name: "Maybach", logo: "/src/assets/images/car_logos/maybach.png" },
    { name: "BMW", logo: "/src/assets/images/car_logos/bmw.png" },
    { name: "BMW-M", logo: "/src/assets/images/car_logos/bmw-m.png" },
    { name: "Chevrolet", logo: "/src/assets/images/car_logos/chevrolet.png" },
    { name: "Ford", logo: "/src/assets/images/car_logos/ford.png" },
    { name: "GMC", logo: "/src/assets/images/car_logos/gmc.png" },
    { name: "Honda", logo: "/src/assets/images/car_logos/honda.png" },
    { name: "Hyundai", logo: "/src/assets/images/car_logos/hyundai.png" },
    { name: "Infiniti", logo: "/src/assets/images/car_logos/infiniti.png" },
    { name: "Jeep", logo: "/src/assets/images/car_logos/jeep.png" },
    { name: "Kia", logo: "/src/assets/images/car_logos/kia.png" },
    { name: "Lexus", logo: "/src/assets/images/car_logos/lexus.png" },
    { name: "Mazda", logo: "/src/assets/images/car_logos/mazda.png" },
    { name: "Mercedes-Benz", logo: "/src/assets/images/car_logos/mercedes-benz.png" },
    { name: "Mercedes-AMG", logo: "/src/assets/images/car_logos/mercedes-amg.png" },
    { name: "Nissan", logo: "/src/assets/images/car_logos/nissan.png" },
    { name: "Ram", logo: "/src/assets/images/car_logos/ram.png" },
    { name: "Subaru", logo: "/src/assets/images/car_logos/subaru.png" },
    { name: "Toyota", logo: "/src/assets/images/car_logos/toyota.png" },
    { name: "Volkswagen", logo: "/src/assets/images/car_logos/volkswagen.png" },
    { name: "Volvo", logo: "/src/assets/images/car_logos/volvo.png" },
  ]

  // Duplicate the array to create seamless infinite loop
    const duplicatedBrands = [...carBrands, ...carBrands]

    return (
        <div className="bg-white py-3 border-b border-gray-200 overflow-hidden relative">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`
            }} />

            {/* Top thin accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

            {/* Main sliding content */}
            <div className="relative">
                <motion.div
                    className="flex items-center gap-12"
                    animate={{
                        x: [0, -1200],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <div
                            key={`${brand.name}-${index}`}
                            className="flex-shrink-0 flex items-center justify-center h-8 px-4 group"
                        >
                            <img
                                src={brand.logo}
                                alt={`${brand.name} logo`}
                                className="h-6 w-auto object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                                style={{ maxWidth: "80px" }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fade edge effects */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10" />

            {/* Bottom thin accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
    )
}

export default CarLogos