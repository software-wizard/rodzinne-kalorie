import React from 'react';
import {StyledLabel} from './Label.styles';

export type LabelProps = {
    width?: string;
    height?: string;
    name?: string;
    children?: React.ReactNode;
};

const Label: React.FC<LabelProps> = ({ name, children}) => {

    return (
        <StyledLabel>
            <p>{name}</p>
        </StyledLabel>
    );
};

export default Label;
