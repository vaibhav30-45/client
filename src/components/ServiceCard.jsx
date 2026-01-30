import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


  

export default function ServiceCard({ icon: Icon, title, description }) {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => navigate("/services")}
      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      {/* ICON */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-4 transition group-hover:bg-primary">
        {Icon && (
          <Icon
            size={28}
            strokeWidth={2}
            stroke="#00AEEF"
            className="group-hover:stroke-white transition"
          />
        )}
      </div>

      {/* TITLE */}
      <h3 className="font-semibold text-lg text-gray-800 group-hover:text-primary mb-2 transition">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
