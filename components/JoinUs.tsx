'use client';

import { ArrowRight, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const JoinUs = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Image */}
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/backup/3.jpg"
                                alt="Join Us"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full border-2 border-yellow-500 rounded-2xl"></div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col justify-center min-w-0"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
                            Join Us
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                            Become part of a team that values dedication and excellence. Whether you're looking to drive with us or join our corporate family, we have a place for you.
                        </p>

                        <div className="flex flex-col gap-4 w-full sm:w-auto">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSf2ppFdYPbG42jsPOdSWieIuQlTl-urf_CtW9BSA6v2iG41Lw/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center sm:justify-start bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto transition-transform hover:translate-x-2 rounded-md w-full sm:w-auto"
                            >
                                <ArrowRight className="mr-3 h-6 w-6" />
                                Become A Driver
                            </a>

                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSd7XNo3t2zPRGZ6aaSMgaSKlXRmMfp4iFbL2070sw5eDoRemA/viewform?pli=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center sm:justify-start border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto transition-transform hover:translate-x-2 rounded-md w-full sm:w-auto"
                            >
                                <Users className="mr-3 h-6 w-6" />
                                Become A Team Member
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
