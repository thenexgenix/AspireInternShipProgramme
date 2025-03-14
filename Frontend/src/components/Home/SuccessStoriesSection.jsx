import React from "react";
import { motion } from "motion/react";

const SuccessStoriesSection = ({ rounded }) => {
  return (
    <>
      <div className=" hidden lg:flex justify-between mt-10 md:mt-1 relative ">
        {/* cards-success-story-left */}
        <div className="flex md:translate-x-10 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-bg-accent rounded-2xl p-6 md:max-w-md lg:max-w-xl h-fit"
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

        {/* Right Section */}
        <div className=" hidden lg:flex flex-1  items-center justify-center relative">
          {/* Minimal SVG for decoration */}
          <div className="w-[10%] h-[90%] border-l-4 border-[#F7CFD8]  absolute top-0 left-22 -translate-y-32" />
          <svg
            className="absolute top-30 left-4  rounded-2xl w-40 h-40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
          >
            <rect x="0" y="0" width="200" height="200" fill="#330B51" />
            <circle cx="50" cy="50" r="4" fill="#ffffff" />
            <circle cx="100" cy="50" r="4" fill="#ffffff" />
            <circle cx="150" cy="50" r="4" fill="#ffffff" />
            <circle cx="50" cy="100" r="4" fill="#ffffff" />
            <circle cx="100" cy="100" r="4" fill="#ffffff" />
            <circle cx="150" cy="100" r="4" fill="#ffffff" />
            <circle cx="50" cy="150" r="4" fill="#ffffff" />
            <circle cx="100" cy="150" r="4" fill="#ffffff" />
            <circle cx="150" cy="150" r="4" fill="#ffffff" />
            <circle cx="150" cy="150" r="4" fill="#ffffff" />
            <circle cx="150" cy="150" r="4" fill="#ffffff" />
            <circle cx="150" cy="150" r="4" fill="#ffffff" />
            <circle cx="150" cy="150" r="4" fill="#ffffff" />
          </svg>

          {/* //tild svg left */}

          <svg
            className="absolute top-0 left-20"
            xmlns="http://www.w3.org/2000/svg"
            width="217"
            height="221"
            viewBox="0 0 217 221"
            fill="none"
          >
            <path
              d="M14.3802 14.5541C17.5748 11.2924 17.5748 6.00397 14.3802 2.7422C11.1857 -0.519571 6.00629 -0.519566 2.81175 2.74221C-0.382788 6.00399 -0.382786 11.2924 2.81176 14.5541C6.0063 17.8159 11.1857 17.8159 14.3802 14.5541ZM216.136 218.341L9.68053 7.5408L7.51144 9.75554L213.967 220.556L216.136 218.341Z"
              fill="#F7CFD8"
            />
          </svg>

          {/* //tild svg right */}
          <svg
          className="absolute top-0 right-93"
            xmlns="http://www.w3.org/2000/svg"
            width="203"
            height="221"
            viewBox="0 0 193 221"
            fill="none"
          >
            <path
              d="M2.80439 217.851C5.99961 221.112 11.179 221.111 14.3729 217.849C17.5667 214.586 17.5656 209.298 14.3704 206.037C11.1752 202.776 5.99582 202.777 2.80195 206.039C-0.391918 209.302 -0.390823 214.59 2.80439 217.851ZM9.67217 213.051L216.085 2.20737L213.915 -0.00691608L7.50263 210.837L9.67217 213.051Z"
              fill="url(#paint0_linear_2_208)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_208"
                x1="215.35"
                y1="1.45737"
                x2="4.63705"
                y2="207.912"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#330B51" />
                <stop offset="1" stop-color="#F7CFD8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesSection;
