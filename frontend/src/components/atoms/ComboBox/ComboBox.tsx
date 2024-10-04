import React from 'react';
import {StyledComboBox} from './ComboBox.styles';

export type ComboBoxProps = {
    width?: string;
    height?: string;
    name?: string;
    children?: React.ReactNode;
};

const ComboBox: React.FC<ComboBoxProps> = ({name}) => {

    return (
        <StyledComboBox>
            <p>{name}</p>
        </StyledComboBox>
    );
};

export default ComboBox;
