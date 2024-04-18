import styled from 'styled-components';
import { taskColor, CompletedTaskColor, iconColor, CompletediconColor } from '../../config/colors';

export const TaskStyle = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 80px;
    background-color: ${({ complete }) => (complete ? taskColor : CompletedTaskColor)};
    padding: 15px;
    border-radius: 10px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    .check,
    .edit,
    .circle {
        color: ${({ complete }) => (complete ? iconColor : CompletediconColor)};
        cursor: pointer;
        transition: color 0.3s ease, transform 0.3s ease;
    }

    .edit:hover{
        transform: scale(1.2)
    }

    p {
        font-size: 20px;
        font-family: 'Poppins', sans-serif;
    }
`;