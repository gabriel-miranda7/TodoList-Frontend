import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 800px; /* Defina o tamanho máximo para o popup */
    height: 80%;
    max-height: 600px; /* Defina a altura máxima para o popup */
    overflow: auto; /* Adicione rolagem se o conteúdo do popup for maior que a altura máxima */
    padding: 20px;
    border: 1px solid black;
    background-color: #fff;
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
        height: 150px;
        font-size: 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 28px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #0056b3;
    }
`;