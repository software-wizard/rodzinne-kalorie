import React from 'react';
import {StyledLabel} from './Label.styles';
import {Size} from "../../../GlobalStyle";

export type LabelProps = {
    text?: string;
    size?: Size
    backgroundColor?: string;
};

const Label: React.FC<LabelProps> = ({...props}) => {
    return (
        <StyledLabel size={props.size} backgroundColor={props.backgroundColor}>
            {props.text}
        </StyledLabel>
    );
};

export default Label;
