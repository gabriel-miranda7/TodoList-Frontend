import React from 'react';
import PropTypes from 'prop-types';
import { FiCheckCircle } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

import { TaskStyle } from './styled';

function Task({ title, desc, complete }) {
    let comp = complete;
    const handleClick = () => {
        comp = !comp;
    }

    return (
        <TaskStyle>
            {comp 
                ?
                <FiCheckCircle className='check' size={30} />
                :
                <FaRegCircle className='circle' size={30} onClick={handleClick} />
            }
            <p>{title}</p>
            <FaRegEdit className='edit' size={30} />
        </TaskStyle>
    ); 
};

Task.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    complete: PropTypes.bool.isRequired
};

export default Task;