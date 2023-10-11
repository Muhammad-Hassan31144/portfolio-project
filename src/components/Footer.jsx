import github from "../assets/github.png"
import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className={`bg-secondary rounded-2xl ${styles.paddingX} p-5 min-h-[30px] max-sm:min-h-[15px] w-full flex justify-between bg-black-100 rounded-2xl mt-5`}>
      <div
      >
        <p className="">Created By</p>
        <h3 className="">Muhammad-Hassan</h3>
      </div>
        <a 
          href="https://github.com/Muhammad-Hassan31144"
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <img className="h-[48px] w-[48px]" src={github} alt=""/>
          </a>
      </footer>
  )
}

export default Footer