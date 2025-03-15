import React from "react";

const Mission = () => {
  return (
    <div className="mx-0.5 lg:mx-10 my-20 flex flex-col lg:flex-row justify-between px-3 lg:px-20">
      <div>
        <h1 className="font-semibold text-4xl">
        Empowering Futures, One <br /> Internship at a Time
        </h1>
        <p className="my-10">Transforming passion into profession by providing real-world <br /> experience, skills, and opportunities for growth</p>
      </div>
      <div>
        <div>
            <h1 className="text-2xl font-medium">1. Cultivate Talent</h1>
            <p className="my-2">Providing real-world learning to help individuals <br /> grow beyond theory.</p>
        </div>
        <div className="my-10">
            <h1 className="text-2xl font-medium">2. Connect with Industry</h1>
            <p className="my-2">Creating valuable connections with industry <br /> experts and businesses.</p>
        </div>
        <div>
            <h1 className="text-2xl font-medium">3. Drive Impact</h1>
            <p className="my-2">Enabling hands-on projects that foster skills, <br /> confidence, and innovation.</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
