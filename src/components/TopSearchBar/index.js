import React, { useState, useEffect } from 'react';
import axios from '../../services/axios';
import { IoIosSearch } from "react-icons/io";
import { Box } from './styled';
import ViewTask from '../ViewTask';


function SearchBarM() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [selectedTask, setSelectedTask] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('alltodos', {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                });
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, [token]);

    const getFilteredItems = (query, data) => {
        if (!query) {
            return [];
        }
        const lowerCaseQuery = query.toLowerCase()
        return data.filter(task => task.title.toLowerCase().includes(lowerCaseQuery));
    }

    const handleTaskClick = (task) => {
        setSelectedTask(task); // Atualiza a tarefa selecionada
    }

    const closeSearch = () => {
        setSelectedTask(null);
    }

    return (
        <>
        <Box>
            <form>
                <IoIosSearch className='search-icon' size={30} />
                <input type='text' value={query} onChange={e => setQuery(e.target.value)} placeholder='Pesquisar...' />
            </form>
            <ul>
                {getFilteredItems(query, data).map(task => (
                    <li key={task.id} className="item-lista" onClick={() => handleTaskClick(task)}>
                        {task.title}
                    </li>
                ))}
            </ul>
            </Box>
            <div>
                {selectedTask && ( // Renderiza o componente ViewTask apenas se uma tarefa estiver selecionada
                    <ViewTask
                        title={selectedTask.title}
                        description={selectedTask.description}
                        onClose={closeSearch}
                        iscomplete={null}
                    />
                )}
            </div>
        </>
    );
}

export default SearchBarM;
