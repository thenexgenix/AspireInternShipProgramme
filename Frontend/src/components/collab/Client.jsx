import React from "react";
import { motion } from "framer-motion";
import { useCollabIcon } from "../../hooks/useCollabIcon.js";

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
    <section className="h-[60vh]">

    <div className="bg-[#eef0f7a9] py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {collabIcons.map((icon, index) => (
        <motion.div
        key={icon.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="w-full flex flex-col sm:flex-row items-center gap-6 md:gap-20 bg-white p-6 rounded-lg shadow-md"
        >
          {/* Optimized Image */}
          <img
            src={icon.logo}
            alt={icon.name}
            className="w-72 h-72 object-cover rounded-full shadow-lg"
            />

          <div className="text-center sm:text-left gap-5   flex flex-col mt-5 md:mt-0">
            {/* Title */}
            <h3 className="text-xl font-semibold">{icon.name}</h3>

            {/* Description */}
            <p className="text-gray-600 max-w-2xl mt-2">{icon.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
      </section>
  );
};

export default Client;
