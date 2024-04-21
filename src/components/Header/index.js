import React, { useState, useEffect, useRef } from 'react';
import { FaCog } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";

import axios from '../../services/axios';
import { Main } from './styled';
import SettingsPopup from '../SettingsPopup';
import TrashSidebar from '../TrashSidebar';
import ClipboardSidebar from '../ClipboardSidebar';
import SearchBarM from '../TopSearchBar';

function Header() {
    const token = localStorage.getItem('token');
    const [tasks, setTasks] = useState([]);
    const [isSettingsOpen, setisSettingsOpen] = useState(false);
    const [isTrashOpen, setisTrashOpen] = useState(false);
    const [isClipboardOpen, setisClipboardOpen] = useState(false);
    const [popupStyle, setPopupStyle] = useState({ opacity: 0, transition: 'opacity 0.5s' });
    const [isSearching, setIsSearching] = useState(false)
    const cogRef = useRef(null); //Pega a referência da engrenagem
    useEffect(() => {
        if (isSettingsOpen || isTrashOpen || isClipboardOpen || isSearching) {
            setPopupStyle({ opacity: 1, transition: 'opacity 0.4s' });
        } else {
            setPopupStyle({ opacity: 0});
        }
    }, [isSettingsOpen, isTrashOpen, isClipboardOpen, isSearching]);


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
    }, [token])

    const toggleSettings = () => {
        setisSettingsOpen(!isSettingsOpen);
        setisTrashOpen(false);
        setIsSearching(false)
        setisClipboardOpen(false);
    };

    const toggleTrash = () => {
        setisTrashOpen(!isTrashOpen);
        setisSettingsOpen(false);
        setIsSearching(false)
        setisClipboardOpen(false);
    };

    const toggleClipboard = () => {
        setisClipboardOpen(!isClipboardOpen);
        setIsSearching(false)
        setisSettingsOpen(false);
        setisTrashOpen(false);
    };

    
    const toggleSearch = () => {
        setIsSearching(!isSearching)
        setisSettingsOpen(false);
        setisTrashOpen(false);
        setisClipboardOpen(false);
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
                <p>My To-Do Lists</p>
            </div>
            {/*divs de ícones da navbar*/}
            <div className='actions'>
                <section ref={cogRef} className='cog' id='cog' onClick={toggleSettings}>
                    <FaCog isOpen={isSettingsOpen} className='cog-icon' size={30} />
                </section>
                <section className='trash' onClick={toggleTrash} >
                    <BsFillTrash3Fill isOpen={isTrashOpen} className='trash-icon' size={30} />
                </section>
                <section className='clipboard' id='clipboard' onClick={toggleClipboard}>
                    <LiaClipboardListSolid className='clipboard-icon' size={30} />
                </section>
                <section className='search'>
                    <IoIosSearch className='search-icon' onClick={toggleSearch} size={30} />
                </section>
            </div>

            {isTrashOpen && <TrashSidebar onClose={toggleTrash} style={popupStyle} 
                            taskLists={tasks} onDelete={handleDeleteTask} />}
            {isSettingsOpen && <SettingsPopup onClose={toggleSettings} style={popupStyle} iconRef={cogRef} />}
            {isClipboardOpen && <ClipboardSidebar taskLists={tasks} onClose={toggleClipboard} />}
            {isSearching && <SearchBarM style={popupStyle}/>}
        </Main>
    );
}

export default Header;
