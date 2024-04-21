import styled from 'styled-components';
import { iconColor, addIcon } from '../../config/colors';

export const Box = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    background-color: #fff;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background-color: ${addIcon};
        padding: 15px;
        border-radius: 10px;
    }

    input {
        background-color: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        height: 30px;
        padding-left: 10px;
        background-color: #fff;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
    }

    textarea {
        border: none;
        background-color: rgba(255, 255, 255, 100);
        border-radius: 10px;
        padding-left: 10px;
        padding-top: 5px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
        width: 100%;
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