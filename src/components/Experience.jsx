/* eslint-disable react/prop-types */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

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
  return (
    <div id="work" className=" pt-9">
      <div
        className={`bg-secondary bg-opacity-80 rounded-2xl ${styles.paddingX} pt-5 min-h-[240px]`}
      >
        <motion.div variants={textVariant()}>
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
