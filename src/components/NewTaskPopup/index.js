import React, { useState } from 'react';
import PropTypes from 'prop-types';

import axios from '../../services/axios';
import { Box } from './styled';

function NewTask({ todoList, onTaskSubmit, onClose }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newTask = {
                title: title,
                description : description,
                complete: false
            };
            const token = localStorage.getItem('token');
            let responseGetId = await axios.post('/todonew', {
                title, description, todoList
            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            newTask['id'] = responseGetId.data.id;
            // criando nova tarefa
            onTaskSubmit(newTask);
            // pegando o histórico do localStorage
            const history = JSON.parse(localStorage.getItem('todolists'))
            // atualizando o histórico no localStorage
            history.forEach(list => {
                if(list.title === todoList){
                    list.todos.push(responseGetId.data)
                }
            });
            // enviando a versão atualizada para o localStorage
            localStorage.setItem('todolists', JSON.stringify(history))
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
                <button onClick={onClose}>Fechar</button>
            </form>
        </Box>
    )
}

NewTask.propTypes = {
    todoList: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
}

export default NewTask;