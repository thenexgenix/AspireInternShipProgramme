import React from "react";
import { motion } from "motion/react";
import { useCollabIcon } from "../../hooks/useCollabIcon.js";
import LogoCard from "./LogoCard";

const Client = () => {
  const { collabIcons, loading, error } = useCollabIcon();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Loading collab icons...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className=" bg-[#eef0f7a9] py-12 px-4 sm:px-6 lg:px-8">
      <motion.div className="mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {collabIcons.map((icon, index) => (
          <motion.div
            key={icon.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <LogoCard bank={icon} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Client;
