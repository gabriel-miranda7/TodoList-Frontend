import styled from 'styled-components';
import { addIcon } from '../../config/colors';

export const TaskGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 2 1 20vw;
    max-width: 70vw;
    height: calc(100vh - 140px);
    border: 1px solid #b1b0b1;
    padding: 20px;
    gap: 15px;
    overflow-y: auto;
    overflow-x: hidden;

    h1 {
        font-size: 40px;
        font-family: 'Poppins', sans-serif;
    }

    input {
        width: 100%;
        font-family: 'Poppins', sans-serif;
        font-size: 40px;
        font-weight: 900px;
        text-align: center;
    }
    .addIcon {
        color: ${addIcon};
        cursor: pointer;
    }
`;