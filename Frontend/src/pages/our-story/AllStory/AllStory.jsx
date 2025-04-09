import { motion } from "motion/react"; 
import personBg from "../../../Assets/Stories/person-bg.png";

function AllStory() {
    const stories = [
        {
            image: "https://i.postimg.cc/rmVGT9By/Placeholder-Profile-Image.jpg",
            title: "Susmoy's Journey: From Aspiring Intern to Industry Leader",
            paragraph: "Discover how Susmoy turned their passion into a successful career with the help of Aspire's real-world experience."
        },
        {
            image: "https://i.postimg.cc/rmVGT9By/Placeholder-Profile-Image.jpg",
            title: "Susmoy's Journey: From Aspiring Intern to Industry Leader",
            paragraph: "Discover how Susmoy turned their passion into a successful career with the help of Aspire's real-world experience."
        },
        {
            image: "https://i.postimg.cc/rmVGT9By/Placeholder-Profile-Image.jpg",
            title: "Susmoy's Journey: From Aspiring Intern to Industry Leader",
            paragraph: "Discover how Susmoy turned their passion into a successful career with the help of Aspire's real-world experience."
        }
    ]
  return (
    <section className="w-full mx-auto px-6  my-20">
        
        {
            stories.map((story, idx)=>
                <motion.div key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card sm:card-side w-full lg:w-3/4 my-10 md:my-12 lg:my-14"
          >
            {/* image of the card */}
            <div className="w-full h-full">
              <div
                className="w-full sm:w-[350px] h-[250px] bg-center overflow-hidden relative rounded-3xl flex justify-center"
                style={{
                  backgroundImage: `url(${personBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img
                  src={story.image}
                  alt="person"
                  className="absolute bottom-0 object-contain aspect-square"
                />
              </div>
            </div>
            {/* texts of the card */}
            <div className="card-body pt-0">
            <h1 className="text-3xl font-semibold leading-12 mt-4 sm:mt-0">{story.title}</h1>
              <p className="mt-4 text-xl leading-7">
                {story.paragraph}
              </p>
            </div>
          </motion.div>
            )
        }
    </section>
  )
}

export default AllStory