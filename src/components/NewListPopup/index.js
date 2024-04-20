import React, { useState } from 'react';
import PropTypes, { func } from 'prop-types';
import { Box } from './styled';
import { toast } from 'react-toastify';

function NewList({ newListfunc, onClose }) {
    const [title, setTitle] = useState('Minha Lista');
    const [contador, setContador] = useState(title.length);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title === ''){
            toast.error("O título da lista não pode estar vazio!")
        }else if (title.length > 30){
            toast.error("O título é longo demais")
            }
        else{
            newListfunc(title);
        }
    }

    
    const handleChange = (e) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        setContador(newTitle.length);
    }

    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    }

    return(
        <Box>
            <form onSubmit={handleSubmit}>
                <section>
                    Título: <input type='text' onChange={handleChange} defaultValue={title}/>
                </section>
                <div className={contador > 30 ? 'contador excedido' : 'contador'}>{contador}/30</div>
                <button type='submit'>Criar</button>
                <button onClick={handleClose}>Fechar</button>
            </form>
        </Box>
    )
}

NewList.propTypes = {
    newListfunc: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default NewList;