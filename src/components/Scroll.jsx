/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SmoothScrollLink = ({ to, onClick, children }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const targetElement = document.querySelector(to);
    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top + window.scrollY;

      // Scroll to the target element with smooth animation
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });

      // Invoke the provided onClick function
      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Link to={to} onClick={handleClick}>
        {children}
      </Link>
    </motion.div>
  );
};

export default SmoothScrollLink;
