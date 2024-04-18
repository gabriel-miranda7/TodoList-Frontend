import styled from 'styled-components';
import { headerLeftColor, iconColor } from '../../config/colors';

export const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 140px;
    background-color: ${headerLeftColor};

    .title {
        font-family: 'Poppins', sans-serif;
        font-size: 75px;
        word-spacing: 15px;
        letter-spacing: 5px;
        padding-top: 20px;
        padding-left: 60px;
        color: #fff;
        font-weight: 600;
    }

    .cog,
    .trash,
    .clipboard,
    .search {
        display: flex;
        background-color: #fff;
        border-radius: 80px;
        width: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;

        .cog-icon,
        .trash-icon,
        .clipboard-icon,
        .search-icon {
            color: ${iconColor};
            cursor: pointer;
            transition: transform 0.3s ease;
        }
    }

    .cog-icon:hover {
        transform: scale(1.2) rotate(-45deg);  // Aumenta e rotaciona o ícone
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 50px;
        gap: 25px;
    }
`;