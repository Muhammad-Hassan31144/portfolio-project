
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 h-40 sm:h-80 violet-gradient"/>
        </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white pt-4`}>Hi, I&apos;m <span className='text-[#915eff]'>Ashad</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a <span className='text-[#915eff]'>Professional Photographer.</span> I will shoot <br className="sm:block hidden" /> your <span className='text-[#915eff]'>Portfolio.</span> I am based in Islamabad.
        </p>
      </div>
      <ComputersCanvas/>
      </div>
    </section>
  )
}

export default Hero