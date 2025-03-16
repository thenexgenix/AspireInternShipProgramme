import React from "react";
import { motion } from "motion/react";

const missionItems = [
  {
    title: "1. Cultivate Talent",
    description:
      "Providing real-world learning to help individuals grow beyond theory.",
  },
  {
    title: "2. Connect with Industry",
    description:
      "Creating valuable connections with industry experts and businesses.",
  },
  {
    title: "3. Drive Impact",
    description:
      "Enabling hands-on projects that foster skills, confidence, and innovation.",
  },
];

const Mission = () => {
  return (
    <div className="mx-1 lg:mx-10 my-20 flex flex-col lg:flex-row justify-between px-3 lg:px-20">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <h1 className="font-semibold text-4xl">
          Empowering Futures, One <br /> Internship at a Time
        </h1>
        <p className="my-10 text-lg">
          Transforming passion into profession by providing real-world experience,
          skills, and opportunities for growth.
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        {missionItems.map((item, index) => (
          <motion.div
            key={index}
            className="my-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-medium">{item.title}</h2>
            <p className="my-2 text-lg">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
