import styled from 'styled-components';

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
        gap: 20px;
        border: 1px solid red;
    }

    input {
        background-color: #fff;
        border: 1px solid #fff;
        border-radius: 10px;
        height: 30px;
        padding-left: 10px;
        background-color: grey;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
    }

    textarea {
        background-color: grey;
        border-radius: 10px;
        padding-left: 10px;
        padding-top: 5px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
    }
`;