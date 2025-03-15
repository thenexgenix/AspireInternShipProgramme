import React from "react";
import { motion } from "motion/react";
import workFrame from "../../../Assets/AboutUspage/workfram.png";

const workflowData = [
  {
    title: "Apply & Join",
    number: "01",
    description:
      "Sign up for internships & courses that match your interests and career goals.",
  },
  {
    title: "Learn & Upskill",
    number: "02",
    description:
      "Gain hands-on experience through real-world projects, expert-led courses, and mentorship.",
  },
  {
    title: "Work on Projects",
    number: "03",
    description:
      "Collaborate on Aspire projects, solve industry challenges, and build a strong portfolio.",
  },
  {
    title: "Get Certified & Grow",
    number: "04",
    description:
      "Collaborate on Aspire projects, solve industry challenges, and build a strong portfolio.",
  },
];

const Workflow = () => {
  return (
    <div className="mx-0.5 lg:mx-10 my-20">
      <div className="bg-[#5F1D91] mt-80 pt-10 lg:pt-60 pb-20 px-3 lg:px-40 rounded-2xl text-white">
        <p className="text-lg font-semibold relative before:content-[''] before:absolute before:w-[100px] before:h-[2px] before:bg-bg-accent before:-left-0 before:top-1/2 before:-translate-y-1/2 pl-28">
          Workflow
        </p>
        <div className="my-20 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center mb-40">
          <h1 className="font-semibold text-4xl text-white">
            How Aspire Works – Your <br /> Path to Success
          </h1>
          <p>
            Gain real-world experience, upskill with free courses, <br /> and
            work on impactful projects to shape your future.
          </p>
        </div>
        <div>
          <motion.img
            className="absolute hidden lg:flex -mt-28 ml-36"
            src={workFrame}
            alt="Workflow Frame"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 lg:mt-20 gap-5 lg:gap-40">
            {workflowData.map((item, index) => (
              <motion.div
                key={index}
                className="w-full lg:w-72 p-10 rounded-md backdrop-blur-[20.01px] bg-gradient-to-b from-[rgba(255,180,197,0.07)] via-[rgba(153,153,153,0.07)] to-[rgba(153,153,153,0.07)] shadow-md text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once: true}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <div className="text-lg font-bold my-2 flex justify-center items-center">
                  <p className="rounded-full w-fit px-3 py-2 bg-[#330B51]">
                    {item.number}
                  </p>
                </div>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
