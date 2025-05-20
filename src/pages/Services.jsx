// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Wrench,
    Car,
    Clipboard,
    ChevronRight,
    ArrowRight,
    Shield,
    Clock,
    Award,
    Filter,
    Search
} from 'lucide-react';

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const serviceCategories = [
        {
            id: 'auto-care',
            title: 'Auto Care',
            icon: Wrench,
            description: 'Complete vehicle care and repair services',
            color: 'bg-red-600',
            services: [
                { name: 'Steering and Suspension', slug: 'steering-and-suspension', description: 'Professional steering and suspension repair services' },
                { name: 'Tires and Alignment', slug: 'tires-and-alignment', description: 'Expert tire services and precision wheel alignment' },
                { name: 'Brake Pads and Rotors', slug: 'brake-pads-and-rotors', description: 'Complete brake system maintenance and repair' },
                { name: 'Engines and Transmissions', slug: 'engines-and-transmissions', description: 'Engine and transmission diagnostics and repair' },
                { name: 'Fleet Services', slug: 'fleet-services', description: 'Comprehensive fleet maintenance solutions' },
                { name: 'Air Filters', slug: 'air-filters', description: 'Engine and cabin air filter replacement' },
                { name: 'Drive Train Repairs', slug: 'drive-train-repairs', description: 'Complete drive train system service' },
                { name: 'Auto Glass', slug: 'auto-glass', description: 'Professional auto glass repair and replacement' },
                { name: 'Hail Damage Repairs', slug: 'hail-damage-repairs', description: 'Expert hail damage restoration' },
                { name: 'Extended Warranties', slug: 'extended-warranties', description: 'Vehicle protection plans and warranties' },
                { name: 'Exhaust Repairs', slug: 'exhaust-repairs', description: 'Complete exhaust system service' },
                { name: 'Auto AC Repair', slug: 'auto-ac-repair', description: 'Air conditioning system repair and maintenance' }
            ]
        },
        {
            id: 'auto-maintenance',
            title: 'Auto Maintenance',
            icon: Car,
            description: 'Regular maintenance to keep your vehicle running smoothly',
            color: 'bg-gray-800',
            services: [
                { name: 'Oil Changes', slug: 'oil-changes', description: 'Regular oil change services for optimal engine health' },
                { name: 'Scheduled Maintenance', slug: 'scheduled-maintenance', description: 'Manufacturer-recommended maintenance services' },
                { name: 'Fluid Exchanges', slug: 'fluid-exchanges', description: 'Complete vehicle fluid replacement services' },
                { name: 'Check Engine Lights', slug: 'check-engine-lights', description: 'Diagnostic services for warning lights' },
                { name: 'Car Battery and Electrical', slug: 'car-battery-and-electrical', description: 'Battery and electrical system services' },
                { name: 'Fuel System Cleaning', slug: 'fuel-system-cleaning', description: 'Professional fuel system cleaning services' },
                { name: 'Engine Cooling System', slug: 'engine-cooling-system', description: 'Cooling system maintenance and repair' }
            ]
        },
        {
            id: 'auto-inspections',
            title: 'Auto Inspections',
            icon: Clipboard,
            description: 'Comprehensive vehicle inspection services',
            color: 'bg-black',
            services: [
                { name: 'State Inspections', slug: 'state-inspections', description: 'Official state vehicle safety inspections' },
                { name: 'Digital Vehicle Inspections', slug: 'digital-vehicle-inspections', description: 'Modern digital inspection services' },
                { name: 'Pre Purchase Inspections', slug: 'pre-purchase-inspections', description: 'Thorough inspections before vehicle purchase' }
            ]
        }
    ];

    const allServices = serviceCategories.flatMap(category =>
        category.services.map(service => ({ ...service, category: category.id, categoryTitle: category.title }))
    );

    const filteredServices = allServices.filter(service => {
        const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
        const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold mb-6 font-display"
                        >
                            Our Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-200 mb-8 leading-relaxed"
                        >
                            Comprehensive automotive services to keep your vehicle running at its best.
                            From routine maintenance to major repairs, our expert technicians have you covered.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-8 text-sm"
                        >
                            <div className="flex items-center">
                                <Shield className="w-5 h-5 text-red-600 mr-2" />
                                <span>Quality Guarantee</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="w-5 h-5 text-red-600 mr-2" />
                                <span>Fast Service</span>
                            </div>
                            <div className="flex items-center">
                                <Award className="w-5 h-5 text-red-600 mr-2" />
                                <span>Expert Technicians</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Service Categories Overview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Service Categories</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide three main categories of automotive services to meet all your vehicle needs
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {serviceCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                variants={itemVariants}
                                className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-300 hover:border-red-600 transition-all duration-300 group hover:shadow-xl"
                            >
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                                <p className="text-gray-600 mb-6">{category.description}</p>
                                <div className="text-sm text-gray-500 mb-4">
                                    {category.services.length} services available
                                </div>
                                <button
                                    onClick={() => setSelectedCategory(category.id)}
                                    className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors duration-300"
                                >
                                    View Services <ArrowRight className="ml-1 h-4 w-4" />
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Service Browser */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Browse All Services</h2>
                        <p className="text-xl text-gray-600">Find the exact service you need for your vehicle</p>
                    </div>

                    {/* Filters and Search */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                            <div className="flex flex-col md:flex-row gap-4">
                                {/* Search */}
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Search services..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
                                    />
                                </div>

                                {/* Category Filter */}
                                <div className="relative">
                                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 bg-white"
                                    >
                                        <option value="all">All Categories</option>
                                        {serviceCategories.map(category => (
                                            <option key={category.id} value={category.id}>
                                                {category.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Results count */}
                            <div className="mt-4 text-sm text-gray-600">
                                Showing {filteredServices.length} of {allServices.length} services
                            </div>
                        </div>
                    </div>

                    {/* Services Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedCategory}-${searchTerm}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {filteredServices.map((service, index) => (
                                <motion.div
                                    key={service.slug}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-2 border-gray-200 hover:border-red-600 group"
                                >
                                    <div className="p-6">
                                        {/* Category Badge */}
                                        <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {service.categoryTitle}
                      </span>
                                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
                                        </div>

                                        {/* Service Info */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                                            {service.name}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {service.description}
                                        </p>

                                        {/* Learn More Link */}
                                        <Link
                                            to={`/services/${service.slug}`}
                                            className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors duration-300"
                                        >
                                            Learn More <ArrowRight className="ml-1 w-4 h-4" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* No Results */}
                    {filteredServices.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <div className="text-gray-500 mb-4">
                                <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                                <h3 className="text-xl font-semibold">No services found</h3>
                                <p className="mt-2">Try adjusting your search or filter criteria</p>
                            </div>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('all');
                                }}
                                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
                            >
                                Clear Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">Why Choose A-1 Autos?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We&#39;re committed to providing the highest quality automotive services in Garland
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Award,
                                title: 'Expert Technicians',
                                description: 'ASE-certified mechanics with years of experience'
                            },
                            {
                                icon: Shield,
                                title: 'Quality Guarantee',
                                description: 'All services backed by our comprehensive warranty'
                            },
                            {
                                icon: Clock,
                                title: 'Fast Service',
                                description: 'Efficient service to get you back on the road quickly'
                            },
                            {
                                icon: Wrench,
                                title: 'Latest Equipment',
                                description: 'State-of-the-art diagnostic and repair equipment'
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
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
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl font-bold mb-6 font-display">Ready to Get Started?</h2>
                        <p className="text-xl mb-8 text-gray-100">
                            Schedule your service appointment today and experience the A-1 Autos difference
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                to="/booking"
                                className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
                            >
                                Schedule Service
                            </Link>
                            <Link
                                to="/contact"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-colors duration-300 inline-flex items-center justify-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;