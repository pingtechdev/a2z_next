import { Truck, Clock, Warehouse, Package, Banknote, Palette, type LucideIcon } from "lucide-react";

export type ServiceId =
  | "local-delivery"
  | "same-day-next-day-delivery"
  | "fulfillment-warehousing"
  | "packaging-solutions"
  | "cash-on-delivery-cod"
  | "branding-service";

export interface ServiceContent {
  pageHeadline: string;
  intro: string;
  serviceDescription: string;
  keyFeatures: string[];
  secondaryList?: { label: string; items: string[] };
  cta: string;
}

export interface ServiceItem {
  slug: ServiceId;
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  color: string;
  bullets: string[];
}

const serviceList: ServiceItem[] = [
  {
    slug: "local-delivery",
    title: "Local Delivery",
    description:
      "Fast, secure local deliveries across Lebanon — perfect for shops and businesses needing same-city service.",
    image: "/assets/local_delivery_v2.webp",
    icon: Truck,
    color: "bg-blue-100 text-blue-600",
    bullets: ["Real-time tracking", "Professional drivers on every route"],
  },
  {
    slug: "same-day-next-day-delivery",
    title: "Same-Day & Next-Day Delivery",
    description:
      "Choose same-day for urgent orders or next-day for cost-effective speed — reliable time slots and proof of delivery.",
    image: "/assets/service_same_day.webp",
    icon: Clock,
    color: "bg-yellow-100 text-yellow-600",
    bullets: ["Same-day in-city fulfillment", "Next-day Local coverage"],
  },
  {
    slug: "fulfillment-warehousing",
    title: "Fulfillment & Warehousing",
    description:
      "End-to-end fulfillment: pick, pack and ship from our secure warehouse so you can scale without logistics headaches.",
    image: "/assets/service_fulfillment.webp",
    icon: Warehouse,
    color: "bg-green-100 text-green-600",
    bullets: ["Inventory management", "Short-term storage & pick-and-pack"],
  },
  {
    slug: "packaging-solutions",
    title: "Packaging Solutions",
    description:
      "Custom packaging to protect fragile and high-value items — bulk and branded packaging options available.",
    image: "/assets/services/Packaging solutions.webp",
    icon: Package,
    color: "bg-purple-100 text-purple-600",
    bullets: ["Protective packing materials", "Branded boxes & inserts"],
  },
  {
    slug: "cash-on-delivery-cod",
    title: "Cash On Delivery (COD) Service",
    description:
      "Secure COD collections with transparent reporting and fast remittances to your account.",
    image: "/assets/service_cod.webp",
    icon: Banknote,
    color: "bg-red-100 text-red-600",
    bullets: ["Daily/weekly settlements", "Secure courier handling"],
  },
  {
    slug: "branding-service",
    title: "Branding Service",
    description:
      "Build your brand from scratch — logo design, social media setup, and starter post templates to help you sell more.",
    image: "/assets/services/branding.webp",
    icon: Palette,
    color: "bg-indigo-100 text-indigo-600",
    bullets: ["Logo & brand kit", "Social pages + 10 launch posts"],
  },
];

export const servicesList = serviceList;

const servicesImagesWebp: Record<ServiceId, string> = {
  "local-delivery": "local_delivery.webp",
  "same-day-next-day-delivery": "same_day.webp",
  "fulfillment-warehousing": "fullfilment.webp",
  "packaging-solutions": "packaging.webp",
  "cash-on-delivery-cod": "cash_on_delivery.webp",
  "branding-service": "branding.webp",
};

const servicesImagesFallback: Record<ServiceId, string> = {
  "local-delivery": "local_delivery.jpeg",
  "same-day-next-day-delivery": "same_day.jpeg",
  "fulfillment-warehousing": "fullfilment.jpeg",
  "packaging-solutions": "packaging.jpeg",
  "cash-on-delivery-cod": "cash_on_delivery.jpeg",
  "branding-service": "branding.jpeg",
};

export function getServiceDetailImagePath(slug: ServiceId): string {
  const filename = servicesImagesWebp[slug];
  return filename ? `/services_images/${filename}` : "";
}

export function getServiceDetailImageFallbackPath(slug: ServiceId): string {
  const filename = servicesImagesFallback[slug];
  return filename ? `/services_images/${filename}` : "";
}

const serviceContent: Record<ServiceId, ServiceContent> = {
  "local-delivery": {
    pageHeadline: "Reliable Local Delivery Across Lebanon",
    intro:
      "A2Z Delivery Services provides fast, secure, and cost-effective local delivery solutions across Lebanon. Since 2016, we have supported businesses of all sizes with dependable last-mile delivery, even in challenging conditions.",
    serviceDescription:
      "Our local delivery service is designed to meet the daily operational needs of online stores, retailers, pharmacies, and corporate clients. With a professional team and optimized routing, we ensure timely pickups and accurate deliveries while maintaining package integrity.",
    keyFeatures: [
      "Nationwide local delivery coverage",
      "Professional and trained delivery drivers",
      "Secure handling and real-time coordination",
      "Flexible pickup schedules",
      "Scalable solutions for high-volume merchants",
    ],
    secondaryList: {
      label: "Who This Service Is For",
      items: [
        "E-commerce businesses",
        "Retail shops",
        "Corporate and SME clients",
        "Subscription and recurring deliveries",
      ],
    },
    cta: "Let us handle your local deliveries while you focus on growing your business.",
  },
  "same-day-next-day-delivery": {
    pageHeadline: "Same-Day & Next-Day Delivery Solutions",
    intro:
      "When speed matters, A2Z delivers. Our same-day and next-day delivery services are built for businesses that require urgent, time-sensitive shipments without compromising reliability.",
    serviceDescription:
      "We offer priority delivery options that ensure your orders reach customers within the same day or the following business day. Our streamlined dispatch system allows fast order processing and optimized delivery routes.",
    keyFeatures: [
      "Same-day delivery in selected areas",
      "Next-day nationwide delivery",
      "Priority order handling",
      "Ideal for urgent and high-value shipments",
      "Consistent delivery performance",
    ],
    secondaryList: {
      label: "Business Benefits",
      items: [
        "Increased customer satisfaction",
        "Faster order fulfillment",
        "Competitive advantage for your brand",
      ],
    },
    cta: "Deliver faster. Impress your customers.",
  },
  "fulfillment-warehousing": {
    pageHeadline: "Fulfillment & Warehousing Services",
    intro:
      "A2Z offers end-to-end fulfillment and warehousing solutions designed to simplify your logistics operations and reduce operational costs.",
    serviceDescription:
      "From inventory storage to order processing and last-mile delivery, we manage the entire fulfillment cycle. Our secure warehouses and systematic handling ensure accuracy, speed, and scalability for growing businesses.",
    keyFeatures: [
      "Secure product storage",
      "Inventory management",
      "Order picking and packing",
      "Delivery coordination",
      "Returns handling",
    ],
    secondaryList: {
      label: "Why Choose A2Z Fulfillment",
      items: [
        "Reduced operational overhead",
        "Faster order processing",
        "Professional handling and packaging",
        "Scalable for seasonal demand",
      ],
    },
    cta: "One partner. Complete fulfillment.",
  },
  "packaging-solutions": {
    pageHeadline: "Professional Packaging Solutions",
    intro:
      "Proper packaging protects your products and reflects your brand. A2Z provides packaging solutions that ensure safe delivery while maintaining a professional appearance.",
    serviceDescription:
      "We offer standardized and customized packaging options suitable for various product types. Our packaging solutions reduce damage risk and enhance customer experience.",
    keyFeatures: [
      "Protective packaging for fragile items",
      "Standard and customized boxes",
      "Secure sealing and labeling",
      "E-commerce-ready packaging",
    ],
    secondaryList: {
      label: "Advantages",
      items: [
        "Reduced returns and damages",
        "Professional presentation",
        "Optimized packaging for delivery",
      ],
    },
    cta: "Protect your products. Deliver with confidence.",
  },
  "cash-on-delivery-cod": {
    pageHeadline: "Cash on Delivery (COD) Service",
    intro:
      "A2Z provides a secure and transparent Cash on Delivery service, helping businesses increase sales by offering customers flexible payment options.",
    serviceDescription:
      "We collect payments on your behalf at delivery and provide accurate reporting and scheduled settlements. Our COD system is trusted by hundreds of merchants across Lebanon.",
    keyFeatures: [
      "Secure cash handling",
      "Accurate order reconciliation",
      "Scheduled payouts",
      "Detailed delivery and payment reports",
    ],
    secondaryList: {
      label: "Business Benefits",
      items: [
        "Increased customer trust",
        "Higher conversion rates",
        "Reduced payment risk",
      ],
    },
    cta: "Sell more with reliable COD services.",
  },
  "branding-service": {
    pageHeadline: "Delivery Branding Services",
    intro:
      "Turn every delivery into a brand touchpoint. A2Z helps businesses strengthen brand visibility through professional delivery branding solutions.",
    serviceDescription:
      "We integrate your brand into the delivery experience, ensuring consistent and professional representation from pickup to doorstep.",
    keyFeatures: [
      "Branded packaging",
      "Logo-labeled delivery materials",
      "Professional brand presentation",
      "Customized delivery experience",
    ],
    secondaryList: {
      label: "Why Branding Matters",
      items: [
        "Stronger brand recognition",
        "Improved customer trust",
        "Professional market presence",
      ],
    },
    cta: "Make your brand visible—one delivery at a time.",
  },
};

export const servicesContent = serviceContent;

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return serviceList.find((s) => s.slug === slug);
}

export function getServiceContent(slug: string): ServiceContent | undefined {
  if (slug in serviceContent) return serviceContent[slug as ServiceId];
  return undefined;
}
