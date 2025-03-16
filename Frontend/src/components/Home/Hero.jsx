import React, { useEffect } from "react";
import { Link } from "react-router";
import { FaCompass } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  animate,
} from "motion/react";
import SuccessStoriesSection from "./SuccessStoriesSection";

const Hero = () => {
  //  vertical scroll position
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 900], [0, 360]); 

  // Motion value for animating the number
  const count = useMotionValue(1);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // Animate number from 1 to 150 on component mount
  useEffect(() => {
    animate(count, 150, { duration: 2, ease: "easeInOut" });
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Rotating line SVG (Top Right) */}
      <motion.svg
        style={{ rotate: rotate }}
        className="absolute z-50 top-0 right-0 w-64 h-64 text-gray-200 opacity-40"
        viewBox="0 0 200 200"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M10,10 L190,190 M40,10 L190,160 M10,40 L160,190"
        />
      </motion.svg>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 md:py-20 "
      >
        <div className="flex flex-col md:flex-row items-center gap-28 md:gap-20   ">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 space-y-8 "
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Bridge The Gap For
              <div className="flex flex-wrap gap-4 mt-2">
                <span className="text-text-secondary">Learning</span>
                <span>&</span>
                <span className="text-text-accent">Industry</span>
              </div>
            </h2>

            <p className="text-gray-600 text-lg">
              The Aspire Internship Program is a professional development
              initiative designed to provide students and young professionals
              with hands-on experience in their chosen fields. This program
              typically focuses on skill-building, mentorship, and real-world
              exposure to industry practices
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/apply">
                  <button className="px-8 py-4 bg-bg-secondary text-white rounded-lg font-medium transition-colors">
                    Apply now
                  </button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/explore">
                  <button className="px-8 py-4 border-2 border-text-secondary text-text-secondary rounded-lg font-medium hover:bg-text-secondary hover:text-white transition-colors">
                    Explore Now
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Success Stories Section */}
          </motion.div>

          {/* Right Section */}

          <div className="relative flex-1 ">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -top-4 -right-4 w-[40%]  h-[107%] bg-bg-accent rounded-2xl"
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className=" relative rounded-2xl overflow-hidden shadow-2xl z-1 "
                >
                  <img
                    src="https://i.postimg.cc/6ppK7f9p/Hero-Image.jpg"
                    alt="Aspire Internship Program"
                    className="w-full h-auto "
                  />
                </motion.div>

                {/* Floating Box (Top Left) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute -top-20 left-2 md:-top-14 md:-left-14 bg-bg-secondary text-white px-6 py-3 rounded-lg shadow-lg z-10"
                >
                  <div className="font-semibold flex flex-col gap-3">
                    <p>1000+ Students Enrolled</p>
                    <div className="avatar-group -space-x-6">
                      {[...Array(5)].map((_, index) => (
                        <div className="avatar" key={index}>
                          <div className="w-12 z-0">
                            <img
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                              alt={`Student ${
                                index + 1
                              } Aspire Internship Program `}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Box (Bottom Right) */}
                {/* svg-img-1 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className=" z-10 mb-3 absolute -right-4 bottom-1/3 bg-bg-secondary p-3  md:p-6 rounded-lg shadow-lg flex gap-3 justify-center items-center "
                >
                  <div className="bg-bg-accent p-1 md:p-3 rounded-xl ">
                    <FaGoogleScholar />
                  </div>
                  <p className="font-medium text-primary-color">
                    Internship Opportunity
                  </p>
                </motion.div>
                {/* svg-img-2 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, scaleX: 1.04 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="z-10 mb-3 absolute -right-4 bottom-1/12 bg-bg-secondary p-3  md:p-6 rounded-lg shadow-lg flex gap-3 justify-center items-center"
                >
                  <div className="bg-bg-accent p-1 md:p-3 rounded-xl ">
                    <FaCompass />
                  </div>
                  <p className="font-medium text-primary-color">
                    Explore new Courses
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* succes-intro-card */}
      <SuccessStoriesSection rounded={rounded} />
    </div>
  );
};

export default Hero;
