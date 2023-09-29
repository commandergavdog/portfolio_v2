import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="flex flex-row w-screen lg:w-full">



                <a href="/frank-dominguez-resume.pdf" target="_blank"
                    className="flex flex-row justify-start m-2 p-2 gap-2 items-center text-sm lg:text-normal hover:cursor-pointer"
                >
                    <p className="font-semibold">View Full Résumé</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </a>

                
        </div>
    )
}

export default Footer;