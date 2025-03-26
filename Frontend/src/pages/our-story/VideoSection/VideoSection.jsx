import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import video from "../../../Assets/Stories/video.mp4";

function VideoSection() {
  const videoRef = useRef(null);
  const controls = useAnimation();
  const [videoDuration, setVideoDuration] = useState(10);
  useEffect(() => {
    const handleLoadedMetadata = () => {
      setVideoDuration(videoRef.current?.duration || 10);
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      }
    };
  }, []);

  useEffect(() => {
    controls.start({
      // borderColor: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"],
      // boxShadow: [
      //   "0px 0px 15px #8A2BE2",
      //   "0px 0px 20px #FF1493",
      //   "0px 0px 15px #00BFFF",
      //   "0px 0px 15px #8A2BE2",
      // ],
      // scale: [1, 1.05, 1],
      transition: {
        duration: videoDuration,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [videoDuration, controls]);

  return (
    <section className="w-full mx-auto px-6 my-20">
      {/* Video Section Title */}
      <div className="w-full lg:w-4/5 mx-auto">
        <motion.h1
          id="banner-title"
          className="font-semibold text-3xl  md:text-4xl lg:text-5xl text-center leading-12 md:leading-14 lg:leading-16"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once: true}}
          transition={{ duration: 1 }}
        >
          From Dreams to Reality: Inspiring Success Stories of Growth &
          Achievement
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once: true}}
          className="text-xl text-text-secondary mt-4 text-center"
        >
          Real stories of perseverance, growth, and career breakthroughs.
        </motion.p>
      </div>
      {/* Video with Animated Border */}
      <div className="w-full mt-12 md:mt-14 lg:mt-16 flex justify-center">
        <motion.div
          animate={controls}
          className="rounded-3xl p-1 border-4 w-fit relative bg-gray-500"
        >
          <video ref={videoRef} loop autoPlay muted className="rounded-2xl">
            <source src={video} type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}

export default VideoSection;
