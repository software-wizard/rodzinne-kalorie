import styled from 'styled-components';
import {ButtonProps} from './Button';
import {COLOR_GREEN} from "../../../AppStyles";

export const StyledButton = styled.button<ButtonProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;
export default StyledButton;