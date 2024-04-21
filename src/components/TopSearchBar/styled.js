import styled from 'styled-components';
import { iconColor } from '../../config/colors';

export const Box = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    background-color: rgba(236, 236, 236, 0.6);
    border: 2px solid ${iconColor};
    padding: 10px;
    border-radius: 40px;
    width: 30vw;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    

    .item-lista{
        transition: transform 0.3s ease;
    }

    .search-icon{
        margin-right: 20px;
        margin-top: 2px;
    }

    input{
        background-color: transparent;
        padding: 5px;
        width: 70%;
        border: 1px solid black;
        border-radius: 10px;
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
    }

    .item-lista:hover{
        cursor:pointer;
        transform: scale(1.2);
    }
    
    form {
        align-items: center;
        margin-bottom: 10px;
    }

    .viewCss{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

`