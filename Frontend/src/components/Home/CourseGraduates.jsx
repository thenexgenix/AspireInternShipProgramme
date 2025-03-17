import React from "react";
import { motion } from "framer-motion";
import image from "../../Assets/Stories/person.png";

const profiles = [
  {
    name: "Nadia Sultana",
    role: "Best Designer - 15 projects",
    image: image,
    bgColor: "bg-purple-700",
  },
  {
    name: "Susmoy",
    role: "Content Writer",
    image: image,
    bgColor: "bg-pink-300",
  },
];

const CourseGraduates = () => {
  return (
    <div className="relative flex flex-col  gap-12  items-center justify-center py-12 px-4 md:px-20 bg-primary-color ">
      {/* Top  Text */}
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8 md:pr-20 text-lg md:text-xl w-full  mx-auto text-end "
      >
        Meet Our Top Interns & Successful <br /> Course Graduates
      </motion.p>

      {/* card */}
      <div className="relative flex flex-col items-center md:flex-row md:justify-around w-full max-w-7xl">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center text-center md:text-left md:items-start mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className={`relative ${profile.bgColor} rounded-lg overflow-hidden flex items-center justify-center`}
            >
              {/*  Image */}
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover "
              />
            </div>

            {/*  Name cards  */}
            <div className="mt-4 text-[70%]  -translate-y-16 translate-x-20 font-bold tracking-wide text-black bg-white px-4 py-2 rounded-md shadow-md">
              <motion.h3
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {profile.name}
              </motion.h3>
              <span className="text-[90%]  text-green-600 mt-2">
                {profile.role}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Connecting SVG Between Cards */}
        {/* <motion.div
      className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-center -z-1"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="auto"
        viewBox="0 0 700 382"
        fill="none"
        className="max-w-4xl border"
      >
        <g filter="url(#filter0_d_2_372)">
          <path
            d="M24 29.1414C72.6983 22.817 119.13 23.344 136.259 24.3981C271.721 34.8182 326.146 129.228 411.373 220.456C483.857 295.278 571.744 346.155 677 346.155"
            stroke="url(#paint0_linear_2_372)"
            strokeWidth="12.6489"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_2_372"
            x="0.417448"
            y="0.985861"
            width="699.351"
            height="380.586"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="6.32446" />
            <feGaussianBlur stdDeviation="11.384" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2_372"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2_372"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2_372"
            x1="31.9056"
            y1="34.8217"
            x2="667.513"
            y2="352.626"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.435838" stopColor="#5F1D91" />
            <stop offset="0.636868" stopColor="#F7CFD8" />
            <stop offset="0.995944" stopColor="#FFB4C5" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div> */}
      </div>

      {/* Bottom  Text */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-8 text-lg md:text-xl  w-full mx-auto text-start "
      >
        Discover the talented individuals who have excelled in our programs,
        <br />
        turning their learning into real-world success!
      </motion.p>
    </div>
  );
};

export default CourseGraduates;
