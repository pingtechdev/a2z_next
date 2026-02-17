'use client';

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Search, Phone, Mail } from "lucide-react";
import Image from "next/image";

const TrackOrder = () => {
    const { t } = useLanguage();
    const [orderNumber, setOrderNumber] = useState("");

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <section id="track-order" className="py-10 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">

                        {/* Left Side: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/tracking.webp"
                                    alt="Track Your Order"
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold mb-2">Real-time Updates</h3>
                                        <p className="text-white/90">Know exactly where your package is, every step of the way.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Tracking Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-gray-100"
                        >
                            <div className="mb-8">
                                <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                                    Order Tracking
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                    Track Your Shipment
                                </h2>
                                <p className="text-gray-600 text-base sm:text-lg">
                                    Enter your order number below to get the latest status update on your delivery.
                                </p>
                            </div>

                            <form onSubmit={handleTrack} className="mb-8 sm:mb-10">
                                <div className="relative">
                                    <input
                                        type="Tracking Number"
                                        placeholder="Enter Order Number (e.g., A2Z-12345)"
                                        value={orderNumber}
                                        onChange={(e) => setOrderNumber(e.target.value)}
                                        className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-12 sm:pl-14 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-base sm:text-lg"
                                        required
                                    />
                                    <Search className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 sm:w-6 sm:h-6" />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 rounded-lg font-semibold transition-colors text-sm sm:text-base"
                                    >
                                        Track
                                    </button>
                                </div>
                            </form>

                            <div className="border-t border-gray-100 pt-8">
                                <h4 className="font-semibold text-gray-900 mb-4">Need help with your order?</h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <a href="tel:+9613954689" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500">Call Support</div>
                                            <div className="font-semibold text-gray-900">+961 3 954689</div>
                                        </div>
                                    </a>
                                    <a href="mailto:Info@a2zservices-lb.com" className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors group">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-blue-600 group-hover:scale-110 transition-transform">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500">Email Us</div>
                                            <div className="font-semibold text-gray-900">Info@a2zservices-lb.com</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrackOrder;
