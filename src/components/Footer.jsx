import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";
import { useEffect, useState } from "react";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Clients", path: "/clients" },
  { label: "Contact Us", path: "/contact" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary text-white"
      >
        {/* GLOW EFFECT */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/30 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/30 blur-[120px] animate-pulse" />

        {/* CONTENT */}
        <div className="relative max-w-7xl mx-auto px-6 py-20 grid gap-12 lg:grid-cols-3">
          {/* MAP */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-white/10 backdrop-blur-lg">
            <iframe
              title="NP Cooling Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.626013443303!2d85.80317787340877!3d20.303964412281257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19083633123cb3%3A0xc4c2123933b30b19!2sEkamra%20Kanan%20Botanical%20Gardens!5e1!3m2!1sen!2sin!4v1769201421732!5m2!1sen!2sin"
              className="w-full h-84 border-0"
              loading="lazy"
            />
          </div>

          {/* BRAND + LINKS */}
          <div className="flex flex-col justify-center gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">NP Cooling Solutions</h2>
              <p className="text-white/80 max-w-md">
                Commercial & Industrial HVAC experts delivering efficient,
                reliable, and scalable cooling solutions across India.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {footerLinks.map(({ label, path }) => (
                  <li key={label}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `transition cursor-pointer ${
                          isActive
                            ? "text-white font-medium"
                            : "text-white/80 hover:text-white"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col justify-center gap-6">
            <h4 className="text-lg font-semibold">Contact</h4>

            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>npcoolingsolutions@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 6371073303</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <p className="text-white-700 leading-relaxed">
                  <strong>Address:</strong>
                  <br />
                  House-8, Ekamara Park, Jaydev Vihar,
                  <br />
                  Bhubaneswar, Odisha – 751001
                </p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61586756799923"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/nilamanipandacooling/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 text-center py-4 text-sm text-white/70">
          © {new Date().getFullYear()} NP Cooling Solutions. All Rights
          Reserved.
        </div>
      </motion.footer>

      {/* SCROLL TO TOP */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
