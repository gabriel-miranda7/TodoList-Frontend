import styled from 'styled-components';
import { iconColor } from '../../config/colors';

export const Main = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    background-color: #fff;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;

    .background{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background-color: gray;
        padding: 50px;
        height: 40vh;
        width: 40vw;
    }

    .fecharIcon{
        cursor: pointer;
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