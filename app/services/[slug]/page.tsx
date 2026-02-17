import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServiceContent, getServiceDetailImagePath, getServiceDetailImageFallbackPath, type ServiceId } from "@/lib/services-data";
import { SITE_URL } from "@/lib/site-config";
import ServiceDetailImage from "@/components/ServiceDetailImage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const VALID_SLUGS: ServiceId[] = [
  "local-delivery",
  "same-day-next-day-delivery",
  "fulfillment-warehousing",
  "packaging-solutions",
  "cash-on-delivery-cod",
  "branding-service",
];

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const content = getServiceContent(slug);
  if (!service || !content) return { title: "Service" };
  return {
    title: service.title,
    description: content.intro,
    openGraph: {
      title: `${service.title} | A2Z Delivery Services`,
      description: content.intro,
      url: `${SITE_URL}/services/${slug}`,
    },
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const content = getServiceContent(slug);

  if (!service || !content) notFound();

  const imageWebp = getServiceDetailImagePath(slug as ServiceId);
  const imageFallback = getServiceDetailImageFallbackPath(slug as ServiceId);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-[5.5rem] sm:pt-[6.5rem] md:pt-[7.5rem] lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl mt-4">
          <div className="relative w-fit max-w-full overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 rounded-xl pointer-events-none" />
            <ServiceDetailImage
              primarySrc={imageWebp}
              fallbackSrc={imageFallback}
              fallbackSrc2={service.image}
              alt={service.title}
              className="max-w-full h-auto w-auto block rounded-xl"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20 max-w-5xl">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {content.pageHeadline}
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl">
            {content.intro}
          </p>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-10 max-w-3xl">
            {content.serviceDescription}
          </p>

          <div className="grid gap-10 md:gap-14 max-w-3xl">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3">
                {content.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {content.secondaryList && (
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {content.secondaryList.label}
                </h2>
                <ul className="space-y-3">
                  {content.secondaryList.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="rounded-xl bg-blue-50 border border-blue-100 p-5 sm:p-6 md:p-8">
              <p className="text-base sm:text-lg font-medium text-gray-900 break-words">{content.cta}</p>
              <Link
                href="/#contact"
                className="inline-flex items-center mt-4 font-semibold text-blue-600 hover:text-blue-700 text-sm sm:text-base flex-wrap"
              >
                Get in touch
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
