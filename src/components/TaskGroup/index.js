import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoAddCircle } from "react-icons/io5";

import { TaskGroup } from './styled';
import Task from '../Tasks';
import NewTask from '../NewTaskPopup';

function Tasks({ 
    title, tasks_data 
}) {
    const [isEditing, setEditing] = useState(false);

    const handleClick = () => {
        let editing = isEditing;
        setEditing(!editing);
    }

    return (
        <TaskGroup>
            <h1>{title}</h1>
            {/* mapeando todas as tasks e exibindo cada uma */}
            {tasks_data.map((task) => {
                return(
                    <Task 
                        key={task.id}
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