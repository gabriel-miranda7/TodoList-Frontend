import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiCheckCircle } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import axios from '../../services/axios';
import { TaskStyle } from './styled';

function Task({ id, title, desc, complete }) {
    const [comp, setComp] = useState(true); // Inicializa o estado com o valor de complete
    const token = localStorage.getItem('token');

    

    const handleClick = async () => { // Obtém o valor atualizado de comp
        let newCompValue = !comp;
        try{
            await axios.put('/todonew', {
                title: title,
                todoId: id,
                complete: newCompValue
            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            console.log(id)
            setComp(newCompValue)
        }catch(e){
            console.log(e)
        }
    };

    return (
        <TaskStyle>
            {comp 
                ?
                <FaRegCircle className='check' size={30} onClick={handleClick} />
                :
                <FiCheckCircle className='circle' size={30} onClick={handleClick} />
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
