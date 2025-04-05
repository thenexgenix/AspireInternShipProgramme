import React from "react";
import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import sanchari from "../../assets/images/picture/Sanchari Karmakar.png";

const testimonial = [
  {
    id: 1,
    name: "Urmi Karmakar",
    role: "AI Researcher at NexGenix",
    image: "https://i.postimg.cc/FRNcWWHH/IMG-20250328-WA0005.jpg",
    quote:
      "The Aspire Internship transformed my career by giving me hands-on AI research experience that outshone traditional learning.",
  },
  {
    id: 2,
    name: "Mohammad Tahseen",
    role: "UI/UX Designer at NexGenix",
    image: "https://i.postimg.cc/tghWzQyc/IMG-2165.jpg",
    quote:
      "Aspire’s mentorship empowered me to master UI/UX design and confidently secure my dream role in the tech world.",
  },
  {
    id: 3,
    name: "Sanchari Karmakar",
    role: "Administrative & Data Management at NexGenix",
    image: sanchari,
    quote:
      "The practical skills I gained through Aspire in data management gave me a competitive edge in the job market—absolutely worth it!",
  },
];

const Testimonials = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <section className="w-full ">
        <div
          style={{
            background: "radial-gradient(circle, #330B51, #5B1C85)",
          }}
          className="py-16 px-4 sm:px-6 lg:px-8 w-full"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center text-gray-200 mb-12"
            >
              More Success Stories
            </motion.h2>

            {/* testiminail-cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
            >
              {testimonial?.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg px-6  py-10  shadow-xl transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex lg:flex-col xl:flex-row items-center gap-1 mb-10 lg:mb-4 xl:mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16  rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.quote}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Start  Journey section*/}
        <div className="bg-bg-accent w-full py-16 px-4 sm:px-6 lg:px-8   ">
          <div className="max-w-7xl mx-auto text-center flex flex-col justify-center items-center gap-3.5 ">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-3xl font-bold text-text-secondary mb-6"
            >
              Ready to Start Your Journey?
            </motion.h3>
            <p className="text-lg  max-w-2xl  text-gray-700 mb-8">
              Join thousands of successful graduates who launched their careers
              through Aspire Internship.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-colors duration-300"
            >
              Apply Now
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
