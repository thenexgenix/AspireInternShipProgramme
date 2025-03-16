import { motion } from "framer-motion"; // Importing necessary hooks
import video from "../../../Assets/Stories/video.mp4"

function VideoSection() {
  return (
    <section className="w-full mx-auto px-6  my-20">
        {/* video section title */}
        <div className="w-full lg:w-4/5 mx-auto">
        <motion.h1
        id="banner-title"
        className="font-semibold text-4xl lg:text-[40px] md:text-4xl lg:text-5xl text-center leading-12 md:leading-14 lg:leading-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
         From Dreams to Reality: Inspiring Success Stories of Growth & Achievement
      </motion.h1>
      <motion.p 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-xl text-[#5F1D91] mt-4 text-center">Real stories of perseverance, growth, and career breakthroughs.</motion.p>
        </div>
        {/* video */}
        <div className="w-full mt-12 md:mt-14 lg:mt-16">
            <video loop autoPlay controls className="rounded-3xl">
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    </section>
  )
}

export default VideoSection