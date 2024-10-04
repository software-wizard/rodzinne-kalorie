import React from 'react';
import {StyledButton} from './Button.styles';

export type ButtonProps = {
    children?: string;
};

const Button: React.FC<ButtonProps> = ({ children}) => {

    return (
        <StyledButton>
            {children}
        </StyledButton>
    );
};

export default Button;
