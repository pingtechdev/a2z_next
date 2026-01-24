import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Truck, Package, Warehouse, DollarSign, Zap, Play } from "lucide-react";
import { motion, useInView } from "framer-motion";

// Removed import for videoFile, using public path /assets/story.mp4

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 as const } }
};

const AboutUs = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const pointsRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const isInView = useInView(sectionRef, { margin: "-100px" });
  const contentInView = useInView(contentRef, { margin: "-100px" });
  const pointsInView = useInView(pointsRef, { margin: "-100px" });

  const toggleVideo = async () => {
    if (videoRef.current && videoContainerRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        if (document.fullscreenElement) {
          document.exitFullscreen();
        }
      } else {
        try {
          await videoContainerRef.current.requestFullscreen();
          setIsFullscreen(true);
          videoRef.current.play();
        } catch (err) {
          // Fallback if fullscreen is not supported
          videoRef.current.play();
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (!document.fullscreenElement && isPlaying) {
        videoRef.current?.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [isPlaying]);

  // Lazy load video when in view
  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.load();
    }
  }, [isInView]);

  return (
    <section id="about" className="pt-2 pb-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={sectionRef}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-1 max-w-[62rem] mx-auto text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4">
          <motion.div variants={fadeInUp} className="inline-block px-4 py-2 bg-blue-100 rounded-full border border-blue-200 mb-4">
            <span className="text-sm font-code text-blue-600">Trusted by Top Online Shops in Lebanon Since 2016</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="h2 mb-6">
            {t('about.title')}
          </motion.h2>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4">
          <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-12">
            <div ref={videoContainerRef} className="relative rounded-2xl overflow-hidden shadow-2xl bg-black group">
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover"
                src="/assets/story.mp4"
                preload="none"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              {/* Custom play button overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/60 to-yellow-900/60 cursor-pointer transition-all group-hover:from-blue-900/70 group-hover:to-yellow-900/70"
                  onClick={toggleVideo}
                >
                  <motion.div
                    className="bg-white rounded-full p-4 sm:p-6 md:p-8 shadow-2xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-blue-600 fill-blue-600" />
                  </motion.div>
                </div>
              )}
              {/* Video controls overlay */}
              {isPlaying && (
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={toggleVideo}
                />
              )}
            </div>
            <div className="mt-6 sm:mt-8 text-center px-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">Why businesses Trust A2Z Delivery Services</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Reliable, efficient, and built for Lebanon’s Challenges—our delivery services help your business grow with confidence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative max-w-[50rem] mx-auto mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4">
          <motion.div variants={fadeInUp} className="space-y-6 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              A2Z is Lebanon's leading logistics provider, offering comprehensive delivery solutions from warehousing to last-mile delivery.
              We serve businesses of all sizes with reliable, efficient, and technology-driven services.
            </p>
          </motion.div>

          {/* What We Do */}
          <motion.div
            ref={pointsRef}
            initial="hidden"
            animate={pointsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h3 variants={fadeInUp} className="h3 mb-4">
              <span className="gradient-text">{t('about.what.title')}</span>
            </motion.h3>
            <motion.p variants={fadeInUp} className="body-1 text-gray-600 mb-6">
              {t('about.what.desc')}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Truck, text: t('about.what.delivery'), color: "bg-yellow-500" },
                { icon: Package, text: t('about.what.packaging'), color: "bg-blue-600" },
                { icon: Warehouse, text: t('about.what.fulfillment'), color: "bg-yellow-500" },
                { icon: DollarSign, text: t('about.what.cod'), color: "bg-blue-600" },
                { icon: Zap, text: t('about.what.integration'), color: "bg-yellow-500", span: true },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 300 } }}
                    className={`flex gap-3 p-4 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 ${item.span ? 'sm:col-span-2' : ''}`}
                  >
                    <motion.div
                      className={`flex-shrink-0 w-12 h-12 rounded-full ${item.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex items-center">
                      <p className="body-2 text-gray-900">{item.text}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-1 rounded-2xl bg-blue-600"
            >
              <div className="bg-white rounded-[1rem] p-6">
                <h3 className="h4 mb-3 text-blue-600">{t('about.mission.title')}</h3>
                <p className="body-2 text-gray-600">{t('about.mission.desc')}</p>
              </div>
            </motion.div>

            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-1 rounded-2xl bg-yellow-500"
            >
              <div className="bg-white rounded-[1rem] p-6">
                <h3 className="h4 mb-3 text-yellow-600">{t('about.vision.title')}</h3>
                <p className="body-2 text-gray-600">{t('about.vision.desc')}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Why Choose A2Z */}
          <motion.div variants={staggerContainer}>
            <motion.h3 variants={fadeInUp} className="h3 mb-6">
              <span className="gradient-text">{t('about.why.title')}</span>
            </motion.h3>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div
                  key={num}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, y: -5, transition: { type: "spring", stiffness: 300 } }}
                  className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white text-sm font-bold">✓</span>
                  </motion.div>
                  <p className="body-2 text-gray-900">{t(`about.why.${num}`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
