import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Quote from "./quote/quote";
import Mission from "./Misson/Misson";
import Workflow from "./Workflow/Workflow";
import workflowbg from "../../Assets/AboutUspage/workflow.png";

const AboutUs = () => {
  return (
    <div style={{ fontFamily: "'Sen', sans-serif" }} className="bg-[#EFF2FA] ">
      <Header></Header>
      <Banner></Banner>
      <Quote></Quote>
      <Mission></Mission>
      <div className="absolute bg-[#f2efe8]  rounded-lg mt-20 mx-4 lg:mx-40">
        <img src={workflowbg} alt="" />
      </div>
      <Workflow ></Workflow>
    </div>
  );
};

export default AboutUs;
