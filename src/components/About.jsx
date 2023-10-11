import ash from "../components/ash.png"
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
    <>
      <div
          className={`bg-secondary rounded-2xl ${styles.paddingX} min-h-[240px] pt-5 mt-10 w-full`}
      >
        <p className={`${styles.sectionSubText}`}>
          Get to know the Artist
        </p>
          <h1 className={`${styles.sectionHeadText}`}>About Myself</h1>
      </div>
      
    <section id='about' className={`${styles.paddingX} -mt-16 mx-7 max-w-7xl bg-tertiary rounded-[30px] flex max-sm:flex-col justify-end items-center` }>
      
      <div className="flex flex-col max-sm:p-3 justify-start items-center w-1/2 max-sm:justify-between ">
      
      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a <span className='text-[#FEA82F]'>Professional Photographer.</span> I will shoot <br className="sm:block hidden" /> your <span className='text-[#FEA82F]'>Portfolio.</span> I am based in Islamabad.
        </p>
      </div>
      <div className="w-1/2 p-4 max-sm:w-full border-2 border-black">
        <Slider {...settings}>
          <div className="h-auto max-sm:h-[274px]">
            <img src={ash} alt="Image 1" className="w-full" />
          </div>
          <div className="h-auto max-sm:h-[274px]">   
            <img src={ash} alt="Image 2" className="w-full" />
          </div>  
          <div className="h-auto max-sm:h-[274px]">
            <img src={ash} alt="Image 3" className="w-full" />
          </div>    
          {/* Add more images as needed */}
        </Slider>
      </div>
    
    </section>
    </>
  );
};


export default About