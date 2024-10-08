import React from 'react';
import {StyledButton} from './Button.styles';

export type ButtonProps = {
    children: string;
    onClick: () => void
};
const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};
export default Button;
