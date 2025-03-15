import React from "react";
import whyw from "../../../Assets/AboutUspage/whyw.png";
import quote from "../../../Assets/AboutUspage/quote.png";
import whybg from "../../../Assets/AboutUspage/whybg.png"

const Quote = () => {
  return (
    <div className="mx-0.5 lg:mx-10 my-20">
      <h1 className="font-semibold text-4xl">
        Why Aspire? Unlock Your Potential <br /> with Real-World Experience
      </h1>
      <div className="flex flex-col lg:flex-row justify-between rounded-xl bg-[#FFFFFF] items-center my-28"
        style={{
            backgroundImage: `url(${whybg})`,
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain", 
          }}
      >
        <div className="mx-24">
          <img src={whyw} alt="" />
        </div>
        <div className="h-fit bg-[#EFF2FA] mx-5 lg:mx-20 p-10 rounded-3xl relative">
          <h1 className="text-2xl font-semibold ">
            "Learn continually – there’s <br /> always ‘one more thing’ to
            learn!"
          </h1>
          <p className="text-end my-10">
            <span className="font-bold ">Steve Jobs,</span> co-founded of Apple
          </p>
          <div className="flex justify-end">
          <img  src={quote} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
