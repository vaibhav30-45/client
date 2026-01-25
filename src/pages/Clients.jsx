import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import ClientCard from "../components/ClientCard";
import ClientModal from "../components/ClientModal";
import { clients } from "../data/clients";

export default function Clients() {
  const [activeClient, setActiveClient] = useState(null);

  const clientSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NP Cooling Solutions",
    url: "https://npcoolingsolutions.com",
    customer: clients.map((c) => ({
      "@type": "Organization",
      name: c.name,
      industry: c.industry,
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: c.rating,
          bestRating: "5",
        },
        reviewBody: c.feedback,
      },
    })),
  };

  return (
    <PageWrapper>
      {/* ✅ SEO CLIENT SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clientSchema),
        }}
      />

      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-4">
            Our Valuable Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to work with reputed organizations across healthcare,
            hospitality, industrial, and commercial sectors.
          </p>
        </div>

        {/* CLIENT GRID */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <ClientCard
              key={client.name}
              client={client}
              onClick={() => setActiveClient(client)}
            />
          ))}
        </div>
      </section>

      {/* MODAL */}
      {activeClient && (
        <ClientModal
          client={activeClient}
          onClose={() => setActiveClient(null)}
        />
      )}
    </PageWrapper>
  );
}
