import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoAddCircle } from "react-icons/io5";
import { TaskGroup } from './styled';
import Task from '../Tasks';
import NewTask from '../NewTaskPopup';
import axios from '../../services/axios';

function Tasks({ id, title: initialTitle, tasks_data  }) 
{   const token = localStorage.getItem('token')
    const [title, setTitle] = useState(initialTitle)
    const [newTitle, setNewTitle] = useState('');
    const [isEditingTitle, setEditingTitle] = useState(false)
    const [isEditing, setEditing] = useState(false);
    const [tasks, setTasks] = useState(tasks_data);

    useEffect(() => {
        // Filtra as tarefas cujo isOnTrashBin é false
        const filteredTasks = tasks_data.filter(task => task.isOnTrashBin === false);
        setTasks(filteredTasks);
        console.log(tasks_data)
    }, [tasks_data]);


    const handleClick = () => {
        let editing = isEditing;
        setEditing(!editing);
    }

    const handleTitleClick = () => {
        setEditingTitle(!isEditingTitle)
    }

    const handleTitleSubmit = async (event) => {
        if (event.keyCode === 13) {
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
                const response = await axios.get('todolists', {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
                // pegando o histórico do localStorage
                const newData = response.data
                console.log(newData)
                const history = JSON.parse(localStorage.getItem('todolists'))
                history.forEach(el => {
                    newData.forEach(data => {
                        if(el.id === data.id) {
                            history[history.indexOf(el)] = newData[newData.indexOf(data)]
                        }
                    });
                });
                localStorage.setItem('todolists', JSON.stringify(history))
                // window.location.reload();
            } catch(err){
                console.log(err)
            }
        } 
    };

    const handleNewTask = (newTask) => {
        setTasks(tasks => [...tasks, newTask]);
        setEditing(false)
    }

    const handleDeleteTask = async (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
        try{
            await axios.put('trashaddremove', {
                todoId : taskId
            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            const response = await axios.get('todolists', {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
            // pegando o histórico do localStorage
            const newData = response.data
            console.log(newData)
            const history = JSON.parse(localStorage.getItem('todolists'))
            history.forEach(el => {
                newData.forEach(data => {
                    if(el.id === data.id) {
                        history[history.indexOf(el)] = newData[newData.indexOf(data)]
                    }
                });
            });
            localStorage.setItem('todolists', JSON.stringify(history))
            window.location.reload();
        } catch(e) {
            console.log(e)
        }
    };

    return (
        <TaskGroup>
            <div>
                {isEditingTitle ? 
                <input 
                onBlur={() => setEditingTitle(false)}
                onKeyDown={handleTitleSubmit} 
                autoFocus 
                type='text' 
                maxLength={30} 
                defaultValue={title} 
                value={newTitle}
                id={id} 
                onChange={(e) => setNewTitle(e.target.value)}
                /> 
                : <h1 onClick={handleTitleClick}>{title}</h1>}
            </div>
            {tasks.map((task) => {
                if (task.isOnTrashBin === false){
                    return '';
                }
                return(
                    <Task 
                        id = {task.id}
                        title={task.title}
                        desc={task.description}
                        complete={task.complete}
                        created={task.created}
                        onDelete={handleDeleteTask}
                    />
                )
            })}
            {/* mapeando todas as tasks e exibindo cada uma */}
            {tasks_data.filter(task => task.isOnTrashBin === false).map(task => {
                return(
                    <Task 
                        id = {task.id}
                        title={task.title}
                        desc={task.description}
                        complete={task.complete}
                        created={task.created}
                        onDelete={handleDeleteTask}
                    />
                )
            })}
            <IoAddCircle className='addIcon' size={40} onClick={handleClick} />
            {isEditing && (
                <NewTask 
                    todoList={title}
                    onTaskSubmit={handleNewTask}
                    onClose={handleClick}
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