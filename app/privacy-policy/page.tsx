'use client';

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary/10 to-accent/10">
            <Navbar />
            <main className="flex-grow pt-[5.5rem] sm:pt-[6.5rem] md:pt-[7.5rem] lg:pt-32 pb-12 sm:pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl w-full overflow-hidden">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Privacy Policy</h1>
                        <div className="prose prose-sm sm:prose-base prose-lg max-w-none text-gray-600 break-words">

                        <section className="mb-6 sm:mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">1. Information We Collect</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong>Personal info:</strong> Name, phone, email, delivery address.</li>
                                <li><strong>Order info:</strong> Products, order history, payment details.</li>
                                <li><strong>Usage info:</strong> Website interaction, device type, IP address.</li>
                            </ul>
                        </section>

                        <section className="mb-6 sm:mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">2. How We Use Your Information</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Process and deliver your orders.</li>
                                <li>Communicate updates about your delivery.</li>
                                <li>Improve our services and website experience.</li>
                            </ul>
                        </section>

                        <section className="mb-6 sm:mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">3. Data Sharing</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>We do not sell your personal data.</li>
                                <li>May share info with: couriers, payment providers, or legal authorities if required by law.</li>
                            </ul>
                        </section>

                        <section className="mb-6 sm:mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">4. Cookies and Tracking</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Our website uses cookies for better browsing and tracking order progress.</li>
                            </ul>
                        </section>

                        <section className="mb-6 sm:mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">5. Data Security</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>We use standard security measures to protect your data.</li>
                            </ul>
                        </section>

                        <section className="mb-6 sm:mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">6. Your Rights</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>You can request access, correction, or deletion of your personal data.</li>
                                <li>Contact us at: Info@a2zservices-lb.com</li>
                            </ul>
                        </section>

                        <section className="mb-6 sm:mb-8">
                            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">7. Updates</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Privacy Policy may change; updates are posted on this page.</li>
                            </ul>
                        </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
