import { motion } from "framer-motion";

export default function ClientCard({ client, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={onClick}
      className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center transition"
    >
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="h-16 object-contain mb-4"
      />

      <h4 className="font-semibold text-gray-800">
        {client.name}
      </h4>

      <span className="text-xs text-gray-500 mt-1">
        {client.industry}
      </span>
    </motion.div>
  );
}
