
import Slider  from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {styles} from '../styles'
const About = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust this value to control the speed of the autoplay
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={`${styles.paddingX} flex max-sm:flex-col relative w-full h-screen` }>
      
      <div className="w-1/2 p-4 max-sm:w-full">
      <h1 className={`${styles.heroHeadText} text-white pt-4`}>About <span className='text-[#915eff]'>Myself</span></h1>
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a <span className='text-[#915eff]'>Professional Photographer.</span> I will shoot <br className="sm:block hidden" /> your <span className='text-[#915eff]'>Portfolio.</span> I am based in Islamabad.
        </p>
      </div>
      <div className="w-1/2 p-4 max-sm:w-full">
        <Slider {...settings}>
          <div>
            <img src="src\assets\github.png" alt="Image 1" className="w-full h-auto" />
          </div>
          <div>
            <img src="src\assets\github.png" alt="Image 2" className="w-full h-auto" />
          </div>
          <div>
            <img src="src\assets\github.png" alt="Image 3" className="w-full h-auto" />
          </div>
          {/* Add more images as needed */}
        </Slider>
      </div>
    
    </section>
  );
};


export default About