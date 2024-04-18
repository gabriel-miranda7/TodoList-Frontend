import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiCheckCircle } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import axios from '../../services/axios';
import { TaskStyle } from './styled';
import EditTask from '../EditTaskPopup';

function Task({ id, title, desc, complete }) {
    const [comp, setComp] = useState(true); // Inicializa o estado com o valor de complete
    const [isEditing, setIsEditing] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchCompleteStatus = async () => { //Busca os valores de complete em todas as To-Dos ao carregar a página
            try {
                const response = await axios.post('/iscomplete', {
                    todoId: id
                }, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                });
                setComp(response.data.complete)
            } catch (error) {
                console.log(error);
            }
        };
        fetchCompleteStatus(); 
    }, [token, id]);
    

    const handleClick = async () => { // Obtém o valor atualizado de comp de acordo com o FrontEnd
        let newCompValue = !comp;
        try{
            await axios.put('/todonew', { //Envia esse novo valor para a API
                title: title,
                todoId: id,
                complete: newCompValue
            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            setComp(newCompValue)
        }catch(e){
            console.log(e)
        }

    };

    return (
        <TaskStyle complete={comp}>
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
