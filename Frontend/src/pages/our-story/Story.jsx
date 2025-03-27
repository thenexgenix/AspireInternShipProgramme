import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderSection from "./HeaderSection/HeaderSection";
import Ambition from "./Ambition/Ambition";
import AllStory from "./AllStory/AllStory";
import VideoSection from "./VideoSection/VideoSection";

const Story = () => {
  return (
    <>
      <Helmet>
        <title> Our Story </title>
        <meta
          name="description"
          content="From humble beginnings to becoming a leading tech education provider in Chittagong. Explore Aspire's journey of innovation, growth, and commitment to excellence."
        />
        <meta
          name="keywords"
          content="Aspire history, tech education journey, ITBI CUET success story, educational innovation"
        />
        <link rel="canonical" href="/our-story" />
      </Helmet>
      <div className="bg-primary-color mt-24 mx-auto overflow-hidden">
        {/* header section */}
        <HeaderSection />
        <div className="max-w-7xl mx-auto">
          {/* video section */}
          <VideoSection />
          {/* ambition section */}
          <Ambition />
          {/* story card section */}
          <AllStory />
        </div>
      </div>
    </>
  );
};

export default Story;
