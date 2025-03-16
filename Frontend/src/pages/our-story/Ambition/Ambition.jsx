import { motion } from "framer-motion"; // Importing necessary hooks
import backgroundFrame from "../../../Assets/Stories/Frame.png";
import personImage from "../../../Assets/Stories/person.png";
import ambitionBG from "../../../Assets/Stories/ambition-bg.png"
import { GoArrowUpRight } from "react-icons/go";

function Ambition() {
  return (
    <section className="w-full mx-auto px-6  my-20">
      <motion.h1
        id="banner-title"
        className="font-semibold w-full lg:w-4/5 text-3xl md:text-4xl lg:text-5xl text-start leading-14"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Transforming Ambitions into Success: Journeys of Aspiring Leaders
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-6 justify-between my-8">
        {/* left side card */}
        <div className="w-full lg:w-[650px] h-full md:h-[435px] rounded-3xl relative"
        style={{
            backgroundImage: `url(${ambitionBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
            <p className="text-xl w-full md:w-3/4 text-white p-8 md:p-10 lg:p-14">
                Discover how People turned their passion into a successful career with the help of Aspire's real-world experience.</p>
          {/* <img src={ambitionImage} alt="ambition-image" /> */}
        </div>
        {/* right side card */}
        <div className="w-full md:w-1/3">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card w-full sm:w-[350px]"
          >
            {/* image of the card */}
            <div className="w-full h-full">
              <div
                className="w-full h-[250px] bg-center overflow-hidden relative rounded-3xl flex justify-center"
                style={{
                  backgroundImage: `url(${backgroundFrame})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img
                  src={personImage}
                  alt="Movie"
                  className="absolute bottom-0 "
                />
              </div>
            </div>
            {/* texts of the card */}
            <div className="w-full text-xl leading-8">
              <p className="mt-4">
                Discover how Susmoy turned their passion into a successful
                career with the help of Aspire's real-world experience.
              </p>
              <button className="text-xl font-semibold mt-4 flex justify-between items-center gap-2">
                Read Now <GoArrowUpRight className="text-2xl font-semibold" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Ambition;
