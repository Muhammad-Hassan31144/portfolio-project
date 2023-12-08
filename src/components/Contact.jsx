import { styles } from "../styles";
// import ash from "../components/ash.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import BannerAni from "./BannerAni";
const Contact = () => {
  return (
    <div
      id="contact"
      className={`bg-secondary bg-opacity-95 ${styles.paddingX} justify-between h-screen mt-10 w-full `}
    >
      <h1 className={`${styles.sectionHeadText} text-tertiary pl-3 pt-2`}>
        Contact Now
      </h1>

      <div className={`${styles.paddingX} flex flex-col max-sm:gap-4 gap-6`}>
        <div className="w-full rounded-3xl">
          <p className="text-5xl text-bold text-white">
            Let&apos;s Connect <br />
            to <span className="font-sans">Create something Unique</span>
          </p>
        </div>
        <div className="px-0">
          <BannerAni />
        </div>

        <div className="flex justify-between mt-4 mx-7">
          <div className="flex flex-col gap-3">
            <p className="text-3xl text-white-100">Follow me</p>
            <a
              href="https://www.instagram.com/inno_awan" // Replace with your Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white hover:text-tertiary transition duration-300"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="4x"
                className="max-sm:w-[64px] max-sm:h-[64px]"
              />
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-3xl text-white-100">For Queries</p>
            <a
              href="https://wa.me/923045807224" // Replace with your WhatsApp URL
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white hover:text-tertiary transition duration-300"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                size="4x"
                className="max-sm:w-[64px] max-sm:h-[64px]"
              />
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-3xl text-white-100">For Hire</p>
            <a
              href="#" // Replace with your Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-white hover:text-tertiary transition duration-300"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="4x"
                className="max-sm:w-[64px] max-sm:h-[64px]"
              />
            </a>
          </div>
        </div>
        {/* <BannerAni /> */}
      </div>
    </div>
  );
};

export default Contact;
