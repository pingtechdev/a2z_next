'use client';

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Phone, Mail, MapPin, Package, Clock, CheckCircle2, Truck, Home, Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TrackingResponse {
  barcode: string;
  address: string;
  created_dt: string;
  delivery_dt: string;
  is_picked_up: boolean;
  is_warehouse: boolean;
  is_under_delivery: boolean;
  is_delivered: boolean;
}

interface StatusStep {
  label: string;
  date: string;
  completed: boolean;
}

export default function Track() {
  const { t } = useLanguage();
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [trackingData, setTrackingData] = useState<TrackingResponse | null>(null);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const getStatusSteps = (data: TrackingResponse): StatusStep[] => {
    const steps: StatusStep[] = [];
    
    // Order Picked Up
    steps.push({
      label: "Order Picked Up",
      date: data.created_dt,
      completed: data.is_picked_up,
    });

    // At Warehouse/Sorting Facility
    steps.push({
      label: "At Warehouse",
      date: data.is_picked_up ? data.created_dt : "",
      completed: data.is_warehouse,
    });

    // Out for Delivery
    steps.push({
      label: "Out for Delivery",
      date: data.is_under_delivery ? data.delivery_dt : "",
      completed: data.is_under_delivery,
    });

    // Delivered
    steps.push({
      label: "Delivered",
      date: data.is_delivered ? data.delivery_dt : "",
      completed: data.is_delivered,
    });

    return steps;
  };

  const getStatusLabel = (data: TrackingResponse): string => {
    if (data.is_delivered) return "Delivered";
    if (data.is_under_delivery) return "Out for Delivery";
    if (data.is_warehouse) return "At Warehouse";
    if (data.is_picked_up) return "Picked Up";
    return "Order Created";
  };

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setError("Please enter a tracking number");
      return;
    }

    setLoading(true);
    setError(null);
    setTrackingData(null);

    try {
      const response = await fetch(
        `https://admin.a2zservices-lb.com/website_apis/tracking_result?barcode=${encodeURIComponent(trackingNumber.trim())}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch tracking information");
      }

      const data: TrackingResponse = await response.json();

      // Check if response is empty or invalid
      if (!data || !data.barcode) {
        throw new Error("No tracking information found for this barcode");
      }

      setTrackingData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred while tracking your order");
      setTrackingData(null);
    } finally {
      setLoading(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/10 to-accent/10">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-blue-600">
                Track your order
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                Know where your delivery is – anytime, anywhere.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto mb-12">
              <motion.div variants={fadeInUp} className="space-y-6">
                {/* Tracking Form - Always visible */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Tracking Number</h3>
                  <p className="text-gray-600 mb-6">Enter your order Number</p>
                  <form onSubmit={handleTrack} className="space-y-4">
                    <div className="flex gap-3">
                      <Input
                        type="text"
                        placeholder="Order Number"
                        value={trackingNumber}
                        onChange={(e) => {
                          setTrackingNumber(e.target.value);
                          setError(null);
                        }}
                        disabled={loading}
                        className="flex-1 h-14 text-lg border-2 border-gray-300 focus:border-blue-500 disabled:opacity-50"
                      />
                      <Button
                        type="submit"
                        size="lg"
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Tracking...
                          </>
                        ) : (
                          <>
                            <Search className="w-5 h-5 mr-2" />
                            Track
                          </>
                        )}
                      </Button>
                    </div>
                  </form>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 font-medium">{error}</p>
                    </motion.div>
                  )}
                </motion.div>

                {/* Tracking Results */}
                {trackingData && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Package className="w-8 h-8 text-blue-600" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Order summary</h3>
                        <p className="text-sm text-gray-600 mt-1">Barcode: {trackingData.barcode}</p>
                      </div>
                    </div>

                    {/* Order Details */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Address</p>
                          <p className="font-semibold text-gray-900">{trackingData.address}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Created Date</p>
                          <p className="font-semibold text-gray-900">{trackingData.created_dt}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Expected Delivery</p>
                          <p className="font-semibold text-gray-900">{trackingData.delivery_dt}</p>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="mb-6">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-semibold">
                        <Truck className="w-5 h-5" />
                        {getStatusLabel(trackingData)}
                      </span>
                    </div>

                    {/* Status Updates with Dates */}
                    <div className="space-y-4">
                      {getStatusSteps(trackingData).map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex items-start gap-4 p-4 rounded-xl border-2 ${
                            step.completed
                              ? "bg-green-50 border-green-200"
                              : "bg-gray-50 border-gray-200"
                          }`}
                        >
                          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            step.completed ? "bg-green-500" : "bg-gray-300"
                          }`}>
                            {step.completed ? (
                              <CheckCircle2 className="w-6 h-6 text-white" />
                            ) : (
                              <Clock className="w-6 h-6 text-white" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className={`font-semibold mb-1 ${
                              step.completed ? "text-gray-900" : "text-gray-600"
                            }`}>
                              {step.label}
                            </p>
                            {step.date && (
                              <p className="text-sm text-gray-500">{step.date}</p>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Expected Delivery */}
                    {!trackingData.is_delivered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 p-4 bg-yellow-50 rounded-xl border-2 border-yellow-300"
                      >
                        <div className="flex items-center gap-3">
                          <Home className="w-6 h-6 text-yellow-600" />
                          <div>
                            <p className="font-semibold text-gray-900">Expected Delivery</p>
                            <p className="text-sm text-gray-600">{trackingData.delivery_dt}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Tracking Image - Below the text sections */}
                <motion.div
                  variants={fadeInUp}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/assets/new/1320834676.webp"
                      alt="A smartphone showing order tracking"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                </motion.div>
                
              </motion.div>
            </div>

            {/* Contact Support Section */}
            <motion.div
              variants={fadeInUp}
              className="bg-blue-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-2">Support/Contact</h3>
              <p className="text-white/90 mb-6">Need help? Contact our customer service at <a href="tel:+9613954689" className="underline font-semibold hover:text-yellow-400">+961 3 954 689</a> or email <a href="mailto:info@a2zservices-lb.com" className="underline font-semibold hover:text-yellow-400">info@a2zservices-lb.com</a></p>
              
              <div className="space-y-4">
                <a
                  href="tel:+9613954689"
                  className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-white/90">+961 3 954 689</p>
                  </div>
                </a>

                <a
                  href="mailto:info@a2zservices-lb.com"
                  className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/90">info@a2zservices-lb.com</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps?q=33.88997268676758,35.49995803833008&z=17&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-white/90">View on Google Maps</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
