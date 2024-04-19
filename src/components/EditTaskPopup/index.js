import React, { useState } from 'react';
import { Box } from './styled';

function EditTask({ taskId, title, desc, closeEditing, onTaskSubmit, onDelete }) {
    const [newDescription, setNewDescription] = useState(desc);
    const [newTitle, setNewTitle] = useState(title);

    const handleSubmit = (e) => {
        e.preventDefault();
        onTaskSubmit(taskId, newTitle, newDescription);
        closeEditing();
    }

    const deleteTodo = async () => {
        onDelete(taskId);
        closeEditing();
    }

    return(
        <Box>
            <form onSubmit={handleSubmit}>
                <section>
                    Título: <input type='text'value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
                </section>
                <section>
                    Descrição: <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
                </section>
                <button type='submit'>Concluído</button>
                <button onClick={deleteTodo}>Deletar To-do</button>
                <button onClick={closeEditing}>Fechar</button>
            </form>
        </Box>
    )
}

export default EditTask;