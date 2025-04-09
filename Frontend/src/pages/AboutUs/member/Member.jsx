import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowRight } from "react-icons/fa";

const teamMembers = [
  {
    name: "Sanchari Karmakar",
    role: "Administrative & Data Management",
    image: "https://i.postimg.cc/3R6qDjRj/Shakti-Karmakar-nex-Genix.png",
  },
  {
    name: "Mohammad Tahseen",
    role: "UI & UX Designer",
    image: "https://i.postimg.cc/BbPyQgrF/Mohammad-Tahseen-nexgenic.jpg",
  },
  {
    name: "Jamshadul Islam Minhaj",
    role: "Graphics Design",
    image:
      "https://i.postimg.cc/RCk8ST24/Mohammad-Jamshadul-Islam-Minhaj-nexgenix.png",
  },
  {
    name: "Asaduzzaman Asad",
    role: "Full Stack Developer",
    image: "https://i.postimg.cc/MHjQPMBx/Asaduzzaman-nexgenix.png",
  },
];

const Member = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 760);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 mb-12 relative "
      >
        <p className=" w-fit text-lg font-semibold relative before:content-[''] before:absolute before:w-[100px] before:h-[2px] before:bg-bg-secondary before:-left-0 before:top-1/2 before:-translate-y-1/2 pl-28">
          Our story
        </p>
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
        Meet Our Top Interns & Learners Rising Talent
        </h2>
      </motion.div>

      {isMobile ? (
        <div className="relative w-full max-w-lg mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
            >
              <div className="w-48 h-48 overflow-hidden rounded-full mb-4">
                <img
                  src={teamMembers[currentIndex].image}
                  alt={`${teamMembers[currentIndex].name} - ${teamMembers[currentIndex].role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl mb-1">
                {teamMembers[currentIndex].name}
              </h3>
              <p className="text-gray-500">{teamMembers[currentIndex].role}</p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={handleNext}
            className="mt-6  px-4 py-4 bg-gradient-to-r from-purple-800 to-indigo-900 text-white text-lg font-semibold   rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <FaArrowRight />
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="border-0 shadow-lg rounded-lg bg-white p-6 text-center"
            >
              <div className="w-48 h-48 mx-auto overflow-hidden rounded-full mb-4">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Member;
