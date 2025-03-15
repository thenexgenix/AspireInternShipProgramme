import banner from "../../../Assets/AboutUspage/banner.png"

const Banner = () => {
  return (
    <div className="mx-0.5 lg:mx-10 my-10">
      <h1 className="font-semibold text-4xl">
        Empowering <span className="text-[#5F1D91]">Future</span> Innovators 
        <br /> Through Real 
        <span className="text-[#FFB4C5]">World Experience</span>
      </h1>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-20">
        <h1 className="text-[#5F1D91] text-7xl">
           
          5,000+ <br />
          Learners
        </h1>
        <div>
          <img src={banner} alt="" />
          <p  className="mt-10">
            Join the Aspire Internship Program and gain hands-on experience, 
            <br />
            industry-relevant skills, and mentorship from experts. Explore free
            courses, work <br /> on groundbreaking projects, and kickstart your
            career with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
