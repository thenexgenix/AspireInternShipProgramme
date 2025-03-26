import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Quote from "./quote/quote";
import Mission from "./Misson/Misson";
import Workflow from "./Workflow/Workflow";
// import workflowbg from "../../Assets/AboutUspage/workflow.png";
import Member from "./member/Member";
import Testimonial from "./Testimonial/Testimonial";

const AboutUs = () => {
  return (
    <div className="bg-primary-color mt-24 mx-auto overflow-hidden ">
      <Header />
      <Banner />
      <Quote />
      <Mission />
      <div className="absolute bg-[#f2efe8]  rounded-lg mt-20 mx-4 lg:mx-40 h-96 w-7xl">
        <img
          src={"https://i.postimg.cc/yNP1WKnv/p1.jpg"}
          alt="NexGenix Team"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <Workflow />
      {/* <Member /> */}
      {/* <Testimonial /> */}
    </div>
  );
};

export default AboutUs;
