import styled from 'styled-components';
import {COLOR_GREEN, COLOR_GREY} from "../../../GlobalStyle";

export const ActionIconsContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    border-radius: 0.8rem;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease;
    background-color: ${COLOR_GREEN.color100};
    &:hover {
        //todo
        //background-color: rgba(ECFDF5, 111, 0, 0.8)
    }
`;