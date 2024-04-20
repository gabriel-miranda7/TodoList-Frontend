import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import { Sidebar } from './styled';
import NewList from '../NewListPopup';

function ClipboardSidebar({ taskLists, onClose }) {
    const token = localStorage.getItem('token');
    const [isCreating, setisCreating] = useState(false);
    let todolists = localStorage.getItem('todolists')
    todolists = JSON.parse(todolists)

    const newList = async (titulo) => {
        try {
            // criando nova lista de tarefas
            await axios.post('/todolistnew', 
            {
                title: titulo
            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
                window.location.reload();
            }
        catch (error) {
            if(error.response && error.response.status === 400) {
                return toast.error('Já existe uma lista com esse nome.')
            }
        }
    }

    const handleCreate = () => {
        setisCreating(!isCreating)
    }

    function closePopup(){
        setisCreating(false)
    }

    const handleChange = (e) => {
        let can_reload = true;
        if(todolists !== null) {
            e = JSON.parse(e.target.id)
            todolists.forEach(list => {
                if(list.title === e.title){
                    can_reload = false;
                    return toast.error('Essa lista já está sendo exibida.')
                }
            });
            todolists = todolists.slice(1);
            todolists = todolists.reverse();
            todolists.push(e);
            todolists = todolists.reverse();
            console.log(todolists)
            localStorage.setItem('todolists', JSON.stringify(todolists));
            if(can_reload) window.location.reload()
        }
    }

    return (
        <Sidebar>
            {isCreating && <NewList newListfunc={newList} onClose={closePopup}/> }
            <header>
                <h1>To-do lists</h1>
            </header>
            <div className='tasks'>
                <button onClick={handleCreate}>Criar To-do list</button>
                {taskLists.map((list) => {
                    return (
                        <section>
                            <AiOutlineStar size={30} color='#00be62' />
                            {/* {<AiFillStar size={30} color='#00be62' />} */}
                            <p id={JSON.stringify(list)} onClick={handleChange}>{list.title}</p>
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

ClipboardSidebar.propTypes = {
    taskLists: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired
}

export default ClipboardSidebar;