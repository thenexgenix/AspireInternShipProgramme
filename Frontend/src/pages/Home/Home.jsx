import React, { useMemo } from "react";
import Hero from "../../components/Home/Hero";
import AspireSection from "../../components/Home/AspireSection";
import CareerJourney from "./../../components/Home/CareerJourney";
import aspireSectionData from "../../data/home.aspireSection.json";
import CareerJourneysectiondata from "../../data/home.careenJourney.json";

const Home = () => {
  const memoizedAspireData = useMemo(() => aspireSectionData, []);
  const memoizedCareerJourneydata = useMemo(() => CareerJourneysectiondata, []);

  return (
    <section className="bg-primary-color mt-24 py-8">
      {/* hero-section */}
      <Hero />
      <AspireSection aspireSectionData={memoizedAspireData} />
      <CareerJourney CareerJourneydata={memoizedCareerJourneydata} />
    </section>
  );
};

export default Home;