import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoAddCircle } from "react-icons/io5";
import { TaskGroup } from './styled';
import Task from '../Tasks';
import NewTask from '../NewTaskPopup';
import axios from '../../services/axios';

function Tasks({ id, title: initialTitle, tasks_data }) 
{   const token = localStorage.getItem('token')
    const [title, setTitle] = useState(initialTitle)
    const [isEditingTitle, setEditingTitle] = useState(false)
    const [isEditing, setEditing] = useState(false);
    const [tasks, setTasks] = useState(tasks_data);

    const handleClick = () => {
        let editing = isEditing;
        setEditing(!editing);
    }

    const handleTitleClick = () => {
        setEditingTitle(!isEditingTitle)
    }

    const handleTitleSubmit = async (event) => {
        if (event.key === 'Enter') {
            setEditingTitle(false);
            let new_title = event.target.value
            if (new_title === ''){
                return;
            }
            setTitle(event.target.value)
            try{
                await axios.put('todolistnew', {
                    listId : id,
                    newtitle: new_title
                }, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
            } catch(err){
                console.log(err)
            }
        }
        
    };

    const handleNewTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setEditing(false)

    }

    return (
        <TaskGroup>
            <div>
                {isEditingTitle ? <input onBlur={() => setEditingTitle(false)}
                onKeyPress={handleTitleSubmit} autoFocus 
                type='text' maxLength={30} defaultValue={title}/> : <h1 onClick={handleTitleClick}>{title}</h1>}
            </div>
            {/* mapeando todas as tasks e exibindo cada uma */}
            {tasks.map((task) => {
                return(
                    <Task 
                        id = {task.id}
                        title={task.title}
                        desc={task.description}
                        complete={task.complete}
                    />
                )
            })}
            <IoAddCircle className='addIcon' size={40} onClick={handleClick} />
            {isEditing && (
                <NewTask 
                    todoList={title}
                    onTaskSubmit={handleNewTask}
                />
            )}
        </TaskGroup>
    );
}

Tasks.propTypes = {
    title: PropTypes.string.isRequired,
    tasks_data: PropTypes.array.isRequired
}

export default Tasks;