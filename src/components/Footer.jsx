import github from "../assets/github.png"

const Footer = () => {
  return (
    <footer className='flex justify-between bg-black-100 p-8 rounded-2xl mt-5'>
      <div>
        <p className="">Created By</p>
        <h3 className="">Muhammad-Hassan</h3>
      </div>
        <a 
          href="https://github.com/Muhammad-Hassan31144"
          target='_blank'
          rel='noopener noreferrer'
          className='mx-2 text-white hover:text-tertiary transition duration-300'
        >
          <img height={48} width={48} src={github} alt=""/>
          </a>
      </footer>
  )
}

export default Footer