import styled from 'styled-components';
import { iconColor } from '../../config/colors';

export const Box = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    background-color: rgba(236, 236, 236, 0.9);
    padding: 10px;
    border-radius: 40px;
    width: 30vw;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    

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
        width: 80%;
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