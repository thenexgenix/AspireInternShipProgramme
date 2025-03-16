import React from "react";
import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";

const testimonial = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager at NexGenix",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
    quote:
      "The Aspire internship was a game-changer for my career. I learned more in 3 months than I did in a year of traditional education.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Designer at NexGenix",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
    quote:
      "The mentorship I received was invaluable. My mentor helped me navigate the tech industry and land my dream job.",
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "UX Designer at NexGenix",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80",
    quote:
      "Aspire provided me with real-world experience that made me stand out in job interviews. Best decision ever!",
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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonial?.map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  className="bg-white rounded-lg px-6  py-10  shadow-xl transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center mb-10">
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
                    <a
                      href="#"
                      className="ml-auto text-blue-600 hover:text-blue-800"
                      aria-label={`LinkedIn profile of ${testimonial.name}`}
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                  <p className="text-gray-700">{testimonial.quote}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Start  Journey section*/}
        <div className="bg-bg-accent w-full py-16 px-4 sm:px-6 lg:px-8 border-2 border-black  ">
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
