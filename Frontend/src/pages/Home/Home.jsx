import React, { useMemo } from "react";
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
    <section className="bg-primary-color mt-24 pt-8">
      {/* hero-section */}
      <Hero />
      <AspireSection aspireSectionData={memoizedAspireData} />
      <CareerJourney CareerJourneydata={memoizedCareerJourneydata} />
      <CourseGraduates />
      <Testimonials />
    </section>
  );  
};

export default Home;
