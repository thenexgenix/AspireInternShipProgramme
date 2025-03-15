import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import whyw from "../../../Assets/AboutUspage/whyw.png";
import quote from "../../../Assets/AboutUspage/quote.png";
import whybg from "../../../Assets/AboutUspage/whybg.png";

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
    return text.split("").map((char, index) => {
      const opacity = Math.min(1, (scrollY - index * 22) / 900);
      const color = opacity > 0.5 ? "#330B51" : "#A1A1A1";

      return (
        <motion.span
          key={index}
          style={{ color }}
          className="inline-block"
          transition={{
            duration: 0.1,
          }}
        >
          {char}
        </motion.span>
      );
    });
  };

  return (
    <div className="mx-2 lg:mx-auto w-full md:max-w-4xl lg:max-w-2/3  my-20">
      <motion.h1
        className="font-semibold text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-600 w-full md:w-2/4 leading-12 lg:leading-16"
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
        className="flex flex-col lg:flex-row justify-between rounded-xl bg-[#FFFFFF] items-center my-28"
        style={{
          backgroundImage: `url(${whybg})`,
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        {/* Image Section */}
        <div className="mx-10">
          <img
            src={whyw}
            alt="A visual representation of the Aspire program"
            className="max-w-full rounded-xl"
          />
        </div>

        {/* Quote Section */}
        <div className="h-fit bg-[#EFF2FA] mx-5 lg:mx-20 p-10 rounded-3xl relative">
          <motion.h2
            className="text-2xl font-semibold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            aria-label="Steve Jobs Quote"
          >
            "Learn continually – there’s <br /> always ‘one more thing’ to
            learn!"
          </motion.h2>
          <p className="text-end my-10 text-gray-700">
            <span className="font-bold">Steve Jobs,</span> Co-founder of Apple
          </p>

          <div className="flex justify-end">
            <img src={quote} alt="Steve Jobs Quote Icon" className="max-w-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
