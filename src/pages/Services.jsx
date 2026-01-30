import ServiceCard from "../components/ServiceCard";
import PageWrapper from "../components/PageWrapper";
import {
  Snowflake,
  Fan,
  Wind,
  Building2,
  Thermometer,
  Factory,
  Cpu,
  Square,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

 export const services = [
    {
      title: "Split / Hi-Wall AC",
      description:
        "Installation, servicing, and maintenance of split and hi-wall air conditioning systems.",
      icon: Snowflake,
    },
    {
      title: "Cassette AC",
      description:
        "Efficient cassette AC solutions suitable for offices, showrooms, and commercial interiors.",
      icon: Fan,
    },
    {
      title: "Window AC",
      description:
        "Reliable window AC installation and servicing for residential and commercial use.",
      icon: Square,
    },
    {
      title: "Ductable AC",
      description:
        "End-to-end ductable AC solutions for centralized cooling systems.",
      icon: Wind,
    },
    {
      title: "VRV / VRF Systems",
      description:
        "Advanced VRV and VRF systems for large-scale and energy-efficient buildings.",
      icon: Building2,
    },
    {
      title: "Tower AC",
      description:
        "High-capacity tower air conditioners for halls, auditoriums, and large spaces.",
      icon: Fan,
    },
    {
      title: "Chiller AC Systems",
      description:
        "Air-cooled and water-cooled chiller AC systems for industrial applications.",
      icon: Thermometer,
    },
    {
      title: "Precision AC",
      description:
        "Precision air conditioning for data centers, labs, and critical environments.",
      icon: Cpu,
    },
    {
      title: "Industrial Air Coolers",
      description:
        "Heavy-duty industrial air coolers designed for factories and warehouses.",
      icon: Factory,
    },
  ];

  export default function Services() {
  return (
    <PageWrapper>
      <Helmet>
        <title>HVAC Services in Odisha | NP Cooling Solution</title>
        <meta
          name="description"
          content="NP Cooling Solutions provides HVAC installation, repair, maintenance, and industrial cooling services across Odisha."
        />
        <link
          rel="canonical"
          href="https://npcoolingsolution.com/services"
        />
      </Helmet>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-4">
  Our Services
</h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            NP Cooling Solutions offers a complete range of HVAC and cooling
            services for commercial and industrial projects.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
    </PageWrapper>
  );
}
