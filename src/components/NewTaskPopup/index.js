import React, { useState } from 'react';
import PropTypes from 'prop-types';

import axios from '../../services/axios';
import { Box } from './styled';

function NewTask({ todoList, onTaskSubmit }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const newTask = {
                title: title,
                description : description,
                complete: false
            };
            onTaskSubmit(newTask);
            // criando nova tarefa
            const token = localStorage.getItem('token');
            axios.post('/todonew', {
                title, description, todoList
            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
        } catch (e) {
            console.log(e)
        }

    }

    return(
        <Box>
            <form onSubmit={handleSubmit}>
                <section>
                    Título: <input type='text' onChange={(e) => setTitle(e.target.value)} />
                </section>
                <section>
                    Descrição: <textarea onChange={(e) => setDescription(e.target.value)} />
                </section>
                <button type='submit'>Criar</button>
            </form>
        </Box>
    )
}

NewTask.propTypes = {
    todoList: PropTypes.string.isRequired
}

export default NewTask;