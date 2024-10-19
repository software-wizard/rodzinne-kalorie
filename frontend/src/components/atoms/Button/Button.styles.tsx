import styled from 'styled-components';
import {ButtonProps} from './Button';
import {COLOR_GREEN} from "../../../GlobalStyle";

export const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR_GREEN.color900};
    color: ${COLOR_GREEN.color200};
    font-size: 1.5rem;
    font-weight: bold;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(3px) translateX(1px);
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.8);
    }

    &.active {
        background-color: ${COLOR_GREEN.color200};
        color: ${COLOR_GREEN.color900};
    }

    & > svg {
        margin-right: 0.2rem;
    }

`;
export default StyledButton;