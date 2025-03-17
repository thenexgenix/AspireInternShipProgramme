import { motion } from "motion/react";

const LogoCard = ({ bank }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full"

      >
        <img
          src={bank.logo}
          alt={`${bank.name} logo`}
          className="w-full h-full object-cover"
        />
      </div>
      <motion.h3
        className="text-center text-gray-800 font-semibold"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {bank.name}
      </motion.h3>
    </motion.div>
  );
};

export default LogoCard;
