import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";
import quote from "../../../Assets/AboutUspage/quote.png";
import sanchari from "../../../Assets/images/picture/Sanchari Karmakar.png";
import Sohel from "../../../Assets/images/picture/Mohammad Sohel.png";
import PinkeyDey from "../../../Assets/images/picture/Pinki Dey.png";
import Afsana from "../../../Assets/images/picture/Afsana Tasnim Labonno.png";
import Riaz from "../../../Assets/images/picture/Riaz Uddin Ahmed.png";

const testimonials = [
  {
    rating: 5,
    text: "A Career-Defining AI Experience",
    content:
      "The Aspire Internship transformed my career by giving me hands-on AI research experience that outshone traditional learning.",
    author: "Urmi Karmakar",
    image: "https://i.postimg.cc/FRNcWWHH/IMG-20250328-WA0005.jpg",
  },
  {
    rating: 5,
    text: "Designed My Future with Aspire",
    content:
      "Aspire’s mentorship empowered me to master UI/UX design and confidently secure my dream role in the tech world.",
    author: "Mohammad Tahseen",
    image: "https://i.postimg.cc/tghWzQyc/IMG-2165.jpg",
  },
  {
    rating: 5,
    text: "Gained Practical Skills That Matter",
    content:
      "The practical skills I gained through Aspire in data management gave me a competitive edge in the job market—absolutely worth it!",
    author: "Sanchari Karmakar",
    image: sanchari,
  },
  {
    rating: 5,
    text: "Transformed My Career Through the Internship",
    content:
      "The Aspire Internship Program transformed my career. I gained practical skills, worked with real teams, and finally understood how the industry works.",
    author: "Mohammed Sohel",
    image: Sohel,
  },
  {
    rating: 5,
    text: "Incredible Internship Experience",
    content:
      "The internship provided a well-structured learning path and real projects that helped me build my portfolio. I now feel confident entering the tech world.",
    author: "Pinkey Dey",
    image: PinkeyDey,
  },
  {
    rating: 5,
    text: "Gained Confidence with Real Projects",
    content:
      "Working on real-world tasks during the internship boosted my confidence. The mentors were supportive, and the experience was beyond my expectations.",
    author: "Afsana Tasnim Labonno",
    image: Afsana,
  },
  {
    rating: 4,
    text: "Best Internship for Skill Growth",
    content:
      "This internship helped me grow both technically and professionally. It bridged the gap between theory and real-world application perfectly.",
    author: "Riaz Uddin Ahmed Azad",
    image: Riaz,
  },
];

const Testimonial = () => {
  // const [activeSlide, setActiveSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(2);
  const [carddrag, setcarddrag] = useState(100);

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
            What Our Interns Say About Us
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
