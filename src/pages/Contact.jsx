import PageWrapper from "../components/PageWrapper";
import ContactForm from "../components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <PageWrapper>
      {/* ================= CONTACT HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 pt-20 pb-14 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-primary uppercase mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with NP Cooling Solutions for reliable HVAC & Electrical
          services. We’re here to help you.
        </p>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* ===== LEFT: CONTACT INFO + MAP ===== */}
          <div className="space-y-8">
            {/* INFO CARD */}
            <div className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-bold text-secondary uppercase mb-6">
                Contact Information
              </h2>

              <div className="space-y-5">
                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1" size={24} />
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Address:</strong>
                    <br />
                    Plot No: KC/53  , Kharabela Complex  , Kolathia, Khandagiri  
                    <br />
                    Bhubaneswar, Odisha – 751030
                  </p>
                </div>

                {/* EMAIL */}
                <div className="flex items-center gap-4">
                  <Mail className="text-primary" size={22} />
                  <p className="text-gray-700">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:npcoolingsolutions@gmail.com"
                      className="text-secondary hover:underline"
                    >
                      npcoolingsolutions@gmail.com
                    </a>
                  </p>
                </div>

                {/* PHONE */}
                <div className="flex items-center gap-4">
                  <Phone className="text-primary" size={22} />
                  <p className="text-gray-700">
                    <strong>Mobile:</strong>{" "}
                    <a
                      href="tel:+916371073303"
                      className="text-secondary hover:underline"
                    >
                      +91 6371073303
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-3xl shadow-md">
              <iframe
                title="NP Cooling Solutions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.626013443303!2d85.80317787340877!3d20.303964412281257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19083633123cb3%3A0xc4c2123933b30b19!2sEkamra%20Kanan%20Botanical%20Gardens!5e1!3m2!1sen!2sin!4v1769201421732!5m2!1sen!2sin"
                className="w-full h-72 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* ===== RIGHT: CONTACT FORM ===== */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-bold text-secondary uppercase mb-6">
              Send Us a Message
            </h2>

            <ContactForm />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
