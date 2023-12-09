import github from "../assets/github.png";
import { styles } from "../styles";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer
      className={`bg-secondary rounded-2xl ${styles.paddingX} p-5 min-h-[30px] max-sm:min-h-[15px] w-full flex max-w-7xl mx-auto justify-between rounded-2xl mt-5`}
    >
      <div>
        <p>Created By</p>
        <h3>Muhammad-Hassan</h3>
      </div>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://github.com/Muhammad-Hassan31144"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2 text-white hover:text-tertiary transition duration-300"
      >
        <img className="h-[48px] w-[48px]" src={github} alt="Github Icons" />
      </motion.a>
    </footer>
  );
};

export default Footer;
