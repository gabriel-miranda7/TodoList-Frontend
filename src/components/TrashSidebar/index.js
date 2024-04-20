import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { MdSettingsBackupRestore } from "react-icons/md";

import axios from '../../services/axios';
import { Sidebar } from './styled';

function TrashSidebar({ taskLists, onClose, onDelete }) {
    const tasks = [];
    const ids = [];
    taskLists.forEach(element => {
        const title = element.title
        element.todos.forEach(el => {
            if(el.isOnTrashBin === true){
                tasks.push(`${el.title} - ${title}`)
                ids.push(el.id)
            }
        });
    });

    const handleDelete = (e) => {
        onDelete(e.target.id)
        window.location.reload();
    }

    let counter = 0;
    const count = () => {
        counter += 1;
    }

    return (
        <Sidebar>
            <header>
                <h1>Lixeira</h1>
            </header>
            <div className='tasks'>
                {tasks.map((task) => {
                    return (
                        <section key={ids} onClick={handleDelete}>
                            <MdSettingsBackupRestore size={30} className='icon' />
                            <p id={ids[counter]}>{task}</p>
                            {count()}
                        </section>
                    )
                })}
            </div>
            <footer onClick={onClose}>
                <h1>Fechar</h1>
            </footer>
        </Sidebar>
    )
}

TrashSidebar.propTypes = {
    taskLists: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default TrashSidebar;
