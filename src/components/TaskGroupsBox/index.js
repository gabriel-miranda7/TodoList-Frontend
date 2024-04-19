import React, { useState, useEffect } from 'react';
import { IoAddCircle } from "react-icons/io5";
import axios from '../../services/axios';
import TaskGroup from '../TaskGroup';
import { Main, Substitute } from './styled';

function TaskGroupsBox() {
    const token = localStorage.getItem('token');
    const [allTodoLists, setTodoLists] = useState([]);
    const [loading, setLoading] = useState(true); 
    // array de histórico
    let latestTodoLists = [];

    const firstList = (e) => {
        try {
            // criando nova tarefa
            axios.post('/todolistnew', 
            {
                title: "Primeira Lista"
            }, {
                headers: {
                    Authorization: `Token ${token}`
                }
            }).then(response => {
                window.location.reload();
            })
        } catch (e) {
            console.log(e)
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

    if (loading){
        return (<h1>CARREGANDO...</h1>)
    }

    // preenchendo o array de histórico com no máximo 5
    for (let i = 0; i < 5; ++i) {
        latestTodoLists.push(allTodoLists[i])
    }
    

    if(allTodoLists.length > 0) {
        return (
            <Main>
                {allTodoLists.length > 5 
                    ? // se o número de grupos for maior que 5, usa o array de histórico
                    latestTodoLists.map((todolist) => {
                        // essa função vai mapear todos os grupos de Todos e exibi-los com limite de 5
                        // de acordo com o histórico de TodoLists
                        return (
                            <TaskGroup
                                key={todolist.id}
                                title={todolist.title}
                                tasks_data={todolist.todos}
                            />
                        )
                    })
                    : // se for 5 ou menor, usa o array com todos os grupos
                    allTodoLists.map((todolist) => {
                        // essa função vai mapear todos os grupos de Todos e exibi-los com limite de 5
                        // de acordo com o histórico de TodoLists
                        return (
                            <>
                            <TaskGroup
                                id = {todolist.id}
                                title={todolist.title}
                                tasks_data={todolist.todos}
                            />
                            <div className='addNewTodoList'>
                            <IoAddCircle className='addIcon' size={40} />
                            </div>
                            </>
                        )
                    })
                }
            </Main>
        );
    } else {
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