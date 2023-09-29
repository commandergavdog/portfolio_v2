import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ProjectCard = ({ cardTitle, cardImage, imageAlt, cardCopy, cardPills, cardURL }) => {
  return (
    <div className='box-shadow flex flex-col gap-2 rounded-md p-3 mx-2 my-3 sm:mx-10'>

      <div className='hover:text-blue-500'>
      <a href={cardURL} target='_blank' className='flex flex-row justify-start items-center gap-2 hover:cursor-pointer hover:text-blue-500'>
        <h4>{cardTitle}</h4> <FontAwesomeIcon className="extra-small-text" icon={faArrowUpRightFromSquare} />
      </a>

      {/* object-cover hover:scale-110 transition ease-in-out	duration-500	 */}
      <a href={cardURL} target='_blank' className='hover:cursor-pointer overflow-hidden'>
        <img
          src={cardImage}
          alt={imageAlt}
          className='w-full my-1 sm:w-96'
        />
      </a>
      </div>

      <p className='text-xs p-1 m-1 leading-5 sm:w-96 hover:cursor-default'>
        {cardCopy}
      </p>

      <div className='flex flex-row flex-wrap gap-1 justify-start'>
        {cardPills}
      </div>

    </div>
  );
};

ProjectCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardURL: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  cardCopy: PropTypes.string.isRequired,
  cardPills: PropTypes.node.isRequired,
};

export default ProjectCard;