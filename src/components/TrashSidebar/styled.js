import styled from 'styled-components';
import { barColor, loginBgDark } from '../../config/colors';

export const Sidebar = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 100vh;
    background-color: #fff;
    justify-self: flex-end;
    background-color: ${loginBgDark};

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 170px;
        background-color: ${barColor};

        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 55px;
            color: #fff;
        }
    }

    .tasks {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: calc(100% - 140px);
        padding: 30px;
        gap: 15px;

        section {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            border-radius: 5px;
            padding: 10px;

            p {
                font-family: 'Poppins', sans-serif;
                font-size: 25px;
            }
        }

        section:hover {
            background-color: #fff;
        }
        
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        margin: 20px;
        cursor: pointer;

        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 30px;
        }
    }

    footer:hover {
        background-color: #fff;
    }
`;