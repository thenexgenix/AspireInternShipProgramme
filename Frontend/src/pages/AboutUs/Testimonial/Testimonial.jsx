import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'; 
import quote from "../../../Assets/AboutUspage/quote.png";
import t1 from "../../../Assets/AboutUspage/t1.png";
import t2 from "../../../Assets/AboutUspage/t2.png";
import t3 from "../../../Assets/AboutUspage/t3.png";
import t4 from "../../../Assets/AboutUspage/t4.png";

const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesPerPage, setSlidesPerPage] = useState(2); 

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
        "The perfect platform for learning and growth! The internship showed me to apply my skills in valuable experience that prepared me for my future career.",
      author: "Jamatul Fardous",
      image: t4,
    },
  ];


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { 
        setSlidesPerPage(1); 
      } else { 
        setSlidesPerPage(2); 
      }
    };

   
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = testimonials.length;
  const totalDots = Math.ceil(totalSlides / slidesPerPage); 

  return (
    <div className="w-full bg-[#F5F4FF] py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Learners & Interns Say About Us</h2>
          <div>
            <div>
              <img src="../../../Assets/AboutUspage/Line.png" alt="" />
              <p>Testimonial</p>
            </div>
            <p className="text-muted-foreground text-lg mt-3">
              Real experiences, real growth—hear from our learners and interns about their journey with Aspire!
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out gap-6"
            style={{ transform: `translateX(-${activeSlide * (100 / slidesPerPage)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-full bg-[#FFFFFF] p-10 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <div className="space-y-2">
                  <div className='flex justify-between'>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 fill-primary text-[#FFAC33]" />
                      ))}
                    </div>
                    <img src={quote} alt="" />
                  </div>
                  <h3 className="font-semibold">{testimonial.text}</h3>
                </div>
                <div className="space-y-4">
                  <blockquote className="text-muted-foreground">"{testimonial.content}"</blockquote>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="font-medium">{testimonial.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 cursor-pointer h-2 rounded-full transition-colors ${activeSlide === index ? 'bg-[#5F1D91]' : 'bg-gray-400'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
