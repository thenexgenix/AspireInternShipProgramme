import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Quote from "./quote/quote";
import Mission from "./Misson/Misson";
import Workflow from "./Workflow/Workflow";
import Member from "./member/Member";
import Testimonial from "./Testimonial/Testimonial";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Aspire Internship Program</title>
        <meta name="description" content="Discover Aspire's mission to transform tech education. Learn about our expert team, innovative teaching methods, and commitment to student success at ITBI CUET, Chittagong." />
        <meta name="keywords" content="Aspire education, tech training, ITBI CUET, Chittagong tech education, professional development" />
        <link rel="canonical" href="/about-us" />
      </Helmet>
      <div className="bg-primary-color mt-24 mx-auto overflow-hidden ">
        <Header />
        <Banner />
        <Quote />
        <Mission />
        <div className="absolute bg-[#f2efe8]  rounded-lg mt-20 -translate-3  md:translate-x-0  mx-4 lg:mx-40  md:h-52 w-full  lg:h-96 lg:w-7xl">
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
    </>
  );
};

export default AboutUs;
