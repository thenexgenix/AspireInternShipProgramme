import { motion } from "motion/react";
import { memo } from "react";

const LogoCard = memo(({ bank }) => {
  return (
    <motion.div
      className="bg-primary-color p-6 rounded-sm shadow-lg hover:shadow-2xl transition-shadow w-full h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
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
});

export default LogoCard;
