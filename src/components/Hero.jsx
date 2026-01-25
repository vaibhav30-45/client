import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax effects
  const bgY = useTransform(scrollY, [0, 600], [0, 180]);
  const overlayY = useTransform(scrollY, [0, 600], [0, 90]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* PARALLAX BACKGROUND IMAGE (SLOW ANIMATION) */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 bg-cover bg-center scale-110"
        animate={{ scale: [1.1, 1.15, 1.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
      </motion.div>

      {/* PARALLAX GRADIENT OVERLAY */}
      <motion.div
        style={{ y: overlayY }}
        className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/70 to-secondary/80"
        aria-hidden="true"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Professional HVAC & <br className="hidden md:block" />
          Cooling Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
        >
          Delivering reliable Commercial & Industrial HVAC services across
          India since 2017.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="bg-white text-primary font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get a Quote
          </Link>

          <Link
            to="/services"
            className="border border-white/80 text-white px-8 py-3 rounded-full hover:bg-white/10 transition"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 z-10 flex flex-col items-center text-white"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="text-sm tracking-wide mb-1"
        >
          Scroll Down
        </motion.span>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/80 rounded-full flex justify-center"
        >
          <span className="w-1 h-2 bg-white rounded-full mt-1" />
        </motion.div>
      </motion.div>
    </section>
  );
}
