import styled from 'styled-components';
import { dropDownBgColor } from '../../config/colors';

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    width: 200%;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    background-color: ${dropDownBgColor};
`;