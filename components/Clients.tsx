'use client';

import { motion } from "framer-motion";

const clients = [
    { name: "Gadget", logo: "/assets/files/clients/Gadget_Logo.webp" },
    { name: "German", logo: "/assets/files/clients/German logo.webp" },
    { name: "Client 3", logo: "/assets/files/clients/IMG_2930 logo.webp" },
    { name: "Go B", logo: "/assets/files/clients/Logo go b.webp" },
    { name: "Client 5", logo: "/assets/files/clients/logo (1).webp" },
    { name: "Client 6", logo: "/assets/files/clients/1000359991-removebg-preview.webp" },
    { name: "Client 7", logo: "/assets/files/clients/IMG_1876.webp" },
    { name: "Client 8", logo: "/assets/files/clients/IMG_3678.webp" },
    { name: "Client 9", logo: "/assets/files/clients/IMG_5987.webp" },
    { name: "Client 10", logo: "/assets/files/clients/IMG_6261.webp" },
    { name: "A&T Bag", logo: "/assets/files/clients/A&T Bag.pdf.webp" },
    { name: "Classy", logo: "/assets/files/clients/Classy - 14.webp" },
    { name: "Superpowders", logo: "/assets/files/clients/Copy20Superpowders20-Final.pdf.pdf.webp" },
    { name: "Kelshi", logo: "/assets/files/clients/Kelshi logo bag.pdf.pdf.webp" },
    { name: "Issa Group", logo: "/assets/files/clients/logo-issa-group.pdf.webp" },
    { name: "Client 16", logo: "/assets/files/clients/Untitled design.pdf.webp" },
    { name: "Client 17", logo: "/assets/files/clients/PHOTO-2025-11-18-14-08-29.webp" },
    { name: "Client 18", logo: "/assets/files/clients/PHOTO-2025-11-18-14-48-57.webp" },
    { name: "Client 19", logo: "/assets/files/clients/PHOTO-2025-11-18-14-50-35.webp" },
    { name: "Client 20", logo: "/assets/files/clients/PHOTO-2025-11-19-10-36-43.webp" },
    { name: "Client 21", logo: "/assets/files/clients/PHOTO-2025-11-19-10-38-53.webp" },
    { name: "Client 22", logo: "/assets/files/clients/PHOTO-2025-11-19-10-44-59.webp" },
    { name: "Client 23", logo: "/assets/files/clients/PHOTO-2025-11-19-10-45-00.webp" },
];

const Clients = () => {
    // Split clients into two rows
    const midPoint = Math.ceil(clients.length / 2);
    const row1 = clients.slice(0, midPoint);
    const row2 = clients.slice(midPoint);
    
    // Calculate duration based on number of unique images
    // Using longer duration to ensure ALL images pass through the viewport
    // The animation goes from 0% to -33.333% (one full set), so we need enough time
    // for all unique images in that set to fully enter and exit the viewport
    // Adding extra buffer to account for viewport width
    const row1Duration = row1.length * 6; // 6 seconds per image for thorough visibility
    const row2Duration = row2.length * 6; // 6 seconds per image for thorough visibility

    return (
        <motion.section
            id="clients"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-16 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
            </div>

            <div className="space-y-6">
                {/* First Row */}
                <div className="relative w-full overflow-x-hidden group py-4">
                    <div className="animate-marquee-row1 whitespace-nowrap flex items-center">
                        {/* First set */}
                        {row1.map((client, index) => (
                            <div key={`row1-client-${index}`} className="mx-3 sm:mx-4 md:mx-6 flex-shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] transition-all duration-300 hover:scale-110">
                                <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 lg:h-48 w-full">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain opacity-100"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        style={{ minHeight: '60px', minWidth: '60px' }}
                                        onError={(e) => {
                                            console.error('Error loading image:', client.name, client.logo, e);
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'block';
                                            target.style.opacity = '0.3';
                                            target.alt = `Failed to load: ${client.name}`;
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless scrolling */}
                        {row1.map((client, index) => (
                            <div key={`row1-dup-client-${index}`} className="mx-3 sm:mx-4 md:mx-6 flex-shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] transition-all duration-300 hover:scale-110">
                                <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 lg:h-48 w-full">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain opacity-100"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        style={{ minHeight: '60px', minWidth: '60px' }}
                                        onError={(e) => {
                                            console.error('Error loading image:', client.name, client.logo, e);
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'block';
                                            target.style.opacity = '0.3';
                                            target.alt = `Failed to load: ${client.name}`;
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        {/* Third set to ensure all images pass before loop */}
                        {row1.map((client, index) => (
                            <div key={`row1-dup2-client-${index}`} className="mx-3 sm:mx-4 md:mx-6 flex-shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] transition-all duration-300 hover:scale-110">
                                <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 lg:h-48 w-full">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain opacity-100"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        style={{ minHeight: '60px', minWidth: '60px' }}
                                        onError={(e) => {
                                            console.error('Error loading image:', client.name, client.logo, e);
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'block';
                                            target.style.opacity = '0.3';
                                            target.alt = `Failed to load: ${client.name}`;
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        {/* Fourth set for extra buffer */}
                        {row1.map((client, index) => (
                            <div key={`row1-dup3-client-${index}`} className="mx-3 sm:mx-4 md:mx-6 flex-shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] transition-all duration-300 hover:scale-110">
                                <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 lg:h-48 w-full">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain opacity-100"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        style={{ minHeight: '60px', minWidth: '60px' }}
                                        onError={(e) => {
                                            console.error('Error loading image:', client.name, client.logo, e);
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'block';
                                            target.style.opacity = '0.3';
                                            target.alt = `Failed to load: ${client.name}`;
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row */}
                <div className="relative w-full overflow-x-hidden group py-4">
                    <div className="animate-marquee-row2 whitespace-nowrap flex items-center">
                        {/* First set */}
                        {row2.map((client, index) => (
                            <div key={`row2-client-${index}`} className="mx-3 sm:mx-4 md:mx-6 flex-shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] transition-all duration-300 hover:scale-110">
                                <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 lg:h-48 w-full">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain opacity-100"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        style={{ minHeight: '60px', minWidth: '60px' }}
                                        onError={(e) => {
                                            console.error('Error loading image:', client.name, client.logo, e);
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'block';
                                            target.style.opacity = '0.3';
                                            target.alt = `Failed to load: ${client.name}`;
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        {/* Duplicate set for seamless scrolling */}
                        {row2.map((client, index) => (
                            <div key={`row2-dup-client-${index}`} className="mx-3 sm:mx-4 md:mx-6 flex-shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] transition-all duration-300 hover:scale-110">
                                <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 lg:h-48 w-full">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain opacity-100"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        style={{ minHeight: '60px', minWidth: '60px' }}
                                        onError={(e) => {
                                            console.error('Error loading image:', client.name, client.logo, e);
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'block';
                                            target.style.opacity = '0.3';
                                            target.alt = `Failed to load: ${client.name}`;
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        {/* Third set to ensure all images pass before loop */}
                        {row2.map((client, index) => (
                            <div key={`row2-dup2-client-${index}`} className="mx-3 sm:mx-4 md:mx-6 flex-shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] transition-all duration-300 hover:scale-110">
                                <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 lg:h-48 w-full">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain opacity-100"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        style={{ minHeight: '60px', minWidth: '60px' }}
                                        onError={(e) => {
                                            console.error('Error loading image:', client.name, client.logo, e);
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'block';
                                            target.style.opacity = '0.3';
                                            target.alt = `Failed to load: ${client.name}`;
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                        {/* Fourth set for extra buffer */}
                        {row2.map((client, index) => (
                            <div key={`row2-dup3-client-${index}`} className="mx-3 sm:mx-4 md:mx-6 flex-shrink-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] transition-all duration-300 hover:scale-110">
                                <div className="flex items-center justify-center h-24 sm:h-32 md:h-40 lg:h-48 w-full">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain opacity-100"
                                        loading="lazy"
                                        decoding="async"
                                        fetchPriority="low"
                                        style={{ minHeight: '60px', minWidth: '60px' }}
                                        onError={(e) => {
                                            console.error('Error loading image:', client.name, client.logo, e);
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'block';
                                            target.style.opacity = '0.3';
                                            target.alt = `Failed to load: ${client.name}`;
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Styles for marquee animations */}
            <style>{`
                @keyframes marquee-row1 {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
                @keyframes marquee-row2 {
                    0% { transform: translateX(-25%); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee-row1 {
                    animation: marquee-row1 ${row1Duration}s linear infinite;
                    display: flex;
                    width: fit-content;
                    min-width: 400%;
                    padding: 0.5rem 0;
                    will-change: transform;
                }
                .animate-marquee-row2 {
                    animation: marquee-row2 ${row2Duration}s linear infinite;
                    display: flex;
                    width: fit-content;
                    min-width: 400%;
                    padding: 0.5rem 0;
                    will-change: transform;
                }
                .animate-marquee-row1:hover,
                .animate-marquee-row2:hover {
                    animation-play-state: paused;
                }
                @media (max-width: 640px) {
                    .animate-marquee-row1 {
                        animation: marquee-row1 ${row1Duration * 1.4}s linear infinite;
                    }
                    .animate-marquee-row2 {
                        animation: marquee-row2 ${row2Duration * 1.4}s linear infinite;
                    }
                }
            `}</style>
        </motion.section>
    );
};

export default Clients;
