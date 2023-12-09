/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { styles } from "../styles";
import { testimonials } from "../constants";
import { slideIn } from "../utils/motion";
const FeedbackCard = ({ testimonial, name, designation, company, image }) => (
  <motion.div className="bg-white-100 p-10 rounded-3xl xs:w-[320px] w-full">
    <p className="text-white font-black text-[48px]"></p>
    <motion.div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </motion.div>
  </motion.div>
);

const Feedbacks = () => {
  const animationVariants = slideIn("down", "easeOut", 0, 2);
  const animationVariants1 = slideIn("left", "easeOut", 0, 2);
  // const animationVariants2 = slideIn("up", "easeOut", 0, 2);

  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <div
      id="testimonials"
      className={`mt-12 bg-pink-green-gradient rounded-[20px] max-w-7xl mx-auto`}
    >
      <div
        className={`bg-secondary bg-opacity-80 rounded-2xl ${styles.paddingX} pt-5 min-h-[240px]`}
      >
        <motion.div
          ref={ref}
          animate={inView ? "show" : "hidden"}
          variants={animationVariants}
          // initial="hidden"
        >
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        animate={inView ? "show" : "hidden"}
        initial="hidden"
        variants={animationVariants1}
        className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

export default Feedbacks;
