import React, { useState, useEffect } from 'react';

import axios from '../../services/axios';
import TaskGroup from '../TaskGroup';
import { Main, Substitute } from './styled';
import { toast } from 'react-toastify';

function TaskGroupsBox() {
    const token = localStorage.getItem('token');
    const [allTodoLists, setTodoLists] = useState([]);
    const [loading, setLoading] = useState(true); 
    // array de histórico
    let latestTodoLists = [];

    const firstList = (e) => {
        try {
            // criando nova lista de tarefas
            axios.post('/todolistnew', 
            {
                title: "Lista1"
            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            })
                window.location.reload();
            })
        } catch (error) {
            if(error.response && error.response.status == 400) {
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

    // preenchendo o array de histórico com no máximo 5
    for (let i = 0; i < 5; ++i) {
        latestTodoLists.push(allTodoLists[i])
    }
    

    if(allTodoLists.length > 4) {
        return (
            <Main>
                {latestTodoLists.map((todolist) => {
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
    else if(allTodoLists.length > 0 && allTodoLists.length < 5) {
        return(
            <Main>
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
                <div className='addNewTodoList'>
                    <IoAddCircle className='addIcon' size={40} onClick={firstList} />
                </div>
            </Main>
        )
    } else if(allTodoLists.length == 0) {
        return (
            <Substitute>
                <section className='boas_vindas'>
                    <img src="images/boas-vindas.png" alt="boas vindas" />
                    <h1>Crie uma To-Do list e comece já a organizar o seu dia-a dia</h1>
                    <button type='submit' onClick={firstList}>Criar</button>
                </section>
            </Substitute>
        )
    }
}

export default TaskGroupsBox;