// import { motio } from "framer-motion";
import { logoo } from "../assets";
import Marquee from "react-fast-marquee";
const logos = [
  // Add your logo URLs here
  { id: 1, logoo },
  { id: 2, logoo },
  { id: 3, logoo },
  { id: 4, logoo },
  { id: 5, logoo },
  { id: 6, logoo },
  { id: 7, logoo },
  { id: 8, logoo },
  { id: 9, logoo },
  { id: 10, logoo },
  { id: 11, logoo },
  { id: 12, logoo },
  { id: 13, logoo },
  { id: 14, logoo },
];
const texts = [
  { id: 1, text: "Inno Studio" },
  { id: 2, text: "Inno Studio" },
  { id: 3, text: "Inno Studio" },
  { id: 4, text: "Inno Studio" },
  { id: 5, text: "Inno Studio" },
  { id: 6, text: "Inno Studio" },
  { id: 7, text: "Inno Studio" },
  { id: 8, text: "Inno Studio" },
  { id: 9, text: "Inno Studio" },
  { id: 10, text: "Inno Studio" },
  { id: 11, text: "Inno Studio" },
  { id: 12, text: "Inno Studio" },
  { id: 13, text: "Inno Studio" },
  { id: 14, text: "Inno Studio" },
];

const BannerAni = () => {
  return (
    <>
      <Marquee play speed={120}>
        {logos.map((logoItem) => (
          <img
            key={logoItem.id}
            src={logoItem.logoo}
            alt={`Logo ${logoItem.id}`}
            style={{
              maxWidth: "200px",
              maxHeight: "100px",
              marginRight: "20px",
            }}
          />
        ))}
      </Marquee>
      <Marquee direction="right" speed={150}>
        {texts.map((logoItem) => (
          <h1
            className="text-5xl text-tertiary h-20 font-mono w-52 mx-12 whitespace-nowrap"
            key={logoItem.id}
          >
            {logoItem.text}
          </h1>
        ))}
      </Marquee>
    </>
  );
};

export default BannerAni;
