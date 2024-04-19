import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { MdSettingsBackupRestore } from "react-icons/md";

import axios from '../../services/axios';
import { Box } from './styled';

function TrashPopup({ onClose, style, iconRef }) {
    const popupRef = useRef(null);
    const token = localStorage.getItem('token');
    const [data, setData] = useState([]);
    const tasks = [];

    useEffect(() => {  //Fechar Popup em caso de clique fora da box.
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target) &&
                (!iconRef.current || !iconRef.current.contains(event.target))) {
                onClose();  // Chama onClose se clicar fora do Box e fora do ícone da engrenagem
            }
        }

        // Adiciona o ouvinte ao documento
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Limpa o ouvinte ao desmontar o componente
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose, iconRef]);

    useEffect(() => {
        try {
            async function getData(){
                const response = await axios.get('/todolists', {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })
                setData(response.data);
                console.log(response.data)
            }
            getData();
        } catch (e) {
            console.log(e)
        }
    }, [])

    for(let j = 0; j < data.length; ++j){
        for(let n = 0; n < data[j].todos.length; ++n){
            if(data[j].todos[n].isOnTrashBin === true){
                tasks.push(data[j].todos[n]);
            }
        }
    }

    return (
        <Box style={style} ref={popupRef}>
            <div className='barra'></div>
            <div className='deletados'>
                {tasks.map((task) => (
                    <section>
                        <MdSettingsBackupRestore className='icon' size={20} />
                        <p>{task.title}</p>
                    </section>
                ))}
            </div>
            <button onClick={onClose}>Fechar</button>
        </Box>
    )
}

TrashPopup.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default TrashPopup;
