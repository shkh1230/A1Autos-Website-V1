import { useState } from 'react';
import {
    Wrench,
    Users,
    Heart,
    GraduationCap,
    DollarSign,
    Clock,
    MapPin,
    Phone,
    Mail,
    CheckCircle,
    Star
} from 'lucide-react';

const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    const benefits = [
        {
            icon: DollarSign,
            title: "Competitive Pay",
            description: "Above industry average wages with performance bonuses"
        },
        {
            icon: Heart,
            title: "Health Benefits",
            description: "Comprehensive medical, dental, and vision coverage"
        },
        {
            icon: GraduationCap,
            title: "Training & Development",
            description: "Ongoing education and certification opportunities"
        },
        {
            icon: Clock,
            title: "Work-Life Balance",
            description: "Flexible scheduling and paid time off"
        }
    ];

    const openPositions = [
        {
            id: 1,
            title: "Automotive Technician",
            type: "Full-Time",
            experience: "2+ years",
            description: "We're looking for a skilled automotive technician to join our team. Must have experience with diagnostics, repairs, and maintenance.",
            requirements: [
                "2+ years automotive repair experience",
                "Valid driver's license",
                "Own tools preferred",
                "ASE certification a plus"
            ],
            responsibilities: [
                "Perform vehicle diagnostics and repairs",
                "Conduct routine maintenance services",
                "Communicate with service advisors",
                "Maintain clean and organized work area"
            ]
        },
        {
            id: 2,
            title: "Service Advisor",
            type: "Full-Time",
            experience: "1+ years",
            description: "Join our front-end team as a Service Advisor. Help customers understand their vehicle needs while providing exceptional service.",
            requirements: [
                "1+ years customer service experience",
                "Automotive knowledge preferred",
                "Strong communication skills",
                "Computer proficiency"
            ],
            responsibilities: [
                "Greet customers and assess vehicle needs",
                "Provide service estimates and timelines",
                "Coordinate with technicians",
                "Ensure customer satisfaction"
            ]
        },
        {
            id: 3,
            title: "Apprentice Technician",
            type: "Full-Time",
            experience: "Entry Level",
            description: "Perfect opportunity for someone starting their automotive career. We provide training and mentorship.",
            requirements: [
                "High school diploma or equivalent",
                "Interest in automotive field",
                "Willingness to learn",
                "Reliable transportation"
            ],
            responsibilities: [
                "Assist senior technicians",
                "Learn diagnostic procedures",
                "Maintain shop cleanliness",
                "Complete training programs"
            ]
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-black mb-6">Join Our Team</h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Build a rewarding career with Garlands premier automotive service center.
                            We are always looking for skilled professionals who share our commitment to excellence.
                        </p>
                        <div className="flex items-center space-x-6 text-sm">
                            <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5 text-red-400" />
                                <span>Growing Team</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Star className="w-5 h-5 text-red-400" />
                                <span>Great Benefits</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Wrench className="w-5 h-5 text-red-400" />
                                <span>Modern Equipment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">Why Choose A-1 Autos?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We are not just an employer – we are a family that values growth, teamwork, and excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                                    <benefit.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-gray-900 mb-4">Current Openings</h2>
                        <p className="text-xl text-gray-600">
                            Explore our available positions and find your next career opportunity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="space-y-6">
                            {openPositions.map((job) => (
                                <div
                                    key={job.id}
                                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                                        selectedJob === job.id
                                            ? 'border-red-600 bg-red-50'
                                            : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                                            <div className="flex items-center space-x-4 mt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {job.type}
                        </span>
                                                <span className="text-sm text-gray-600">
                          Experience: {job.experience}
                        </span>
                                            </div>
                                        </div>
                                        <span className="text-red-600 font-semibold cursor-pointer">
                      {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                    </span>
                                    </div>
                                    <p className="text-gray-600">{job.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Job Details Panel */}
                        <div className="lg:sticky lg:top-24">
                            {selectedJob ? (
                                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                    {(() => {
                                        const job = openPositions.find(j => j.id === selectedJob);
                                        return (
                                            <>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{job.title}</h3>

                                                <div className="space-y-6">
                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3">Requirements:</h4>
                                                        <ul className="space-y-2">
                                                            {job.requirements.map((req, index) => (
                                                                <li key={index} className="flex items-start">
                                                                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                                                                    <span className="text-gray-700">{req}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-bold text-gray-900 mb-3">Responsibilities:</h4>
                                                        <ul className="space-y-2">
                                                            {job.responsibilities.map((resp, index) => (
                                                                <li key={index} className="flex items-start">
                                                                    <CheckCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                                                                    <span className="text-gray-700">{resp}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-red-700 transition-colors duration-300">
                                                        Apply for This Position
                                                    </button>
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            ) : (
                                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
                                    <Wrench className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-600 mb-2">Select a Position</h3>
                                    <p className="text-gray-500">Click on any job listing to view details and requirements.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact for Applications */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-black mb-6">Ready to Apply?</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Don&#39;t see the perfect position? We are always interested in meeting talented individuals.
                            Send us your resume and let&#39;s talk!
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white mb-3">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <p className="font-semibold">Email Resume</p>
                                <a href="mailto:careers@a1autos.com" className="text-red-400 hover:text-red-300">
                                    careers@a1autos.com
                                </a>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white mb-3">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <p className="font-semibold">Call Us</p>
                                <a href="tel:+19722710009" className="text-red-400 hover:text-red-300">
                                    (972) 271-0009
                                </a>
                            </div>

                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white mb-3">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <p className="font-semibold">Visit Us</p>
                                <p className="text-gray-300">3901 Broadway Blvd<br />Garland, TX 75043</p>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <p className="text-gray-300 text-sm">
                                A-1 Autos is an equal opportunity employer committed to diversity and inclusion.
                                We welcome applications from all qualified candidates regardless of race, gender, age, religion,
                                sexual orientation, or disability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;