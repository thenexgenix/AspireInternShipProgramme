import React from "react";
import { useLocation } from "react-router";

const Internships = () => {
  const location = useLocation();
  const path = location.pathname.split("/").filter(Boolean);

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Aspire Internship Program - 4th Cohort | Your Company</title>
        <meta
          name="description"
          content="Join the Aspire Internship Program (4th Cohort) to gain hands-on experience in a tech-driven environment. Open to students and recent graduates. Apply now!"
        />
        <meta
          name="keywords"
          content="Aspire Internship, 4th Cohort, tech internship, student internship, digital marketing internship, software development internship"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Company" />
      </head>

      <section className="bg-primary-color mt-24 py-8">
        {/* Header Section */}
        <div
          className="text-center p-8 sm:p-12 md:p-16 text-white"
          style={{
            background:
              "linear-gradient(167.60deg, rgb(95, 29, 145) 42.547%, rgb(255, 180, 197) 135.799%)",
          }}
        >
          {/* Breadcrumbs using DaisyUI */}
          <div className="breadcrumbs text-sm text-white mx-auto max-w-7xl">
            <ul className="justify-center">
              {path?.map((e, i) => (
                <li className="cursor-pointer capitalize" key={i}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-4">
            Aspire Internship Program - 4th Cohort
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Cohort Details with Location and Posted Date */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-12">
            <div>
              <p className="text-gray-600 text-sm">Location</p>
              <p className="font-semibold flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                IUBI CUET, Chittagong
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Start Date</p>
              <p className="font-semibold">20 Mar</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Duration</p>
              <p className="font-semibold">3 Months</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Apply By</p>
              <p className="font-semibold">20 Mar</p>
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
            <span className="text-gray-600 text-sm">10 posted 4 days ago</span>
          </div>

          {/* About Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">About This Internship</h2>
            <p className="text-gray-700 mb-4">
              The Aspire Internship Program is a structured, industry-driven initiative designed to equip aspiring professionals with practical skills, real-world experience, and professional mentorship in the IT and digital sector. As we launch our third cohort, we invite motivated individuals to be part of an immersive learning experience that fosters innovation, teamwork, and career development.
            </p>
            <p className="text-gray-700">
              As an intern, you’ll learn from industry professionals, gain insights into global tech trends, and build a strong foundation for your career. Whether you’re interested in software development, digital marketing, or product management, this program has something for everyone.
            </p>
          </div>

          {/* Program Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Program Highlights</h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Expert-Led Workshops:</strong> Learn from industry professionals and gain valuable insights.
              </li>
              <li>
                <strong>Project-Based Learning:</strong> Work on real-world challenges to build your portfolio.
              </li>
              <li>
                <strong>Collaborative Team Environment:</strong> Develop teamwork, leadership, and problem-solving skills.
              </li>
              <li>
                <strong>Industry Exposure:</strong> Expand your professional network and career prospects.
              </li>
              <li>
                <strong>Mentorship:</strong> Don’t miss this opportunity to gain valuable experience and grow your skills as a Digital Marketing Intern at Aspire. Apply now and take your first step toward a successful career in digital marketing.
              </li>
            </ul>
          </div>

          {/* Earn Certifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
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
            <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Open to students from any educational background.</li>
              <li>Highly suitable for 1st, 2nd, and 3rd-year students.</li>
              <li>Skills: Strong communication, problem-solving, eagerness to learn.</li>
              <li>Commitment: Full-time / Part-time.</li>
            </ul>
          </div>

          {/* Perks */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Perks</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-full">
                Certificate
              </span>
              <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-full">
                Letter of Recommendation
              </span>
              <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-full">
                Flexible work hours
              </span>
              <span className="bg-pink-100 text-pink-700 text-sm font-semibold px-3 py-1 rounded-full">
                Job offer
              </span>
            </div>
          </div>

          {/* Actively On Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Actively On Aspire Internship Program
            </h2>
            <div className="flex items-center justify-between p-4 border border-gray-300 rounded-lg">
              <p className="text-gray-700">
                Hiring since February 2025 | 3 candidates hired
              </p>
            </div>
          </div>

          {/* Apply Button */}
          <div className="text-center">
            <a
              href="/apply"
              className="inline-block bg-purple-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
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