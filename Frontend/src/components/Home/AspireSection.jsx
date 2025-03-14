import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  PiLaptopThin,
  PiRocketThin,
  PiUserCheckThin,
  PiGitBranchThin,
} from "react-icons/pi";

const iconMap = {
  PiLaptopThin: PiLaptopThin,
  PiRocketThin: PiRocketThin,
  PiUserCheckThin: PiUserCheckThin,
  PiGitBranchThin: PiGitBranchThin,
};

const AspireSection = memo(({ aspireSectionData }) => {
  return (
    <section className="p-8 mt-10 md:mt-16 rounded-lg md:max-w-5xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-center mb-4 text-text-secondary"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {aspireSectionData.title}
      </motion.h2>
      <motion.p
        className="text-center text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {aspireSectionData.description}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:relative md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:-translate-x-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:h-[120%] md:before:bg-[#FFB4C5]">
        {aspireSectionData.features.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.div
              key={index}
              className={`p-6 flex flex-col items-center text-center 
                 ${
                   index === 0 || index === 2
                     ? "md:translate-y-20"
                     : "translate-y-0"
                 }
                ${
                  index === 2 || index === 3
                    ? "md:border-t-2 border-[#330B51] "
                    : ""
                }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              {Icon && (
                <Icon
                  className={`text-5xl  rounded-2xl font-bold mb-4 ${
                    index === 1 || index === 2
                      ? "text-bg-secondary bg-gray-100 "
                      : "text-bg-accent bg-purple-100"
                  }`}
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
});

export default AspireSection;
