import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Home/Hero";
import AspireSection from "../../components/Home/AspireSection";
import CareerJourney from "./../../components/Home/CareerJourney";
import aspireSectionData from "../../data/home.aspireSection.json";
import CareerJourneysectiondata from "../../data/home.careenJourney.json";
import CourseGraduates from "../../components/Home/CourseGraduates";
import Testimonials from "../../components/Home/Testimonials";

const Home = () => {
  const memoizedAspireData = useMemo(() => aspireSectionData, []);
  const memoizedCareerJourneydata = useMemo(() => CareerJourneysectiondata, []);

  return (
    <>
      <Helmet>
        <title>Aspire Internship Program</title>
        <meta name="description" content="Aspire offers cutting-edge technology education and career development programs at ITBI CUET, Chittagong. Join our community of learners and transform your future in tech." />
        <meta name="keywords" content="tech education Bangladesh, ITBI CUET, career development, professional training, Aspire education" />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Aspire - Technology Education & Career Development" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Transform your career with Aspire's innovative tech education programs and professional training." />
      </Helmet>
      <section className="bg-primary-color mt-24 pt-8">
        {/* hero-section */}
        <Hero />
        <AspireSection aspireSectionData={memoizedAspireData} />
        <CareerJourney CareerJourneydata={memoizedCareerJourneydata} />
        <CourseGraduates />
        <Testimonials />
      </section>
    </>
  );
};

export default Home;
