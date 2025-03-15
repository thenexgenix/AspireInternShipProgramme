import { useState } from "react";
import m1 from "../../../Assets/AboutUspage/m1.png";
import m2 from "../../../Assets/AboutUspage/m2.png";
import m3 from "../../../Assets/AboutUspage/m3.png";
import m4 from "../../../Assets/AboutUspage/m4.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const teamMembers = [
  { name: "Christoper Joes", role: "Leadership Team", image: m1 },
  { name: "Jow Rogan", role: "UI & UX Designer", image: m2 },
  { name: "Michel Jay", role: "Developer", image: m3 },
  { name: "Todo Roe", role: "CEO", image: m4 },
];

const Member = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(1); 

  const handleNext = () => {
    setHighlightedIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setHighlightedIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <div className="space-y-4 mb-12">
        <p className="text-sm tracking-wide">Our Story</p>
        <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
          The Amazing Team Members Behind Our Success
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="border-0 shadow-none rounded-lg bg-white">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div
              className={`w-full p-5 rounded-b-3xl ${
                index === highlightedIndex ? "bg-purple-600 text-white" : ""
              }`}
            >
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p
                className={`text-sm ${
                  index === highlightedIndex
                    ? "text-[#FFB4C5]"
                    : "text-gray-500"
                }`}
              >
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end items-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="p-2 bg-gray-300 rounded-full hover:bg-[#5F1D91] hover:text-white 
          cursor-pointer transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-gray-300 rounded-full hover:bg-[#5F1D91] hover:text-white
          cursor-pointer transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Member;
