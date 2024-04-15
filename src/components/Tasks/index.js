import React from 'react';
import { FiCheckCircle } from "react-icons/fi";
// import { FaRegCircle } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

import { TaskStyle } from './styled';

function Task() {
    return (
        <TaskStyle>
            <FiCheckCircle className='check' size={30} />
            <FaRegEdit className='edit' size={30} />
        </TaskStyle>
    );
}

export default Task;