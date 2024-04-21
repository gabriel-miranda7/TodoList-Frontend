import styled from 'styled-components';
import { iconColor } from '../../config/colors';

export const Box = styled.div`
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); // Centraliza corretamente
    justify-content: center;
    align-items: center; // Centraliza verticalmente o conteúdo interno
    width: 40%;
    max-width: 900px; // Limita a largura máxima
    background-color: #fff;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    padding: 20px; // Adiciona algum espaço interno
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Sombra leve para melhor visualização
    border-radius: 10px;
    background-color: lightgray;

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%; // Faz o formulário ocupar todo o espaço disponível
        align-items: center; // Alinha os itens do formulário ao centro
        background-color: #fff;
        padding: 10px 0 10px 0;
        border-radius: 10px;
    }

    input, textarea {
        background-color: lightgray;
        border: 1px solid #fff;
        border-radius: 10px;
        padding: 10px; // Ajusta o preenchimento para melhorar a digitação
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
        width: 100%; // Ajusta a largura para preencher o formulário
        box-sizing: border-box; // Assegura que padding não adicione à largura total
    }

    textarea {
        padding-top: 10px; // Ajusta o preenchimento superior
        min-height: 100px; // Define uma altura mínima
    }

    button {
        display: flex;
        height: 30px;
        padding: 20px;
        border: none;
        background-color: ${iconColor};
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #fff;
    }

    button:hover{
        filter: brightness(80%);
    }
`;
