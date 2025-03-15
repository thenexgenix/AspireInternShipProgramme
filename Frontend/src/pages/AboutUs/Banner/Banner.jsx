import { motion, useScroll, useTransform } from "framer-motion"; // Importing necessary hooks

import banners from "../../../Assets/AboutUspage/banner.png";

const Banner = () => {
  // const { scrollYProgress } = useScroll();
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <>
      <section
        className="w-full md:max-w-5/6 lg:max-w-9/12 mx-auto px-4 lg:px-10 my-10"
        aria-labelledby="banner-title"
      >
        {/* Main Heading */}
        <motion.h1
          id="banner-title"
          className="font-semibold text-3xl md:text-4xl lg:text-5xl text-center lg:text-left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering <span className="text-text-secondary">Future</span>{" "}
          Innovators
          <br /> Through Real{" "}
          <span className="text-text-accent">World Experience</span>
        </motion.h1>

        {/* Content Section */}
        <div className=" relative flex flex-col gap-9 md:gap-20 lg:gap-32 lg:flex-row justify-between items-start md:items-center md mt-15 lg:mt-20">
          {/* Learners Count */}
          <motion.h2
            className="text-text-secondary text-5xl md:text-6xl lg:text-7xl font-bold items-center md:text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            5,000+ <br /> Learners
          </motion.h2>
          {/* Image & Description */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-8 lg:mt-0">
            <img
              src={banners}
              alt="Aspire Internship Program"
              className="w-full max-w-lg lg:max-w-none"
              loading="lazy"
            />
            <motion.p
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="mt-6 text-lg text-gray-700"
            >
              Join the <strong>Aspire Internship Program</strong> and gain
              hands-on experience, industry-relevant skills, and mentorship from
              experts. Explore free courses, work on groundbreaking projects,
              and kickstart your career with us!
            </motion.p>
          </div>{" "}
          {/* <motion.div
            className="absolute top-0 left-0 w-20 h-20 bg-gray-300 mt-10 mx-auto"
            style={{ rotate, scale }} // Apply the calculated rotation and scaling
            transition={{ duration: 0.5 }}
          /> */}
        </div>
      </section>
    </>
  );
};

export default Banner;
