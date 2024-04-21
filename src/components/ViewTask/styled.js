import styled from 'styled-components';
import { iconColor } from '../../config/colors';

export const Main = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    background-color: lightgray;
    font-size: 20px;
    border-radius: 10px;
    padding: 20px;
    font-family: 'Poppins', sans-serif;

    .background{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: #fff;
        padding: 50px;
        height: 40vh;
        width: 35vw;
        border-radius: 10px;
    }

    .fecharIcon{
        cursor: pointer;
        padding: 10px;
        background-color: ${iconColor};
        border-radius: 10px;
        color: #fff;
    }

    .fecharIcon:hover{
        filter: brightness(80%);
    }

    .description {
        display: flex;
        background-color: lightgray;
        padding: 10px;
        border-radius: 10px;
        word-break: keep-all;
    }

    button {
        border: none;
        width: 80%;
        height: 30px;
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        cursor: pointer;
        background-color: ${iconColor};
    }

    button:hover{
        filter: brightness(80%);
    }
`;