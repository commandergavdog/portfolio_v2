import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import heroImage from '/hero-image.jpg';


const Hero = () => {

    return (
        <div className='box-shadow bg-white flex flex-col gap-3 justify-center items-center rounded-sm  p-3 m-3 w-fit h-fit lg:gap-4'>
            <div className='text-center'>
                <h1 className='font-normal text-lg lg:text-3xl'>Frank Dominguez</h1>
                <h2 className='text-sm lg:text-lg'>Software Engineer</h2>
            </div>

            <img
                src={heroImage}
                className='w-32 rounded-full lg:w-44'
            >
            </img>

            <p className='text-xs text-center whitespace-nowrap lg:text-base'>I build responsive, user-friendly web applications.</p>

            <div className='flex flew-row justify-center items-center gap-5 mb-2'>

                <a href="https://github.com/commandergavdog" target='_blank'>
                    <FontAwesomeIcon
                        icon={faGithub}
                        className='text-xl lg:text-3xl hover:cursor-pointer hover:scale-110 transition duration-200'
                    />
                </a>

                <a href="https://www.linkedin.com/in/frank-dominguez3/" target='_blank'>
                    <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className='text-xl lg:text-3xl hover:cursor-pointer hover:scale-110 transition duration-200'
                    />
                </a>

                <a href="mailto:frankd1997@gmail.com" target='_blank'>
                    <FontAwesomeIcon
                        icon={faEnvelope}
                        className='text-xl lg:text-3xl hover:cursor-pointer hover:scale-110 transition duration-200'
                    />
                </a>


            </div>

        </div>
    )
}

export default Hero;
