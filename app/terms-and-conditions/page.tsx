'use client';

import { useEffect } from "react";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-secondary/10 to-accent/10">
            <main className="flex-grow pt-32 pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 sm:p-10">
                        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
                        <div className="prose prose-lg text-gray-600">

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance</h2>
                            <p>
                                By using our website or services, you agree to these terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>A2Z Delivery Services provides delivery and logistics for online orders.</li>
                                <li>Delivery times are estimates; delays may occur due to circumstances beyond our control.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Provide accurate information for delivery.</li>
                                <li>Notify us of any issues with your order promptly.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payments</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Payments must be completed as indicated.</li>
                                <li>We are not responsible for third-party payment errors.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitation of Liability</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>A2Z Delivery Services is not liable for lost, damaged, or delayed items caused by external factors.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Website content, logos, and images are property of A2Z Delivery Services.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Privacy</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Your data is handled according to our Privacy Policy.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Governing Law</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Terms governed by Lebanese law.</li>
                                <li>Any disputes are under Baabda Court jurisdiction.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Change to Terms</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Terms may be updated; continued use of services implies acceptance.</li>
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
