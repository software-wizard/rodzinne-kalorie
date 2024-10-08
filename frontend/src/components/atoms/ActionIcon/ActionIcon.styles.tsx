import styled from 'styled-components';
import {COLOR_GREEN, COLOR_GREY} from "../../../GlobalStyle";

export const StyledActionIcon = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: ${COLOR_GREEN.color900};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: ${COLOR_GREEN.color700};
    }

    svg {
        fill: ${COLOR_GREY.color100};
    }
`;
export default StyledActionIcon;