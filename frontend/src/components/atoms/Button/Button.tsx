import React from 'react';
import {StyledButton} from './Button.styles';
import {IconType} from "react-icons";
import Icon from "../Icon/Icon";

export type ButtonProps = {
    children: string;
    onClick: () => void
    className: string
    icon?: IconType
};
const Button: React.FC<ButtonProps> = ({children, onClick, className, icon: Icon}) => {
    return (
        <StyledButton onClick={onClick} className={className}>
            {Icon && <Icon/>}
            {children}
        </StyledButton>
    );
};
export default Button;
