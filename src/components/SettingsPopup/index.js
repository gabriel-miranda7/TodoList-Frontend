import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Box } from './styled';

function Popup({ onClose, style, iconRef }) {
    const popupRef = useRef(null);

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

    const logoutUser = () => {
        localStorage.clear() // Remover o token do localStorage
        window.location.href = 'auth' //Envia o usuário para autenticação em caso de logoff
        onClose(); // Fechar o popup após o logout
    }

    return (
        <Box style={style} ref={popupRef}>
            <div className='barra'></div>
            <button onClick={logoutUser}>Fazer Log Out</button>
            <button>Alterar usuário</button>
            <button>Alternar Dark Mode</button>
            <button onClick={onClose}>Fechar</button>
        </Box>
    )
}

Popup.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Popup;
