import React from 'react';
import {StyledLabel} from './Label.styles';
import {Size} from "../../../GlobalStyle";

export type LabelProps = {
    text?: string;
    size?: Size
};

const Label: React.FC<LabelProps> = ({ text = 'some text', size = Size.M }) => {
    return (
        <StyledLabel size={size}>
            {text}
        </StyledLabel>
    );
};

export default Label;
