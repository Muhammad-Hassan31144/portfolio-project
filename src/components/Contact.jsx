import { styles } from "../styles";
// import ash from "../components/ash.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { zoomIn } from "../utils/motion";
import BannerAni from "./BannerAni";
const Contact = () => {
  // const controls = useAnimation();
  // const controls2 = useAnimation();
  const animationVariants = slideIn("up", "easeOut", 0, 2);
  const animationVariants1 = slideIn("left", "spring", 0, 1);
  const animationVariants2 = zoomIn(0, 2);
  // const animationVariant = slideIn("left", "easeOut", 0, 2);

  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <div
      id="contact"
      className={`bg-secondary bg-opacity-95 ${styles.paddingX} ${styles.paddingY} justify-between max-xl:h-screen max-sm:h-screen max-w-7xl mx-auto mt-10 w-full overflow-x-hidden`}
    >
      <h1 className={`${styles.sectionHeadText} text-tertiary pl-3 pt-2`}>
        Contact Now
      </h1>

      <div className={`${styles.paddingX} flex flex-col max-sm:gap-4 gap-6`}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={animationVariants1}
        >
          <p className="text-5xl max-sm:text-2xl text-bold text-white">
            Let&apos;s Connect <br />
            to <span className="font-sans">Create something Unique</span>
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={animationVariants}
          className="px-0"
        >
          <BannerAni />
        </motion.div>

        <div className="flex justify-between mt-4">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={animationVariants2}
            className="flex flex-col gap-3 max-sm:gap-5 max-sm:mb-5"
          >
            <p className="text-3xl text-white-100 max-sm:hidden">Follow me</p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.instagram.com/inno_awan" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white hover:text-tertiary transition duration-300"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="4x"
                className="max-sm:w-[48px] max-sm:h-[48px]"
              />
            </motion.a>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={animationVariants2}
            className="flex flex-col gap-3 max-sm:gap-5 max-sm:mb-5"
          >
            <p className="text-3xl text-white-100 max-sm:hidden">For Queries</p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/923045807224" // Replace with your WhatsApp URL
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white hover:text-tertiary transition duration-300"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="4x"
                className="max-sm:w-[48px] max-sm:h-[48px]"
              />
            </motion.a>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={animationVariants2}
            className="flex flex-col gap-3 max-sm:gap-5 max-sm:mb-5"
          >
            <p className="text-3xl text-white-100 max-sm:hidden">For Hire</p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="#" // Replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white hover:text-tertiary transition duration-300"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="4x"
                className="max-sm:w-[48px] max-sm:h-[48px]"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
