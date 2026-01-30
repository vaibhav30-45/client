import PageWrapper from "../components/PageWrapper";
import { Helmet } from "react-helmet-async";
export default function About() {
  return (
    <PageWrapper>
      <Helmet>
        <title>About NP Cooling Solutions | HVAC Experts in Odisha</title>

        <meta
          name="description"
          content="NP Cooling Solutions is a trusted HVAC and electrical services company in Odisha, established in 2017, specializing in commercial and industrial projects."
        />

        <link
          rel="canonical"
          href="https://npcoolingsolution.com/about"
        />
      </Helmet>
      {/* ================= ABOUT HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-20 pb-14 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-4">
          About Us
        </h1>

        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          <strong>NP Cooling Solutions</strong>, established by{" "}
          <strong>Nilamani Panda</strong> in 2017, specializes in HVAC (Heating,
          Ventilation & Air Conditioning) and Electrical works. We primarily
          focus on <strong>commercial</strong> and <strong>industrial</strong>{" "}
          segments, delivering reliable, energy-efficient, and
          industry-compliant solutions.
        </p>
      </section>

      {/* ================= VISION / MISSION / VALUES ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 grid gap-10 md:grid-cols-3">
          {/* VISION */}
          <div
            className="group bg-white p-8 rounded-3xl shadow-md
      transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div
              className="w-14 h-14 mb-5 flex items-center justify-center rounded-xl
        bg-secondary/10 text-secondary text-2xl font-bold
        transition group-hover:scale-110"
            >
              👁️
            </div>

            <h3 className="text-2xl font-extrabold text-secondary mb-4 uppercase tracking-wide">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To be the leading distributor and repairer of Air Conditioning
              systems and allied products in India within the region by 2024.
            </p>
          </div>

          {/* MISSION */}
          <div
            className="group bg-white p-8 rounded-3xl shadow-md
      transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div
              className="w-14 h-14 mb-5 flex items-center justify-center rounded-xl
        bg-secondary/10 text-secondary text-2xl font-bold
        transition group-hover:scale-110"
            >
              🎯
            </div>

            <h3 className="text-2xl font-extrabold text-secondary mb-4 uppercase tracking-wide">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-relaxed">
              To distribute, install, and service international-quality
              air-conditioning units for commercial and household use, serving
              both domestic and export markets at fair pricing with competitive
              value for our customers.
            </p>
          </div>

          {/* VALUES */}
          <div
            className="group bg-white p-8 rounded-3xl shadow-md
      transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            <div
              className="w-14 h-14 mb-5 flex items-center justify-center rounded-xl
        bg-secondary/10 text-secondary text-2xl font-bold
        transition group-hover:scale-110"
            >
              🤝
            </div>

            <h3 className="text-2xl font-extrabold text-secondary mb-4 uppercase tracking-wide">
              Our Values
            </h3>

            <p className="text-gray-600 leading-relaxed">
              We conduct our business with honesty and integrity, building
              sustainable and mutually beneficial relationships with our clients
              and suppliers to achieve long-term growth and profitability.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* TEAM HEADER */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary uppercase mb-4 tracking-wide">
              Our Team
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings experience, professionalism, and
              commitment to deliver excellence in every project.
            </p>
          </div>

          {/* TEAM CARDS */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {/* MANAGER */}
            <div
              className="group bg-gray-50 rounded-3xl p-6 text-center w-full max-w-xs
  min-h-[350px] flex flex-col justify-center
  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="overflow-hidden rounded-2xl mb-5">
                <img
                  src="/team/rudramadhab-dey.jpg"
                  alt="Rudramadhab Dey"
                  className="w-36 h-36 object-cover mx-auto rounded-2xl
              transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-lg font-bold uppercase text-gray-800 tracking-wide">
                Manager
              </h3>
              <p className="text-secondary font-semibold mt-1">
                Rudramadhab Dey
              </p>
            </div>

            {/* PROPRIETOR (HIGHLIGHTED) */}
            <div
              className="group bg-gray-50 rounded-3xl p-6 text-center w-full max-w-xs
  scale-105 ring-2 ring-secondary min-h-[350px] flex flex-col justify-center
  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="overflow-hidden rounded-2xl mb-5">
                <img
                  src="/team/nilamani-panda.jpg"
                  alt="Nilamani Panda"
                  className="w-36 h-36 object-cover mx-auto rounded-2xl
              transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-lg font-bold uppercase text-gray-800 tracking-wide">
                Proprietor
              </h3>
              <p className="text-secondary font-semibold mt-1">
                Nilamani Panda
              </p>
            </div>

            {/* ACCOUNTANT */}
            <div
              className="group bg-gray-50 rounded-3xl p-6 text-center w-full max-w-xs
  min-h-[350px] flex flex-col justify-center
  transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="overflow-hidden rounded-2xl mb-5">
                <img
                  src="/team/meghna-mahapatra.jpg"
                  alt="Meghna Mahapatra"
                  className="w-36 h-36 object-cover mx-auto rounded-2xl
              transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-lg font-bold uppercase text-gray-800 tracking-wide">
                Accountant
              </h3>
              <p className="text-secondary font-semibold mt-1">
                Meghna Mahapatra
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
