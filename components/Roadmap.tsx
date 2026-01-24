'use client';

import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const Roadmap = () => {
  const { t } = useLanguage();
  const processRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: "Order Pickup",
      description: "We collect your parcels from your shop or warehouse. Our team arrives on time, scans each package, and verifies all details before starting the delivery process. Key Points: Scheduled pickups or on-demand, Barcode scanning & verification, Fragile-item handling",
      icon: (index: number) => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke={index === 0 ? "#EAB308" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      animation: (
        <div className="w-full space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-sm text-gray-600 mb-4 flex items-center gap-2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"
            />
            <span className="text-blue-600 font-semibold">Receiving</span> request...
          </motion.div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'WhatsApp / Portal', icon: '📱', delay: 0.3 },
              { label: 'Order Details', icon: '📝', delay: 0.4 },
              { label: 'Confirmation', icon: '✅', delay: 0.5 },
              { label: 'Driver Assigned', icon: '🛵', delay: 0.6 }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: item.delay, duration: 0.4, type: "spring" }}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-2 hover:border-blue-400 transition-all shadow-sm"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-[10px] sm:text-xs text-gray-700 leading-tight">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Sorting & Processing",
      description: "Packages are sorted at our facility for the fastest delivery route. We categorize by area, urgency, and order type to ensure your orders move instantly through our network. Key Points: Area-based sorting, Same-day & next-day prioritization, Real-time system updates",
      icon: (index: number) => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke={index === 1 ? "#FFD700" : "currentColor"} strokeWidth="2" strokeLinejoin="round" />
          <path d="M2 17L12 22L22 17" stroke={index === 1 ? "#FFD700" : "currentColor"} strokeWidth="2" strokeLinejoin="round" />
          <path d="M2 12L12 17L22 12" stroke={index === 1 ? "#FFD700" : "currentColor"} strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
      animation: (
        <div className="bg-white rounded-xl p-5 overflow-hidden border border-gray-200 shadow-lg">
          <div className="space-y-3">
            {[
              { step: 'Driver Arrived', status: 'At Location', color: '#10B981', icon: '📍' },
              { step: 'Scanning', status: 'Verifying', color: '#FFD700', icon: '📱' },
              { step: 'Pickup Complete', status: 'On the way', color: '#2563EB', icon: '📦' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.3, duration: 0.5 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.step}</div>
                    <div className="text-xs text-gray-600">{item.status}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Dispatch & Delivery",
      description: "Our couriers deliver orders safely and on time. Customers receive their parcels with professional, friendly service and live delivery updates. Key Points: Professional drivers, Optimized delivery routes, Proof of delivery & notifications",
      icon: (index: number) => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3V21H21" stroke={index === 2 ? "#EAB308" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 9L14 14L10 10L7 13" stroke={index === 2 ? "#EAB308" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      animation: (
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-blue-600 p-4 rounded-full shadow-lg"
          >
            <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V8C20.9996 7.64927 20.9045 7.30481 20.7252 6.99999C20.5458 6.69517 20.2884 6.44042 19.9778 6.26001L12.9778 2.26001C12.6787 2.08918 12.3429 1.99999 12 1.99999C11.6571 1.99999 11.3213 2.08918 11.0222 2.26001L4.02218 6.26001C3.71161 6.44042 3.45418 6.69517 3.27481 6.99999C3.09544 7.30481 3.00036 7.64927 3 8V16C3.00036 16.3507 3.09544 16.6952 3.27481 17C3.45418 17.3048 3.71161 17.5596 4.02218 17.74L11.0222 21.74C11.3213 21.9108 11.6571 22 12 22C12.3429 22 12.6787 21.9108 12.9778 21.74L19.9778 17.74C20.2884 17.5596 20.5458 17.3048 20.7252 17C20.9045 16.6952 20.9996 16.3507 21 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
          <div className="flex gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-3 rounded-lg shadow border border-gray-200 text-center w-24"
            >
              <div className="text-xs font-bold text-gray-500">Zone A</div>
              <div className="text-blue-600 font-bold">Beirut</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-3 rounded-lg shadow border border-gray-200 text-center w-24"
            >
              <div className="text-xs font-bold text-gray-500">Zone B</div>
              <div className="text-yellow-600 font-bold">North</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white p-3 rounded-lg shadow border border-gray-200 text-center w-24"
            >
              <div className="text-xs font-bold text-gray-500">Zone C</div>
              <div className="text-green-600 font-bold">South</div>
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Cash Collection (COD)",
      description: "If the order is COD, we handle the collection securely. All COD amounts are recorded and tracked through our system to ensure full transparency. Key Points: Secure cash handling, Digital reporting, Daily/weekly settlements",
      icon: (index: number) => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke={index === 3 ? "#FFD700" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      animation: (
        <div className="w-full space-y-4">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="flex items-center gap-4"
          >
            <div className="bg-blue-100 p-3 rounded-full">
              <span className="text-2xl">🛵</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                className="h-full bg-blue-600"
              />
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <span className="text-2xl">🏠</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
            className="bg-green-50 border border-green-200 p-4 rounded-xl text-center"
          >
            <div className="text-green-600 font-bold text-lg">Delivered!</div>
            <div className="text-green-500 text-sm">Customer received package</div>
          </motion.div>
        </div>
      ),
    },
    {
      id: 5,
      title: "Reporting & Settlement",
      description: "You receive clear reports and COD settlements. We provide weekly or monthly summaries so your business stays organized and financially updated. Key Points: Detailed order reports, COD settlements on time, Business account support",
      icon: (index: number) => (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1V23" stroke={index === 4 ? "#EAB308" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3688 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke={index === 4 ? "#EAB308" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      animation: (
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="bg-green-100 p-6 rounded-full border-4 border-green-200"
          >
            <span className="text-4xl">💵</span>
          </motion.div>
          <div className="flex gap-8 items-center">
            <div className="text-center">
              <div className="text-sm text-gray-500">Collected</div>
              <div className="font-bold text-gray-900">$50.00</div>
            </div>
            <div className="text-blue-500">➔</div>
            <div className="text-center">
              <div className="text-sm text-gray-500">Remitted</div>
              <div className="font-bold text-green-600">To You</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Auto-advance steps every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000); // Change step every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-white">
      <div className="container">
        {/* Heading */}
        <div className="max-w-[50rem] mx-auto mb-8 sm:mb-10 md:mb-12 lg:mb-20 text-center px-4">
          <h2 className="h2 mb-4 text-gray-900">How We Deliver Your Orders Smoothly</h2>
          <p className="body-2 mt-4 text-gray-600">Below are 5 steps — clean, simple, and optimized for online shops and businesses in Lebanon.</p>
        </div>

        <motion.div
          ref={processRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
          variants={staggerContainer}
          className="mt-12"
        >
          {/* Steps Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
            {steps.map((step, index) => {
              // Steps 1, 3, 5 (index 0, 2, 4): blue bg with yellow text
              // Steps 2, 4 (index 1, 3): yellow bg with blue text
              const isBlueStep = index % 2 === 0;
              const isActive = activeStep === index;

              return (
                <motion.button
                  key={step.id}
                  variants={fadeInUp}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full border transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base ${isActive
                    ? isBlueStep
                      ? 'bg-blue-600 border-transparent text-yellow-400 shadow-lg shadow-blue-600/50'
                      : 'bg-yellow-500 border-transparent text-blue-600 shadow-lg shadow-yellow-500/50'
                    : 'border-gray-300 text-gray-600 hover:border-blue-400 hover:shadow-md bg-white'
                    }`}
                >
                  <span className={isActive ? (isBlueStep ? 'text-yellow-400' : 'text-blue-600') : 'text-gray-600'}>
                    {step.icon(index)}
                  </span>
                  <span className="font-bold text-sm sm:text-base">Step {step.id}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Active Step Content */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center px-4">
            {/* Left: Description */}
            <motion.div
              key={`desc-${activeStep}`}
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
              className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            >
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 rounded-full border border-blue-200">
                <span className="text-xs sm:text-sm font-code text-blue-600">Step {steps[activeStep].id}</span>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{steps[activeStep].title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">{steps[activeStep].description}</p>
            </motion.div>

            {/* Right: Animation */}
            <motion.div
              key={`anim-${activeStep}`}
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] flex items-center justify-center shadow-lg order-1 lg:order-2"
            >
              {steps[activeStep].animation}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;