/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "react-vertical-timeline-component/style.min.css";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#5448C8",
        color: "#000000",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
      contentArrowStyle={{ borderRight: "9px solid  #5448C8" }}
      // date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="h-1/2 w-1/2">
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
        <div className="flex gap-8 max-w-full">
          <img
            className="w-1/2 mt-1 rounded-xl"
            src={experience.picture}
            alt=""
          />
          <img
            className="w-1/2 mt-1 rounded-xl"
            src={experience.picture}
            alt=""
          />
          <img
            className="w-1/2 mt-1 rounded-xl"
            src={experience.picture}
            alt=""
          />
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const animationVariants = slideIn("up", "easeOut", 0, 2);
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <div id="work" className="  pt-9">
      <div
        className={`bg-secondary bg-opacity-80 rounded-2xl ${styles.paddingX} max-w-7xl mx-auto pt-5 min-h-[240px]`}
      >
        <motion.div
          ref={ref}
          animate={inView ? "show" : "hidden"}
          initial="hidden"
          variants={animationVariants}
        >
          <p className={`${styles.sectionSubText}`}>The service I provide</p>
          <h2 className={`${styles.sectionHeadText}`}>Work Experience.</h2>
        </motion.div>
      </div>

      <div className="-mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
