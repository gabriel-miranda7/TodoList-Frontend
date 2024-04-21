import React, { useState, useEffect } from 'react';
import { IoAddCircle } from "react-icons/io5";
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import TaskGroup from '../TaskGroup';
import { Main, Substitute } from './styled';
import NewList from '../NewListPopup';

function TaskGroupsBox() {
    const token = localStorage.getItem('token');
    const [allTodoLists, setTodoLists] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [isCreating, setCreating] = useState(false);

    const latestTodoLists = [];

    function handleCreate(){
        setCreating(!isCreating)
    }

    function closePopup(){
        setCreating(false)
    }

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

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('/todolists', {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                });
                setTodoLists(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        
        getData();
    }, [token]);

    if (loading) {
        return; 
    }

    for (let i = 0; i < 5; ++i) {
        latestTodoLists.push(allTodoLists[i])
    }

    const todolists = localStorage.getItem('todolists')
    if(todolists === null){
        localStorage.setItem('todolists', JSON.stringify(latestTodoLists))
    }
    let visibleLists = localStorage.getItem('todolists')
    visibleLists = JSON.parse(visibleLists)

    if(allTodoLists.length > 5 && visibleLists !== null) {
        return (
            <Main>
                {isCreating ? <NewList newListfunc={newList} onClose={closePopup}/> : ''}
                {visibleLists.map((todolist) => {
                        // essa função vai mapear todos os grupos de Todos e exibi-los com limite de 5
                        // de acordo com o histórico de TodoLists
                    return (
                        <TaskGroup
                            key={todolist.id}
                            title={todolist.title}
                            tasks_data={todolist.todos}
                        />
                    )
                })}
            </Main>
        );
    } 
    else if(allTodoLists.length > 0 && allTodoLists.length < 6) {
        return(
            <Main>
                {isCreating ? <NewList newListfunc={newList} onClose={closePopup}/> : ''}
                {allTodoLists.map((todolist) => {
                    // essa função vai mapear todos os grupos de Todos e exibi-los com limite de 5
                    // de acordo com o histórico de TodoLists
                    return (
                        <TaskGroup
                            id = {todolist.id}
                            title={todolist.title}
                            tasks_data={todolist.todos}
                        />
                        )
                })}
                {allTodoLists.length < 5 &&
                    <div className='addNewTodoList'>
                        <IoAddCircle className='addIcon' size={40} onClick={handleCreate} />
                    </div>
                }
            </Main>
        )
    } else if(allTodoLists.length === 0) {
        return (
            <Substitute>
                {isCreating ? <NewList newListfunc={newList} onClose={closePopup}/> : ''}
                <section className='boas_vindas'>
                    <img src="images/boas-vindas.png" alt="boas vindas" />
                    <h1>Crie uma To-Do list e comece já a organizar o seu dia-a dia</h1>
                    <button type='submit' onClick={handleCreate}>Criar</button>
                </section>
            </Substitute>
        )
    }
}

export default TaskGroupsBox;