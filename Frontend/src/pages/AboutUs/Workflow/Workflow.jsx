import React from "react";

import workFrame from "../../../Assets/AboutUspage/workfram.png";

const Workflow = () => {
  return (
    <div className="mx-0.5  lg:mx-10 my-20">
      <div className="bg-[#5F1D91] mt-80 pt-10 lg:pt-60 pb-20 px-3 lg:px-40 rounded-2xl text-white">
        <img src="../../../Assets/AboutUspage/Line.png" alt="" />{" "}
        <span>Workflow</span>
        <div className="my-20 flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center mb-40">
          <h1 className="font-semibold text-4xl text-white">
            How Aspire Works – Your <br /> Path to Success
          </h1>
          <p>
            Gain real-world experience, upskill with free courses, <br /> and
            work on impactful projects to shape your future.
          </p>
        </div>
        <div>
          <img className="absolute hidden lg:flex -mt-28 ml-36" src={workFrame} alt="" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 lg:mt-20 gap-5 lg:gap-40 ">
            <div className="w-full lg:w-72 p-10 rounded-md backdrop-blur-[20.01px] bg-gradient-to-b from-[rgba(255,180,197,0.07)] via-[rgba(153,153,153,0.07)] to-[rgba(153,153,153,0.07)] shadow-md text-center">
              <h1 className="text-lg font-semibold">Apply & Join</h1>
              <div className="text-lg font-bold my-2  flex justify-center items-center">
                <p className="rounded-full w-fit px-3 py-2 bg-[#330B51]">01</p>
              </div>
              <p className="text-sm">
                Sign up for internships & courses that match your interests and
                career goals.
              </p>
            </div>
            <div className="w-full lg:w-72 p-10 rounded-md backdrop-blur-[20.01px] bg-gradient-to-b from-[rgba(255,180,197,0.07)] via-[rgba(153,153,153,0.07)] to-[rgba(153,153,153,0.07)] shadow-md text-center">
              <h1 className="text-lg font-semibold">Learn & Upskill</h1>
              <div className="text-lg font-bold my-2  flex justify-center items-center">
                <p className="rounded-full w-fit px-3 py-2 bg-[#330B51]">02</p>
              </div>
              <p className="text-sm">
              Gain hands-on experience through real-world projects, expert-led courses, and mentorship.
              </p>
            </div>
            <div className="w-full lg:w-72 p-10 rounded-md backdrop-blur-[20.01px] bg-gradient-to-b from-[rgba(255,180,197,0.07)] via-[rgba(153,153,153,0.07)] to-[rgba(153,153,153,0.07)] shadow-md text-center">
              <h1 className="text-lg font-semibold">Work on Projects</h1>
              <div className="text-lg font-bold my-2  flex justify-center items-center">
                <p className="rounded-full w-fit px-3 py-2 bg-[#330B51]">03</p>
              </div>
              <p className="text-sm">
              Collaborate on Aspire projects, solve industry challenges, and build a strong portfolio.
              </p>
            </div>
            <div className="w-full lg:w-72 p-10 rounded-md backdrop-blur-[20.01px] bg-gradient-to-b from-[rgba(255,180,197,0.07)] via-[rgba(153,153,153,0.07)] to-[rgba(153,153,153,0.07)] shadow-md text-center">
              <h1 className="text-lg font-semibold">Get Certified & Grow</h1>
              <div className="text-lg font-bold my-2  flex justify-center items-center">
                <p className="rounded-full w-fit px-3 py-2 bg-[#330B51]">04</p>
              </div>
              <p className="text-sm">
              Collaborate on Aspire projects, solve industry challenges, and build a strong portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
