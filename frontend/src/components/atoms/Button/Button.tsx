import React from 'react';
import {StyledButton} from './Button.styles';

export type ButtonProps = {
    children: string;
    onClick: () => void
    className: string
};
const Button: React.FC<ButtonProps> = ({children, onClick, className}) => {
    return (
        <StyledButton onClick={onClick} className={className}>
            {children}
        </StyledButton>
    );
};
export default Button;
