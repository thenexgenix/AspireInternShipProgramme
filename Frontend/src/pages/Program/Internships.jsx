import React from "react";
import { FaCalendarAlt, FaHourglassStart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdAppRegistration } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { useLocation } from "react-router";
// import { Helmet } from "react-helmet-async";

const Eligibility = [
  {
    id: 1,
    title: "Open to students from any educational background",
  },
  {
    id: 2,
    title: "Highly suitable for 1st, 2nd, and 3rd-year students",
  },
  {
    id: 3,
    title: "Skills: Strong communication, problem-solving, eagerness to learn",
  },
  {
    id: 4,
    title: "Commitment: Full-time / Part-time",
  },
];

const Internships = () => {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);

  return (
    <>
      <section className="bg-primary-color mt-24 py-8">
        {/* Header Section */}
        <div
          className="text-center p-8 sm:p-12 md:p-16 text-white"
          style={{
            background:
              "linear-gradient(167.60deg, #5F1D91 42.547%, #FFB4C5 135.799%)",
          }}
        >
          {/* Breadcrumbs */}
          <div className="breadcrumbs text-sm text-white mx-auto max-w-7xl">
            <ul className="justify-start">
              <li className="cursor-pointer capitalize">Program</li>
              <li className="cursor-pointer capitalize">Internship</li>
            </ul>
          </div>
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">
            Aspire Internship Program - 4th Cohort
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-2  border-gray-400 mt-5 md:mt-10 lg:mt-15">
          {/* Cohort Details */}
          <div className="mb-10 flex ">
            <IoLocationSharp className="text-xl" />
            <p className="font-semibold flex items-center">
              <span>ITBI CUET, Chittagong.</span>
            </p>
          </div>
          <div className="grid grid-cols-3  gap-10 md:gap-14 lg:gap-20 mb-12">
            <div className="flex flex-col  justify-center items-start gap-2.5">
              <p className="text-gray-700 flex  items-center gap-1.5 ">
                <FaHourglassStart />
                <span>Start Date</span>
              </p>
              <p className="font-semibold">Immediately</p>
            </div>
            <div className="flex flex-col  justify-center items-start gap-2.5">
              <p className="text-gray-700 flex  items-center gap-1.5 ">
                <span>
                  <FaCalendarAlt />
                </span>
                Duration
              </p>
              <p className="font-semibold">3 Months</p>
            </div>
            <div className="flex flex-col  justify-center items-start gap-2.5">
              <p className="text-gray-700 flex   items-center gap-1.5 ">
                <MdAppRegistration />
                <span>Apply By</span>
              </p>
              <p className="font-semibold">28 Mar</p>
            </div>
          </div>

          {/* Frame Section */}
          <div className="flex items-center justify-between mb-12 p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <p className="font-semibold">Frame 3749</p>
            </div>
            <span className="text-gray-600 text-sm">56 applicants</span>
          </div>

          {/* About Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              About This Internship
            </h2>
            <p className="text-gray-700 mb-4">
              The Aspire Internship Program is a structured, industry-driven
              initiative designed to equip aspiring professionals with practical
              skills, real-world experience, and professional mentorship in the
              IT and digital sector. As we launch our fourth cohort, we invite
              motivated individuals to be part of an immersive learning
              experience that fosters innovation, teamwork, and career
              development.
            </p>
            <p className="text-gray-700">
              As an intern, you’ll learn from industry professionals, gain
              insights into global tech trends, and build a strong foundation
              for your career. Whether you’re interested in software
              development, digital marketing, or product management, this
              program has something for everyone.
            </p>
          </div>

          {/* Program Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Program Highlights</h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Expert-Led Workshops:</strong> Learn from industry
                professionals and gain valuable insights.
              </li>
              <li>
                <strong>Project-Based Learning:</strong> Work on real-world
                challenges to build your portfolio.
              </li>
              <li>
                <strong>Collaborative Team Environment:</strong> Develop
                teamwork, leadership, and problem-solving skills.
              </li>
              <li>
                <strong>Industry Exposure:</strong> Expand your professional
                network and career prospects.
              </li>
            </ul>
          </div>

          {/* Earn Certifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Earn Certifications in These Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                Skill-Based Certification
              </span>
              <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                Training & Workshop Certificate
              </span>
            </div>
          </div>

          {/* Eligibility */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Eligibility</h2>
            <ul className=" space-y-2 text-gray-700 flex flex-col gap-2">
              {Eligibility?.map((e) => {
                return (
                  <>
                    <li
                      key={e.id}
                      className="flex gap-2  justify-start items-center"
                    >
                      <RiCheckboxCircleFill className="text-black" />
                      <span>{e.title}</span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>

          {/* Perks */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Perks</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-bg-accent text-[#7c1f85] text-sm font-semibold px-3 py-1 rounded-full">
                Certificate
              </span>
              <span className="bg-bg-accent text-[#7c1f85] text-sm font-semibold px-3 py-1 rounded-full">
                Letter of Recommendation
              </span>
              <span className="bg-bg-accent text-[#7c1f85] text-sm font-semibold px-3 py-1 rounded-full">
                Flexible work hours
              </span>
              <span className="bg-bg-accent text-[#7c1f85] text-sm font-semibold px-3 py-1 rounded-full">
                Job offer
              </span>
            </div>
          </div>

          {/* Actively On Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">
              Actively On Aspire Internship Program
            </h2>
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
              <p className="text-gray-700">
                Hiring since February 2025 | 10 candidates hired
              </p>
            </div>
          </div>

          {/* Apply Button */}
          <div className="text-center">
            <a
              href="/apply"
              className="inline-block bg-[#5F1D91] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#4A1673] transition-colors"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Internships;
