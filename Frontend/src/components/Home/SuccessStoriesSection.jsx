import React from "react";
import { motion } from "motion/react";

const SuccessStoriesSection = ({ rounded }) => {
  return (
    <>
      <div className="lg:flex justify-between mt-10  md:mt-1 relative ">
        {/* cards-success-story-left */}
        <div className="flex md:translate-x-10 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-bg-accent relative  rounded-2xl p-6 md:max-w-md lg:max-w-xl h-fit"
          >
            <div className="flex items-center gap-10 md:gap-10 lg:gap-30">
              <div>
                <motion.h3 className="text-4xl md:text-5xl lg:text-6xl font-bold flex w-[60px]">
                  <motion.span>{rounded}</motion.span> +
                </motion.h3>
                <p className="text-gray-800">Success stories</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">
                  Choose what you want to learn with us!
                </h3>
                <p>
                  We offer a vast range of courses on a variety of topics, so
                  you can choose the ones that interest you the most.
                </p>
              </div>
            </div>
          </motion.div>

          {/* svg-lines (left-section) */}
          <motion.svg
            className="hidden md:inline-block -translate-y-40 -z-50"
            xmlns="http://www.w3.org/2000/svg"
            width="480"
            height="312"
            viewBox="0 0 480 312"
            fill="none"
          >
            <motion.path
              d="M1.1593 310.698L479 1.99996"
              stroke="url(#paint0_linear_2_183)"
              strokeWidth="3.1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_183"
                x1="2.27143"
                y1="312.42"
                x2="476.272"
                y2="6.41994"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.146" stopColor="#F7CFD8" />
                <stop offset="0.726" stopColor="#5F1D91" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesSection;
