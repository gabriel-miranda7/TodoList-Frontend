import React from 'react';
import PropTypes from 'prop-types';

import { Box } from './styled';

function Popup({ onClose }) {
    const logoutUser = () => {
        localStorage.removeItem('token'); // Remover o token do localStorage
        window.location.href = 'auth' //Envia o usuário para autenticação em caso de logoff
        onClose(); // Fechar o popup após o logout
    }

    return (
        <Box>
            <button onClick={logoutUser}>Logout</button>
            <button onClick={onClose}>Fechar</button>
        </Box>
    )
}

Popup.propTypes = {
    onClose: PropTypes.func.isRequired
}

export default Popup;
