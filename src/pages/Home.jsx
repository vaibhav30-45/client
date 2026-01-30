import PageWrapper from "../components/PageWrapper";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

import { services } from "./Services";
import { brands } from "../data/brands";
import ClientCard from "../components/ClientCard";
import { clients } from "../data/clients";

import { installations } from "../data/installations";
import InstallationLightbox from "../components/InstallationLightbox";
import { useRef, useState } from "react";
import { useAnimationFrame, motion } from "framer-motion";

export default function Home() {
  /* ================= LIGHTBOX STATE (✅ MUST BE HERE) ================= */
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  /* ================= SERVICES AUTO SCROLL ================= */
  const serviceRef = useRef(null);
  const servicePaused = useRef(false);
  const serviceX = useRef(0);

  useAnimationFrame((_, delta) => {
    if (!serviceRef.current || servicePaused.current) return;

    serviceX.current -= delta * 0.03;
    const width = serviceRef.current.scrollWidth / 2;

    if (Math.abs(serviceX.current) >= width) {
      serviceX.current = 0;
    }

    serviceRef.current.style.transform = `translateX(${serviceX.current}px)`;
  });

  /* ================= BRAND AUTO SCROLL ================= */
  const brandRef = useRef(null);
  const brandPaused = useRef(false);
  const brandX = useRef(0);

  useAnimationFrame(() => {
    if (!brandRef.current || brandPaused.current) return;

    brandX.current -= 0.4;
    const width = brandRef.current.scrollWidth / 2;

    if (Math.abs(brandX.current) >= width) {
      brandX.current = 0;
    }

    brandRef.current.style.transform = `translateX(${brandX.current}px)`;
  });

  /* ================= CLIENT AUTO SCROLL ================= */
  const clientRef = useRef(null);
  const clientPaused = useRef(false);
  const clientX = useRef(0);

  useAnimationFrame((_, delta) => {
    if (!clientRef.current || clientPaused.current) return;

    clientX.current -= delta * 0.03;
    const width = clientRef.current.scrollWidth / 2;

    if (Math.abs(clientX.current) >= width) {
      clientX.current = 0;
    }

    clientRef.current.style.transform = `translateX(${clientX.current}px)`;
  });

  return (
    <PageWrapper>
      <Hero />

      {/* ================= SERVICES SECTION ================= */}
      <section className="pt-20 pb-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive HVAC & cooling solutions for commercial and industrial
            needs.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* GRADIENT FADES */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* SERVICE TRACK */}
          <div
            ref={serviceRef}
            className="flex gap-6 px-4 will-change-transform"
            onMouseEnter={() => (servicePaused.current = true)}
            onMouseLeave={() => (servicePaused.current = false)}
            onTouchStart={() => (servicePaused.current = true)}
            onTouchEnd={() => (servicePaused.current = false)}
          >
            {[...services, ...services].map((service, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px]"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AUTHORISED DEALER SECTION ================= */}
      <section className="pt-8 pb-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase tracking-wide">
            Authorised Dealer & Service Provider
          </h2>
          <p className="mt-3 text-gray-600">
            Trusted partnerships with leading global HVAC brands
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* GRADIENT FADES */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* BRAND TRACK */}
          <div
            ref={brandRef}
            className="flex items-center gap-14 px-6 will-change-transform"
            onMouseEnter={() => (brandPaused.current = true)}
            onMouseLeave={() => (brandPaused.current = false)}
            onTouchStart={() => (brandPaused.current = true)}
            onTouchEnd={() => (brandPaused.current = false)}
          >
            {[...brands, ...brands].map((brand, index) => (
  <div
    key={index}
    className="min-w-[180px] sm:min-w-[220px] flex justify-center"
  >
    <a
      href={brand.url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 rounded-xl transition-all duration-300 ease-out 
                 hover:scale-110 hover:bg-gray-50 hover:shadow-lg"
    >
      <img
        src={brand.logo}
        alt={`${brand.name} brand logo`}
        className="h-16 sm:h-20 object-contain transition-all duration-300 
                   hover:drop-shadow-[0_12px_30px_rgba(59,130,246,0.35)]"
      />
    </a>
  </div>
))}

          </div>
        </div>
      </section>

      {/* ================= INSTALLATION SNAPS ================= */}
      <section className="pt-10 pb-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-4">
              Our Installation Snaps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real project snapshots showcasing our expertise in HVAC &
              electrical installations across diverse industries.
            </p>
          </div>

          {/* MASONRY GRID */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-5 space-y-5">
            {installations.map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                onClick={() => {
                  setActiveIndex(i);
                  setOpen(true);
                }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <p className="text-white font-semibold text-sm">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX */}
        {open && (
          <InstallationLightbox
            images={installations}
            index={activeIndex}
            setIndex={setActiveIndex}
            onClose={() => setOpen(false)}
          />
        )}
      </section>

      {/* ================= OUR VALUABLE CLIENTS ================= */}
      <section className="pt-10 pb-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-4">
            Our Valuable Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations across commercial, industrial,
            healthcare, hospitality, and infrastructure sectors.
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* GRADIENT FADES */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* CLIENT TRACK */}
          <div
            ref={clientRef}
            className="flex gap-6 px-4 will-change-transform"
            onMouseEnter={() => (clientPaused.current = true)}
            onMouseLeave={() => (clientPaused.current = false)}
            onTouchStart={() => (clientPaused.current = true)}
            onTouchEnd={() => (clientPaused.current = false)}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="min-w-[220px] sm:min-w-[260px] md:min-w-[300px]"
              >
                <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      aria-label={`Visit ${client.name} website`}
    >
                <ClientCard client={client} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
