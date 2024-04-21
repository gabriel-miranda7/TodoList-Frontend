import styled from 'styled-components';
import { iconColor } from '../../config/colors';

export const Box = styled.div`
    position: fixed; /* ou absolute */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: auto;
    padding: 5vw;
    background-color: #fff;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    border: 5px solid ${iconColor};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 50px;

    form {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        gap: 20px;
        height: 40%;
    }

    .contador{
        position: relative;
        left: 85%;
    }

    .excedido {
        color: red;
    }

    button {
        background-color: transparent;
        padding: 10px;
        border: 2px solid ${iconColor};
        border-radius: 5px;
        font-size: 30px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        transition: color 0.3s ease, background-color 0.3s ease;
    }

    button:hover {
        cursor: pointer;
        color: white;
        background-color: ${iconColor}
    }

    input {
        background-color: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        height: 50px;
        margin-top: 10%;
        background-color: grey;
        padding: 10px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
    }

`;
