import styled from 'styled-components';
import { iconColor, addIcon } from '../../config/colors';


export const Main = styled.main`
    display: flex;
    flex: 1 1 100vw;
    width: 100vw;
    height: calc(100vh - 140px);

    .addIcon {
        color: ${addIcon};
    }

    .addNewTodoList{
        cursor: pointer;

        display:flex;
        
        align-items: center;
    }

    .boas_vindas {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        padding-top: 6%;
        word-break: break-all;

        img {
            width: 40%;
            height: 32%;
        }

        h1 {
            font-size: 50px;
            font-family: 'Poppins', sans-serif;
        }

    }

`;

export const Substitute = styled.main`
    display: flex;
    flex: 1 1 100vw;
    width: 100vw;
    height: calc(100vh - 140px);
    justify-content: center;

    .boas_vindas {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 50vw;
        padding-top: 6%;
        word-break: keep-all;
        gap: 55px;

        img {
            width: 80%;
            height: 35%;
        }

        h1 {
            font-size: 45px;
            font-family: 'Poppins', sans-serif;
        }

        button {
            text-align: center;
            width: 220px;
            height: 60px;
            border: none;
            border-radius: 30px;
            background-color: ${iconColor};
            font-family: 'Poppins', sans-serif;
            font-size: 40px;
            font-weight: 500;
            cursor: pointer;
        }
    }
`;