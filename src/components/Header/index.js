import React, { useState, useEffect, useRef } from 'react';
import { FaCog } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";

import axios from '../../services/axios';
import { Main } from './styled';
import SettingsPopup from '../SettingsPopup';
import TrashSidebar from '../TrashSidebar';

function Header() {
    const token = localStorage.getItem('token');
    const [tasks, setTasks] = useState([]);
    const [isSettingsOpen, setisSettingsOpen] = useState(false);
    const [isTrashOpen, setisTrashOpen] = useState(false);
    const [popupStyle, setPopupStyle] = useState({ opacity: 0, transition: 'opacity 0.5s' });
    const cogRef = useRef(null); //Pega a referência da engrenagem
    const trashRef = useRef(null);
    useEffect(() => {
        if (isSettingsOpen || isTrashOpen) {
            setPopupStyle({ opacity: 1, transition: 'opacity 0.4s' });
        } else {
            setPopupStyle({ opacity: 0});
        }
    }, [isSettingsOpen, isTrashOpen]);

    useEffect(() => {
        async function getData(){
            try {
                const response = await axios.get('/todolists', {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })

                setTasks(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, [])

    const toggleSettings = () => {
        setisSettingsOpen(!isSettingsOpen);
        setisTrashOpen(false);
    };

    const toggleTrash = () => {
        setisTrashOpen(!isTrashOpen);
        setisSettingsOpen(false);
    };

    const handleDeleteTask = async (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
        alert(taskId)
        try{
            await axios.put('trashaddremove', {
                todoId : taskId
            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
        } catch(e) {
            console.log(e)
        }
    };

    return (
        <Main>
            <div className='title'>
                <p>My To-Do List</p>
            </div>
            {/*divs de ícones da navbar*/}
            <div className='actions'>
                <section ref={cogRef} className='cog' id='cog' onClick={toggleSettings}>
                    <FaCog isOpen={isSettingsOpen} className='cog-icon' size={30} />
                </section>
                <section ref={trashRef} className='trash' onClick={toggleTrash} >
                    <BsFillTrash3Fill isOpen={isTrashOpen} className='trash-icon' size={30} />
                </section>
                <section className='clipboard' id='clipboard'>
                    <LiaClipboardListSolid className='clipboard-icon' size={30} />
                </section>
                <section className='search'>
                    <IoIosSearch className='search-icon' size={30} />
                </section>
            </div>
            {isTrashOpen && <TrashSidebar onClose={toggleTrash} style={popupStyle} 
                            iconRef={cogRef} taskLists={tasks} onDelete={handleDeleteTask} />}
            {isSettingsOpen && <SettingsPopup onClose={toggleSettings} style={popupStyle} iconRef={cogRef} />}
        </Main>
    );
}

export default Header;
