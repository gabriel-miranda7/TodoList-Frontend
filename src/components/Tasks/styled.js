import styled from 'styled-components';
import { taskColor, iconColor } from '../../config/colors';

export const TaskStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 80px;
    background-color: ${taskColor};
    padding: 15px;
    border-radius: 10px;

    .check,
    .edit,
    .circle {
        color: ${iconColor};
        cursor: pointer;
    }

    p {
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
    }
`;