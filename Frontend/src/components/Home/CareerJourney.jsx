import React, { memo } from "react";
import { motion } from "motion/react";
import { PiStar, PiCertificate } from "react-icons/pi";
import { FcCalendar, FcCollaboration } from "react-icons/fc";

const iconMap = {
  PiCalendarBlank: FcCalendar,
  PiUsersThree: FcCollaboration,
  PiStar: PiStar,
  PiCertificate: PiCertificate,
};

const CareerJourney = memo(({ CareerJourneydata }) => {
  return (
    <section className="max-w-7xl mx-auto p-8 mt-5 md:mt-12 lg:mt-32">
      {/* Hero Section */}
      <motion.div
        className="text-start mb-20 flex flex-col md:flex-row gap-10  justify-between items-center "
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold flex-1 text-text-secondary">
          {CareerJourneydata.title}
        </h2>
        <p className="text-gray-700 mt-2 flex-1">
          {CareerJourneydata.description}
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Features */}
        <div className="flex-1 space-y-6">
          {CareerJourneydata.features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                className="flex  items-center gap-4 md:p-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {Icon && (
                  <Icon className="text-4xl rounded-xl md:text-5xl text-text-secondary bg-gray-300 md:p-2" />
                )}

                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Image */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={CareerJourneydata.imageUrl}
            alt="Career Journey Aspire internship program"
            className="rounded-lg shadow-lg aspect-square object-cover md:h-[400px] lg:h-[500px] relative z-40"
          />
          <div className=" blur-[2px] absolute inset-0 w-[300px] md:w-[400px] lg:w-[500px] h-full translate-x-12 translate-y-5 rounded-lg border-4 border-[#ebc3cc]  before:absolute before:inset-0 before:w-full before:h-full before:rounded-lg before:bg-gradient-to-r before:from-[#5F1D91] before:to-[#FFB4C5] before:opacity-20 before:-z-10"></div>
        </motion.div>
      </div>
    </section>
  );
});

export default CareerJourney;
