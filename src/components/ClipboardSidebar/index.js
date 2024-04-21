import React, { useState, useEffect } from 'react';
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
    const [lists, setLists] = useState(taskLists.map(list => ({
        ...list,
        isFavorite: false
    }))); // Add isFavorite property to each list

    useEffect(() => {
        const fetchFavoriteLists = async () => {
            try {
                const response = await axios.get('/todolists', {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                });
                const favoriteLists = response.data.filter(list => list.favorite);
                setLists(prevLists => {
                    // Map through the existing lists and update the isFavorite property
                    return prevLists.map(list => ({
                        ...list,
                        isFavorite: favoriteLists.some(favoriteList => favoriteList.id === list.id)
                    }));
                });
            } catch (error) {
                console.error('Error fetching favorite lists:', error);
            }
        };

        fetchFavoriteLists();
    }, [token]);

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

    const handleFavoriteToggle = async (id) => {
        const updatedLists = lists.map(list => 
            list.id === id ? { ...list, isFavorite: !list.isFavorite }: list
        );
        setLists(updatedLists);
        const updatedItem = updatedLists.find(list => list.id === id);
        try{
            await axios.put('todolistnew', {
                listId : id,
                favorite : updatedItem.isFavorite
            }, {
                headers: {
                    Authorization : `Token ${token}`
                }
            })
        } catch(e){
            console.log(e)
        }

    };

    function closePopup(){
        setisCreating(false)
    }

    const handleChange = (e) => {
        let can_reload = true;
        let can_replace = true;
        if(todolists[0] !== null) {
            e = JSON.parse(e.target.id)
            todolists.forEach(list => {
                if(list.title === e.title){
                    can_reload = false;
                    can_replace = false;
                    return toast.error('Essa lista já está sendo exibida.')
                }
            });
            if(can_replace){
                todolists = todolists.slice(1);
                todolists = todolists.reverse();
                todolists.push(e);
                todolists = todolists.reverse();
                console.log(todolists)
                localStorage.setItem('todolists', JSON.stringify(todolists));
                if(can_reload) window.location.reload()
            }
        }
    }

    const sortedLists = lists.slice().sort((a, b) => b.isFavorite - a.isFavorite);

    return (
        <Sidebar>
            {isCreating && <NewList newListfunc={newList} onClose={closePopup}/>}
            <header>
                <h1>To-do lists</h1>
            </header>
            <div className='tasks'>
                <button onClick={handleCreate}>Criar To-do list</button>
                {sortedLists.map((list) => (
                    <section key={list.id}>
                        <div onClick={() => handleFavoriteToggle(list.id)}>
                            {list.isFavorite 
                                ? <AiFillStar size={30} color='#00be62' />
                                : <AiOutlineStar size={30} color='#00be62' />}
                        </div>
                        <p id={JSON.stringify(list)} onClick={handleChange}>{list.title}</p>
                    </section>
                ))}
            </div>
            <footer onClick={onClose}>
                <h1>Fechar</h1>
            </footer>
        </Sidebar>
    );
}

ClipboardSidebar.propTypes = {
    taskLists: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired
}

export default ClipboardSidebar;