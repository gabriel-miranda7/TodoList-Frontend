import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiCheckCircle } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import axios from '../../services/axios';
import { TaskStyle } from './styled';

function Task({ key, title, desc, complete }) {
    const [comp, setComp] = useState(complete); // Inicializa o estado com o valor de complete
    const token = localStorage.getItem('token');

    const handleClick = async () => {
        setComp(!comp) // Obtém o valor atualizado de comp
    };
    

    return (
        <TaskStyle>
            {comp 
                ?
                <FiCheckCircle className='check' size={30} onClick={handleClick} />
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
