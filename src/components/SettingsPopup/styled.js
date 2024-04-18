import styled from 'styled-components';
import { barColor } from '../../config/colors';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(170%, -120%);
    width: 15%;
    max-width: 800px; /* Defina o tamanho máximo para o popup */
    height: 30%;
    max-height: 600px; /* Defina a altura máxima para o popup */
    overflow: auto; /* Adicione rolagem se o conteúdo do popup for maior que a altura máxima */
    padding: 20px;
    background-color: #e6e6e6;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    font-family: 'Poppins', sans-serif;


    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    button {
        width: 100%;
        height: auto;
        padding: 20px;
        font-size: 20px;
        background-color: #e6e6e6;
        color: #000;
        border: none;
        font-weight: bold;
        border-radius: 28px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #fff;
    }

    .barra{
        position: fixed;
        top: 0;
        left: 0;
        height: 20px;
        width: 100%;
        background-color: ${barColor};
        border-radius: 1px;
    }
`;