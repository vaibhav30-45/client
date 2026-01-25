import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function InstallationLightbox({
  images,
  index,
  onClose,
  setIndex,
}) {
  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-lg flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:scale-110 transition"
        >
          <X size={32} />
        </button>

        {/* PREV */}
        <button
          onClick={prev}
          className="absolute left-4 md:left-10 text-white hover:scale-110 transition"
        >
          <ChevronLeft size={36} />
        </button>

        {/* IMAGE */}
        <motion.div
          key={images[index].src}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -100) next();
            if (info.offset.x > 100) prev();
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="max-w-[90vw] max-h-[80vh] text-center"
        >
          <img
            src={images[index].src}
            alt={images[index].title}
            className="max-h-[70vh] mx-auto rounded-2xl shadow-2xl"
          />
          <p className="mt-4 text-white text-lg font-semibold">
            {images[index].title}
          </p>
        </motion.div>

        {/* NEXT */}
        <button
          onClick={next}
          className="absolute right-4 md:right-10 text-white hover:scale-110 transition"
        >
          <ChevronRight size={36} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
