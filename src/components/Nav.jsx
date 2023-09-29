import React, { useState, useEffect  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBars, faTimes, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`lg:pr-2 w-full sticky top-0 z-50 transition duration-300 ${isScrolled ? 'box-shadow' : ''}`}>
        <nav className='flex flex-row text-2xl px-3 pt-3 pb-1 justify-between bg-white'>

          <FontAwesomeIcon className="lg:text-3xl hover:scale-110 hover:cursor-pointer transition duration-200" icon={faCode} />

          <button
            onClick={toggleMenu}
            className="lg:hidden"
          >
            {isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </nav>

        <div className={`${isOpen ? 'block' : 'hidden'} transition duration-300 lg:hidden w-screen absolute z-40 bg-white box-shadow no-top-shadow`}>
          <div className='flex flex-row justify-center items-center gap-3 '>

            <a href="https://github.com/commandergavdog" target='_blank' className="p-2 text-black text-xl font-semibold">
              <FontAwesomeIcon icon={faGithub}
                className='text-2xl'
              />
            </a>

            <a href="https://www.linkedin.com/in/frank-dominguez3/" target='_blank' className="p-2 text-black text-xl font-semibold">
              <FontAwesomeIcon icon={faLinkedinIn}
                className='text-2xl'
              />
            </a>

            <a href="mailto:frankd1997@gmail.com" target='_blank' className="p-2 text-black text-xl font-semibold">
              <FontAwesomeIcon icon={faEnvelope}
                className='text-2xl'
              />
            </a>

          </div>

          <div className='flex justify-center items-center h-fit'>
            <a href="./src/assets/frank-dominguez-resume.pdf" target="_blank"
              className="flex flex-row justify-start m-1 pb-2 gap-2 items-center text-xs"
            >
              <p className="font-semibold">View Full Résumé</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>


        </div>
      </div >
    </>
  );
}

export default Nav;
