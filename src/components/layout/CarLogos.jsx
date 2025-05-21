"use client"

import { motion } from "framer-motion"
// Import all logo images
import acuraLogo from "../../assets/images/car_logos/acura.png";
import audiLogo from "../../assets/images/car_logos/audi.png";
import maybachLogo from "../../assets/images/car_logos/maybach.png";
import bmwLogo from "../../assets/images/car_logos/bmw.png";
import bmwMLogo from "../../assets/images/car_logos/bmw-m.png";
import chevroletLogo from "../../assets/images/car_logos/chevrolet.png";
import fordLogo from "../../assets/images/car_logos/ford.png";
import gmcLogo from "../../assets/images/car_logos/gmc.png";
import hondaLogo from "../../assets/images/car_logos/honda.png";
import hyundaiLogo from "../../assets/images/car_logos/hyundai.png";
import infinitiLogo from "../../assets/images/car_logos/infiniti.png";
import jeepLogo from "../../assets/images/car_logos/jeep.png";
import kiaLogo from "../../assets/images/car_logos/kia.png";
import lexusLogo from "../../assets/images/car_logos/lexus.png";
import mazdaLogo from "../../assets/images/car_logos/mazda.png";
import mercedesBenzLogo from "../../assets/images/car_logos/mercedes-benz.png";
import mercedesAMGLogo from "../../assets/images/car_logos/mercedes-amg.png";
import nissanLogo from "../../assets/images/car_logos/nissan.png";
import ramLogo from "../../assets/images/car_logos/ram.png";
import subaruLogo from "../../assets/images/car_logos/subaru.png";
import toyotaLogo from "../../assets/images/car_logos/toyota.png";
import volkswagenLogo from "../../assets/images/car_logos/volkswagen.png";
import volvoLogo from "../../assets/images/car_logos/volvo.png";

const CarLogos = () => {
  // Car manufacturers we service - using actual logo images
    const carBrands = [
        { name: "Acura", logo: acuraLogo },
        { name: "Audi", logo: audiLogo },
        { name: "Maybach", logo: maybachLogo },
        { name: "BMW", logo: bmwLogo },
        { name: "BMW-M", logo: bmwMLogo },
        { name: "Chevrolet", logo: chevroletLogo },
        { name: "Ford", logo: fordLogo },
        { name: "GMC", logo: gmcLogo },
        { name: "Honda", logo: hondaLogo },
        { name: "Hyundai", logo: hyundaiLogo },
        { name: "Infiniti", logo: infinitiLogo },
        { name: "Jeep", logo: jeepLogo },
        { name: "Kia", logo: kiaLogo },
        { name: "Lexus", logo: lexusLogo },
        { name: "Mazda", logo: mazdaLogo },
        { name: "Mercedes-Benz", logo: mercedesBenzLogo },
        { name: "Mercedes-AMG", logo: mercedesAMGLogo },
        { name: "Nissan", logo: nissanLogo },
        { name: "Ram", logo: ramLogo },
        { name: "Subaru", logo: subaruLogo },
        { name: "Toyota", logo: toyotaLogo },
        { name: "Volkswagen", logo: volkswagenLogo },
        { name: "Volvo", logo: volvoLogo },
    ];

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