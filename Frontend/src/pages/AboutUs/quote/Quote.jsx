import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import quote from "../../../Assets/AboutUspage/quote.png";
import whybg from "../../../Assets/AboutUspage/whybg.png";
import ceoImage from "../../../Assets/images/picture/Prasanta_day_CEO.png";

// Custom scroll hook
const useScrollEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

const Quote = () => {
  const scrollY = useScrollEffect();

  const splitText = (text) => {
    return text.split(" ").map((word, index) => {
      const opacity = Math.min(1, (scrollY - index * 102) / 900);
      const color = opacity > 0.5 ? "#330B51" : "#A1A1A1";

      return (
        <motion.span
          key={index}
          style={{ color, opacity }}
          className="inline-block mr-2"
          transition={{ duration: 0.1 }}
        >
          {word}
        </motion.span>
      );
    });
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 mx-auto w-full max-w-7xl my-20">
      {/* Animated Heading */}
      <motion.h1
        className="font-semibold text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-600 w-full md:w-2/4 leading-12 lg:leading-16 flex flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {splitText(
          "Why Aspire? Unlock Your Potential with Real-World Experience"
        )}
      </motion.h1>

      {/* Content Section */}
      <div
        className="flex flex-col lg:flex-row justify-between rounded-xl bg-[#FFFFFF] items-center mt-16"
        style={{
          backgroundImage: `url(${whybg})`,
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-10">
          <img
            src={ceoImage}
            alt="A visual representation of the Aspire program"
            className="w-fit h-[40vh] object-contain rounded-xl"
          />
        </div>

        {/* Quote Section */}
        <div className="w-full lg:w-1/2 bg-[#EFF2FA] p-6 sm:p-10 rounded-3xl mx-4 lg:mx-10 my-10 lg:my-0 relative">
          <motion.h2
            className="text-xl  md:text-2xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            aria-label="Steve Jobs Quote"
          >
            The Aspire Internship Program has always been dedicated to
            empowering students by providing them with hands-on experience,
            industry insights, and professional development opportunities
          </motion.h2>
          <p className="text-end my-6 text-gray-700 text-sm sm:text-base">
            <span className="font-bold">Prashanta Dey,</span> Program Director
          </p>

          <div className="flex justify-end">
            <img
              src={quote}
              alt="Prashanta Dey's Quote Icon"
              className="w-16 sm:w-24 md:w-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
