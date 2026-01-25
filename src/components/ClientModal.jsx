import { X } from "lucide-react";
import { motion } from "framer-motion";
import StarRating from "./StarRating";

export default function ClientModal({ client, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        className="relative bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <div className="text-center">
          <img
            src={client.logo}
            alt={client.name}
            className="h-20 mx-auto mb-4 object-contain"
          />

          <h3 className="text-2xl font-bold text-gray-800">
            {client.name}
          </h3>

          <StarRating value={client.rating} />

          <p className="text-gray-600 mb-4">
            {client.description}
          </p>

          <div className="bg-gray-50 p-4 rounded-lg text-sm italic text-gray-700">
            “{client.feedback}”
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
