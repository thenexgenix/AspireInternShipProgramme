import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";
import quote from "../../../Assets/AboutUspage/quote.png";
import t1 from "../../../Assets/AboutUspage/t1.png";
import t2 from "../../../Assets/AboutUspage/t2.png";
import t3 from "../../../Assets/AboutUspage/t3.png";
import t4 from "../../../Assets/AboutUspage/t4.png";

const testimonials = [
  {
    rating: 5,
    text: "A Game-Changer for My Career!",
    content:
      "The Aspire Internship Program was a game-changer for me! I gained hands-on experience, worked on real projects, and built connections that helped me land my first job.",
    author: "Michel Ruel",
    image: t1,
  },
  {
    rating: 5,
    text: "Free Courses That Truly Add Value!",
    content:
      "I never thought free courses could be this valuable! The learning materials and structured mentorship helped me improve my skills in a practical way.",
    author: "Sara Ahmad",
    image: t2,
  },
  {
    rating: 5,
    text: "Real-World Projects That Boost Confidence",
    content:
      "Really gives me the confidence to take on industry-level projects. The support and guidance provided here were incredible!",
    author: "Arif Khan",
    image: t3,
  },
  {
    rating: 5,
    text: "The Best Platform for Learning",
    content:
      "The perfect platform for learning and growth! The internship showed me how to apply my skills in real-world scenarios, preparing me for my future career.",
    author: "Jamatul Fardous",
    image: t4,
  },
];

const Testimonial = () => {
  // const [activeSlide, setActiveSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(2);
  const [carddrag, setcarddrag] = useState(400);

  useEffect(() => {
    const updateSlidesPerPage = () => {
      if (window.innerWidth < 640) {
        setSlidesPerPage(1);
        setcarddrag(300);
      } else if (window.innerWidth < 1024) {
        setSlidesPerPage(2);
        setcarddrag(500);
      } else {
        setSlidesPerPage(3);
        setcarddrag(300);
      }
    };

    updateSlidesPerPage();
    window.addEventListener("resize", updateSlidesPerPage);
    return () => window.removeEventListener("resize", updateSlidesPerPage);
  }, []);

  const totalSlides = testimonials.length;
  // const totalDots = Math.ceil(totalSlides / slidesPerPage);

  return (
    <section
      className="w-full bg-[#F5F4FF] py-16"
      aria-labelledby="testimonials-title"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2
            id="testimonials-title"
            className="text-3xl md:text-4xl font-bold"
          >
            What Our Learners & Interns Say About Us
          </h2>
          <div>
            <p className=" text-lg font-semibold relative before:content-[''] before:absolute before:w-[100px] before:h-[2px] before:bg-bg-secondary before:-left-0 before:top-1/2 before:-translate-y-1/2 pl-28">
              Testimonial
            </p>
            <p className="text-muted-foreground text-lg mt-3">
              Real experiences, real growth—hear from our learners and interns
              about their journey with Aspire!
            </p>
          </div>
        </header>

        {/* Testimonials Slider */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 cursor-grab"
            drag="x"
            dragConstraints={{
              left: -((totalSlides - slidesPerPage) * carddrag),
              right: 0,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33%-12px)] bg-white p-6 rounded-lg shadow-md"
                aria-label={`Testimonial by ${testimonial.author}`}
              >
                {/* Star Rating & Quote */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="w-4 h-4 text-[#FFAC33]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <img
                      src={quote}
                      alt="Quote Icon"
                      className="w-6 h-6"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-semibold text-xl">{testimonial.text}</h3>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-600 italic mt-3">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <span className="font-medium">{testimonial.author}</span>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
        <div className="flex items-center justify-center w-full gap-4 mt-8">
          <div className="h-[1px] bg-gray-400 flex-1"></div>
          <div className="flex gap-1">
            {[...Array(3).fill(1)].map((_, index) => {
              return (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === 1 ? "bg-bg-secondary scale-125" : "bg-gray-400"
                  }`}
                ></div>
              );
            })}
          </div>
          <div className="h-[1px] bg-gray-400  flex-1"></div>
        </div>

        {/* Pagination Dots */}
        {/* <nav className="flex justify-center gap-2 mt-8" aria-label="Testimonial navigation">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSlide === index ? "bg-[#5F1D91] scale-125" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </nav> */}
      </div>
    </section>
  );
};

export default Testimonial;
