import React from 'react';
import PropTypes from 'prop-types';

const CardPill = ({ pillText }) => {

    return (
        <div className='flex justify-center items-center border-2 h-5 whitespace-nowrap w-fit p-2 rounded-3xl hover:bg-blue-500 hover:text-white hover:cursor-default hover:border-white'>
            <div className='extra-small-text'>{pillText}</div>
        </div>
    )

}

CardPill.propTypes = {
    pillText: PropTypes.string.isRequired,
};

export default CardPill;
