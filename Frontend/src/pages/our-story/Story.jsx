import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import Ambition from "./Ambition/Ambition";
import AllStory from "./AllStory/AllStory";
import VideoSection from "./VideoSection/VideoSection";

const Story = () => {
  return (
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
  );
};

export default Story;
